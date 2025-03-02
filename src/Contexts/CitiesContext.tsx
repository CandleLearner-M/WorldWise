import { createContext, ReactNode, useEffect, useState } from "react";
import { City } from "../common/types";

const CitiesContext = createContext();

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
  return <CitiesContext.Provider value={{}}>
    {children}
  </CitiesContext.Provider>;
}
