import { auth, sheets } from "@googleapis/sheets";
import { TeamData } from "@/lib/types";
import { cache } from "react";
import { getThirdSunday } from "@/lib/utils";

const sheetsAuth = new auth.GoogleAuth({
  keyFile: "./google.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

function isBetweenThirdSundays(date: Date) {
  // Get the 3rd Sundays of previous and current month
  const prevMonthSunday = getThirdSunday(date.getMonth() - 1);
  const thisMonthSunday = getThirdSunday();

  // Adjust for edge case: If previous month's 3rd Sunday is after current year
  if (prevMonthSunday.getFullYear() > thisMonthSunday.getFullYear()) {
    prevMonthSunday.setFullYear(prevMonthSunday.getFullYear() - 1);
  }

  // Check if the date is between (excluding endpoints)
  return date > prevMonthSunday && date < thisMonthSunday;
}

function filterSheetResponses(responses: string[][]) {
  // Filter out the ones not attending
  const attendingResponses = responses.filter(
    (item) => !item.includes("Sorry, can't make it")
  );

  // Filter for uniqueness
  const uniqueResponses: string[][] = [];
  for (let fields of attendingResponses) {
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

  // Finally, filter responses that are valid for the current month
  const validDateResponses = uniqueResponses.filter((item, i) => {
    const checkDate = new Date(item[0]);
    const isBetween = isBetweenThirdSundays(checkDate);

    return isBetween;
  });

  return validDateResponses;
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
  "use server";
  // Get responses from Google Sheets
  const responses = await getSheetResponses(
    "1Ipe_w73YweHwb7IUg7nv6QiVebuXy5rXDkkmfgN5i84",
    "Form Responses 1"
  );

  // Filter responses
  const validResponses = filterSheetResponses(responses);

  // Group responses
  const teamData = validResponses.reduce((acc, item) => {
    const teamName = item.at(-1) as string;

    return {
      ...acc,
      [teamName]: [
        ...(acc[teamName] || []),
        {
          name: item[2],
          phone: item[3],
          email: item[4],
        },
      ],
    };
  }, {} as TeamData);

  return teamData;
});
