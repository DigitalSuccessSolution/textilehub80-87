import React from 'react';
import { Award, Compass, Heart, Users, Quote } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Award className="w-8 h-8 text-accent" />, title: 'Uncompromising Quality', desc: 'Every thread meets international testing standards.' },
    { icon: <Compass className="w-8 h-8 text-accent" />, title: 'Design Innovation', desc: 'Constantly forecasting global trends for our retail lines.' },
    { icon: <Users className="w-8 h-8 text-accent" />, title: 'Retailer Partnerships', desc: 'Supporting 1200+ partners with supply security.' },
    { icon: <Heart className="w-8 h-8 text-accent" />, title: 'Heritage Preservation', desc: 'Blending traditional Indian craftsmanship with modern looms.' },
  ];

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Editorial Header */}
      <section className="pt-24 pb-12 px-4 text-center max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
          A Legacy Woven in Time.
        </h1>
        <p className="text-slate-500 font-light text-lg md:text-xl leading-relaxed">
          For over four decades, WeavesMart has redefined premium textile manufacturing, bringing the finest 12 Collections to luxury retailers across the globe.
        </p>
      </section>

      {/* Full Width Image Break */}
      <section className="w-full h-[60vh] relative mt-8 mb-24">
        <img
          src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=2000&auto=format&fit=crop"
          alt="Loom Heritage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white p-10 shadow-2xl max-w-2xl w-[90%] text-center border-t-4 border-accent">
          <Quote className="w-10 h-10 text-accent/30 mx-auto mb-4" />
          <p className="font-heading text-2xl text-primary italic leading-snug">
            "True luxury is found in the details of the weave, the purity of the thread, and the legacy of the loom."
          </p>
        </div>
      </section>

      {/* Timeline Story */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="font-heading text-4xl font-bold text-primary">The Art of the Weave</h2>
            <div className="space-y-6 text-slate-600 font-light text-lg">
              <p>
                Founded in the textile heartland, WeavesMart began as a small boutique weaving unit in 1985. Our singular vision was to curate a definitive set of collections that cater to every luxury retail need.
              </p>
              <p>
                Today, our <strong className="text-primary font-medium">Signature 12 Collections</strong> represent the pinnacle of our journey. From pure Egyptian cottons to Banarasi brocades, we leverage both advanced machinery and age-old traditional techniques.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-200">
              <div>
                <p className="text-5xl font-heading font-bold text-accent mb-2">1985</p>
                <p className="text-xs tracking-wider font-semibold text-slate-400">Year Established</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold text-accent mb-2">12</p>
                <p className="text-xs tracking-wider font-semibold text-slate-400">Signature Collections</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold text-accent mb-2">1.2K</p>
                <p className="text-xs tracking-wider font-semibold text-slate-400">Retail Partners</p>
              </div>
              <div>
                <p className="text-5xl font-heading font-bold text-accent mb-2">100%</p>
                <p className="text-xs tracking-wider font-semibold text-slate-400">Quality Assured</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop"
              alt="Fabrics"
              className="relative z-10 w-full h-auto shadow-xl"
            />
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
