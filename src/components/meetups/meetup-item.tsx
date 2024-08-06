import { useRouter } from "next/router";

import Card from "../ui/card";

import classes from "./meetup-item.module.css";

export interface MeetupItemProps {
  id: string;
  image: string;
  title: string;
  address: string;
}

export default function MeetupItem({
  id,
  image,
  title,
  address,
}: MeetupItemProps) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}
