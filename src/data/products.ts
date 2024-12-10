import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Costume Royal Kente",
    description: "Magnifique ensemble en tissu Kente traditionnel, parfait pour les cérémonies",
    price: 89999,
    image: "/images/kente-suit.jpg",
    category: "Costumes"
  },
  {
    id: 2,
    name: "Ensemble Bogolan",
    description: "Costume moderne avec motifs Bogolan, alliance parfaite entre tradition et modernité",
    price: 75999,
    image: "/images/bogolan-suit.jpg",
    category: "Costumes"
  },
  {
    id: 3,
    name: "Costume Ankara Classique",
    description: "Costume en pagne Ankara, coupe moderne et élégante",
    price: 69999,
    image: "/images/ankara-suit.jpg",
    category: "Costumes"
  }
];