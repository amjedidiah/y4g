import HomeJumbo from "@/components/home/home-jumbo";
import TeamsContainer from "@/components/home/teams-stats/teams-container";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Welcome to Y4G",
  description:
    "Y4G is an interdenominational fellowship of Youths on fire for God to grow to be great and generous",
  openGraph: {
    images: [
      {
        url: "https://y4g.vercel.app/twitter-image.png?46090339ab56775f=",
        width: 964,
        height: 506,
      },
    ],
  },
  twitter: {
    creator: "@am_jedidiah",
    images: ["https://y4g.vercel.app/twitter-image.png?46090339ab56775f="], // Must be an absolute URL
  },
};

export const revalidate = 60 * 5;

export default function Home() {
  return (
    <Fragment>
      <HomeJumbo />
      <TeamsContainer />
    </Fragment>
  );
}
