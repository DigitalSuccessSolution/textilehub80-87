import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, Share2, Bookmark, Clock, Link as LinkIcon, Mail, MessageCircle } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  // Mock post data based on ID
  const post = {
    title: 'The Resurgence of Pure Silk in Modern B2B Retail',
    category: 'Industry Trends',
    date: 'Oct 20, 2023',
    readTime: '8 min read',
    author: 'Aarav Patel',
    authorRole: 'Head of Textile Sourcing',
    heroImage: 'https://images.pexels.com/photos/34692229/pexels-photo-34692229.jpeg',
    content: `
      <p class="lead">In an era dominated by synthetic blends and fast fashion, a quiet revolution is taking place at the highest echelons of textile retail. Pure silk, once relegated strictly to bridal wear and occasional ethnic attire, is experiencing a massive resurgence in everyday luxury collections.</p>
      
      <h2>The Shift in Consumer Preferences</h2>
      <p>Modern consumers are becoming increasingly aware of the materials they wear. Sustainability, longevity, and natural fibers are no longer buzzwords—they are purchasing criteria. Our data across 1,200+ retail partners indicates a 40% year-over-year increase in demand for pure silk fabrics, particularly our Royal Silk Collection.</p>
      
      <blockquote>
        "We are seeing a definitive pivot. Retailers aren't just buying silk for wedding season anymore; they are stocking it year-round for resort wear, luxury loungewear, and premium corporate gifting."
      </blockquote>
      
      <h2>What This Means for B2B Sourcing</h2>
      <p>For boutique owners and large retail chains alike, this trend dictates a shift in inventory strategy. Relying solely on synthetic georgettes or cheap polyester blends is a race to the bottom. To maintain healthy margins and brand prestige, integrating high-quality, authentic silk is imperative.</p>
      
      <p>At WeavesMart, our Varanasi looms have been operating at peak capacity, utilizing traditional techniques fused with modern quality control to ensure every meter meets international luxury standards.</p>
      
      <h3>Preparing Your Inventory</h3>
      <ul>
        <li><strong>Analyze your demographic:</strong> Are your customers asking for breathable, natural fabrics?</li>
        <li><strong>Start small:</strong> Introduce a capsule collection of pure silk kurtis or scarves before committing to heavy sarees.</li>
        <li><strong>Educate your staff:</strong> Ensure your floor staff can explain the difference between Katan silk and synthetic look-alikes.</li>
      </ul>
      
      <p>The resurgence of pure silk isn't just a fleeting trend; it's a return to the foundational roots of Indian textiles, elevated for the modern global market.</p>
    `
  };

  return (
    <div className="bg-background min-h-screen">

      {/* Editorial Navigation */}
      <div className="sticky top-[60px] md:top-[70px] z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="container-custom flex justify-between items-center">
          <RouterLink to="/blog" className="flex items-center gap-2 text-xs font-bold tracking-wider text-slate-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </RouterLink>
          <div className="flex gap-4">
            <button className="text-slate-400 hover:text-accent transition-colors"><Bookmark className="w-4 h-4" /></button>
            <button className="text-slate-400 hover:text-accent transition-colors"><Share2 className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="pb-24">
        <header className="container-custom max-w-4xl pt-16 pb-12 text-center">
          <span className="text-accent text-[10px] font-bold tracking-[0.2em] mb-6 block">
            {post.category}
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-xs font-bold tracking-wider text-slate-400">
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full h-[60vh] max-h-[600px] mb-16">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="container-custom max-w-3xl flex flex-col md:flex-row gap-12">

          {/* Social Share Sidebar */}
          <div className="hidden md:flex flex-col gap-6 pt-2 text-slate-400 sticky top-[150px] h-fit">
            <span className="text-[9px] font-bold tracking-wider text-slate-300 transform -rotate-90 origin-left mb-8 block translate-x-3">Share</span>
            <a href="#" className="hover:text-primary transition-colors"><LinkIcon className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="#" className="hover:text-primary transition-colors"><MessageCircle className="w-4 h-4" /></a>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div
              className="prose prose-slate prose-lg max-w-none 
                prose-headings:font-heading prose-headings:font-bold prose-headings:text-primary
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-p:font-light prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:font-heading prose-blockquote:text-primary prose-blockquote:my-10
                prose-ul:list-disc prose-ul:pl-6 prose-ul:font-light prose-ul:text-slate-600 prose-ul:mb-8
                prose-li:mb-2
                first-letter:text-7xl first-letter:font-heading first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-16 pt-10 border-t border-slate-200 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-[10px] font-bold tracking-wider text-slate-400 mb-1">Written By</p>
                <h4 className="font-heading text-xl font-bold text-primary">{post.author}</h4>
                <p className="text-sm font-light text-slate-500">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>

      </article>
    </div>
  );
};

export default BlogPost;
