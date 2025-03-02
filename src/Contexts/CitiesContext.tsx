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
};

const CitiesContext = createContext<CitiesContextType>({
  cities: [],
  isLoading: false,
});

const BASE_URL = "http://localhost:9010";

function CitiesProvider({ children }: { children: ReactNode }) {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

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
  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
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
