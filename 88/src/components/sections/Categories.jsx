import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const curatedItems = [
    {
        name: 'Kurtis Collection',
        desc: 'Everyday grace, fresh styles, modern ethnic prints.',
        img: 'https://images.pexels.com/photos/34155079/pexels-photo-34155079.jpeg',
        tag: 'Bestseller',
    },
    {
        name: 'Heritage Sarees',
        desc: 'Grace in every drape — pure silk, handloom heritage.',
        img: 'https://images.pexels.com/photos/37054322/pexels-photo-37054322.jpeg',
        tag: 'Heritage',
    },
    {
        name: 'Linen & Cottons',
        desc: 'Breathe natural, feel comfortable, premium Giza weave.',
        img: 'https://images.pexels.com/photos/3847588/pexels-photo-3847588.jpeg',
        tag: 'Natural',
    },
    {
        name: 'Home Furnishing',
        desc: 'Comfort woven beautifully for elegant living spaces.',
        img: 'https://images.pexels.com/photos/8135277/pexels-photo-8135277.jpeg',
        tag: 'Interior',
    },
    {
        name: 'New Curations',
        desc: 'Seasonal drops and limited design editions.',
        img: 'https://images.pexels.com/photos/10952730/pexels-photo-10952730.jpeg',
        tag: 'New',
    },
    {
        name: 'Bridal Wear',
        desc: 'Luxurious fabrics for your most cherished occasions.',
        img: 'https://images.pexels.com/photos/34688015/pexels-photo-34688015.jpeg',
        tag: 'Premium',
    },
];

const Categories = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const [hovered, setHovered] = useState(null);

    const scroll = (dir) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles size={12} className="text-[#C29E6B]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Curated For You</span>
                            <Sparkles size={12} className="text-[#C29E6B]" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-serif text-[#2E081B] tracking-tight">
                            Boutique<br />
                            <span className="text-[#9C4B6E] font-light italic">Departments</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <button onClick={() => scroll(-1)} className="w-10 h-10 rounded-full border border-[#2E081B]/15 flex items-center justify-center hover:bg-[#2E081B] hover:text-white hover:border-[#2E081B] transition-all cursor-pointer group">
                            <ChevronLeft size={16} />
                        </button>
                        <button onClick={() => scroll(1)} className="w-10 h-10 rounded-full border border-[#2E081B]/15 flex items-center justify-center hover:bg-[#2E081B] hover:text-white hover:border-[#2E081B] transition-all cursor-pointer group">
                            <ChevronRight size={16} />
                        </button>
                        <button
                            onClick={() => navigate('/products')}
                            className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C29E6B] hover:text-[#2E081B] transition-colors border-b border-[#C29E6B]/30 hover:border-[#2E081B] pb-0.5 cursor-pointer ml-2"
                        >
                            View All <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

            </div>

            {/* Scrollable Row */}
            <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto no-scrollbar px-6 sm:px-12 lg:px-16 pb-4"
                style={{ scrollSnapType: 'x mandatory' }}
            >
                {curatedItems.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => navigate('/products')}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        className="group relative flex-shrink-0 w-[260px] sm:w-[300px] rounded-[2rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#2E081B]/8"
                        style={{ scrollSnapAlign: 'start', height: '380px' }}
                    >
                        {/* Image */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2E081B]/80 via-[#2E081B]/10 to-transparent" />

                        {/* Tag badge */}
                        <div className="absolute top-4 left-4 bg-[#C29E6B] text-white text-[7px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full">
                            {item.tag}
                        </div>

                        {/* Bottom content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-sm font-serif font-bold text-white uppercase tracking-wider mb-1.5">
                                {item.name}
                            </h3>
                            <p className="text-[10px] text-stone-300 font-sans leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {item.desc}
                            </p>
                            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#C29E6B]">
                                Explore <ArrowRight size={10} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
