import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCities } from "../Contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import { useUrlPosition } from "../hooks/useUrlLocation";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import Button from "./Button";

import styles from "./Map.module.css";

export default function Map() {
  const {
    getPosition,
    isLoading: isLoadingPosition,
    position: geolocationPosition,
  } = useGeolocation();
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState<[number, number]>([35.75, 5]);

  const { lat, lng } = useUrlPosition();

  useEffect(() => {
    if (!lat || !lng) return;
    setMapPosition([Number(lat), Number(lng)]);
  }, [lat, lng, setMapPosition]);

  useEffect(() => {
    if (!geolocationPosition) return;
    setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
  }, [geolocationPosition, setMapPosition]);
  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type="position" onClick={() => getPosition()}>
          {isLoadingPosition ? "Loading... " : "Use your position"}
        </Button>
      )}
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <ChangeView position={mapPosition} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.fr/hot/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city) => (
          <Marker position={city.position} key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}

        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeView({ position }: { position: [number, number] }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position, 6, {
      animate: true,
      duration: 1,
    });
  }, [position, map]);

  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click: (e) => {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });

  return null;
}
