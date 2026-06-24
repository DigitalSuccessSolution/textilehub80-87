import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Send, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TradeEnquiry = () => {
  useSEO("Trade Enquiry", "Submit your B2B trade enquiry for bulk textile orders at Retail Textile Mall.");
  
  const { register, handleSubmit, trigger, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1); // 1 or 2

  const handleNext = async () => {
    // Validate current step fields before proceeding
    const isStep1Valid = await trigger(["companyName", "contactPerson", "phone", "email"]);
    if (isStep1Valid) {
      setStep(2);
    }
  };

  const handlePrev = () => {
    setStep(1);
  };

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Trade Enquiry Submission:", data);
    setSubmitted(true);
    setStep(1);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 transition-colors duration-500">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              B2B Sourcing Hub
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              Trade Enquiry
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-16 px-4 sm:px-8 max-w-xl mx-auto">
        
        {/* Success Banner */}
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-3xl p-6 text-center text-xs font-semibold flex items-center justify-center gap-3 shadow-md"
          >
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
            <span>✓ Enquiry submitted successfully. Our trade management team will contact you shortly.</span>
          </motion.div>
        )}

        {/* Step Progress Bar */}
        <div className="flex items-center justify-between mb-8 px-4 text-[10px] uppercase tracking-widest font-bold font-sans">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
              step >= 1 ? 'bg-brand-lavender text-white border-brand-lavender' : 'border-stone-300 text-stone-400'
            }`}>1</span>
            <span className={step === 1 ? 'text-brand-lavender' : 'text-stone-400'}>Business Contact</span>
          </div>
          <div className="flex-1 h-[2px] bg-brand-lavender/10 mx-4" />
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
              step === 2 ? 'bg-brand-lavender text-white border-brand-lavender' : 'border-stone-300 text-stone-400'
            }`}>2</span>
            <span className={step === 2 ? 'text-brand-lavender' : 'text-stone-400'}>Sourcing Needs</span>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-brand-gold/15 rounded-[2.5rem] p-8 sm:p-10 shadow-lg relative overflow-hidden text-left">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-plum mb-4 border-b border-stone-100 pb-2">
                    Step 1: Contact Information
                  </h3>
                  
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Company / Business Name</label>
                    <input
                      type="text"
                      placeholder="Your Business Name"
                      {...register("companyName", { required: "Business Name is required" })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                    />
                    {errors.companyName && <p className="mt-1 text-[10px] text-red-500">{errors.companyName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Contact Person</label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      {...register("contactPerson", { required: "Contact Person is required" })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                    />
                    {errors.contactPerson && <p className="mt-1 text-[10px] text-red-500">{errors.contactPerson.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      {...register("phone", { required: "Phone number is required" })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                    />
                    {errors.phone && <p className="mt-1 text-[10px] text-red-500">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Business Email</label>
                    <input
                      type="email"
                      placeholder="business@example.com"
                      {...register("email", { required: "Email is required" })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                    />
                    {errors.email && <p className="mt-1 text-[10px] text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full flex items-center justify-center gap-2 bg-brand-lavender hover:bg-brand-lavender-dark text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md"
                    >
                      Next Step <ArrowRight size={13} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-plum mb-4 border-b border-stone-100 pb-2">
                    Step 2: Sourcing Requirements
                  </h3>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Product / Category of Interest</label>
                    <input
                      type="text"
                      placeholder="e.g. Cotton Sarees, Linen sheets"
                      {...register("product", { required: "Product is required" })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                    />
                    {errors.product && <p className="mt-1 text-[10px] text-red-500">{errors.product.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Approximate Quantity</label>
                    <input
                      type="text"
                      placeholder="e.g. 500 meters / 200 pieces"
                      {...register("quantity")}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Business Type</label>
                    <select
                      {...register("businessType", { required: "Please select business type" })}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                    >
                      <option value="">Select Type</option>
                      <option>Retailer</option>
                      <option>Wholesaler</option>
                      <option>Manufacturer</option>
                      <option>Exporter / Importer</option>
                      <option>Designer / Boutique</option>
                      <option>Other</option>
                    </select>
                    {errors.businessType && <p className="mt-1 text-[10px] text-red-500">{errors.businessType.message}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Additional Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Describe specifications, timeline or custom prints..."
                      {...register("message")}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender resize-none transition-all"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="w-1/3 flex items-center justify-center gap-2 border border-brand-lavender/35 hover:bg-stone-50 text-brand-plum py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                    >
                      <ArrowLeft size={13} /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 flex items-center justify-center gap-2 bg-brand-lavender hover:bg-brand-lavender-dark text-white py-3.5 rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md disabled:opacity-60"
                    >
                      {isSubmitting ? "Submitting..." : (<><Send size={13} /> Submit Enquiry</>)}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </form>
        </div>

        {/* Info Strip */}
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            { label: "Response", value: "24 Hours" },
            { label: "MOQ Slabs", value: "Customizable" },
            { label: "Support", value: "Dedicated Mgr" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-brand-gold/15 rounded-2xl p-4 shadow-sm">
              <p className="text-[9px] uppercase tracking-wider text-brand-lavender font-bold mb-0.5">{label}</p>
              <p className="text-[11px] font-bold text-brand-plum font-serif">{value}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default TradeEnquiry;
