import { getLeaderBoardData, getTeamChartData } from "@/lib/actions";
import TeamsStatsContainer from "@/components/home/teams-stats/teams-stats-container";

export default async function TeamsContainer() {
  const chartData = await getTeamChartData();
  const leaderBoardData = await getLeaderBoardData();

  return (
    <section id="teams" className="bg-slate-100 py-10 lg:py-14">
      <article className="container flex flex-col gap-6 lg:gap-8">
        <TeamsStatsContainer
          chartData={chartData}
          leaderBoardData={leaderBoardData}
        />
      </article>
    </section>
  );
}
