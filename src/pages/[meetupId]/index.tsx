import MeetupDetail from "@/components/meetups/meetup-detail";

export interface MeetupsDetailsPageProps {}

export default function MeetupsDetailsPage({}: MeetupsDetailsPageProps) {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg "
      title="A First Meetup"
      address="Some address 5, 12345 Some City"
      description="This is a first meetup!"
    />
  );
}
