export interface Position {
  lat: number;
  lng: number;
}

export interface City {
  cityName: string;
  country: string;
  emoji: string;
  date: string | Date;
  notes: string;
  position: Position;
  id?: string;
}


export interface Country {
  country: string;
  emoji: string;
}