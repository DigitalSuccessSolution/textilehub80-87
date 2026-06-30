import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-primary text-white p-3.5 rounded-full shadow-xl hover:bg-primary/90 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Live Chat"
      >
        <MessageSquare size={24} />
      </button>

      {isOpen && (
        <div className="fixed bottom-36 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-border animate-in slide-in-from-bottom-5">
          <div className="bg-primary text-white p-4 flex justify-between items-center">
            <h3 className="font-bold text-sm">Live Chat</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="h-64 bg-slate-50 p-4 flex flex-col gap-3 overflow-y-auto text-sm">
            <div className="bg-white p-3 rounded-lg rounded-tl-none border border-border shadow-sm max-w-[85%] self-start">
              <p className="text-gray-700">Hello! How can we help you today?</p>
            </div>
            {/* Chat content would go here */}
          </div>
          <div className="p-3 bg-white border-t border-border flex gap-2">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-grow bg-slate-100 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-white px-3 py-2 rounded text-sm font-bold">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
