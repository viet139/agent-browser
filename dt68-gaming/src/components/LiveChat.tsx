import React, { useState } from 'react';

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-primary-dark border border-accent-blue/30 rounded-xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-blue p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Hỗ Trợ Trực Tuyến</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-accent-gold transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="bg-accent-blue/20 rounded-lg p-3 mb-3">
              <p className="text-white text-sm">
                Xin chào! Chúng tôi có thể giúp gì cho bạn?
              </p>
              <p className="text-white/50 text-xs mt-1">10:30 AM</p>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-accent-blue/20">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Nhập tin nhắn..."
                className="flex-1 bg-primary-darker border border-accent-blue/30 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-accent-gold"
              />
              <button className="px-4 py-2 bg-gradient-gold text-primary-dark font-semibold rounded-lg hover:glow-gold transition-all">
                Gửi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-blue rounded-full flex items-center justify-center shadow-lg hover:glow-blue transition-all duration-300 transform hover:scale-110 z-50 animate-pulse"
      >
        <span className="text-white text-2xl">💬</span>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent-red rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </button>
    </>
  );
};

export default LiveChat;
