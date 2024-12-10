import React from 'react';

export function Footer() {
  return (
    <footer className="bg-amber-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Niwalma Shop</h3>
            <p>Votre destination pour les plus beaux costumes africains.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires</h3>
            <p>Lundi - Samedi: 9h - 19h</p>
            <p>Dimanche: Fermé</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p>Email: contactniawalma@gmail.com</p>
            <p>Tél: +221 782833413</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Niwalma Shop. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}