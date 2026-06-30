import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

const LiveChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'bot',
            text: "Hello! Welcome to Aurora Textile House. How can I assist you with our premium garments and fabrics today?",
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
            reply.text = "Greetings! How can I help you navigate our collections, B2B trade enquiries, or circulars today?";
        } else if (text.includes('saree') || text.includes('ethnic') || text.includes('kurti')) {
            reply.text = "We offer premium handloom silk sarees, designer ethnic wear, and velvet sherwanis. Head over to our Products page to browse our catalog!";
        } else if (text.includes('bedsheet') || text.includes('linen') || text.includes('upholstery')) {
            reply.text = "Explore hotel-quality bedsheets, custom curtains, and fine upholstery fabrics in our catalog. Custom dimensions can be ordered.";
        } else if (text.includes('bulk') || text.includes('enquiry') || text.includes('quotation')) {
            reply.text = "To place commercial retail orders or request trade quotations, please use the Trade Enquiry or e-quotation links in the navigation.";
        } else {
            reply.text = "Thank you. A member of our Retail Management team will get back to you shortly. You may also contact us at enquiry@auroratextile.com.";
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
        <div className="fixed bottom-6 right-6 z-[100] font-sans">
            {/* Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-14 h-14 bg-[#2C443E] hover:bg-[#1B2E2A] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 border border-[#C29E6B]/30 hover:scale-105 active:scale-95 cursor-pointer"
                >
                    <MessageSquare size={26} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-[#10211F] border border-white/10 shadow-2xl w-80 sm:w-96 h-[480px] rounded-3xl overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="bg-[#081E27] p-4 text-white flex justify-between items-center border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-neutral-900 border border-[#C29E6B]/30 flex items-center justify-center">
                                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold text-xs  tracking-widest text-[#C29E6B]">House Assistant</h3>
                                <span className="text-[8px] text-gray-400  tracking-wider block">Online & Ready</span>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Body */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-[#10211F]">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div
                                    className={`max-w-[75%] p-3 text-xs leading-relaxed text-left ${msg.sender === 'user'
                                        ? 'bg-[#C29E6B] text-[#10211F] rounded-2xl rounded-tr-none font-bold'
                                        : 'bg-[#0A1514]/80 text-gray-200 border border-white/5 rounded-2xl rounded-tl-none font-light'
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
                    <div className="px-4 py-2 bg-[#081E27] border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => handleQuickReply("Premium Silk Sarees")}
                            className="shrink-0 px-3 py-1 text-[8px] font-bold tracking-wider border border-[#C29E6B]/30 text-[#C29E6B] rounded-full hover:bg-[#C29E6B] hover:text-[#10211F] transition-colors cursor-pointer"
                        >
                            LUXURY SAREES
                        </button>
                        <button
                            onClick={() => handleQuickReply("Trade Quotation Enquiry")}
                            className="shrink-0 px-3 py-1 text-[8px] font-bold tracking-wider border border-[#C29E6B]/30 text-[#C29E6B] rounded-full hover:bg-[#C29E6B] hover:text-[#10211F] transition-colors cursor-pointer"
                        >
                            e-quotation
                        </button>
                        <button
                            onClick={() => handleQuickReply("Upholstery Fabrics")}
                            className="shrink-0 px-3 py-1 text-[8px] font-bold tracking-wider border border-[#C29E6B]/30 text-[#C29E6B] rounded-full hover:bg-[#C29E6B] hover:text-[#10211F] transition-colors cursor-pointer"
                        >
                            HOME DECOR
                        </button>
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-[#081E27] border-t border-white/5 flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type your query..."
                            className="flex-1 bg-[#10211F] border border-white/5 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-[#C29E6B] transition-colors"
                        />
                        <button
                            type="submit"
                            className="w-8 h-8 bg-[#C29E6B] text-[#10211F] rounded-full flex items-center justify-center hover:bg-white transition-colors shrink-0 cursor-pointer"
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
