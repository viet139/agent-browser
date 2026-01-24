import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-accent-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-gold text-glow-gold">
              DT68
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-white hover:text-accent-gold transition-colors duration-200">
              Trang Chủ
            </a>
            <a href="#sports" className="text-white hover:text-accent-gold transition-colors duration-200">
              Thể Thao
            </a>
            <a href="#casino" className="text-white hover:text-accent-gold transition-colors duration-200">
              Casino
            </a>
            <a href="#slots" className="text-white hover:text-accent-gold transition-colors duration-200">
              Slot Games
            </a>
            <a href="#fishing" className="text-white hover:text-accent-gold transition-colors duration-200">
              Bắn Cá
            </a>
            <a href="#promotions" className="text-white hover:text-accent-gold transition-colors duration-200">
              Khuyến Mãi
            </a>
            <a href="#deposit" className="text-white hover:text-accent-gold transition-colors duration-200">
              Nạp Tiền
            </a>
            <a href="#withdraw" className="text-white hover:text-accent-gold transition-colors duration-200">
              Rút Tiền
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 bg-gradient-gold text-primary-dark font-semibold rounded-lg hover:glow-gold transition-all duration-300 transform hover:scale-105">
              Đăng Nhập
            </button>
            <button className="px-6 py-2 bg-gradient-blue text-white font-semibold rounded-lg hover:glow-blue transition-all duration-300 transform hover:scale-105">
              Đăng Ký
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-accent-blue/20">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Trang Chủ
              </a>
              <a href="#sports" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Thể Thao
              </a>
              <a href="#casino" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Casino
              </a>
              <a href="#slots" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Slot Games
              </a>
              <a href="#fishing" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Bắn Cá
              </a>
              <a href="#promotions" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Khuyến Mãi
              </a>
              <a href="#deposit" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Nạp Tiền
              </a>
              <a href="#withdraw" className="text-white hover:text-accent-gold transition-colors duration-200 py-2">
                Rút Tiền
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-6 py-2 bg-gradient-gold text-primary-dark font-semibold rounded-lg">
                  Đăng Nhập
                </button>
                <button className="px-6 py-2 bg-gradient-blue text-white font-semibold rounded-lg">
                  Đăng Ký
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
