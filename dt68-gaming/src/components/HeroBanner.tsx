import React, { useState, useEffect } from 'react';

const banners = [
  {
    id: 1,
    title: 'Chào Mừng Thành Viên Mới',
    subtitle: 'Tặng 68K cho thành viên mới',
    description: 'Đăng ký ngay để nhận ưu đãi hấp dẫn',
    bgColor: 'from-purple-900 via-blue-900 to-purple-900',
  },
  {
    id: 2,
    title: 'Hoàn Trả Không Giới Hạn',
    subtitle: 'Cashback lên đến 10%',
    description: 'Hoàn trả hàng tuần cho tất cả thành viên',
    bgColor: 'from-red-900 via-orange-900 to-red-900',
  },
  {
    id: 3,
    title: 'Chương Trình VIP',
    subtitle: 'Đặc quyền dành cho VIP',
    description: 'Ưu đãi độc quyền và quà tặng giá trị',
    bgColor: 'from-yellow-900 via-amber-900 to-yellow-900',
  },
];

const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`h-full bg-gradient-to-r ${banner.bgColor} flex items-center justify-center`}>
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-glow-gold">
                {banner.title}
              </h2>
              <p className="text-2xl md:text-4xl text-accent-gold font-semibold mb-4">
                {banner.subtitle}
              </p>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                {banner.description}
              </p>
              <button className="px-8 py-4 bg-gradient-gold text-primary-dark font-bold text-lg rounded-lg hover:glow-gold transition-all duration-300 transform hover:scale-105">
                Nhận Ngay
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent-gold w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
