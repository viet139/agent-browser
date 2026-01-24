import Header from './components/Header';
import Hero from './components/Hero';
import GameCategories from './components/GameCategories';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Header />
      <Hero />
      <GameCategories />
      <Promotions />
      <Footer />
    </div>
  );
}

export default App;
