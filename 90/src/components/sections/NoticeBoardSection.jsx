import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Calendar } from 'lucide-react';

const NoticeBoardSection = () => {
    const navigate = useNavigate();

    const notices = [
        { title: "B2B Registration deadline extended for Summer Trade Expo", date: "June 09, 2026", type: "Urgent" },
        { title: "Store Closure Announcement on National Holiday (June 15)", date: "June 05, 2026", type: "Update" }
    ];

    return (
        <section className="py-12 px-6 sm:px-10 bg-[#FCFBF7]">
            <div className="max-w-[1600px] mx-auto grid md:grid-cols-3 gap-16">
                
                {/* Info Column */}
                <div className="text-left md:col-span-1">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-4 block">
                        Press & Bulletins
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#121212] tracking-tight uppercase leading-none mb-6">
                        Notice <br />
                        <span className="font-light text-[#C5A880] italic">Board</span>
                    </h2>
                    <div className="w-16 h-[1px] bg-[#C5A880] mb-6"></div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-8 font-sans">
                        Stay informed about local store events, supply scheduling alerts, and retail mall rules.
                    </p>
                    <button 
                        onClick={() => navigate('/notice-board')}
                        className="text-[10px] font-sans font-bold uppercase tracking-[0.25em] text-[#C5A880] hover:text-[#121212] transition-colors border-b border-[#C5A880]/30 pb-1"
                    >
                        Go to Notice Board
                    </button>
                </div>

                {/* Notices Column */}
                <div className="md:col-span-2 flex flex-col gap-6 text-left">
                    {notices.map((n, idx) => (
                        <div 
                            key={idx}
                            onClick={() => navigate('/notice-board')}
                            className="p-6 bg-white border border-black/5 hover:border-[#C5A880]/30 transition-all rounded-xl flex items-start gap-4 cursor-pointer group shadow-sm hover:shadow-md"
                        >
                            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-[#C5A880]/20 flex items-center justify-center text-[#C5A880] shrink-0">
                                <AlertCircle size={18} />
                            </div>
                            <div className="space-y-1">
                                <span className={`text-[8px] uppercase tracking-widest font-black px-2 py-0.5 border rounded-full inline-block mb-1 ${
                                    n.type === 'Urgent' ? 'border-red-950/20 bg-red-50 text-red-600' : 'border-[#C5A880]/30 bg-amber-50 text-[#AE8F46]'
                                }`}>
                                    {n.type}
                                </span>
                                <h3 className="text-sm font-sans font-bold text-[#121212] uppercase tracking-wider group-hover:text-[#C5A880] transition-colors">
                                    {n.title}
                                </h3>
                                <div className="flex items-center gap-1 text-[9px] text-gray-500 font-sans">
                                    <Calendar size={10} />
                                    <span>{n.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default NoticeBoardSection;
