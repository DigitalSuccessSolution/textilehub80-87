import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Send } from "lucide-react";

const TradeEnquiry = () => {
  useSEO("Trade Enquiry", "Submit your B2B trade enquiry for bulk textile orders at Aurora Textile House.");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Trade Enquiry Submission:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  const fields = [
    { name: "companyName", label: "Company / Business Name", placeholder: "Your Business Name", type: "text", required: true },
    { name: "contactPerson", label: "Contact Person", placeholder: "Full Name", type: "text", required: true },
    { name: "phone", label: "Phone Number", placeholder: "+91 XXXXX XXXXX", type: "tel", required: true },
    { name: "email", label: "Business Email", placeholder: "business@example.com", type: "email", required: true },
    { name: "product", label: "Product / Category of Interest", placeholder: "e.g. Cotton Sarees, Suiting Fabric", type: "text", required: true },
    { name: "quantity", label: "Approximate Quantity", placeholder: "e.g. 500 meters / 200 pieces", type: "text", required: false },
  ];

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">B2B Business Hub</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              Trade<br />
              <span className="text-[#C29E6B] font-light italic">Enquiry</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Partner with us for premium textile sourcing. Fill out the form and our trade management team will respond within 24 hours.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[['24 Hours', 'Response Time'], ['Dedicated', 'Trade Manager'], ['B2B', 'Wholesale Pricing']].map(([v, l], i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-left hover:bg-white/8 transition-colors">
                <span className="text-sm font-serif font-bold text-white block">{v}</span>
                <span className="text-[9px] font-sans uppercase tracking-widest text-stone-400 mt-0.5 block">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-8 max-w-3xl mx-auto">

        {/* Success Banner */}
        {submitted && (
          <div className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded px-6 py-4 text-center font-medium">
            ✓ Enquiry submitted successfully. Our team will contact you shortly.
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white border border-[#2E081B]/10 rounded-3xl p-8 md:p-12 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map(({ name, label, placeholder, type, required }) => (
                <div key={name} className="text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { required: required ? `${label} is required` : false })}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] focus:border-transparent transition-all"
                  />
                  {errors[name] && <p className="mt-1 text-xs text-red-500">{errors[name].message}</p>}
                </div>
              ))}
            </div>

            {/* Business Type */}
            <div className="text-left">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Business Type</label>
              <select
                {...register("businessType", { required: "Please select business type" })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] transition-all"
              >
                <option value="">Select Type</option>
                <option>Retailer</option>
                <option>Wholesaler</option>
                <option>Manufacturer</option>
                <option>Exporter / Importer</option>
                <option>Designer / Boutique</option>
                <option>Other</option>
              </select>
              {errors.businessType && <p className="mt-1 text-xs text-red-500">{errors.businessType.message}</p>}
            </div>

            {/* Message */}
            <div className="text-left">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Additional Requirements</label>
              <textarea
                rows={4}
                placeholder="Describe your requirements, preferred delivery timelines, or any specific details..."
                {...register("message")}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-[#9C4B6E] hover:bg-[#803856] text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-60 cursor-pointer shadow-md font-sans"
            >
              {isSubmitting ? "Submitting..." : (<><Send size={16} /> Submit Trade Enquiry</>)}
            </button>
          </form>
        </div>

        {/* Info Strip */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {[
            { label: "Response Time", value: "Within 24 Hours" },
            { label: "Minimum Order", value: "As Per Category" },
            { label: "Trade Support", value: "Dedicated Manager" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white border border-[#2E081B]/10 rounded-3xl p-5 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-[#C29E6B] font-bold mb-1">{label}</p>
              <p className="text-sm font-bold text-[#2E081B] font-serif">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TradeEnquiry;
