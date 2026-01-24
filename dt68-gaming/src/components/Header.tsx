import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <header className="bg-primary sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-4xl font-bold text-gold">DT68</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#sports" className="text-white hover:text-gold transition-colors duration-300">Sports</a>
              <a href="#casino" className="text-white hover:text-gold transition-colors duration-300">Casino</a>
              <a href="#slots" className="text-white hover:text-gold transition-colors duration-300">Slots</a>
              <a href="#live" className="text-white hover:text-gold transition-colors duration-300">Live Casino</a>
              <a href="#lottery" className="text-white hover:text-gold transition-colors duration-300">Lottery</a>
              <a href="#promotions" className="text-white hover:text-gold transition-colors duration-300">Promotions</a>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => setShowLoginModal(true)}
                className="px-6 py-2 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-primary transition-all duration-300"
              >
                Login
              </button>
              <button className="px-6 py-2 bg-gold text-primary rounded-lg font-semibold hover:bg-gold-light transition-all duration-300 glow">
                Register
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-4">
                <a href="#sports" className="text-white hover:text-gold transition-colors duration-300">Sports</a>
                <a href="#casino" className="text-white hover:text-gold transition-colors duration-300">Casino</a>
                <a href="#slots" className="text-white hover:text-gold transition-colors duration-300">Slots</a>
                <a href="#live" className="text-white hover:text-gold transition-colors duration-300">Live Casino</a>
                <a href="#lottery" className="text-white hover:text-gold transition-colors duration-300">Lottery</a>
                <a href="#promotions" className="text-white hover:text-gold transition-colors duration-300">Promotions</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <button 
                    onClick={() => setShowLoginModal(true)}
                    className="px-6 py-2 border-2 border-gold text-gold rounded-lg hover:bg-gold hover:text-primary transition-all duration-300"
                  >
                    Login
                  </button>
                  <button className="px-6 py-2 bg-gold text-primary rounded-lg font-semibold hover:bg-gold-light transition-all duration-300">
                    Register
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-primary-light rounded-xl p-8 max-w-md w-full relative">
            <button 
              onClick={() => setShowLoginModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gold"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold text-gold mb-6">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Username</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 rounded-lg bg-primary text-white border border-gold-dark focus:border-gold outline-none"
                  placeholder="Enter username"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 rounded-lg bg-primary text-white border border-gold-dark focus:border-gold outline-none"
                  placeholder="Enter password"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-gold text-primary rounded-lg font-semibold hover:bg-gold-light transition-all duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
