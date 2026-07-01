import React from "react";
import { useParams, Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";
import { ArrowLeft } from "lucide-react";

const blogDatabase = {
  1: {
    title: "Summer Fabric Guide: Cotton vs Linen",
    cat: "Styling Guide",
    date: "June 05, 2026",
    img: "https://images.pexels.com/photos/4794900/pexels-photo-4794900.jpeg",
    content: `When temperatures rise and humidity peaks, choosing the right fabric becomes essential. Cotton and linen are the undisputed champions of summer wardrobes, but each serves a distinct purpose.

    Cotton is highly breathable, absorbent, and soft to the skin. It comes in various weaves like poplin, cambric, and mulmul. However, cotton retains moisture longer than linen and is prone to clinging.

    Linen, made from flax fibers, features a looser weave that permits superior airflow. It dries almost instantly and has a natural stiffness that keeps the fabric away from the skin. While it wrinkles easily, this adds to its organic, casual charm.

    For corporate environments, structured fine cotton shirting is recommended. For casual weekend wear, relaxed linen Kurtas and trousers are the ultimate choice.`
  },
  2: {
    title: "The Renaissance of Handloom Sarees",
    cat: "Heritage",
    date: "May 30, 2026",
    img: "https://images.pexels.com/photos/6634604/pexels-photo-6634604.jpeg",
    content: `Handloom sarees are experiencing a massive revival in contemporary fashion. Once reserved only for formal ethnic occasions or older generations, handloom silk weaves like Banarasis, Kanchipurams, and Jamdanis are now being reimagined.

    Young designers are pairing heritage weaves with crop tops, blazer jackets, and modern metallic belts. This fusion keeps the art form alive while making it comfortable and accessible for modern working professionals.

    At Aurora Textile House, we work directly with handloom weaver clusters. We ensure that our weavers receive fair wages, and that our customers receive authentic silk certifications.`
  },
  3: {
    title: "Upholstery Trends for Modern Showrooms",
    cat: "Interior Design",
    date: "May 15, 2026",
    img: "https://images.pexels.com/photos/6969830/pexels-photo-6969830.jpeg",
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
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 text-left space-y-5">
          <div className="flex items-center gap-2">
            <Link to="/blog" className="text-[9px] font-bold uppercase tracking-widest text-[#C29E6B] flex items-center gap-1.5 hover:text-white transition-colors">
              <ArrowLeft size={11} /> Back to Blog
            </Link>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B] block">{post.cat}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-[1.1] tracking-tight max-w-3xl">
            {post.title}
          </h1>
          <span className="text-xs text-stone-400 font-sans">{post.date}</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-3xl mx-auto">

        {/* Featured Image */}
        <div className="aspect-[16/9] rounded-[2rem] overflow-hidden bg-[#2E081B] border border-[#2E081B]/10 mb-10 shadow-md">
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Detailed Copy */}
        <div className="prose max-w-none text-[#24151D]/80 text-sm leading-relaxed font-sans font-light whitespace-pre-line space-y-6 text-left">
          {post.content}
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
