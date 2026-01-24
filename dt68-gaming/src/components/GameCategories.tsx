const GameCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Sports Betting',
      icon: '⚽',
      description: 'Bet on live sports',
      gradient: 'from-green-500 to-green-700',
    },
    {
      id: 2,
      name: 'Live Casino',
      icon: '🎰',
      description: 'Real dealers online',
      gradient: 'from-red-500 to-red-700',
    },
    {
      id: 3,
      name: 'Slot Games',
      icon: '🎲',
      description: 'Thousands of slots',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      id: 4,
      name: 'Table Games',
      icon: '🃏',
      description: 'Classic casino games',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      id: 5,
      name: 'Lottery',
      icon: '🎫',
      description: 'Win big jackpots',
      gradient: 'from-yellow-500 to-yellow-700',
    },
    {
      id: 6,
      name: 'Fishing Games',
      icon: '🐟',
      description: 'Arcade style fun',
      gradient: 'from-cyan-500 to-cyan-700',
    },
  ];

  const featuredGames = [
    { id: 1, name: 'Mega Fortune', provider: 'NetEnt', type: 'Slot' },
    { id: 2, name: 'Lightning Roulette', provider: 'Evolution', type: 'Live' },
    { id: 3, name: 'Blackjack VIP', provider: 'Pragmatic', type: 'Table' },
    { id: 4, name: 'Sweet Bonanza', provider: 'Pragmatic', type: 'Slot' },
    { id: 5, name: 'Crazy Time', provider: 'Evolution', type: 'Live' },
    { id: 6, name: 'Book of Dead', provider: 'Play\'n GO', type: 'Slot' },
    { id: 7, name: 'Baccarat', provider: 'Evolution', type: 'Live' },
    { id: 8, name: 'Gates of Olympus', provider: 'Pragmatic', type: 'Slot' },
  ];

  return (
    <section className="py-16 bg-primary-dark">
      <div className="container mx-auto px-4">
        {/* Game Categories Grid */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">
          Game Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`bg-gradient-to-br ${category.gradient} rounded-xl p-6 text-center cursor-pointer card-hover`}
            >
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
              <p className="text-white text-sm opacity-90">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Featured Games */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">
          Featured Games
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredGames.map((game) => (
            <div
              key={game.id}
              className="bg-primary-light rounded-xl overflow-hidden cursor-pointer card-hover"
            >
              <div className="h-48 bg-gradient-to-br from-gold-dark to-accent-purple flex items-center justify-center">
                <div className="text-6xl">🎮</div>
              </div>
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-1">{game.name}</h3>
                <p className="text-gold text-sm mb-1">{game.provider}</p>
                <span className="inline-block px-3 py-1 bg-gold text-primary text-xs font-semibold rounded-full">
                  {game.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
