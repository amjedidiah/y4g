import { Team } from "@/lib/types";
import Scorecard from "@/components/home/teams-stats/score-card";

type Props = {
  data: Team[];
};

export default function TeamsLeaderBoard({ data }: Props) {
  const scoresStack: Set<number> = new Set();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl lg:text-5xl font-semibold">Leaderboard</h1>

      <div className="flex flex-col gap-4">
        {data.map((team, i) => (
          <Scorecard key={team.id} scoresStack={scoresStack} {...team} />
        ))}
      </div>
      <p className="text-secondary">
        ** Team position, Team name, No. of new team members
      </p>
    </div>
  );
}
