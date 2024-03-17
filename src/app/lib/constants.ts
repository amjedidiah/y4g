import { getEventSundaysInfo } from "@/lib/utils";

export enum TeamColor {
  team1 = "#010000",
  team2 = "#fbab0d",
  team3 = "#cf0a05",
  team4 = "#cccccc",
}

export enum TeamHoverColor {
  team1 = "#333333",
  team2 = "#e8d9a8",
  team3 = "#f2b2b0",
  team4 = "#e0e0e0",
}

export enum TeamId {
  team1 = "team1",
  team2 = "team2",
  team3 = "team3",
  team4 = "team4",
}

export const monthInFocus =
  getEventSundaysInfo().nextEventSunday.toLocaleString("en-US", {
    month: "long",
  });
