import type { FC } from "react";
import styles from './BookHeading.module.css'

interface Props {
  title: string;
}

const BookHeading: FC<Props> = ({ title }) => {
  return <h2 className={styles.heading}>{title}</h2>;
};

export default BookHeading;