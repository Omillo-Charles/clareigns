
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  images: string[];
  description: string;
  sizes: string[];
  collection: string;
}

export interface Collection {
  id: number;
  name: string;
  imageUrl: string;
}
