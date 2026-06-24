import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Send, X } from "lucide-react";

const jobs = [
  {
    id: 1,
    title: "Senior Sales Executive – Wholesale Division",
    dept: "Sales",
    location: "Kolkata, West Bengal",
    type: "Full Time",
    experience: "3–5 Years",
    description: "We are looking for a driven Sales Executive with strong knowledge of the textile wholesale market. The role involves managing key accounts, expanding the B2B client base, and achieving monthly sales targets.",
    responsibilities: ["Manage and grow existing wholesale accounts", "Identify and onboard new trade clients", "Achieve monthly and quarterly revenue targets", "Coordinate with warehouse and logistics teams for order fulfilment"],
    requirements: ["Graduate in any discipline (MBA preferred)", "3–5 years in textile or apparel sales", "Strong negotiation and communication skills", "Proficiency in Tally and MS Excel"],
  },
  {
    id: 2,
    title: "Visual Merchandiser",
    dept: "Retail Operations",
    location: "Kolkata, West Bengal",
    type: "Full Time",
    experience: "2–4 Years",
    description: "Create compelling in-store displays and manage showroom presentation to drive customer engagement and sales.",
    responsibilities: ["Design and implement showroom layouts", "Plan seasonal display themes", "Coordinate with procurement on new arrivals", "Train floor staff on merchandising standards"],
    requirements: ["Degree/Diploma in Fashion, Design or Retail", "2–4 years VM experience in textile/fashion retail", "Strong visual design sense", "Knowledge of fabric types and garment categories"],
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    dept: "Marketing",
    location: "Remote / Kolkata",
    type: "Full Time",
    experience: "1–3 Years",
    description: "Drive the brand's digital presence across social media, email, and paid campaigns. Create content that communicates the brand story and product range.",
    responsibilities: ["Manage Instagram, Facebook, and LinkedIn accounts", "Plan and execute seasonal campaigns", "Create short-form video and graphic content", "Analyse digital performance metrics and report monthly"],
    requirements: ["Degree in Marketing, Communications or equivalent", "1–3 years in digital marketing", "Proficiency in Meta Ads Manager and Canva", "Understanding of textile or fashion industry preferred"],
  },
  {
    id: 4,
    title: "Accounts & Billing Officer",
    dept: "Finance",
    location: "Kolkata, West Bengal",
    type: "Full Time",
    experience: "2–5 Years",
    description: "Handle day-to-day billing, GST returns, and vendor payments. Work closely with the trade and operations teams to ensure accurate financial records.",
    responsibilities: ["Process sales and purchase invoices", "File monthly GSTR-1 and GSTR-3B returns", "Coordinate vendor payments and reconciliations", "Maintain petty cash and banking records"],
    requirements: ["B.Com / M.Com degree", "Experience with Tally Prime (mandatory)", "Working knowledge of GST and TDS", "Attention to detail and accuracy"],
  },
];

const deptColors = { 
  Sales: "bg-brand-emerald-dark text-brand-gold", 
  "Retail Operations": "bg-brand-terracotta/15 text-brand-terracotta", 
  Marketing: "bg-brand-gold/20 text-brand-gold-dark", 
  Finance: "bg-brand-charcoal/10 text-brand-charcoal" 
};

