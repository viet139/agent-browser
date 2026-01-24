import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark border-t border-accent-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-gold mb-4">
              DT68
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Nhà cái uy tín #1 Việt Nam. Nạp rút siêu tốc, tỷ lệ cược cao nhất, hỗ trợ 24/7.
            </p>
            <div className="flex space-x-4">
              <a href="#facebook" className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors">
                <span className="text-white">f</span>
              </a>
              <a href="#telegram" className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors">
                <span className="text-white">t</span>
              </a>
              <a href="#zalo" className="w-10 h-10 bg-accent-blue/20 rounded-full flex items-center justify-center hover:bg-accent-blue transition-colors">
                <span className="text-white">z</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Liên Hệ
                </a>
              </li>
              <li>
                <a href="#terms" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Điều Khoản
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Chính Sách Bảo Mật
                </a>
              </li>
              <li>
                <a href="#responsible" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Chơi Có Trách Nhiệm
                </a>
              </li>
            </ul>
          </div>

          {/* Game Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Danh Mục Game</h4>
            <ul className="space-y-2">
              <li>
                <a href="#casino" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Live Casino
                </a>
              </li>
              <li>
                <a href="#sports" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Thể Thao
                </a>
              </li>
              <li>
                <a href="#slots" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Slot Games
                </a>
              </li>
              <li>
                <a href="#fishing" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Bắn Cá
                </a>
              </li>
              <li>
                <a href="#lottery" className="text-white/70 hover:text-accent-gold transition-colors text-sm">
                  Xổ Số
                </a>
              </li>
            </ul>
          </div>

          {/* Payment & Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Thanh Toán & Hỗ Trợ</h4>
            <div className="mb-4">
              <p className="text-white/70 text-sm mb-2">Phương thức thanh toán:</p>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-white/10 rounded text-xs text-white">Bank</div>
                <div className="px-3 py-1 bg-white/10 rounded text-xs text-white">MoMo</div>
                <div className="px-3 py-1 bg-white/10 rounded text-xs text-white">ZaloPay</div>
              </div>
            </div>
            <div>
              <p className="text-white/70 text-sm mb-2">Hỗ trợ 24/7:</p>
              <p className="text-accent-gold font-semibold">Hotline: 1900-xxxx</p>
              <p className="text-accent-blue text-sm">Email: support@dt68.net</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-blue/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © 2026 DT68. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="px-3 py-1 bg-accent-green/20 rounded text-xs text-accent-green">
                Licensed & Regulated
              </div>
              <div className="px-3 py-1 bg-accent-blue/20 rounded text-xs text-accent-blue">
                18+ Only
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
