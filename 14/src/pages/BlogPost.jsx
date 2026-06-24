import React from 'react';
import { Calendar, User, ArrowLeft, Link as LinkIcon, Mail, MessageCircle, Share2, Tag } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const BlogPost = () => {
  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      
      {/* Top Navigation */}
      <div className="container-custom mb-8">
        <RouterLink to="/blog" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
        </RouterLink>
      </div>

      <article className="container-custom max-w-4xl">
        
        {/* Article Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
            <span className="text-accent bg-accent/10 px-4 py-1.5 rounded-full border border-accent/20">Industry Trends</span>
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Oct 12, 2023</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 leading-[1.15]">
            The Resurgence of Handloom: Why Traditional Weaves are Making a Comeback
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary">
              <User className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-primary">Priya Sharma</span>
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Textile Historian & Analyst</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-16 border-4 border-white">
          <img 
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop" 
            alt="Handloom Weaving" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-3xl mx-auto prose-headings:font-heading prose-headings:text-primary prose-p:text-muted-foreground prose-p:font-light prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-primary prose-blockquote:border-l-accent prose-blockquote:bg-muted/50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:italic prose-blockquote:text-primary/80">
          
          <p className="lead text-xl text-primary font-medium mb-8">
            Explore how modern designers are incorporating ancient weaving techniques into contemporary fashion, and why retailers should stock up on authentic handlooms.
          </p>

          <p>
            For decades, power looms dominated the textile industry due to their speed and cost-efficiency. However, a significant paradigm shift is occurring. The modern consumer, increasingly conscious of sustainability and heritage, is returning to the roots of fabric making: the handloom.
          </p>

          <h2 className="text-3xl mt-12 mb-6">The Appeal of Imperfection</h2>
          <p>
            Unlike the uniform perfection of machine-made textiles, handloom fabrics possess a unique character. The slight irregularities in the weave—often called "slubs"—are no longer viewed as defects but rather as the authentic signature of the artisan. This uniqueness is highly sought after in premium retail segments.
          </p>

          <blockquote>
            "Handloom is not just a fabric; it's a woven story. Every yard carries the rhythm of the weaver and the legacy of a generation."
          </blockquote>

          <h3 className="text-2xl mt-10 mb-4">Why Retailers Need to Adapt</h3>
          <p>
            Stocking handloom products is no longer just a niche strategy; it's a necessity for retailers aiming to capture the premium market. Here's why:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Higher Profit Margins:</strong> Consumers are willing to pay a premium for authenticity and sustainable practices.</li>
            <li><strong>Brand Differentiation:</strong> Exclusive handloom collections set your boutique apart from mass-market fast fashion.</li>
            <li><strong>Sustainable Narrative:</strong> Handlooms align perfectly with the growing demand for eco-friendly and ethically sourced fashion.</li>
          </ul>

          <div className="my-12">
            <img 
              src="https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=800&auto=format&fit=crop" 
              alt="Artisan at work" 
              className="w-full rounded-xl shadow-md border-2 border-white"
            />
            <span className="block text-center text-xs text-muted-foreground mt-3 italic">Traditional Banarasi weaving process</span>
          </div>

          <h2 className="text-3xl mt-12 mb-6">The Path Forward</h2>
          <p>
            As a B2B partner, Texmart recognizes this shift. We have expanded our direct connections with weaving clusters in Varanasi, Kanchipuram, and Chanderi. By utilizing our e-Quotation system, retailers can now source authentic handloom batches directly, ensuring provenance and quality while supporting artisan communities.
          </p>
          <p>
            The future of premium retail is intimately tied to the past. Embracing handloom is not a step backward, but a sustainable step forward into a market that values craftsmanship over mass production.
          </p>

        </div>

        {/* Footer & Share */}
        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-muted-foreground" />
            <div className="flex gap-2">
              <span className="bg-muted px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Handloom</span>
              <span className="bg-muted px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Retail</span>
              <span className="bg-muted px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">Trends</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Share:</span>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors"><LinkIcon className="w-3.5 h-3.5" /></button>
              <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors"><MessageCircle className="w-3.5 h-3.5" /></button>
              <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary hover:text-accent hover:border-accent transition-colors"><Mail className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        </div>

      </article>
    </div>
  );
};

export default BlogPost;
