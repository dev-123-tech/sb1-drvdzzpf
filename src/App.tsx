import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Contact } from './pages/Contact';
import { CustomOrder } from './pages/CustomOrder';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/magasin" element={<Shop />} />
          <Route path="/commande-sur-mesure" element={<CustomOrder />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;