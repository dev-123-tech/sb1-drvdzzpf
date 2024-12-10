import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-amber-800 mb-4">Bienvenue chez Niwalma Shop</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Découvrez notre collection exclusive de costumes africains, alliant tradition et modernité
          pour sublimer votre style.
        </p>
      </section>

      <section className="mb-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Meilleures Ventes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            to="/magasin"
            className="inline-block bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-700"
          >
            Voir tous nos produits
          </Link>
        </div>
      </section>

      <section className="bg-amber-50 rounded-lg p-8 mb-16 mx-4">
        <h2 className="text-3xl font-bold text-center mb-6">Pourquoi Niwalma Shop ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Qualité Premium</h3>
            <p className="text-gray-600">Des tissus soigneusement sélectionnés et une confection artisanale</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Design Unique</h3>
            <p className="text-gray-600">Des créations originales mêlant tradition et modernité</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Service Personnalisé</h3>
            <p className="text-gray-600">Un accompagnement sur mesure pour votre satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
}