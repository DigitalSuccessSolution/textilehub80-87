import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Sarees', img: 'https://images.pexels.com/photos/36251517/pexels-photo-36251517.jpeg', color: 'bg-rose-50 border-rose-200' },
  { name: 'Leggings', img: 'https://images.pexels.com/photos/8462953/pexels-photo-8462953.jpeg', color: 'bg-sky-50 border-sky-200' },
  { name: 'Kurtis', img: 'https://images.pexels.com/photos/20407242/pexels-photo-20407242.jpeg', color: 'bg-amber-50 border-amber-200' },
  { name: 'Dress Suits', img: 'https://images.pexels.com/photos/9113367/pexels-photo-9113367.jpeg', color: 'bg-purple-50 border-purple-200' },
  { name: 'Bedsheets & Linen', img: 'https://images.pexels.com/photos/15195270/pexels-photo-15195270.jpeg', color: 'bg-teal-50 border-teal-200' },
  { name: 'Hosiery Items', img: 'https://images.pexels.com/photos/14844499/pexels-photo-14844499.jpeg', color: 'bg-orange-50 border-orange-200' },
  { name: 'Suiting', img: 'https://images.pexels.com/photos/10547282/pexels-photo-10547282.jpeg', color: 'bg-slate-50 border-slate-200' },
  { name: 'Shirting', img: 'https://images.pexels.com/photos/8487180/pexels-photo-8487180.jpeg', color: 'bg-blue-50 border-blue-200' },
  { name: 'Formal & Ethnic Wear for Women', img: 'https://images.pexels.com/photos/8453458/pexels-photo-8453458.jpeg', color: 'bg-pink-50 border-pink-200' },
  { name: 'Formal & Ethnic Wear for Men', img: 'https://images.pexels.com/photos/28758845/pexels-photo-28758845.jpeg', color: 'bg-green-50 border-green-200' },
  { name: 'Formal & Ethnic Wear for Children', img: 'https://images.pexels.com/photos/34976595/pexels-photo-34976595.jpeg', color: 'bg-yellow-50 border-yellow-200' },
  { name: 'Home Upholstery & Furnishing', img: 'https://images.pexels.com/photos/6987726/pexels-photo-6987726.jpeg', color: 'bg-lime-50 border-lime-200' }
];

const Categories = () => {
  return (
    <section className="bg-muted/40 py-16 border-b border-border">
      <div className="container-custom space-y-12">

        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-3 justify-center">
            <span className="w-10 h-0.5 bg-accent"></span>
            <span className="text-[10px] font-bold text-accent  tracking-widest">Our Collections</span>
            <span className="w-10 h-0.5 bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Shop By Category</h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto font-light">
            Explore our curated textile & garment collections – quality for every need
          </p>
        </div>

        {/* 12-Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categories.map((item, idx) => (
            <Link
              key={idx}
              to={`/products?cat=${encodeURIComponent(item.name)}`}
              className="flex flex-col items-center text-center group"
            >
              {/* Circular image with colored border ring */}
              <div className={`w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md group-hover:shadow-xl group-hover:shadow-accent/25 relative shrink-0 transition-all duration-500 border-4 ${item.color} group-hover:border-accent/40`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold  tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">View All</span>
                </div>
              </div>

              {/* Title */}
              <span className="text-[11px] md:text-xs font-bold text-foreground group-hover:text-accent transition-colors leading-tight mt-4  tracking-wide px-1 text-center">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center">
          <Link
            to="/products"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-10 rounded-full text-xs  tracking-widest transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            Browse All Products
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Categories;
