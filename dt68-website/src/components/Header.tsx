import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              DT68
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="hover:text-gold-400 transition-colors duration-200">
              Trang chủ
            </a>
            <a href="#casino" className="hover:text-gold-400 transition-colors duration-200">
              Casino
            </a>
            <a href="#sports" className="hover:text-gold-400 transition-colors duration-200">
              Thể thao
            </a>
            <a href="#slots" className="hover:text-gold-400 transition-colors duration-200">
              Slot Games
            </a>
            <a href="#live" className="hover:text-gold-400 transition-colors duration-200">
              Live Casino
            </a>
            <a href="#promotions" className="hover:text-gold-400 transition-colors duration-200">
              Khuyến mãi
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 border border-gold-400 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-gray-900 transition-all duration-200">
              Đăng nhập
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-gray-900 font-semibold rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-200 shadow-lg">
              Đăng ký
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-gold-400 transition-colors duration-200">
                Trang chủ
              </a>
              <a href="#casino" className="hover:text-gold-400 transition-colors duration-200">
                Casino
              </a>
              <a href="#sports" className="hover:text-gold-400 transition-colors duration-200">
                Thể thao
              </a>
              <a href="#slots" className="hover:text-gold-400 transition-colors duration-200">
                Slot Games
              </a>
              <a href="#live" className="hover:text-gold-400 transition-colors duration-200">
                Live Casino
              </a>
              <a href="#promotions" className="hover:text-gold-400 transition-colors duration-200">
                Khuyến mãi
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="px-6 py-2 border border-gold-400 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-gray-900 transition-all duration-200">
                  Đăng nhập
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-gold-400 to-gold-600 text-gray-900 font-semibold rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-200">
                  Đăng ký
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
