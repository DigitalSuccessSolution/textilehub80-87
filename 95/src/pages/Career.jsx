import React, { useState } from "react";
import useSEO from "../hooks/useSEO";
import { Briefcase, MapPin, Clock, Mail, ChevronDown, ChevronUp, CheckCircle, Award, Compass } from "lucide-react";

const Career = () => {
  useSEO("Career Opportunities", "Join our retail team in Kolkata at Retail Textile Mall. Explore sales advisor, visual merchandiser, and trade coordinator jobs.");

  const [expandedJob, setExpandedJob] = useState(0); // first job expanded by default

  const openings = [
    {
      title: "Boutique Sales Advisor",
      dept: "Sarees & Ethnic Wear",
      type: "Full-Time",
      loc: "Kolkata Showroom",
      desc: "We are seeking an elegant, service-oriented Boutique Sales Advisor to guide our VIP customers and design-conscious clients through our premium silk sarees, lehengas, and custom designer kurtis. You will be the face of our heritage collection.",
      responsibilities: [
        "Provide personalized styling consultations, helping clients choose fabrics, patterns, and custom drape styles.",
        "Maintain absolute mastery over the specifications, weave origins (e.g., Banarasi, Kanjeevaram), and craftsmanship of our collections.",
        "Coordinate bespoke customization requests with our in-house master tailors to ensure flawless fit and styling.",
        "Manage merchandise displays within the boutique section, aligning with our luxury presentation guidelines."
      ],
      requirements: [
        "2+ years of retail sales experience in premium ethnic wear, bridal boutiques, or high-fashion showrooms.",
        "Deep knowledge and passion for Indian handlooms, silk types, and embroidery techniques.",
        "Excellent conversational skills with a welcoming and professional presentation.",
        "Fluency in Hindi and English is required; knowledge of Bengali is highly advantageous."
      ],
      benefits: [
        "Premium air-conditioned store environment in a prime retail location.",
        "Competitive fixed monthly salary plus generous performance-based sales incentives.",
        "Continuous product and styling training mentored by veteran fashion consultants.",
        "Generous employee discounts across all store departments."
      ]
    },
    {
      title: "Visual Merchandiser",
      dept: "Home Decor & Furnishing",
      type: "Full-Time",
      loc: "Kolkata Showroom",
      desc: "We are looking for a creative storyteller to highlight our premium bedsheets, luxury home linens, and bespoke upholstery fabrics. Your layouts will design the showroom experience, turning lookbook inspirations into beautiful physical arrangements.",
      responsibilities: [
        "Plan and execute layout rotations, themed window displays, and point-of-sale setups weekly.",
        "Collaborate with the category managers to launch new seasonal prints, texture lines, and holiday coordinates.",
        "Monitor customer traffic patterns inside the store and modify visual highlights to improve engagement.",
        "Maintain strict styling guidelines, lighting alignments, and neatness standards across the home furnishing floor."
      ],
      requirements: [
        "Degree or diploma in Visual Merchandising, Interior Styling, Fine Arts, or Fashion Design.",
        "1-3 years of visual merchandising experience, preferably in home textiles, high-end furniture, or apparel stores.",
        "Strong portfolio demonstrating aesthetic eye, color coordination, and understanding of spatial dynamics.",
        "Ability to work dynamically with store setup tools, step ladders, and display hardware."
      ],
      benefits: [
        "Direct creative control over the visual identity of our premium home furnishing section.",
        "Access to high-quality international designer catalogs and raw materials.",
        "Annual performance bonuses and career advancement path to Regional VM Lead.",
        "Comprehensive health insurance and paid leaves."
      ]
    },
    {
      title: "B2B Trade Coordinator",
      dept: "Corporate Accounts Desk",
      type: "Full-Time",
      loc: "Kolkata Showroom",
      desc: "We are hiring a detail-oriented coordinator to manage relationships with bulk buyers, luxury hotels, fashion designers, and corporate accounts. You will manage wholesale trade communications, prepare quotations, and oversee bulk dispatch pipelines.",
      responsibilities: [
        "Serve as the primary liaison for institutional queries coming in through web portals, trade emails, or direct showroom visits.",
        "Prepare custom quotations, price sheets, and logistics reports using ERP systems and trade catalogs.",
        "Coordinate fabric sample shipping and track dispatch status with third-party transport agencies.",
        "Maintain and follow up on wholesale buyer lists, building long-term business partnerships."
      ],
      requirements: [
        "Bachelor's degree in Business Administration, Commerce, Marketing, or related fields.",
        "2+ years of experience in sales coordination, client relationship management, or wholesale account administration.",
        "Proficiency in MS Office (specifically Advanced Excel) and experience using CRM/billing systems.",
        "Excellent formal business writing skills in English."
      ],
      benefits: [
        "Structured corporate desk role with standard business hours (Sundays off).",
        "Performance incentives tied directly to wholesale account acquisition and repeat order volume.",
        "Provident Fund (PF), Employee State Insurance (ESI), and annual medical check-up allowances.",
        "Opportunities to represent the brand at national textile exhibitions and trade fairs."
      ]
    }
  ];

  const toggleJob = (idx) => {
    setExpandedJob(expandedJob === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-24">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              WORK WITH US
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Careers at the <span className="text-brand-lavender font-light italic">Mall</span>
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* Intro Philosophy Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center space-y-6">
        <div className="flex justify-center gap-6 text-brand-lavender mb-4">
          <div className="flex flex-col items-center">
            <Compass size={24} strokeWidth={1.5} className="mb-2" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Innovation</span>
          </div>
          <div className="w-px h-10 bg-stone-300" />
          <div className="flex flex-col items-center">
            <Award size={24} strokeWidth={1.5} className="mb-2" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Heritage</span>
          </div>
          <div className="w-px h-10 bg-stone-300" />
          <div className="flex flex-col items-center">
            <Briefcase size={24} strokeWidth={1.5} className="mb-2" />
            <span className="text-[9px] uppercase tracking-wider font-bold">Growth</span>
          </div>
        </div>
        <h2 className="font-serif text-2xl text-brand-plum uppercase tracking-wider">Our Work Culture</h2>
        <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          At Retail Textile Mall, we cherish creativity, diligence, and customer delight. We provide our staff with state-of-the-art facilities, continuous growth opportunities, and an inclusive, encouraging team workspace.
        </p>
      </section>

      {/* Main Content Area */}
      <section className="px-6 sm:px-10 max-w-5xl mx-auto grid grid-cols-1 gap-12">
        
        {/* Openings Accordion */}
        <div className="space-y-6">
          <div className="border-b border-brand-gold/15 pb-4 flex justify-between items-end">
            <h3 className="font-serif text-xl text-brand-plum uppercase tracking-widest">
              Current Openings ({openings.length})
            </h3>
            <span className="text-[10px] text-brand-lavender font-bold uppercase tracking-wider">Kolkata Showroom</span>
          </div>

          <div className="space-y-4">
            {openings.map((job, idx) => {
              const isExpanded = expandedJob === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-[2rem] border border-brand-gold/15 shadow-sm overflow-hidden hover:border-brand-lavender/30 transition-all duration-300"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleJob(idx)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="space-y-2">
                      <span className="text-[8px] sm:text-[9px] font-sans font-black uppercase tracking-widest text-brand-lavender bg-brand-cream py-1 px-3.5 rounded-full border border-brand-lavender/20">
                        {job.dept}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-brand-plum font-bold uppercase tracking-wide pt-1">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] sm:text-xs text-stone-500 font-sans">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-brand-lavender" /> {job.loc}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-brand-lavender" /> {job.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-brand-cream border border-brand-gold/15 flex items-center justify-center text-brand-plum group-hover:bg-brand-lavender transition-colors shrink-0">
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isExpanded && (
                    <div className="px-6 pb-8 sm:px-8 sm:pb-10 border-t border-brand-gold/10 pt-6 bg-stone-50/50 space-y-6">
                      {/* Description */}
                      <div className="space-y-2">
                        <h5 className="text-[10px] uppercase font-bold tracking-wider text-brand-lavender font-sans">Role Summary</h5>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans font-light">
                          {job.desc}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                        {/* Responsibilities */}
                        <div className="space-y-3">
                          <h5 className="text-[10px] uppercase font-bold tracking-wider text-brand-lavender font-sans flex items-center gap-1.5">
                            <CheckCircle size={12} /> Key Responsibilities
                          </h5>
                          <ul className="space-y-2 text-xs text-stone-600 leading-relaxed font-sans font-light list-disc pl-4">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-3">
                          <h5 className="text-[10px] uppercase font-bold tracking-wider text-brand-lavender font-sans flex items-center gap-1.5">
                            <Award size={12} /> Desired Qualifications
                          </h5>
                          <ul className="space-y-2 text-xs text-stone-600 leading-relaxed font-sans font-light list-disc pl-4">
                            {job.requirements.map((req, i) => (
                              <li key={i}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="pt-4 border-t border-brand-gold/10 space-y-3">
                        <h5 className="text-[10px] uppercase font-bold tracking-wider text-brand-lavender font-sans">What We Offer</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {job.benefits.map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-brand-gold/10 shadow-sm text-xs text-stone-600 font-sans font-light">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-lavender" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* General Opening Banner */}
        <div className="bg-white border border-brand-gold/15 rounded-[2rem] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 text-left">
            <h4 className="font-serif text-lg text-brand-plum uppercase tracking-wide">
              Don't see a matching role?
            </h4>
            <p className="text-xs text-stone-500 font-sans font-light max-w-xl leading-relaxed">
              If you are passionate about premium textiles, bridal fashion, luxury sales operations, or visual layout management, we would love to hear from you. Send us your portfolio and CV!
            </p>
          </div>
          <a
            href="mailto:careers@retailtextilemall.com?subject=General%20Application%20-%20Retail%20Textile%20Mall"
            className="w-full md:w-auto px-6 py-3 border border-brand-lavender hover:bg-brand-lavender text-brand-plum hover:text-white text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-full flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Mail size={13} /> General Application
          </a>
        </div>

      </section>

    </div>
  );
};

export default Career;
