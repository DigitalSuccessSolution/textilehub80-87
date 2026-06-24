import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Resurgence of Pure Silk in Modern B2B Retail',
    excerpt: 'An inside look at how our Royal Silk Collection is driving premium sales for 1.2K+ retail partners this festive season.',
    category: 'Industry Trends',
    date: 'Oct 20, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1584346808092-23315c138a06?q=80&w=1200&auto=format&fit=crop'
  };

  const posts = [
    {
      id: 2,
      title: 'Optimizing Inventory with the e-Auction Portal',
      category: 'Platform Guides',
      date: 'Oct 15, 2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Sustainably Sourced Egyptian Cottons',
      category: 'Supply Chain',
      date: 'Sep 28, 2023',
      image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Navigating New Textile Taxation Laws',
      category: 'Compliance',
      date: 'Sep 10, 2023',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 5,
      title: 'A Spotlight on Banarasi Brocade Artisans',
      category: 'Heritage',
      date: 'Aug 22, 2023',
      image: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      
      {/* Editorial Header */}
      <section className="py-20 border-b border-slate-200 text-center">
        <div className="container-custom max-w-4xl">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Editorial</span>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-primary mb-6">The Journal.</h1>
          <p className="text-slate-500 font-light text-xl italic font-heading">
            Insights, trends, and stories from the heart of India's textile industry.
          </p>
        </div>
      </section>

      {/* Featured Post (Magazine Layout) */}
      <section className="container-custom py-16">
        <Link to={`/blog/${featuredPost.id}`} className="group block relative h-[70vh] min-h-[500px] overflow-hidden">
          <img 
            src={featuredPost.image} 
            alt={featuredPost.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 flex flex-col justify-end">
            <div className="max-w-3xl">
              <span className="bg-accent text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 inline-block">
                {featuredPost.category}
              </span>
              <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 leading-tight group-hover:text-amber-200 transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-slate-300 font-light text-lg md:text-xl mb-6 line-clamp-2">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                <span>{featuredPost.date}</span>
                <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Grid of Articles */}
      <section className="container-custom pb-24">
        <div className="flex justify-between items-end border-b border-slate-200 pb-4 mb-12">
          <h3 className="font-heading text-3xl font-bold text-primary">Latest Dispatches</h3>
          <button className="text-xs font-bold uppercase tracking-widest text-accent hover:text-primary transition-colors flex items-center gap-1">
            View All <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col md:flex-row gap-6 items-center border-b border-slate-100 pb-8 hover:bg-slate-50 transition-colors p-4 -mx-4 rounded-xl">
              <div className="w-full md:w-48 h-64 md:h-48 shrink-0 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
              </div>
              <div className="flex-1 space-y-4">
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest block">
                  {post.category}
                </span>
                <h4 className="font-heading text-2xl font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blog;