const Career = () => {
  useSEO({ title: "Careers | Kaaya Fabrics", description: "Join the Kaaya Fabrics team. Browse open positions and apply online." });
  const [expanded, setExpanded] = useState(null);
  const [applyingTo, setApplyingTo] = useState(null);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onApply = async (data) => {
    await new Promise(r => setTimeout(r, 1200));
    console.log("Career Application:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => { setSubmitted(false); setApplyingTo(null); }, 3000);
  };

  return (
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 text-brand-charcoal text-left">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold">Join Our Team</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal uppercase leading-none">
            Careers at Kaaya Fabrics
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto my-4"></div>
          <p className="text-brand-charcoal/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            We are a growing textile retail organisation seeking talented individuals who share our passion for quality and excellence.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { label: "Growth Culture", value: "Structured progression paths" },
            { label: "Learning", value: "Industry training programmes" },
            { label: "Team Size", value: "200+ Professionals" },
            { label: "Experience", value: "30+ Years in Textiles" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-brand-emerald-accent/5 rounded-xl p-5 text-center shadow-sm">
              <p className="text-[9px] text-brand-gold uppercase tracking-widest font-black mb-1">{label}</p>
              <p className="text-xs text-brand-charcoal font-bold uppercase">{value}</p>
            </div>
          ))}
        </div>

        {/* Job Listings */}
        <div className="space-y-4 mb-12">
          <h2 className="text-xl font-serif font-black uppercase tracking-wider text-brand-emerald-dark">Open Positions</h2>
          {jobs.map(job => (
            <div key={job.id} className="bg-white border border-brand-emerald-accent/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <button
                className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer focus:outline-none"
                onClick={() => setExpanded(expanded === job.id ? null : job.id)}
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-xl ${deptColors[job.dept]}`}>{job.dept}</span>
                    <span className="text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider flex items-center gap-1"><MapPin size={11} className="text-brand-gold" /> {job.location}</span>
                    <span className="text-[10px] text-brand-charcoal/40 font-bold uppercase tracking-wider flex items-center gap-1"><Clock size={11} className="text-brand-gold" /> {job.type}</span>
                  </div>
                  <p className="text-base font-serif font-bold text-brand-charcoal uppercase tracking-wide">{job.title}</p>
                  <p className="text-[10px] text-brand-charcoal/40 font-bold uppercase mt-1">Experience: {job.experience}</p>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <button
                    onClick={(e) => { e.stopPropagation(); setApplyingTo(job); setSubmitted(false); }}
                    className="px-5 py-2.5 bg-brand-gold hover:bg-brand-gold-hover text-brand-emerald-dark text-[9px] font-black uppercase tracking-widest rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    Apply Now
                  </button>
                  {expanded === job.id ? <ChevronUp size={18} className="text-brand-charcoal/40" /> : <ChevronDown size={18} className="text-brand-charcoal/40" />}
                </div>
              </button>
              {expanded === job.id && (
                <div className="border-t border-brand-linen-dark px-6 py-6 bg-brand-linen/30 grid md:grid-cols-2 gap-6 text-xs md:text-sm">
                  <div>
                    <p className="font-serif font-bold uppercase tracking-wider text-brand-emerald-dark mb-2">Role Overview</p>
                    <p className="text-brand-charcoal/70 leading-relaxed font-sans font-light text-xs">{job.description}</p>
                    <p className="font-serif font-bold uppercase tracking-wider text-brand-emerald-dark mt-4 mb-2">Responsibilities</p>
                    <ul className="space-y-1.5 text-xs font-sans font-light">
                      {job.responsibilities.map((r, i) => <li key={i} className="text-brand-charcoal/70 flex gap-2"><span className="text-brand-gold font-bold">▸</span>{r}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-serif font-bold uppercase tracking-wider text-brand-emerald-dark mb-2">Requirements</p>
                    <ul className="space-y-1.5 text-xs font-sans font-light">
                      {job.requirements.map((r, i) => <li key={i} className="text-brand-charcoal/70 flex gap-2"><span className="text-brand-gold font-bold">✓</span>{r}</li>)}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Apply Modal */}
        {applyingTo && (
          <div className="fixed inset-0 z-[150] bg-brand-emerald-dark/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto border border-brand-gold/20 shadow-2xl">
              <button onClick={() => setApplyingTo(null)} className="absolute top-5 right-5 text-brand-charcoal/50 hover:text-brand-gold transition-colors cursor-pointer"><X size={20} /></button>
              <h2 className="text-2xl font-serif font-black text-brand-emerald-dark uppercase tracking-wide mb-1">{applyingTo.title}</h2>
              <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest mb-6">{applyingTo.dept} · {applyingTo.location}</p>

              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-emerald-600 font-bold text-lg mb-2 uppercase tracking-wide">Application Submitted!</p>
                  <p className="text-brand-charcoal/60 text-xs font-sans font-light">We will review your application and contact you within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onApply)} className="space-y-4">
                  {[
                    { name: "fullName", label: "Full Name", placeholder: "Your Name" },
                    { name: "email", label: "Email Address", placeholder: "you@example.com" },
                    { name: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
                    { name: "experience", label: "Years of Experience", placeholder: "e.g. 3 years" },
                  ].map(({ name, label, placeholder }) => (
                    <div key={name}>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-1.5">{label}</label>
                      <input 
                        placeholder={placeholder} 
                        {...register(name, { required: `${label} is required` })}
                        className="w-full border border-brand-linen-dark px-4 py-3 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold transition-all rounded-xl font-sans" 
                      />
                      {errors[name] && <p className="mt-1 text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors[name].message}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-1.5">Cover Note</label>
                    <textarea 
                      rows={3} 
                      placeholder="Brief note on why you're a great fit..." 
                      {...register("coverNote")}
                      className="w-full border border-brand-linen-dark px-4 py-3 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold resize-none transition-all rounded-xl font-sans" 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-emerald-dark py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-60 cursor-pointer shadow-lg shadow-brand-gold/10"
                  >
                    <Send size={14} /> {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Career;
