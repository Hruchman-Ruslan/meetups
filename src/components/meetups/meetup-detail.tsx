import classes from "./meetup-detail.module.css";

export interface MeetupDetailProps {
  image: string;
  title: string;
  address: string;
  description: string;
}

export default function MeetupDetail({
  image,
  title,
  address,
  description,
}: MeetupDetailProps) {
  return (
    <section className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}
