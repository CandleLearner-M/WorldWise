import { City } from "../common/types";
import styles from "./CityItem.module.css";

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

type CityItemProps = {
  city: City;
};
export default function CityItem({
  city: { cityName, date, emoji },
}: CityItemProps) {
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}> {emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}
