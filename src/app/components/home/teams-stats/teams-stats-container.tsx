import TeamsChart from "@/components/home/teams-stats/teams-chart";
import {
  getLeaderBoardData,
  getTeamChartData,
  getTeamData,
} from "@/lib/actions";
import TeamsLeaderBoard from "@/components/home/teams-stats/teams-leader-board";

export default async function TeamsStatsContainer() {
  const teamData = await getTeamData();
  const chartData = getTeamChartData(teamData);
  const leaderBoardData = getLeaderBoardData(teamData);

  return (
    <section id="teams" className="bg-slate-100 py-10 lg:py-14">
      <article className="container flex flex-col gap-6 lg:gap-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <TeamsChart {...chartData} />
          <TeamsLeaderBoard data={leaderBoardData} />
        </div>
      </article>
    </section>
  );
}
