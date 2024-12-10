import React from 'react';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

export function ProductCard({ product, onOrder }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold">
            {(product.price / 100).toLocaleString('fr-FR', {
              style: 'currency',
              currency: 'XOF'
            })}
          </span>
          <button
            onClick={() => onOrder(product)}
            className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700"
          >
            Commander
          </button>
        </div>
      </div>
    </div>
  );
}