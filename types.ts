export interface CopySection {
  title?: string;
  subtitle?: string;
  text?: string | string[];
}

export interface EventDetails {
  date: string;
  time: string;
  locationName: string;
  address: string;
  parkingNote: string;
  mapLink: string;
  menu?: string;
}

export interface PixDetails {
  key: string;
  name: string;
}