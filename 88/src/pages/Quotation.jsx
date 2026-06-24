import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Send, FileText } from "lucide-react";

const Quotation = () => {
  useSEO("e-quotation Portal", "Request an official digital quotation for bulk textile and garment procurement at Aurora Textile House.");
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("e-quotation Request Submission:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] text-[#24151D] pb-20">
      {/* Hero Banner */}
      <section className="pt-36 pb-20 px-6 sm:px-12 lg:px-16 bg-[#2E081B] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full bg-[#9C4B6E]/10 blur-3xl pointer-events-none" />
        <div className="max-w-[1600px] mx-auto relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-5 text-left">
            <div className="flex items-center gap-2">
              <span className="text-[#C29E6B] text-xs">✦</span>
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#C29E6B]">Digital Procurement</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.05] tracking-tight">
              <span className="lowercase">e-quotation</span><br />
              <span className="text-[#C29E6B] font-light italic text-3xl">Portal</span>
            </h1>
            <p className="text-sm text-stone-300 font-light leading-relaxed max-w-lg">
              Request official price quotations for your custom retail or wholesale orders. SSL verified & secure submissions.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            {[['PDF Quote', 'Sent via Email'], ['SSL Secure', 'Verified Submission'], ['24 Hours', 'Response Time']].map(([v, l], i) => (
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
            ✓ Quotation request submitted. Our accounts team will send a PDF quote via email shortly.
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white border border-[#2E081B]/10 rounded-3xl p-8 md:p-12 shadow-md">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder="Business Name"
                  {...register("companyName", { required: "Company Name is required" })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] transition-all"
                />
                {errors.companyName && <p className="mt-1 text-xs text-red-500">{errors.companyName.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">GSTIN / Tax ID (Optional)</label>
                <input
                  type="text"
                  placeholder="GST Number"
                  {...register("taxId")}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Official Email</label>
                <input
                  type="email"
                  placeholder="procurement@company.com"
                  {...register("email", { required: "Email is required" })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] transition-all"
                />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] transition-all"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Product categories checkbox */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">Categories Needed</label>
              <div className="grid grid-cols-2 gap-3 text-xs">
                {["Sarees", "Kurtis", "Leggings", "Dress Suits", "Suiting & Shirting", "Bedsheets & Linen", "Home Upholstery", "Hosiery Items"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" value={cat} {...register("categories")} className="rounded text-[#C29E6B] focus:ring-[#C29E6B]" />
                    <span className="font-sans font-light">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity requirements */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">Volume Requirements & Details</label>
              <textarea
                rows={4}
                placeholder="Mention specific styles, counts, quantities, or delivery expectations..."
                {...register("details", { required: "Please specify details" })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm text-[#24151D] bg-[#FAF5F0]/30 focus:outline-none focus:ring-2 focus:ring-[#C29E6B] resize-none transition-all"
              />
              {errors.details && <p className="mt-1 text-xs text-red-500">{errors.details.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-[#9C4B6E] hover:bg-[#803856] text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 disabled:opacity-60 cursor-pointer shadow-md"
            >
              {isSubmitting ? "Generating..." : (<><FileText size={16} /> Request e-quotation</>)}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quotation;
