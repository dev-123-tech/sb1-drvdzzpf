import React from 'react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log('Message envoyé:', Object.fromEntries(formData));
    // Ici vous pouvez ajouter la logique pour envoyer le message
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Contactez-nous</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Nos Coordonnées</h2>
          <div className="space-y-2">
            <p><strong>Adresse:</strong> Marché Zac Mbao</p>
            <p><strong>Téléphone:</strong> +221 782833413</p>
            <p><strong>Email:</strong> contactniwalma@gmail.com</p>
            <p><strong>Horaires:</strong> Lundi - Samedi: 9h - 19h</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Sujet</label>
              <input
                type="text"
                name="subject"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-amber-700"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}