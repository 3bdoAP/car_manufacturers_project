export interface Car {
  id: string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  releaseDate: string;
  imageUrl: string;
  fuelType: string;
  features: string[];
  manufacturer: Manufacturer;
}

interface Manufacturer {
  id: string;
  name: string;
  country: string;
  foundedYear: number;
  logoUrl: string;
  isActive: boolean;
}
