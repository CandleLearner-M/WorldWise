export interface Position {
  lat: number;
  lng: number;
}

export interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string;
  notes: string;
  position: Position;
  id: string;
}
