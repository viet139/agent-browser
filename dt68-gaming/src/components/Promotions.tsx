const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: 'Welcome Bonus',
      description: '100% First Deposit Bonus up to $500',
      badge: 'NEW',
      color: 'from-gold to-gold-dark',
    },
    {
      id: 2,
      title: 'Daily Cashback',
      description: 'Get 10% cashback on all losses',
      badge: 'HOT',
      color: 'from-red-500 to-red-700',
    },
    {
      id: 3,
      title: 'VIP Program',
      description: 'Exclusive rewards for loyal players',
      badge: 'VIP',
      color: 'from-purple-500 to-purple-700',
    },
    {
      id: 4,
      title: 'Refer a Friend',
      description: 'Earn $50 for each friend you refer',
      badge: 'BONUS',
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section id="promotions" className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gold mb-12">
          Promotions & Bonuses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-primary-light rounded-xl overflow-hidden cursor-pointer card-hover relative"
            >
              <div className={`h-40 bg-gradient-to-br ${promo.color} flex items-center justify-center relative`}>
                <span className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-xs font-bold">
                  {promo.badge}
                </span>
                <div className="text-6xl">🎁</div>
              </div>
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">{promo.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{promo.description}</p>
                <button className="w-full px-4 py-2 bg-gold text-primary rounded-lg font-semibold hover:bg-gold-light transition-all duration-300">
                  Claim Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
