export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  shortDesc: string;
  longDesc: string;
  rating: number;
  language: string;
  description?: string;
}