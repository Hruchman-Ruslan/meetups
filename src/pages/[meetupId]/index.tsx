import Head from "next/head";

import { MongoClient, ObjectId } from "mongodb";

import type { GetStaticPropsContext } from "next";

import MeetupDetail from "@/components/meetups/meetup-detail";

const MONGO_URL = process.env.MONGO_URL as string;

export interface MeetupsDetailsPageProps {
  image: string;
  title: string;
  address: string;
  description: string;
}

export default function MeetupsDetailsPage({
  image,
  title,
  address,
  description,
}: MeetupsDetailsPageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(MONGO_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(({ _id }) => ({
      params: {
        meetupId: _id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // fetch data for a single meetup

  const meetupId = context.params?.meetupId as string;

  console.log(meetupId);

  const client = await MongoClient.connect(MONGO_URL);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetups = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      id: selectedMeetups?._id.toString(),
      title: selectedMeetups?.title,
      address: selectedMeetups?.address,
      image: selectedMeetups?.image,
      description: selectedMeetups?.description,
    },
  };
}
