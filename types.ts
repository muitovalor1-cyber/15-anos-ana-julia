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
  prices?: {
    adult: string;
    kids5to8: string;
    kids9to11: string;
    bariatric: string;
    note?: string;
  };
}

export interface PixDetails {
  key: string;
  name: string;
}