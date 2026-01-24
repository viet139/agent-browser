import React from 'react';

interface Promotion {
  id: number;
  title: string;
  description: string;
  bonus: string;
  icon: string;
  color: string;
}

const Promotions: React.FC = () => {
  const promotions: Promotion[] = [
    {
      id: 1,
      title: 'Thưởng Chào Mừng',
      description: 'Nhận ngay 100% tiền thưởng cho lần nạp đầu tiên',
      bonus: '100%',
      icon: '🎁',
      color: 'from-gold-400 to-gold-600'
    },
    {
      id: 2,
      title: 'Hoàn Trả Hàng Ngày',
      description: 'Hoàn trả 0.8% cho tất cả các trò chơi',
      bonus: '0.8%',
      icon: '💰',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      title: 'Thưởng Nạp Lại',
      description: 'Thưởng 50% cho mỗi lần nạp tiền',
      bonus: '50%',
      icon: '🔄',
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 4,
      title: 'VIP Đặc Biệt',
      description: 'Ưu đãi độc quyền cho thành viên VIP',
      bonus: 'VIP',
      icon: '👑',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="promotions" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Khuyến Mãi <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">Hấp Dẫn</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Nhận ngay các ưu đãi độc quyền dành cho thành viên
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gold-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-5xl mb-4">{promo.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{promo.description}</p>
              <div className={`inline-block px-4 py-2 bg-gradient-to-r ${promo.color} text-white font-bold rounded-lg`}>
                {promo.bonus}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎉 Ưu Đãi Đặc Biệt Tháng Này
            </h3>
            <p className="text-gray-800 text-lg mb-6">
              Đăng ký ngay hôm nay và nhận thưởng lên đến 10,000,000 VNĐ
            </p>
            <button className="px-8 py-4 bg-gray-900 text-gold-400 font-bold text-lg rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-xl">
              Nhận ưu đãi ngay
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
