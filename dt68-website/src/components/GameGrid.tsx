import React from 'react';

interface Game {
  id: number;
  title: string;
  category: string;
  players: string;
  image: string;
}

const GameGrid: React.FC = () => {
  const games: Game[] = [
    { id: 1, title: 'Baccarat', category: 'Casino', players: '1.2K', image: '🎴' },
    { id: 2, title: 'Blackjack', category: 'Casino', players: '890', image: '🃏' },
    { id: 3, title: 'Roulette', category: 'Casino', players: '2.1K', image: '🎡' },
    { id: 4, title: 'Poker', category: 'Casino', players: '1.5K', image: '♠️' },
    { id: 5, title: 'Slot Machine', category: 'Slots', players: '3.4K', image: '🎰' },
    { id: 6, title: 'Dragon Tiger', category: 'Casino', players: '980', image: '🐉' },
    { id: 7, title: 'Sicbo', category: 'Casino', players: '750', image: '🎲' },
    { id: 8, title: 'Mega Jackpot', category: 'Slots', players: '2.8K', image: '💎' },
  ];

  return (
    <section id="casino" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trò Chơi <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Phổ Biến</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Khám phá hàng nghìn trò chơi hấp dẫn với tỷ lệ thắng cao
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['Tất cả', 'Casino', 'Slots', 'Thể thao', 'Live Casino'].map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                category === 'Tất cả'
                  ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gold-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gold-400/20 cursor-pointer group"
            >
              {/* Game Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-7xl">
                {game.image}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-gradient-to-r from-gold-400 to-gold-600 text-gray-900 font-bold rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-200">
                    Chơi ngay
                  </button>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gold-400 font-semibold">{game.category}</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <span className="text-green-400">●</span>
                    {game.players} đang chơi
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-gold-400">
            Xem thêm trò chơi
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameGrid;
