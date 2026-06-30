import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const list = [
    { name: 'Sarees', img: 'https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg' },
    { name: 'Leggings', img: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=200&auto=format&fit=crop' },
    { name: 'Kurtis', img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=200&auto=format&fit=crop' },
    { name: 'Dress Suits', img: 'https://images.unsplash.com/photo-1583391733959-b15124188f54?q=80&w=200&auto=format&fit=crop' },
    { name: 'Bedsheets & Linen', img: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=200&auto=format&fit=crop' },
    { name: 'Hosiery Items', img: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=200&auto=format&fit=crop' },
    { name: 'Suiting', img: 'https://images.unsplash.com/photo-1594938298596-39fd3c907106?q=80&w=200&auto=format&fit=crop' },
    { name: 'Shirting', img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=200&auto=format&fit=crop' },
    { name: 'Formal & Ethnic Wear for Women', img: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=200&auto=format&fit=crop' },
    { name: 'Formal & Ethnic Wear for Men', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=200&auto=format&fit=crop' },
    { name: 'Formal & Ethnic Wear for Children', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=200&auto=format&fit=crop' },
    { name: 'Home Upholstery & Furnishing', img: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=200&auto=format&fit=crop' }
  ];

  return (
    <section className="bg-white py-16 border-b border-slate-100 font-light text-slate-600">
      <div className="container-custom space-y-10">

        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center w-full">
            <span className="w-10 h-0.5 bg-[#0C6C3E]"></span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary capitalize tracking-wider">Our Product Categories</h3>
            <span className="w-10 h-0.5 bg-[#0C6C3E]"></span>
          </div>
        </div>

        {/* Grid Layout matching reference layout image */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {list.map((item, idx) => (
            <Link
              key={idx}
              to={`/products?cat=${encodeURIComponent(item.name)}`}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 hover:border-accent hover:shadow-lg transition-all duration-300 group bg-white"
            >
              {/* Product Thumbnail inside Card */}
              <div className="w-24 h-24 rounded-lg overflow-hidden border border-slate-100 shadow-inner bg-slate-50 relative shrink-0">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title label */}
              <span className="text-sm font-bold text-slate-700 group-hover:text-accent transition-colors leading-tight whitespace-normal h-10 flex items-center justify-center mt-3 text-center capitalize tracking-wide">
                {item.name}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;
