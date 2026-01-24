import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

const Hero = () => {
  const slides = [
    {
      id: 1,
      title: 'Welcome Bonus',
      subtitle: '100% up to $500',
      description: 'Get your first deposit bonus now!',
      gradient: 'from-accent-blue to-accent-purple',
    },
    {
      id: 2,
      title: 'Live Casino',
      subtitle: 'Real Dealers, Real Wins',
      description: 'Experience authentic casino gaming',
      gradient: 'from-gold to-gold-dark',
    },
    {
      id: 3,
      title: 'Sports Betting',
      subtitle: 'Best Odds Guaranteed',
      description: 'Bet on your favorite sports',
      gradient: 'from-accent-red to-accent-purple',
    },
  ];

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        className="h-[400px] md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`h-full bg-gradient-to-r ${slide.gradient} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className="container mx-auto px-4 z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-shadow">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-4xl text-gold font-semibold mb-4 text-shadow">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl text-white mb-8 text-shadow">
                  {slide.description}
                </p>
                <button className="px-8 py-4 bg-gold text-primary rounded-lg font-bold text-lg hover:bg-gold-light transition-all duration-300 glow transform hover:scale-105">
                  Join Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
