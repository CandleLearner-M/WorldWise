import { City } from "../common/types";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";

interface CityListProps {
  isLoading: boolean;
  cities: City[],
}

export default function CityList({isLoading, cities}: CityListProps) {
  if(isLoading) return <Spinner />

  return <ul className={styles.cityList}>
    {cities.map(city => city)}
  </ul>;
}
