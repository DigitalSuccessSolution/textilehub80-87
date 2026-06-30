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
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Header */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
          <div className="space-y-4">
            <span className="text-[10px] font-sans font-bold  tracking-[0.35em] text-[#C29E6B] block">
              B2B BUSINESS HUB
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight  text-white leading-none">
              Trade Enquiry
            </h1>
          </div>
          
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Partner with us for premium textile sourcing at Aurora Textile House. Fill out the form below and our trade management team will respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Success Banner */}
        {submitted && (
          <div className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl px-6 py-4 text-center font-medium shadow-sm font-sans text-xs">
            ✓ Enquiry submitted successfully. Our team will contact you shortly.
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white border border-[#10211F]/5 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map(({ name, label, placeholder, type, required }) => (
                <div key={name} className="text-left space-y-2">
                  <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { required: required ? `${label} is required` : false })}
                    className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-sans font-light"
                  />
                  {errors[name] && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors[name].message}</p>}
                </div>
              ))}
            </div>

            {/* Business Type */}
            <div className="text-left space-y-2">
              <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">Business Type</label>
              <select
                {...register("businessType", { required: "Please select business type" })}
                className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-sans font-light"
              >
                <option value="">Select Type</option>
                <option>Retailer</option>
                <option>Wholesaler</option>
                <option>Manufacturer</option>
                <option>Exporter / Importer</option>
                <option>Designer / Boutique</option>
                <option>Other</option>
              </select>
              {errors.businessType && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors.businessType.message}</p>}
            </div>

            {/* Message */}
            <div className="text-left space-y-2">
              <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">Additional Requirements</label>
              <textarea
                rows={4}
                placeholder="Describe your requirements, preferred delivery timelines, or any specific details..."
                {...register("message")}
                className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] resize-none transition-all font-sans font-light"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-[#10211F] hover:bg-[#C29E6B] text-white py-4 rounded-full font-bold text-xs  tracking-widest transition-all duration-300 disabled:opacity-60 cursor-pointer shadow-md font-sans"
            >
              {isSubmitting ? "Submitting..." : (<><Send size={14} /> Submit Trade Enquiry</>)}
            </button>
          </form>
        </div>

        {/* Info Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Response Time", value: "Within 24 Hours" },
            { label: "Minimum Order", value: "As Per Category" },
            { label: "Trade Support", value: "Dedicated Manager" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-[#FAF4EE] border border-[#10211F]/5 rounded-[2rem] p-6 shadow-sm">
              <p className="text-[9px]  tracking-widest text-[#C29E6B] font-bold mb-1">{label}</p>
              <p className="text-sm font-bold text-[#10211F] font-serif  tracking-wider">{value}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TradeEnquiry;
