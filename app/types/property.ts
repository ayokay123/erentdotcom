export interface Property {
  id: number;
  images: string[];
  rentLow: number;
  rentHigh: number;
  bedroomLow: number;
  bedroomHigh: number;
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  tags: string[];
  lat: number;
  lng: number;
}
