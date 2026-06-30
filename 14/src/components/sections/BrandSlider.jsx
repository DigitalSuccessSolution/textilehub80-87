import React from 'react';

const BrandSlider = () => {
  const brands = [
    { name: 'Raymond', type: 'Premium Suiting' },
    { name: 'Arvind', type: 'Shirting & Denim' },
    { name: 'Doneear', type: 'Textiles & Fabrics' },
    { name: 'Vimal', type: 'Suiting Classics' },
    { name: 'Siyaram\'s', type: 'Blend Weavers' },
    { name: 'Grado', type: 'Luxury Suiting' },
    { name: 'OCM', type: 'Pure Woollens' },
    { name: 'Park Avenue', type: 'Formal Apparel' }
  ];

  return (
    <section className="bg-white py-12 border-b border-slate-100 overflow-hidden font-light text-slate-600">
      <div className="container-custom space-y-6">
        
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center w-full">
            <span className="w-10 h-0.5 bg-[#0C6C3E]"></span>
            <h3 className="text-sm font-heading font-bold text-primary capitalize tracking-wider">Our Brands & Partners</h3>
            <span className="w-10 h-0.5 bg-[#0C6C3E]"></span>
          </div>
        </div>
        
        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden flex pt-4">
          <div className="flex gap-12 shrink-0 items-center justify-around min-w-full animate-scroll">
            {/* Double the list to create infinite loop */}
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center shrink-0 w-40 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-accent transition-all duration-300 shadow-xs"
              >
                <span className="text-xs font-heading font-extrabold tracking-wider text-slate-800 capitalize block">
                  {brand.name}
                </span>
                <span className="text-xs text-slate-400 capitalize font-semibold mt-1 tracking-wider">
                  {brand.type}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandSlider;
