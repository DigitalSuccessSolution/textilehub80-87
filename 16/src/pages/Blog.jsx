import React from 'react';
import { Calendar, User, ArrowRight, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "The Resurgence of Handloom: Why Traditional Weaves are Making a Comeback",
      excerpt: "Explore how modern designers are incorporating ancient weaving techniques into contemporary fashion, and why retailers should stock up on authentic handlooms.",
      category: "Industry Trends",
      date: "Oct 12, 2023",
      author: "Priya Sharma",
      img: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Understanding Fabric GSM: A Retailer's Guide to Sourcing Quality",
      excerpt: "A comprehensive breakdown of Grams per Square Meter, how it affects drape and durability, and what numbers to look for.",
      category: "Textile Education",
      date: "Sep 28, 2023",
      author: "Vikram Mehta",
      img: "https://images.unsplash.com/photo-1583391733958-6115f1108609?q=80&w=600&auto=format&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Sustainable Dyeing: The Future of Eco-Friendly Manufacturing",
      excerpt: "How natural dyes and zero-water discharge facilities are changing the environmental footprint of the textile industry.",
      category: "Sustainability",
      date: "Sep 15, 2023",
      author: "Anita Desai",
      img: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=600&auto=format&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Festive Season Prep: Top 5 Collections to Stock Right Now",
      excerpt: "Data-backed insights into consumer preferences for the upcoming festive season. Don't miss out on these high-margin categories.",
      category: "Retail Strategy",
      date: "Aug 30, 2023",
      author: "Rahul Verma",
      img: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=600&auto=format&fit=crop",
      featured: false
    }
  ];

  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80 z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Aurora Textile Blog</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Insights, trends, and stories from the textile industry.
          </p>
        </div>
      </div>
      
      <div className="container-custom pb-20">

        {/* Featured Post */}
        {featuredPost && (
          <Link to="/blog-post" className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                <img src={featuredPost.img} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur text-primary text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  <span className="text-accent">{featuredPost.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featuredPost.date}</span>
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-primary">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-primary">{featuredPost.author}</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-1 group-hover:translate-x-2 transition-transform">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link to="/blog-post" key={post.id} className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border flex flex-col hover:border-accent/20">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <button className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-muted-foreground hover:text-accent transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  <span className="text-accent">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-xs font-light text-muted-foreground line-clamp-3 mb-6">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
                  <span className="text-[10px] font-bold text-primary">{post.author}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-transparent border border-primary text-primary px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm">
            Load More Articles
          </button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
