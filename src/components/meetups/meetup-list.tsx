import { IMeetup } from "@/types/meetup";

import MeetupItem from "./meetup-item";

import classes from "./meetup-list.module.css";

export interface MeetupListProps {
  meetups: IMeetup[];
}

export default function MeetupList({ meetups }: MeetupListProps) {
  return (
    <ul className={classes.list}>
      {meetups.map(({ id, image, title, address }) => (
        <MeetupItem
          key={id}
          id={id}
          image={image}
          title={title}
          address={address}
        />
      ))}
    </ul>
  );
}
