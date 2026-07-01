import React from "react";
import { useParams, Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { ArrowLeft } from "lucide-react";

const blogDatabase = {
  1: {
    title: "Summer Fabric Guide: Cotton vs Linen",
    cat: "Styling Guide",
    date: "June 05, 2026",
    img: "https://images.pexels.com/photos/30982204/pexels-photo-30982204.jpeg",
    content: `When temperatures rise and humidity peaks, choosing the right fabric becomes essential. Cotton and linen are the undisputed champions of summer wardrobes, but each serves a distinct purpose.

    Cotton is highly breathable, absorbent, and soft to the skin. It comes in various weaves like poplin, cambric, and mulmul. However, cotton retains moisture longer than linen and is prone to clinging.

    Linen, made from flax fibers, features a looser weave that permits superior airflow. It dries almost instantly and has a natural stiffness that keeps the fabric away from the skin. While it wrinkles easily, this adds to its organic, casual charm.

    For corporate environments, structured fine cotton shirting is recommended. For casual weekend wear, relaxed linen Kurtas and trousers are the ultimate choice.`
  },
  2: {
    title: "The Renaissance of Handloom Sarees",
    cat: "Heritage",
    date: "May 30, 2026",
    img: "https://images.pexels.com/photos/35195886/pexels-photo-35195886.jpeg",
    content: `Handloom sarees are experiencing a massive revival in contemporary fashion. Once reserved only for formal ethnic occasions or older generations, handloom silk weaves like Banarasis, Kanchipurams, and Jamdanis are now being reimagined.

    Young designers are pairing heritage weaves with crop tops, blazer jackets, and modern metallic belts. This fusion keeps the art form alive while making it comfortable and accessible for modern working professionals.

    At Retail Textile Mall, we work directly with handloom weaver clusters. We ensure that our weavers receive fair wages, and that our customers receive authentic silk certifications.`
  },
  3: {
    title: "Upholstery Trends for Modern Showrooms",
    cat: "Interior Design",
    date: "May 15, 2026",
    img: "https://images.pexels.com/photos/6758358/pexels-photo-6758358.jpeg",
    content: `Aesthetic spaces leave a lasting impression. In modern showroom and residential interiors, the choice of upholstery sets the mood.

    Currently, textured neutrals are trending. Bouclé fabrics, heavy jacquards, and premium linen blends in ivory, beige, and slate blue are highly sought after. They offer a luxurious feel without overwhelming the space.

    When selecting curtain fabrics, double-layering is key. Pair sheer linen sheets with heavy velvet or jacquard drapes to control natural light and preserve acoustic comfort in corporate meeting zones.`
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogDatabase[id] || blogDatabase[1];

  useSEO(post.title, post.content.substring(0, 150));

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-20">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <Link to="/blog" className="inline-flex items-center gap-1 text-brand-lavender hover:text-brand-plum transition-colors text-xs font-bold uppercase tracking-wider font-sans">
                <ArrowLeft size={12} /> Back to Blog
              </Link>
              <span className="text-stone-400">•</span>
              <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-brand-lavender">{post.cat}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">{post.title}</h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            {post.date}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-3xl mx-auto">

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-[2rem] overflow-hidden bg-brand-plum border border-brand-gold/15 mb-10 shadow-md">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Detailed Copy */}
        <div className="prose max-w-none text-brand-plum/80 text-sm leading-relaxed font-sans whitespace-pre-line space-y-6">
          {post.content}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
