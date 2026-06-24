import React from 'react';
import { Leaf, Award, Cpu, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Intro = () => {
    const steps = [
        {
            title: "Raw Materials",
            desc: "We source premium Egyptian cotton thread counts and fine mulberry silk directly from certified handloom clusters.",
            icon: <Leaf className="w-5.5 h-5.5 text-brand-lavender" />
        },
        {
            title: "Design & Innovation",
            desc: "Our creative boutique designers blend traditional ethnic motifs with contemporary silhouettes and colors.",
            icon: <Cpu className="w-5.5 h-5.5 text-brand-lavender" />
        },
        {
            title: "Manufacturing",
            desc: "Expert handloom weavers and modern precision mills execute weaving with zero tolerance for defects.",
            icon: <Award className="w-5.5 h-5.5 text-brand-lavender" />
        },
        {
            title: "Quality Assurance",
            desc: "Every batch undergoes rigorous tests for color fastness, thread strength, and texture durability.",
            icon: <ShieldCheck className="w-5.5 h-5.5 text-brand-lavender" />
        },
        {
            title: "Delivered to You",
            desc: "We coordinate with top-tier logistic partners to ensure prompt and secure bulk dispatch across all Indian cities.",
            icon: <Truck className="w-5.5 h-5.5 text-brand-lavender" />
        }
    ];

    return (
        <section className="relative py-24 bg-brand-cream text-brand-plum overflow-hidden border-y border-brand-gold/12 transition-colors duration-500">
            {/* Soft decorative background blurs */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    
                    {/* ── Left Column: Sticky Narrative Block ── */}
                    <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
                            Our Journey of Excellence
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-serif text-brand-plum uppercase tracking-tight leading-tight">
                            How We Create <br />
                            <span className="font-light italic text-brand-lavender lowercase font-serif">our retail</span> Magic
                        </h2>
                        <div className="w-12 h-[2px] bg-brand-lavender" />
                        
                        <p className="text-stone-500 text-xs sm:text-sm font-sans font-light leading-relaxed">
                            Since 1998, we have maintained a strict, transparent supply chain that connects boutique fabrics directly from handloom clusters to retail and bulk buyers. Here is how we verify quality at every phase.
                        </p>

                        <div className="p-6 bg-brand-light border border-brand-gold/15 rounded-[1.8rem] flex items-start gap-4">
                            <div className="p-2 bg-brand-cream border border-brand-gold/15 rounded-xl text-brand-lavender shrink-0">
                                <Sparkles size={16} />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-serif text-xs font-bold uppercase text-brand-plum tracking-wider">Zero Compromise Policy</h4>
                                <p className="text-[10px] text-stone-500 font-sans leading-normal font-light">
                                     Our sourcing metrics ensure that every saree and fabric roll exceeds expectations in color fastness and texture.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Right Column: Staggered Vertical Step Cards with Connected Thread ── */}
                    <div className="lg:col-span-7 relative pl-4 sm:pl-10 space-y-8 text-left">
                        {/* Connecting Dashed Gold Thread Line */}
                        <div className="absolute left-[28px] sm:left-[52px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-brand-gold/15 z-0 pointer-events-none" />

                        {steps.map((step, idx) => (
                            <div 
                                key={idx} 
                                className="bg-brand-light/80 border border-brand-gold/12 hover:border-brand-lavender/30 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-500 flex items-start gap-5 relative group z-10"
                            >
                                {/* Step Counter Label */}
                                <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-brand-lavender-dark text-brand-cream border border-brand-gold/20 text-[9px] font-bold font-sans flex items-center justify-center shadow-sm">
                                    0{idx + 1}
                                </div>

                                {/* Icon Frame */}
                                <div className="w-12 h-12 rounded-2xl bg-brand-cream border border-brand-gold/12 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-brand-lavender transition-all duration-300">
                                    {step.icon}
                                </div>

                                {/* Text content */}
                                <div className="space-y-1">
                                    <h3 className="font-serif text-sm font-bold uppercase text-brand-plum tracking-wider group-hover:text-brand-lavender transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-stone-500 text-[11px] font-sans leading-relaxed font-light">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Intro;
