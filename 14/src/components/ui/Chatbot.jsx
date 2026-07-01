import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! Welcome to WeavesMart support. How can we assist your B2B textile business today?' }
  ]);
  const [input, setInput] = useState('');

  const faqs = [
    { q: 'How to place a B2B order?', a: 'Please navigate to our e-quotation page to select categories and submit quantities for review.' },
    { q: 'What are the delivery terms?', a: 'We work with leading logistics associates to ship bulk textile materials nationwide within 10-15 business days.' },
    { q: 'Where are you located?', a: 'Our headquarters and showroom are located in Surat, Gujarat. You can view our coordinates on our Contact Us page.' }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot reply
    setTimeout(() => {
      let reply = "Thank you. Our B2B communications coordinator will review your message and reply via email within 2 hours.";
      const lowerInput = input.toLowerCase();
      const matchedFaq = faqs.find(f => lowerInput.includes(f.q.toLowerCase().replace('?', '')));
      
      if (matchedFaq) reply = matchedFaq.a;

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: reply }]);
    }, 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[9999] w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-accent hover:scale-105 transition-all duration-300 group border border-white/10"
        aria-label="Open Live Chat"
      >
        <MessageSquare className="w-5 h-5 text-accent" />
        <span className="absolute left-full ml-3 bg-white text-primary text-xs font-semibold capitalize tracking-wider px-3 py-2 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border">
          B2B Support Chat
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-20 left-6 z-[9999] w-[330px] h-[460px] bg-white border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span className="text-xs font-heading font-bold capitalize tracking-wider text-white">Live Support Desk</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-lg text-xs leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-white border border-border text-slate-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Suggested Questions */}
            <div className="p-3 bg-white border-t border-border space-y-1.5 max-h-28 overflow-y-auto">
              <p className="text-xs font-bold text-slate-400 capitalize tracking-wide">Common Inquiries:</p>
              {faqs.map((faq, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setInput(faq.q)}
                  className="block w-full text-left text-sm bg-slate-50 hover:bg-accent/10 hover:text-accent transition-colors px-2.5 py-1.5 rounded-md border border-slate-100 text-slate-600 font-medium"
                >
                  {faq.q}
                </button>
              ))}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-border flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Write a message..."
                className="flex-1 text-xs bg-slate-50 border border-border rounded-md px-3.5 py-2.5 focus:outline-none focus:border-accent text-slate-800"
              />
              <button type="submit" className="w-9 h-9 shrink-0 bg-primary text-white rounded-md flex items-center justify-center hover:bg-accent transition-colors border border-primary/10">
                <Send className="w-3.5 h-3.5 text-accent" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
