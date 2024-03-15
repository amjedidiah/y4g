import HomeJumbo from "@/components/home/home-jumbo";
import TeamStats from "@/components/home/team-stats";
import { getTeamData } from "@/lib/actions";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Welcome to Y4G",
  description:
    "Y4G is an interdenominational fellowship of Youths on fire for God to grow to be great and generous",
};

export const revalidate = 60 * 5;

export default async function Home() {
  const teamData = await getTeamData();
  console.log(teamData);

  return (
    <Fragment>
      <HomeJumbo />
      <TeamStats />
    </Fragment>
  );
}
