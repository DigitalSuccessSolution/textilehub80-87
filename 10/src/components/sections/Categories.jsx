import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const list = [
    { name: 'Sarees', img: 'https://images.pexels.com/photos/35399673/pexels-photo-35399673.jpeg' },
    { name: 'Leggings', img: 'https://media.istockphoto.com/id/1980806050/photo/full-body-attractive-girl-engage-in-her-pursuit-of-healthy-lifestyle-vigorous.jpg?b=1&s=612x612&w=0&k=20&c=1BXZoiBHgh0EuRe7ywn7sfS4Pt1NNU6V9AQ6IBLzWI0=' },
    { name: 'Kurtis', img: 'https://images.pexels.com/photos/20702673/pexels-photo-20702673.jpeg' },
    { name: 'Dress Suits', img: 'https://images.pexels.com/photos/11840170/pexels-photo-11840170.jpeg' },
    { name: 'Bedsheets & Linen', img: 'https://media.istockphoto.com/id/2098454101/photo/luxury-beautiful-color-bedroom-with-comfort-pillow-cover-bedding-at-hotel-residence-house.jpg?b=1&s=612x612&w=0&k=20&c=w1QcGSJSLcG6VDfVMbvPfXSrz3eGuLFsJKWGcmlLLGI=' },
    { name: 'Hosiery Items', img: 'https://images.pexels.com/photos/11212879/pexels-photo-11212879.jpeg' },
    { name: 'Suiting', img: 'https://images.pexels.com/photos/31094610/pexels-photo-31094610.jpeg' },
    { name: 'Shirting', img: 'https://images.pexels.com/photos/9594940/pexels-photo-9594940.jpeg' },
    { name: 'Formal & Ethnic Wear for Women', img: 'https://plus.unsplash.com/premium_photo-1764107149656-385dad23031d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvcm1hbCUyMCUyNiUyMGV0aG5pYyUyMHdlYXIlMjBmb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Formal & Ethnic Wear for Men', img: 'https://images.pexels.com/photos/37045884/pexels-photo-37045884.jpeg' },
    { name: 'Formal & Ethnic Wear for Children', img: 'https://media.istockphoto.com/id/667900166/photo/smiling-portrait-of-an-indian-boy.jpg?b=1&s=612x612&w=0&k=20&c=SZBNrCgPpqvCosFQhkHXAFfXT4CA0x_6ZXXtuhws2OQ=' },
    { name: 'Home Upholstery & Furnishing', img: 'https://images.pexels.com/photos/18408858/pexels-photo-18408858.jpeg' }
  ];


  return (
    <section className="bg-white py-16 border-b border-slate-100 font-light text-slate-600">
      <div className="container-custom space-y-10">

        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 justify-center w-full">
            <span className="w-10 h-0.5 bg-[#0C6C3E]"></span>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary uppercase tracking-wider">Our Product Categories</h3>
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
              <span className="text-[11px] font-bold text-slate-700 group-hover:text-accent transition-colors leading-tight whitespace-normal h-10 flex items-center justify-center mt-3 text-center uppercase tracking-wide">
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
