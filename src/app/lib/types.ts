import { getTeamChartData } from "@/lib/actions";
import { TeamColor, TeamHoverColor } from "@/lib/constants";

type Individual = {
  name: string;
  phone: string;
  email?: string;
};

export type Team = {
  id: string;
  name: string;
  color: TeamColor;
  hoverColor: TeamHoverColor;
  members: Individual[];
};

export type TeamData = {
  [key: string]: Team;
};

export type TeamChartProps = ReturnType<typeof getTeamChartData>;
