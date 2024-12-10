import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LayoutProps } from './types';

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
}