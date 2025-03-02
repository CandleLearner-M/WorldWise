import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer}>
      <p>
        position: {lat}, {lng}
      </p>
      <button
        onClick={() => {
          setSearchParams({ lat: 0, lng: 0 });
        }}
      >
        Change position
      </button>
    </div>
  );
}
