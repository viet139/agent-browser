const Footer = () => {
  const paymentMethods = ['💳', '🏦', '💰', '📱', '🔐', '💵'];
  const socialLinks = [
    { name: 'Facebook', icon: '📘' },
    { name: 'Telegram', icon: '✈️' },
    { name: 'Twitter', icon: '🐦' },
    { name: 'Instagram', icon: '📷' },
  ];

  return (
    <footer className="bg-primary-dark border-t border-gold-dark">
      <div className="container mx-auto px-4 py-12">
        {/* Payment Methods */}
        <div className="mb-8">
          <h3 className="text-gold font-bold text-lg mb-4 text-center">Payment Methods</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center text-3xl hover:bg-primary transition-all duration-300"
              >
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-gold font-bold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">About DT68</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Affiliates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Live Chat</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Responsible Gaming</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gold font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-xl hover:bg-gold hover:scale-110 transition-all duration-300"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-gold-dark pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-gold">
              <span className="text-2xl">🔒</span>
              <span className="text-sm">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <span className="text-2xl">✓</span>
              <span className="text-sm">Licensed</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm">Fair Gaming</span>
            </div>
            <div className="flex items-center gap-2 text-gold">
              <span className="text-2xl">18+</span>
              <span className="text-sm">Responsible Gaming</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">© 2026 DT68. All rights reserved.</p>
          <p className="text-xs">
            Gambling can be addictive. Please play responsibly. 18+ only.
          </p>
        </div>
      </div>

      {/* Live Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-all duration-300 glow">
          💬
        </button>
      </div>
    </footer>
  );
};

export default Footer;
