import classes from "./card.module.css";

export interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return <div className={classes.card}>{children}</div>;
}
