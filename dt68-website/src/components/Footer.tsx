import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent mb-4">
              DT68
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Nền tảng cá cược trực tuyến uy tín hàng đầu Việt Nam. 
              Mang đến trải nghiệm giải trí đẳng cấp và an toàn.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-gray-900 transition-all duration-200">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-gray-900 transition-all duration-200">
                <span>T</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-gray-900 transition-all duration-200">
                <span>in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-400 hover:text-gray-900 transition-all duration-200">
                <span>YT</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Trò chơi</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Khuyến mãi</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Tin tức</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Liên hệ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hỗ Trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Hướng dẫn nạp tiền</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Hướng dẫn rút tiền</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors duration-200">Điều khoản sử dụng</a></li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Phương Thức Thanh Toán</h4>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-gray-800 rounded p-2 text-center text-xs hover:bg-gray-700 transition-colors duration-200">
                💳 Visa
              </div>
              <div className="bg-gray-800 rounded p-2 text-center text-xs hover:bg-gray-700 transition-colors duration-200">
                💳 Master
              </div>
              <div className="bg-gray-800 rounded p-2 text-center text-xs hover:bg-gray-700 transition-colors duration-200">
                🏦 Bank
              </div>
              <div className="bg-gray-800 rounded p-2 text-center text-xs hover:bg-gray-700 transition-colors duration-200">
                📱 Momo
              </div>
              <div className="bg-gray-800 rounded p-2 text-center text-xs hover:bg-gray-700 transition-colors duration-200">
                💰 ZaloPay
              </div>
              <div className="bg-gray-800 rounded p-2 text-center text-xs hover:bg-gray-700 transition-colors duration-200">
                ₿ Crypto
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Giao dịch an toàn với mã hóa SSL 256-bit
            </p>
          </div>
        </div>

        {/* Responsible Gaming Notice */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <div className="bg-gray-900 rounded-lg p-4 text-center">
            <p className="text-sm text-gray-400 mb-2">
              ⚠️ <span className="text-gold-400 font-semibold">Cảnh báo:</span> Chơi game có thể gây nghiện. 
              Chỉ dành cho người trên 18 tuổi. Chơi có trách nhiệm.
            </p>
            <p className="text-xs text-gray-500">
              Nếu bạn hoặc người thân cần hỗ trợ về vấn đề cờ bạc, vui lòng liên hệ đường dây nóng: 1800-xxxx
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2026 DT68. Tất cả quyền được bảo lưu. | 
            <a href="#" className="hover:text-gold-400 transition-colors duration-200 ml-1">Chính sách bảo mật</a> | 
            <a href="#" className="hover:text-gold-400 transition-colors duration-200 ml-1">Điều khoản dịch vụ</a>
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Giấy phép hoạt động số: XXXX-XXXX-XXXX | Cơ quan cấp phép: Gaming Authority
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
