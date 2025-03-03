import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { City } from "../common/types";

type CitiesContextType = {
  isLoading: boolean;
  cities: City[];
  getCity: (id: string) => void;
  currentCity: City;
};

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
  isLoading: false,
  getCity: () => {},
  currentCity: {} as City,
});

const BASE_URL = "http://localhost:9010";

function CitiesProvider({ children }: { children: ReactNode }) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState<City>({} as City);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${BASE_URL}/cities`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, [setCities]);

  async function getCity(id: string) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch {
      alert("there was an error Loading the data");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Context variable used outside of the Provider");
  return context;
}

export { CitiesProvider, useCities };
