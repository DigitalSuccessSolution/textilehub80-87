import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { FileText, Clock, CheckCircle } from "lucide-react";

const mockQuotations = [
  { id: "QT-2026-001", item: "Premium Cotton Sarees – 200 pcs", status: "Active", date: "02 Jun 2026", expires: "17 Jun 2026", price: "₹1,80,000" },
  { id: "QT-2026-002", item: "Banarasi Silk Dupatta – 100 pcs", status: "Active", date: "05 Jun 2026", expires: "20 Jun 2026", price: "₹95,000" },
  { id: "QT-2026-003", item: "Linen Shirting Fabric – 500 meters", status: "Closed", date: "20 May 2026", expires: "04 Jun 2026", price: "₹62,500" },
  { id: "QT-2026-004", item: "Polyester Suiting Fabric – 1000 meters", status: "Active", date: "07 Jun 2026", expires: "22 Jun 2026", price: "₹1,20,000" },
];

const Quotation = () => {
  useSEO({ title: "Quotation | Kaaya Fabrics", description: "Request and view B2B quotations for bulk textile orders." });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [filter, setFilter] = useState("All");

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Quotation Request:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const filtered = filter === "All" ? mockQuotations : mockQuotations.filter(q => q.status === filter);

  return (
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4 text-brand-charcoal">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold">B2B Pricing</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal uppercase leading-none">
            Request a Quotation
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto my-4"></div>
          <p className="text-brand-charcoal/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Get competitive pricing on bulk textile orders. Browse active quotations or submit a new request.
          </p>
        </div>

        {/* Active Quotations */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h2 className="text-xl font-serif font-black uppercase tracking-wider text-brand-emerald-dark">Active Quotations</h2>
            <div className="flex gap-2">
              {["All", "Active", "Closed"].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border transition-all cursor-pointer ${
                    filter === f 
                      ? "bg-brand-emerald-dark text-brand-gold border-brand-emerald-dark" 
                      : "bg-white border-brand-linen-dark text-brand-charcoal/60 hover:border-brand-gold hover:text-brand-charcoal"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {filtered.map(q => (
              <div key={q.id} className="editorial-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-linen rounded-xl"><FileText size={20} className="text-brand-gold" /></div>
                  <div>
                    <p className="text-[10px] text-brand-gold font-mono mb-1">{q.id}</p>
                    <p className="text-sm font-serif font-bold text-brand-charcoal uppercase tracking-wide">{q.item}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-[10px] text-brand-charcoal/50 flex items-center gap-1 font-sans font-light">
                        <Clock size={11} className="text-brand-gold" /> Expires: {q.expires}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 ml-auto md:ml-0">
                  <div className="text-right">
                    <p className="text-[9px] text-brand-charcoal/40 uppercase font-black tracking-wider mb-0.5">Quoted Price</p>
                    <p className="text-base font-bold text-brand-charcoal">{q.price}</p>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                    q.status === "Active" 
                      ? "bg-brand-emerald-dark text-brand-gold" 
                      : "bg-brand-linen-dark/50 text-brand-charcoal/40"
                  }`}>
                    {q.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Form */}
        <div className="bg-white border border-brand-emerald-accent/10 rounded-xl shadow-sm p-8 md:p-12">
          <h2 className="text-2xl font-serif font-black text-brand-emerald-dark uppercase tracking-wider mb-8">Request New Quotation</h2>

          {submitted && (
            <div className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl px-6 py-4 text-center font-bold text-xs uppercase tracking-wide">
              <CheckCircle className="inline mr-2" size={14} /> Your quotation request has been submitted. We'll respond within 24 hours.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "name", label: "Full Name", placeholder: "Your Name" },
                { name: "company", label: "Company Name", placeholder: "Business Name" },
                { name: "email", label: "Email Address", placeholder: "business@example.com" },
                { name: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX" },
                { name: "product", label: "Product / Fabric Type", placeholder: "e.g. Cotton Shirting, Silk Saree" },
                { name: "quantity", label: "Required Quantity", placeholder: "e.g. 500 meters" },
              ].map(({ name, label, placeholder }) => (
                <div key={name}>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">{label}</label>
                  <input
                    placeholder={placeholder}
                    {...register(name, { required: `${label} is required` })}
                    className="w-full border border-brand-linen-dark px-4 py-3.5 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold transition-all rounded-xl font-sans placeholder-brand-charcoal/30"
                  />
                  {errors[name] && <p className="mt-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors[name].message}</p>}
                </div>
              ))}
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">Special Requirements</label>
              <textarea 
                rows={3} 
                placeholder="Any specific quality, colour, or delivery requirements..." 
                {...register("notes")}
                className="w-full border border-brand-linen-dark px-4 py-3.5 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold resize-none transition-all rounded-xl font-sans placeholder-brand-charcoal/30" 
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-emerald-dark py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-60 shadow-lg shadow-brand-gold/10 cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Submit Quotation Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Quotation;
