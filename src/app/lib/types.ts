import { getTeamChartData } from "@/lib/actions";
import { TeamColor, TeamHoverColor } from "@/lib/constants";

export type Individual = {
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

export type TeamChartProps = Awaited<ReturnType<typeof getTeamChartData>> & {
  onHandleActiveTeamColor: (color: string) => void;
};

export type TeamChartData = Awaited<ReturnType<typeof getTeamChartData>>;