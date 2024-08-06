import { IAddMeetup } from "@/types/add-meetup";

import MeetupForm from "@/components/meetups/meetup-form";

export interface NewMeetupPageProps {}

export default function NewMeetupPage({}: NewMeetupPageProps) {
  function addMeetupHandler(enteredMeetupData: IAddMeetup) {
    console.log(enteredMeetupData);
  }

  return <MeetupForm onAddMeetup={addMeetupHandler} />;
}
