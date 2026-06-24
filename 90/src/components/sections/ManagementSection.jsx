import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManagementSection = () => {
    const navigate = useNavigate();

    const members = [
        { name: "Devendra Parekh", role: "Managing Director", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80" },
        { name: "Rajesh Parekh", role: "Director of Operations", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" }
    ];

    return (
        <section className="py-12 px-6 sm:px-10 bg-[#FCFBF7]">
            <div className="max-w-[1600px] mx-auto text-center">
                
                {/* Header */}
                <div className="mb-16">
                    <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#C5A880] mb-3 block">
                        Our Board
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#121212] tracking-tight uppercase leading-none mb-4">
                        Retail <span className="font-light text-[#C5A880] italic">Management</span>
                    </h2>
                    <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
                </div>

                {/* Grid */}
                <div className="flex flex-col sm:flex-row justify-center gap-12 max-w-4xl mx-auto mb-12">
                    {members.map((m, idx) => (
                        <div 
                            key={idx}
                            className="bg-[#161616] p-8 border border-white/5 rounded-xl flex-1 text-center"
                        >
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border border-[#C5A880]/30 p-1 bg-neutral-900">
                                <img
                                    src={m.img}
                                    alt={m.name}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider mb-1">
                                {m.name}
                            </h3>
                            <p className="text-[#C5A880] text-[9px] uppercase tracking-widest font-black">
                                {m.role}
                            </p>
                        </div>
                    ))}
                </div>

                <button 
                    onClick={() => navigate('/management')}
                    className="px-8 py-3 bg-[#121212] hover:bg-[#C5A880] text-[#C5A880] hover:text-[#121212] text-[9px] uppercase tracking-widest font-black transition-colors rounded-xl border border-[#C5A880]/20"
                >
                    Meet Executive Committee
                </button>

            </div>
        </section>
    );
};

export default ManagementSection;
