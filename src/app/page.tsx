import HomeJumbo from "@/components/home/home-jumbo";
import TeamsStatsContainer from "@/components/home/teams-stats/teams-stats-container";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Welcome to Y4G",
  description:
    "Y4G is an interdenominational fellowship of Youths on fire for God to grow to be great and generous",
};

export const revalidate = 60 * 5;

export default function Home() {
  return (
    <Fragment>
      <HomeJumbo />
      <TeamsStatsContainer />
    </Fragment>
  );
}
