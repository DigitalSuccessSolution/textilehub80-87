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
    <section className="bg-muted/30 py-14 border-b border-border overflow-hidden">
      <div className="container-custom space-y-8">
        
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center">
            <span className="w-10 h-0.5 bg-accent"></span>
            <span className="text-[10px] font-bold text-accent  tracking-widest">Our Partners</span>
            <span className="w-10 h-0.5 bg-accent"></span>
          </div>
          <p className="text-sm text-muted-foreground font-light mt-2">Trusted by leading textile brands across India</p>
        </div>
        
        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex gap-6 shrink-0 items-center min-w-full animate-scroll">
            {[...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center shrink-0 w-40 px-5 py-5 bg-card border border-border rounded-2xl hover:border-accent/40 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm group"
              >
                <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center mb-2 group-hover:bg-accent/10 transition-colors">
                  <span className="text-primary font-heading font-bold text-xs">{brand.name[0]}</span>
                </div>
                <span className="text-xs font-heading font-extrabold tracking-wider text-primary  block text-center">
                  {brand.name}
                </span>
                <span className="text-[8px] text-muted-foreground  font-semibold mt-1 tracking-wider text-center">
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
