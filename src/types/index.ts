export interface Project {
  name: string;
  location: string;
  objectCount: number;
  description?: string;
}

export interface RealEstateObject {
  id: string;
  title: string;
  rooms: number;
  size: number;
  price?: number;
  images: string[];
  floor?: string;
  features?: string[];
  status?: "available" | "reserved" | "sold";
}

export interface Company {
  name: string;
  logo: string;
  url?: string;
}
