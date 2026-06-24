import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Send, Building2, Phone, Mail, Package } from "lucide-react";

const TradeEnquiry = () => {
  useSEO({ title: "Trade Enquiry | Kaaya Fabrics", description: "Submit your B2B trade enquiry for bulk textile orders." });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Trade Enquiry:", data);
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
    <section className="min-h-screen bg-brand-linen pt-20 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center space-y-4">
          <p className="text-[11px] uppercase tracking-[0.35em] text-brand-gold font-bold">B2B Business</p>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-charcoal uppercase leading-none">
            Trade Enquiry
          </h1>
          <div className="w-16 h-[1.5px] bg-brand-gold mx-auto my-4"></div>
          <p className="text-brand-charcoal/60 text-xs md:text-sm max-w-xl mx-auto leading-relaxed font-sans font-light">
            Partner with us for premium textile sourcing. Fill out the form below and our trade team will respond within 24 hours.
          </p>
        </div>

        {/* Success Banner */}
        {submitted && (
          <div className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl px-6 py-4 text-center font-bold text-xs uppercase tracking-wider">
            ✓ Enquiry submitted successfully. Our team will contact you shortly.
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white border border-brand-emerald-accent/10 rounded-xl shadow-sm p-8 md:p-12">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map(({ name, label, placeholder, type, required }) => (
                <div key={name}>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    {...register(name, { required: required ? `${label} is required` : false })}
                    className="w-full border border-brand-linen-dark px-4 py-3.5 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold transition-all rounded-xl font-sans placeholder-brand-charcoal/30"
                  />
                  {errors[name] && <p className="mt-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors[name].message}</p>}
                </div>
              ))}
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">Business Type</label>
              <select
                {...register("businessType", { required: "Please select business type" })}
                className="w-full border border-brand-linen-dark px-4 py-3.5 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold transition-all rounded-xl font-bold placeholder-brand-charcoal/30"
              >
                <option value="">Select Type</option>
                <option>Retailer</option>
                <option>Wholesaler</option>
                <option>Manufacturer</option>
                <option>Exporter / Importer</option>
                <option>Designer / Boutique</option>
                <option>Other</option>
              </select>
              {errors.businessType && <p className="mt-1.5 text-[10px] font-bold text-red-500 uppercase tracking-wide">{errors.businessType.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-charcoal/60 mb-2">Additional Requirements</label>
              <textarea
                rows={4}
                placeholder="Describe your requirements, preferred delivery timelines, or any specific details..."
                {...register("message")}
                className="w-full border border-brand-linen-dark px-4 py-3.5 text-xs text-brand-charcoal bg-brand-linen/30 focus:outline-none focus:border-brand-gold resize-none transition-all rounded-xl font-sans placeholder-brand-charcoal/30"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-gold-hover text-brand-emerald-dark py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 disabled:opacity-60 shadow-lg shadow-brand-gold/10 cursor-pointer"
            >
              {isSubmitting ? "Submitting..." : "Submit Trade Enquiry"}
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
            <div key={label} className="bg-white border border-brand-emerald-accent/5 rounded-xl p-5 shadow-sm">
              <p className="text-[9px] uppercase tracking-widest text-brand-gold font-bold mb-1">{label}</p>
              <p className="text-xs font-bold text-brand-charcoal uppercase">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradeEnquiry;
