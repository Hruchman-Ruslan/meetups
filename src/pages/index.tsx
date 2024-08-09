import { MongoClient } from "mongodb";

import Head from "next/head";

const MONGO_URL = process.env.MONGO_URL as string;

import { IMeetup } from "@/types/meetup";

import MeetupList from "@/components/meetups/meetup-list";

export interface HomePageProps {
  meetups: IMeetup[];
}

export default function HomePage({ meetups }: HomePageProps) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React Meetups!"
        />
      </Head>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(MONGO_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(({ _id, title, address, image }) => ({
        id: _id.toString(),
        title,
        address,
        image,
      })),
    },
    revalidate: 1,
  };
}
