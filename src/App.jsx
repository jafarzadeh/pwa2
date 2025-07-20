import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Navigation />
    </div>
  );
}