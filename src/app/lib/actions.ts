import { auth, sheets } from "@googleapis/sheets";
import { TeamData } from "@/lib/types";
import { cache } from "react";
import { getEventSundaysInfo } from "./utils";
import { TeamColor, TeamHoverColor } from "@/lib/constants";

const credential = JSON.parse(
  Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS!, "base64")
    .toString()
    .replace(/\n/g, "")
);

const sheetsAuth = new auth.GoogleAuth({
  credentials: credential,
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

function isBetweenValidThirdSundays(date: Date) {
  // Get the 3rd Sundays of previous and current month
  const { nextEventSunday, prevEventSunday } = getEventSundaysInfo();

  // Adjust for edge case: If previous month's 3rd Sunday is after current year
  if (prevEventSunday.getFullYear() > nextEventSunday.getFullYear())
    prevEventSunday.setFullYear(prevEventSunday.getFullYear() - 1);

  // Check if the date is between (excluding endpoints)
  return date > prevEventSunday && date < nextEventSunday;
}

function filterSheetResponses(responses: string[][]) {
  // Filter out the ones not attending
  // const attendingResponses = responses.filter(
  //   (item) => !item.includes("Sorry, can't make it")
  // );

  // Filter responses for new members
  const newResponses = responses.filter((item, i) => {
    const checkDate = new Date(item[0]);
    const isBetween = isBetweenValidThirdSundays(checkDate);

    return isBetween;
  });

  // Filter for uniqueness
  const uniqueResponses: string[][] = [];
  for (let fields of newResponses) {
    const name = fields[2].toLowerCase();
    const phone = fields[3].toLowerCase();
    const email = fields[4].toLowerCase();

    // if we found someone with the same name, phone number or email already, skip
    if (
      uniqueResponses.some((item) => {
        return (
          item.includes(name) ||
          item.includes(phone) ||
          (item.includes(email) && Boolean(email))
        );
      })
    ) {
      continue;
    } else {
      // Add the person's response to our unique responses
      const formattedResponse = fields.map((item) => item.toLowerCase());
      uniqueResponses.push(formattedResponse);
    }
  }

  return uniqueResponses;
}

async function getSheetResponses(spreadsheetId: string, range: string) {
  // Get sheets fetch response
  const response = await sheets("v4").spreadsheets.values.get({
    auth: sheetsAuth,
    spreadsheetId,
    range,
  });

  const [_titleRow, ...responses] = response.data
    .values as unknown as string[][];

  return responses;
}

export const getTeamData = cache(async () => {
  // Get responses from Google Sheets
  const responses = await getSheetResponses(
    process.env.FORM_SHEET_ID!,
    "Form Responses 1"
  );

  // Filter responses
  const validResponses = filterSheetResponses(responses);

  // Group responses by teams
  const teamData = validResponses.reduce((acc, item) => {
    const teamName = item.at(5) as string;
    const teamId = teamName
      .replace(/\s+/g, "")
      .trim() as keyof typeof TeamColor;

    return {
      ...acc,
      [teamId]: {
        ...acc[teamId],
        id: teamId,
        name: teamName,
        members: [
          ...(acc[teamId]?.members || []),
          {
            name: item[2],
            phone: item[3],
            email: item[4],
          },
        ],
        color: TeamColor[teamId],
        hoverColor: TeamHoverColor[teamId],
      },
    };
  }, {} as TeamData);

  return teamData;
});

export const getTeamChartData = (teamData: TeamData) => {
  const teams = Object.values(teamData);

  let labels = [];
  let data = [];
  let backgroundColor = [];
  let hoverBackgroundColor = [];

  for (let item of teams) {
    labels.push(item.name.toUpperCase());
    data.push(item.members.length);
    backgroundColor.push(item.color);
    hoverBackgroundColor.push(item.hoverColor);
  }

  return {
    labels,
    data,
    backgroundColor,
    hoverBackgroundColor,
  };
};

export const getLeaderBoardData = (teamData: TeamData) =>
  Object.values(teamData).sort((a, b) => b.members.length - a.members.length);
