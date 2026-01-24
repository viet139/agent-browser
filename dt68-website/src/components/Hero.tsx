import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent animate-pulse">
            Chào mừng đến DT68
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Trải nghiệm cá cược đẳng cấp thế giới
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20 hover:border-gold-400 transition-all duration-300">
              <div className="text-4xl mb-3">🎰</div>
              <h3 className="text-lg font-semibold mb-2 text-gold-400">Casino Trực Tuyến</h3>
              <p className="text-sm text-gray-400">Hàng nghìn trò chơi casino hấp dẫn</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20 hover:border-gold-400 transition-all duration-300">
              <div className="text-4xl mb-3">⚽</div>
              <h3 className="text-lg font-semibold mb-2 text-gold-400">Cá Cược Thể Thao</h3>
              <p className="text-sm text-gray-400">Tỷ lệ cược tốt nhất thị trường</p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gold-400/20 hover:border-gold-400 transition-all duration-300">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="text-lg font-semibold mb-2 text-gold-400">Khuyến Mãi Khủng</h3>
              <p className="text-sm text-gray-400">Thưởng 100% cho thành viên mới</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-gray-900 font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-200 shadow-2xl hover:shadow-gold-400/50 transform hover:scale-105">
              Đăng ký ngay
            </button>
            <button className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-bold text-lg rounded-lg hover:bg-gold-400 hover:text-gray-900 transition-all duration-200 transform hover:scale-105">
              Tìm hiểu thêm
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Bảo mật SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Hỗ trợ 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Rút tiền nhanh</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>18+ Chơi có trách nhiệm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
