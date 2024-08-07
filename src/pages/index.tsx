import { IMeetup } from "@/types/meetup";

import MeetupList from "@/components/meetups/meetup-list";

const DUMMY_MEETUPS: IMeetup[] = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

export interface HomePageProps {
  meetups: IMeetup[];
}

export default function HomePage({ meetups }: HomePageProps) {
  return <MeetupList meetups={meetups} />;
}

export async function getStaticProps() {
  // fetch api data
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
