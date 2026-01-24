import React from 'react';

const games = [
  {
    id: 1,
    name: 'Sweet Bonanza',
    provider: 'Pragmatic Play',
    badge: 'HOT',
    color: 'from-pink-600 to-purple-600',
  },
  {
    id: 2,
    name: 'Gates of Olympus',
    provider: 'Pragmatic Play',
    badge: 'NEW',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 3,
    name: 'Sugar Rush',
    provider: 'Pragmatic Play',
    badge: 'HOT',
    color: 'from-yellow-600 to-orange-600',
  },
  {
    id: 4,
    name: 'Starlight Princess',
    provider: 'Pragmatic Play',
    badge: 'NEW',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 5,
    name: 'Wild West Gold',
    provider: 'Pragmatic Play',
    badge: 'HOT',
    color: 'from-amber-700 to-yellow-600',
  },
  {
    id: 6,
    name: 'Aztec Gems',
    provider: 'Pragmatic Play',
    badge: '',
    color: 'from-green-600 to-emerald-600',
  },
];

const FeaturedGames: React.FC = () => {
  return (
    <section className="py-12 bg-primary-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Trò Chơi Nổi Bật
          </h2>
          <button className="text-accent-gold hover:text-accent-orange transition-colors">
            Xem Tất Cả →
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="relative group cursor-pointer"
            >
              <div className={`aspect-square bg-gradient-to-br ${game.color} rounded-xl overflow-hidden`}>
                <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold opacity-50">
                  {game.name.charAt(0)}
                </div>
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-gradient-gold text-primary-dark font-bold rounded-lg hover:glow-gold transition-all transform hover:scale-105">
                    Chơi Ngay
                  </button>
                </div>
              </div>
              
              {/* Badge */}
              {game.badge && (
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs font-bold ${
                  game.badge === 'HOT' 
                    ? 'bg-accent-red text-white' 
                    : 'bg-accent-green text-white'
                }`}>
                  {game.badge}
                </div>
              )}
              
              {/* Game Info */}
              <div className="mt-3">
                <h3 className="text-white font-semibold text-sm mb-1 truncate">
                  {game.name}
                </h3>
                <p className="text-accent-blue text-xs">{game.provider}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
