import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Live Casino',
    icon: '🎰',
    count: '150+',
    isLive: true,
  },
  {
    id: 2,
    name: 'Thể Thao',
    icon: '⚽',
    count: '200+',
    isLive: false,
  },
  {
    id: 3,
    name: 'Slot Games',
    icon: '🎮',
    count: '500+',
    isLive: false,
  },
  {
    id: 4,
    name: 'Bắn Cá',
    icon: '🎣',
    count: '50+',
    isLive: false,
  },
  {
    id: 5,
    name: 'Xổ Số',
    icon: '🎲',
    count: '30+',
    isLive: false,
  },
  {
    id: 6,
    name: 'Bài Tây',
    icon: '🃏',
    count: '80+',
    isLive: false,
  },
];

const GameCategories: React.FC = () => {
  return (
    <section className="py-12 bg-primary-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Danh Mục Trò Chơi
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative bg-gradient-to-br from-primary-dark to-primary-darker border border-accent-blue/30 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:border-accent-gold hover:glow-gold group"
            >
              {category.isLive && (
                <div className="absolute top-2 right-2 flex items-center space-x-1">
                  <span className="w-2 h-2 bg-accent-red rounded-full animate-pulse"></span>
                  <span className="text-xs text-accent-red font-semibold">LIVE</span>
                </div>
              )}
              <div className="text-5xl mb-3">{category.icon}</div>
              <h3 className="text-white font-semibold mb-2 group-hover:text-accent-gold transition-colors">
                {category.name}
              </h3>
              <p className="text-accent-blue text-sm">{category.count} Games</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
