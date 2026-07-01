import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: "Hello! Welcome to Kaaya Fabrics. How can we help you explore our collections today?",
            time: '12:00'
        }
    ]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const simulatedReply = (userText) => {
        const text = userText.toLowerCase();
        let reply = { id: Date.now() + 1, sender: 'bot', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };

        if (text.includes('hello') || text.includes('hi')) {
            reply.text = "Hello! How can I assist you with our premium garments and fabrics today?";
        } else if (text.includes('saree') || text.includes('ethnic') || text.includes('kurti')) {
            reply.text = "We have a gorgeous collection of wedding sarees, designer kurtis, and ethnic dress suits. You can view them on our Products page or visit our store in Kolkata.";
        } else if (text.includes('bedsheet') || text.includes('linen') || text.includes('upholstery')) {
            reply.text = "Our home furnishing section features 1000-thread count bedsheets, luxury curtains, and fine upholstery. Let us know if you need custom sizes!";
        } else if (text.includes('bulk') || text.includes('enquiry') || text.includes('quotation')) {
            reply.text = "For bulk retail orders or corporate deals, please fill out the Trade Enquiry or e-Quotation form on our portal. Our management team will review and reply within 24 hours.";
        } else {
            reply.text = "Thank you for reaching out. A representative from our Retail Management team will get back to you shortly. You can also email us at customer-care@retailtextile.com.";
        }

        setTimeout(() => {
            setMessages(prev => [...prev, reply]);
        }, 800);
    };

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = {
            id: Date.now(),
            sender: 'user',
            text: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        simulatedReply(input);
    };

    const handleQuickReply = (text) => {
        const userMsg = {
            id: Date.now(),
            sender: 'user',
            text: text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, userMsg]);
        simulatedReply(text);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] font-sans">
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-[#121212] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#121212] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border border-[#C5A880]/30 hover:scale-105 active:scale-95"
                >
                    <MessageSquare size={26} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-[#161616] border border-white/5 shadow-2xl w-80 sm:w-96 h-[480px] rounded-2xl overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-[#0c0c0c] p-4 text-white flex justify-between items-center border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-[#C5A880]/30 flex items-center justify-center">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
                            </div>
                            <div>
                                <h3 className="font-bold text-xs uppercase tracking-widest text-[#C5A880]">Retail Assistant</h3>
                                <span className="text-[8px] text-gray-500 uppercase tracking-wider block">Online & Ready</span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-[#121212]">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[75%] p-3 text-xs leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-[#C5A880] text-[#121212] rounded-2xl rounded-tr-none'
                                        : 'bg-[#1a1a1a] text-gray-300 border border-white/5 rounded-2xl rounded-tl-none'
                                        }`}
                                >
                                    <p>{msg.text}</p>
                                    <span className="block text-[8px] opacity-60 text-right mt-1">{msg.time}</span>
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Quick Suggestions */}
                    <div className="px-4 py-2 bg-[#0c0c0c] border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => handleQuickReply("Bulk Saree Order")}
                            className="shrink-0 px-3 py-1 text-[8px] uppercase font-bold tracking-wider border border-[#C5A880]/30 text-[#C5A880] rounded-full hover:bg-[#C5A880] hover:text-[#121212] transition-colors"
                        >
                            Bulk Sarees
                        </button>
                        <button
                            onClick={() => handleQuickReply("Store Timings")}
                            className="shrink-0 px-3 py-1 text-[8px] uppercase font-bold tracking-wider border border-[#C5A880]/30 text-[#C5A880] rounded-full hover:bg-[#C5A880] hover:text-[#121212] transition-colors"
                        >
                            Mall Hours
                        </button>
                        <button
                            onClick={() => handleQuickReply("Linen Collections")}
                            className="shrink-0 px-3 py-1 text-[8px] uppercase font-bold tracking-wider border border-[#C5A880]/30 text-[#C5A880] rounded-full hover:bg-[#C5A880] hover:text-[#121212] transition-colors"
                        >
                            Linen & Bedsheets
                        </button>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-[#0c0c0c] border-t border-white/5 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask a question..."
                            className="flex-1 bg-[#121212] border border-white/5 rounded-2xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A880] transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-8 h-8 bg-[#C5A880] text-[#121212] rounded-2xl flex items-center justify-center hover:bg-white transition-colors shrink-0"
                        >
                            <Send size={14} />
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LiveChat;
