import { City, Country } from "../common/types";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";

interface CountriesListProps {
  isLoading: boolean;
  cities: City[];
}

export default function CountriesList({
  isLoading,
  cities,
}: CountriesListProps) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  const countries = cities.reduce<Country[]>((acc, city) => {
    if (acc.some((country) => country.country === city.country)) return acc;
    return [...acc, { country: city.country, emoji: city.emoji }];
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
