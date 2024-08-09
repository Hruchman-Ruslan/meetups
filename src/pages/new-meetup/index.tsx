import Head from "next/head";

import { useRouter } from "next/router";

import { IAddMeetup } from "@/types/add-meetup";

import MeetupForm from "@/components/meetups/meetup-form";

export interface NewMeetupPageProps {}

export default function NewMeetupPage({}: NewMeetupPageProps) {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData: IAddMeetup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log("data", data);

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Add you own meetups and create amazing networking opportunities."
        />
      </Head>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
