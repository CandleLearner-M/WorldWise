import { Link } from "react-router-dom";
import { City } from "../common/types";
import styles from "./CityItem.module.css";
import { useCities } from "../Contexts/CitiesContext";

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
  city: {
    cityName,
    date,
    emoji,
    id,
    position: { lat, lng },
  },
}: CityItemProps) {
  const { currentCity, deleteCity } = useCities();

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    if (!id) return;
    deleteCity(id);
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles[`cityItem--active`] : ""
        }`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}> {emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}
