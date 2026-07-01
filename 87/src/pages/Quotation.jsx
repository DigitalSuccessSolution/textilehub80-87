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
    <div className="min-h-screen bg-[#FAF6F2] text-[#182220] pb-24">
      {/* Hero Header */}
      <section className="pt-44 pb-20 bg-[#10211F] text-white px-6 sm:px-12 lg:px-16 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#C29E6B_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-[1600px] mx-auto relative flex flex-col md:flex-row md:items-end justify-between gap-8 z-10">
          <div className="space-y-4">
            <span className="text-[10px] font-sans font-bold  tracking-[0.35em] text-[#C29E6B] block">
              DIGITAL PROCUREMENT
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight  text-white leading-none">
              <span className="" style={{ textTransform: '' }}>e-Quotation</span>
            </h1>
          </div>
          
          <div className="max-w-md border-l border-[#C29E6B]/40 pl-6 py-2">
            <p className="text-stone-300 text-xs sm:text-sm font-sans font-light leading-relaxed">
              Request official price quotations for your custom retail or wholesale orders. Secure SSL verified submissions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-8 max-w-4xl mx-auto">
        {/* Success Banner */}
        {submitted && (
          <div className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl px-6 py-4 text-center font-medium shadow-sm font-sans text-xs">
            ✓ Quotation request submitted. Our accounts team will send a PDF quote via email shortly.
          </div>
        )}

        {/* Recent Quotations List */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif text-[#10211F] mb-8 text-center">Recent Quotations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { id: 1, title: "Bulk Silk Sarees Order", desc: "Quotation for 500 Banarasi Silk Sarees.", date: "July 01, 2026" },
              { id: 2, title: "Summer Kurtis Supply", desc: "Quotation for summer linen and cotton kurtis.", date: "June 25, 2026" },
              { id: 3, title: "Hotel Linen Replenishment", desc: "Quotation for 1000 premium bedsheets.", date: "June 18, 2026" },
              { id: 4, title: "Wedding Suiting Fabrics", desc: "Quotation for premium suiting materials.", date: "June 10, 2026" }
            ].map(quote => (
              <div key={quote.id} className="bg-white p-6 rounded-[2rem] border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <h3 className="font-serif text-lg font-bold text-[#10211F] mb-2">{quote.title}</h3>
                <p className="text-xs text-stone-500 font-sans leading-relaxed mb-4">{quote.desc}</p>
                <div className="text-[10px] text-stone-400 font-sans">{quote.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-[#10211F]/5 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left space-y-2">
                <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">Company Name</label>
                <input
                  type="text"
                  placeholder="Business Name"
                  {...register("companyName", { required: "Company Name is required" })}
                  className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-sans font-light"
                />
                {errors.companyName && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors.companyName.message}</p>}
              </div>

              <div className="text-left space-y-2">
                <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">GSTIN / Tax ID (Optional)</label>
                <input
                  type="text"
                  placeholder="GST Number"
                  {...register("taxId")}
                  className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-sans font-light"
                />
              </div>

              <div className="text-left space-y-2">
                <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">Official Email</label>
                <input
                  type="email"
                  placeholder="procurement@company.com"
                  {...register("email", { required: "Email is required" })}
                  className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-sans font-light"
                />
                {errors.email && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors.email.message}</p>}
              </div>

              <div className="text-left space-y-2">
                <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">Phone / WhatsApp</label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] transition-all font-sans font-light"
                />
                {errors.phone && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors.phone.message}</p>}
              </div>
            </div>

            {/* Product categories checkbox */}
            <div className="text-left">
              <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F] mb-4">Categories Needed</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                {["Sarees", "Kurtis", "Leggings", "Dress Suits", "Suiting & Shirting", "Bedsheets & Linen", "Home Upholstery", "Hosiery Items"].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" value={cat} {...register("categories")} className="rounded text-[#C29E6B] focus:ring-[#C29E6B] border-stone-300" />
                    <span className="font-sans font-light text-stone-600 group-hover:text-[#10211F] transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity requirements */}
            <div className="text-left space-y-2">
              <label className="block text-[10px] font-sans font-bold  tracking-wider text-[#10211F]">Volume Requirements & Details</label>
              <textarea
                rows={4}
                placeholder="Mention specific styles, counts, quantities, or delivery expectations..."
                {...register("details", { required: "Please specify details" })}
                className="w-full border border-stone-200 rounded-2xl px-5 py-3.5 text-xs text-[#182220] bg-[#FAF6F2]/30 focus:outline-none focus:ring-1 focus:ring-[#C29E6B] focus:border-[#C29E6B] resize-none transition-all font-sans font-light"
              />
              {errors.details && <p className="mt-1 text-[10px] text-red-500 font-sans">{errors.details.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-3 bg-[#10211F] hover:bg-[#C29E6B] text-white py-4 rounded-full font-bold text-xs  tracking-widest transition-all duration-300 disabled:opacity-60 cursor-pointer shadow-md font-sans"
            >
              {isSubmitting ? "Generating..." : (<><FileText size={14} /> Request e-Quotation</>)}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Quotation;
