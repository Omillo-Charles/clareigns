
import { Collection, Product } from './types';

export const collections: Collection[] = [
  { id: 1, name: 'Dresses', imageUrl: '/Screenshot 2025-09-01 210002.png' },
  { id: 2, name: 'Tops', imageUrl: '/Screenshot 2025-09-01 205947.png' },
  { id: 3, name: 'Bottoms', imageUrl: '/Screenshot 2025-09-01 200957.png' },
  { id: 4, name: 'Sets', imageUrl: '/Screenshot 2025-09-01 200943.png' },
  { id: 5, name: 'Accessories', imageUrl: '/Screenshot 2025-09-01 200932.png' },
];

export const sampleProduct: Product = {
  id: 101,
  name: 'Elegant Floral Maxi Dress',
  price: 129.99,
  imageUrl: '/Screenshot 2025-09-01 210002.png',
  images: [
    '/Screenshot 2025-09-01 210002.png',
    '/Screenshot 2025-09-01 205947.png',
    '/Screenshot 2025-09-01 200957.png',
    '/Screenshot 2025-09-01 200943.png',
  ],
  description:
    'Discover timeless elegance with our Floral Maxi Dress. Crafted from lightweight, breathable fabric, this dress features a delicate floral print and a flattering silhouette that flows with every step. Perfect for garden parties, weddings, or a stylish day out.',
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  collection: 'Dresses',
};

export const products: Product[] = [
  {
    id: 101,
    name: 'Elegant Floral Maxi Dress',
    price: 129.99,
    imageUrl: '/Screenshot 2025-09-01 210002.png',
    images: [
      '/Screenshot 2025-09-01 210002.png',
      '/Screenshot 2025-09-01 205947.png',
      '/Screenshot 2025-09-01 200957.png',
      '/Screenshot 2025-09-01 200943.png',
    ],
    description: 'Discover timeless elegance with our Floral Maxi Dress. Crafted from lightweight, breathable fabric, this dress features a delicate floral print and a flattering silhouette that flows with every step. Perfect for garden parties, weddings, or a stylish day out.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    collection: 'Dresses',
  },
  {
    id: 102,
    name: 'Chic Summer Top',
    price: 89.99,
    imageUrl: '/Screenshot 2025-09-01 205947.png',
    images: [
      '/Screenshot 2025-09-01 205947.png',
      '/Screenshot 2025-09-01 200957.png',
      '/Screenshot 2025-09-01 200943.png',
      '/Screenshot 2025-09-01 200932.png',
    ],
    description: 'A versatile summer top perfect for any occasion. Made from breathable cotton blend with a modern cut that flatters every body type.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    collection: 'Tops',
  },
  {
    id: 103,
    name: 'Classic High-Waist Bottoms',
    price: 79.99,
    imageUrl: '/Screenshot 2025-09-01 200957.png',
    images: [
      '/Screenshot 2025-09-01 200957.png',
      '/Screenshot 2025-09-01 200943.png',
      '/Screenshot 2025-09-01 200932.png',
      '/Screenshot 2025-09-01 200919.png',
    ],
    description: 'Timeless high-waist design that elongates your silhouette. Perfect for both casual and formal occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    collection: 'Bottoms',
  },
  {
    id: 104,
    name: 'Coordination Set',
    price: 149.99,
    imageUrl: '/Screenshot 2025-09-01 200943.png',
    images: [
      '/Screenshot 2025-09-01 200943.png',
      '/Screenshot 2025-09-01 200932.png',
      '/Screenshot 2025-09-01 200919.png',
      '/Screenshot 2025-09-01 200859.png',
    ],
    description: 'A perfectly coordinated set that combines style and comfort. Ideal for those who love matching ensembles.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    collection: 'Sets',
  },
  {
    id: 105,
    name: 'Statement Accessories',
    price: 59.99,
    imageUrl: '/Screenshot 2025-09-01 200932.png',
    images: [
      '/Screenshot 2025-09-01 200932.png',
      '/Screenshot 2025-09-01 200919.png',
      '/Screenshot 2025-09-01 200859.png',
      '/Screenshot 2025-09-01 200826.png',
    ],
    description: 'Elevate any outfit with our carefully curated accessories. Each piece is designed to add that perfect finishing touch.',
    sizes: ['One Size'],
    collection: 'Accessories',
  },
];
