import React from "react";
import { useParams, Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { Calendar, ArrowLeft, Clock, Share2 } from "lucide-react";

const allPosts = [
  {
    id: 1,
    title: "The Art of Selecting Premium Banarasi Silk",
    date: "05 Jun 2026",
    category: "Fabric Guide",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/10317113/pexels-photo-10317113.jpeg",
    author: "Editorial Team",
    content: `Banarasi silk is among the finest fabrics produced in India, with a legacy spanning over 500 years. Woven in the ancient city of Varanasi, these textiles are celebrated for their opulent gold and silver brocade work, fine silk base, and intricate patterns inspired by Mughal art.
    
    Identifying Authentic Banarasi Silk: The first thing to check is the weight. Genuine Banarasi silk has a distinctive heft to it. Hold a small section up to light — authentic silk will display a lustrous sheen that shifts subtly with the angle of light. Machine-made imitations tend to have a uniform, flat shine.
    
    The Weave: Look at the reverse side of the fabric. In genuine Banarasi silk, you will see extra threads running along the back of the brocade motifs — this is evidence of hand-weaving. The threads are fine and form a clean pattern, unlike the irregular or coarse look of lower-quality weaves.
    
    The Zari: Traditional Banarasi uses real zari (gold/silver thread). Modern silk may use imitation zari, which is cheaper. Rub a small section with your finger — real zari will not flake or peel.
    
    Price as an Indicator: Genuine handwoven Banarasi silk cannot be produced cheaply. If the price seems too good to be true, it often is. Expect to invest ₹5,000–₹50,000 or more for authentic pieces depending on quality and detailing.
    
    Care and Storage: Store in muslin or cotton cloth, never plastic. Avoid direct sunlight. Dry clean only. With proper care, Banarasi silk garments can last generations.`,
  },
  {
    id: 2,
    title: "Summer 2026 Fabric Trends: Cotton Meets Linen",
    date: "28 May 2026",
    category: "Trends",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop",
    author: "Style Desk",
    content: `Summer 2026 is witnessing a remarkable convergence of two beloved natural fibres: cotton and linen. The cotton-linen blend has emerged as the go-to choice for discerning customers who prioritise breathability, texture, and elegance in the warmer months.
    
    Why Cotton-Linen Blends? Cotton brings softness and ease of care, while linen contributes natural stiffness, texture, and exceptional moisture-wicking properties. The result is a fabric that drapes beautifully, feels cool against the skin, and holds its shape through a long day.
    
    Key Trends this Season: Earthy tones dominate – think terracotta, warm ivory, dusty rose, and sage green. Structural cuts with relaxed silhouettes. Minimal prints; texture does the talking. Oversized kurta sets in breathable blends are particularly popular this season.
    
    For Retailers: Stock a mix of solid and subtly textured cotton-linen fabrics. Offer coordinating dupatta/trouser combinations in complementary tones. Customers are increasingly conscious of fabric composition – ensure GSM and fibre content are clearly labelled.
    
    Sourcing tip: Premium cotton-linen blends from our Summer Collection 2026 are now available for advance booking. Minimum order: 100 meters per colour.`,
  },
  {
    id: 3,
    title: "How to Care for Your Silk & Woollen Garments",
    date: "20 May 2026",
    category: "Care Guide",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1200&h=600&fit=crop",
    author: "Editorial Team",
    content: `Silk and wool are two of nature's most extraordinary fibres, each requiring thoughtful care to maintain their beauty and longevity.
    
    Silk Care: Never machine wash silk. Use cold water and a mild, pH-neutral detergent. Gently squeeze — do not wring. Roll in a clean towel to remove excess moisture, then lay flat to dry away from direct sunlight. Iron on a low setting through a damp cloth.
    
    Woollen Care: Wool is sensitive to heat and agitation, which cause irreversible shrinkage. Hand wash in cold water with a dedicated wool wash. Lay flat to reshape and dry naturally. For structured woollen garments, dry cleaning is always the safer option.
    
    Storage: Cedar blocks or lavender sachets repel moths naturally. Store wool and silk in breathable cotton storage bags — never in sealed plastic which traps moisture and promotes mildew. Fold heavy woollens; hanging can cause them to lose shape.
    
    Professional Care: Once a season, have your finest textiles professionally cleaned and repaired. Minor repairs done promptly prevent larger damage later.`,
  },
  {
    id: 4,
    title: "B2B Textile Sourcing: A Guide for Retailers",
    date: "12 May 2026",
    category: "Business",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&h=600&fit=crop",
    author: "Trade Desk",
    content: `Sourcing textiles at wholesale rates requires a combination of market knowledge, supplier relationships, and quality vigilance. Here is a structured approach for retail buyers looking to strengthen their procurement process.
    
    1. Know Your Fabric: Understand GSM, fibre composition, and weave type before placing large orders. Request physical samples — always.
    
    2. Vendor Due Diligence: Verify GST registration, trade references, and physical presence. Established textile malls and reputed dealers offer built-in credibility.
    
    3. Volume Planning: Most suppliers have minimum order quantities (MOQ). Plan your seasonal inventory based on realistic sales data, not just optimism. Overbuying ties up capital.
    
    4. Pricing Negotiation: Ask for tiered pricing — larger orders command better rates. Factor in transportation, GST, and packaging when computing landed cost.
    
    5. Quality Checks: Before accepting delivery, inspect a random sample of at least 5% of the lot. Check for colour consistency, weave defects, and finished width.
    
    6. Payment Terms: Negotiate credit periods — 30, 45, or 60 days are standard for established trade relationships. Avoid full advance payment to new suppliers.`,
  },
  {
    id: 5,
    title: "Traditional Indian Handlooms: A Living Heritage",
    date: "01 May 2026",
    category: "Heritage",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/26729577/pexels-photo-26729577.jpeg",
    author: "Heritage Desk",
    content: `India's handloom tradition is one of the most diverse and enduring textile legacies in the world. From the Chanderi weaves of Madhya Pradesh to the Kanjivaram silks of Tamil Nadu, each regional tradition carries centuries of cultural expression within its fibres.
    
    Chanderi: Lightweight, sheer, and refined. Chanderi sarees combine silk warp with cotton weft, creating a fabric that is simultaneously delicate and durable. Traditional Chanderi features butis (motifs) in zari or silk thread.
    
    Kanjivaram: Known for their weight, vibrant colours, and wide zari borders, Kanjivaram sarees are woven with pure mulberry silk and real zari. The weaving of a single saree can take 2–5 days.
    
    Banarasi: The crown jewel of Indian handlooms. Banarasi silk sarees feature Mughal-inspired brocade patterns and are worn at the most auspicious occasions.
    
    Sustainability: Handloom textiles are inherently sustainable — they use minimal electricity, produce low waste, and support rural artisan livelihoods. Choosing handloom is an act of conscious consumption.`,
  },
  {
    id: 6,
    title: "Understanding GST on Textile Products in India",
    date: "22 Apr 2026",
    category: "Business",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&h=600&fit=crop",
    author: "Accounts Desk",
    content: `GST on textiles can be complex, as rates vary significantly based on fibre type, product category, and price point. Here is a simplified overview.
    
    Key GST Slabs: Natural fibre yarns (cotton, silk, wool) — 5%. Synthetic fibre yarns — 12–18%. Woven fabrics of natural fibres — 5%. Woven fabrics with synthetic content > 50% — 12%. Garments up to ₹1,000 — 5%. Garments above ₹1,000 — 12%.
    
    HSN Codes: Proper HSN code classification is essential for accurate GST filing. Fabric HSN codes fall under Chapters 50–63. Common ones include: 5208 (cotton woven fabric), 5007 (silk woven fabric), 5515 (synthetic blended woven fabric).
    
    Input Tax Credit (ITC): Registered textile businesses can claim ITC on purchases used in business operations. Maintain proper purchase invoices with GSTIN details for seamless ITC claims.
    
    Note: This is a simplified overview. For specific GST advice, consult a qualified CA or tax advisor.`,
  },
];

const categoryColors = {
  "Fabric Guide": "bg-brand-emerald-dark text-brand-gold",
  "Trends": "bg-brand-terracotta/15 text-brand-terracotta",
  "Care Guide": "bg-brand-charcoal/10 text-brand-charcoal",
  "Business": "bg-brand-gold/20 text-brand-gold-dark",
  "Heritage": "bg-brand-emerald-accent/15 text-brand-emerald-accent",
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = allPosts.find(p => p.id === parseInt(id));

  useSEO({ title: post ? `${post.title} | Kaaya Fabrics Blog` : "Blog | Kaaya Fabrics", description: post?.excerpt });

  if (!post) {
    return (
      <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 flex items-center justify-center text-brand-charcoal">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-black uppercase tracking-wider mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-brand-gold hover:text-brand-gold-dark font-bold">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  const related = allPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 text-brand-charcoal text-left">
      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-charcoal/50 hover:text-brand-gold text-xs font-black uppercase tracking-widest mb-8 transition-colors">
          <ArrowLeft size={14} /> Back to Journal
        </Link>

        {/* Hero Image */}
        <div className="overflow-hidden mb-8 h-64 md:h-96 border border-brand-emerald-accent/5 rounded-xl p-1.5 bg-white shadow-sm">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-xl" />
        </div>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-6 flex-wrap">
          <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-xl ${categoryColors[post.category]}`}>{post.category}</span>
          <span className="text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider flex items-center gap-1"><Calendar size={11} className="text-brand-gold" /> {post.date}</span>
          <span className="text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider flex items-center gap-1"><Clock size={11} className="text-brand-gold" /> {post.readTime}</span>
          <span className="text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider">By {post.author}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-serif font-black text-brand-charcoal mb-6 leading-tight uppercase tracking-wide">
          {post.title}
        </h1>

        {/* Content */}
        <div className="space-y-6 font-sans font-light text-brand-charcoal/80 text-sm md:text-base leading-relaxed">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Share */}
        <div className="mt-12 pt-8 border-t border-brand-linen-dark flex items-center justify-between">
          <p className="text-[10px] text-brand-charcoal/40 font-black uppercase tracking-widest">Share this article</p>
          <div className="flex gap-4">
            {["WhatsApp", "LinkedIn", "Twitter"].map(s => (
              <button key={s} className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal/50 hover:text-brand-gold transition-colors flex items-center gap-1 cursor-pointer">
                <Share2 size={12} className="text-brand-gold" /> {s}
              </button>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-serif font-black text-brand-emerald-dark uppercase tracking-wider mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map(r => (
                <Link key={r.id} to={`/blog/${r.id}`} className="bg-white border border-brand-emerald-accent/5 p-4 rounded-xl hover:shadow-xl hover:border-brand-gold/30 transition-all duration-500 group text-left">
                  <div className="h-36 overflow-hidden rounded-xl bg-brand-emerald-dark/5 mb-4">
                    <img src={r.image} alt={r.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] text-brand-gold font-bold uppercase tracking-wider">{r.date}</p>
                    <p className="text-sm font-serif font-bold text-brand-charcoal uppercase tracking-wide group-hover:text-brand-gold transition-colors leading-tight">{r.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetail;
