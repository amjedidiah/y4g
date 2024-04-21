"use client";
import TeamsChart from "@/components/home/teams-stats/teams-chart";
import TeamsLeaderBoard from "@/components/home/teams-stats/teams-leader-board";
import { Individual, Team, TeamChartData } from "@/lib/types";
import { useCallback, useState } from "react";
import TeamMembers from "@/components/home/teams-stats/team-members";

type Props = {
  chartData: TeamChartData;
  leaderBoardData: Team[];
};

export default function TeamsStatsContainer({
  chartData,
  leaderBoardData,
}: Props) {
  const [activeTeamMembers, setActiveTeamMembers] = useState<Individual[]>();

  const handleActiveTeamColor = useCallback(
    (teamColor: string) => {
      const filteredMembers = leaderBoardData.filter(
        (item) =>
          item.hoverColor.toLowerCase() === teamColor.toLowerCase() ||
          item.color.toLowerCase() === teamColor.toLowerCase()
      )[0]?.members;

      setActiveTeamMembers(filteredMembers);
    },
    [leaderBoardData]
  );

  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <TeamsChart
        onHandleActiveTeamColor={handleActiveTeamColor}
        {...chartData}
      />
      <TeamsLeaderBoard data={leaderBoardData} />
      <TeamMembers teamMembers={activeTeamMembers} teamName="" />
    </div>
  );
}
