import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { OrderModal } from '../components/OrderModal';
import { products } from '../data/products';
import { Product } from '../types/product';

export function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleSubmitOrder = (formData: any) => {
    console.log('Commande soumise:', { product: selectedProduct, ...formData });
    // Ici vous pouvez ajouter la logique pour traiter la commande
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Notre Collection</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onOrder={handleOrder}
          />
        ))}
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
        onSubmit={handleSubmitOrder}
      />
    </div>
  );
}