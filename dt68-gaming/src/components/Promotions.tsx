import React from 'react';

const promotions = [
  {
    id: 1,
    title: 'Thưởng Chào Mừng',
    description: 'Tặng 68K cho thành viên mới đăng ký',
    bonus: '68.000 VND',
    bgColor: 'from-purple-900 to-blue-900',
  },
  {
    id: 2,
    title: 'Hoàn Trả Hàng Tuần',
    description: 'Nhận hoàn trả lên đến 10% mỗi tuần',
    bonus: '10%',
    bgColor: 'from-orange-900 to-red-900',
  },
  {
    id: 3,
    title: 'Nạp Đầu Tuần',
    description: 'Thưởng 20% cho lần nạp đầu tiên trong tuần',
    bonus: '20%',
    bgColor: 'from-green-900 to-emerald-900',
  },
  {
    id: 4,
    title: 'VIP Đặc Quyền',
    description: 'Ưu đãi độc quyền dành cho thành viên VIP',
    bonus: 'VIP',
    bgColor: 'from-yellow-900 to-amber-900',
  },
];

const Promotions: React.FC = () => {
  return (
    <section className="py-12 bg-primary-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
          Khuyến Mãi Hấp Dẫn
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative bg-gradient-to-br from-primary-dark to-primary-darker border border-accent-blue/30 rounded-xl overflow-hidden group hover:border-accent-gold transition-all duration-300 hover:glow-gold"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${promo.bgColor} opacity-20`}></div>
              
              {/* Content */}
              <div className="relative p-6">
                <div className="text-center mb-4">
                  <div className="inline-block px-4 py-2 bg-gradient-gold text-primary-dark font-bold text-2xl rounded-lg mb-3">
                    {promo.bonus}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {promo.title}
                </h3>
                
                <p className="text-white/80 text-sm text-center mb-6">
                  {promo.description}
                </p>
                
                <button className="w-full px-6 py-3 bg-gradient-blue text-white font-semibold rounded-lg hover:glow-blue transition-all duration-300 transform hover:scale-105">
                  Nhận Ngay
                </button>
                
                <p className="text-accent-blue text-xs text-center mt-3 cursor-pointer hover:text-accent-gold">
                  Điều khoản áp dụng
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
