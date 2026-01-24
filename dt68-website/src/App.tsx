import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <GameGrid />
        <Promotions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
