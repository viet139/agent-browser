import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import GameCategories from './components/GameCategories';
import FeaturedGames from './components/FeaturedGames';
import Promotions from './components/Promotions';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Header />
      <main>
        <HeroBanner />
        <GameCategories />
        <FeaturedGames />
        <Promotions />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;
