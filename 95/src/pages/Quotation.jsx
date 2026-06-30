import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import useSEO from "../hooks/useSEO";
import { Send, FileText, Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Quotation = () => {
  useSEO("e-Quotation Portal", "Request an official digital quotation for bulk textile and garment procurement at Retail Textile Mall.");

  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      companyName: "Your Sourcing Firm Ltd",
      email: "procurement@yourcompany.com",
      phone: "+91 98765 43210",
      taxId: "22AAAAA1111A1Z1",
      categories: ["Sarees", "Kurtis"],
      details: "Requesting catalog pricing for initial batch of handloom collections."
    }
  });

  const [submitted, setSubmitted] = useState(false);

  // Watch form fields in real-time to render interactive live preview
  const companyName = useWatch({ control, name: "companyName" });
  const email = useWatch({ control, name: "email" });
  const phone = useWatch({ control, name: "phone" });
  const taxId = useWatch({ control, name: "taxId" });
  const categories = useWatch({ control, name: "categories" }) || [];
  const details = useWatch({ control, name: "details" });

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1200));
    console.log("e-Quotation Request Submission:", data);
    setSubmitted(true);
    reset({
      companyName: "",
      email: "",
      phone: "",
      taxId: "",
      categories: [],
      details: ""
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-plum pb-24 transition-colors duration-500">      {/* ── Page Hero Header ── */}
      <section className="relative pt-36 pb-16 bg-brand-cream border-b border-brand-gold/15 transition-colors duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-lavender/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10 text-left">
          <div className="space-y-3">
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.35em] text-brand-lavender block">
              Digital Procurement
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black uppercase text-brand-plum tracking-tight leading-tight">
              <span className="lowercase font-serif text-brand-lavender">e</span>-Quotation
            </h1>
            <div className="w-12 h-0.5 bg-brand-lavender" />
          </div>
          <div className="text-[10px] font-sans text-stone-400 uppercase tracking-widest bg-white/60 border border-brand-gold/10 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            SINCE 1998 • PREMIUM WEAVES
          </div>
        </div>
      </section>

      {/* ── Main Content Grid (Dual Column) ── */}
      <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto">

        {/* Success Banner */}
        {submitted && (
          <div className="mb-8 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-3xl p-6 text-center text-xs font-semibold flex items-center justify-center gap-2 shadow-sm">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <span>✓ Quotation request submitted. Our accounts desk will dispatch the final PDF quote via email shortly.</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Input Form Form */}
          <div className="lg:col-span-7 bg-brand-light border border-brand-gold/15 rounded-[2.5rem] p-8 sm:p-10 shadow-lg text-left">
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-brand-plum mb-6 pb-2 border-b border-brand-gold/10 flex items-center gap-2">
              <FileText size={16} className="text-brand-lavender" /> Request Details
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your Business Name"
                    {...register("companyName", { required: "Company Name is required" })}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                  />
                  {errors.companyName && <p className="mt-1 text-[10px] text-red-500">{errors.companyName.message}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">GSTIN / Tax ID (Optional)</label>
                  <input
                    type="text"
                    placeholder="GST Number"
                    {...register("taxId")}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Official Email</label>
                  <input
                    type="email"
                    placeholder="procurement@company.com"
                    {...register("email", { required: "Email is required" })}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                  />
                  {errors.email && <p className="mt-1 text-[10px] text-red-500">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", { required: "Phone is required" })}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender transition-all"
                  />
                  {errors.phone && <p className="mt-1 text-[10px] text-red-500">{errors.phone.message}</p>}
                </div>
              </div>

              {/* Product categories checklist */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-3">Categories Needed</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  {["Sarees", "Kurtis", "Leggings", "Dress Suits", "Suiting", "Shirting", "Bedsheets", "Upholstery"].map((cat) => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        value={cat}
                        {...register("categories")}
                        className="rounded border-stone-300 text-brand-lavender focus:ring-brand-lavender w-4 h-4 cursor-pointer"
                      />
                      <span className="font-sans font-light text-[11px] text-stone-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity requirements */}
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-1.5">Volume Requirements & Details</label>
                <textarea
                  rows={3}
                  placeholder="Mention specific styles, counts, quantities, or delivery expectations..."
                  {...register("details", { required: "Please specify details" })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-xs text-brand-plum bg-brand-cream/30 focus:outline-none focus:ring-2 focus:ring-brand-lavender resize-none transition-all"
                />
                {errors.details && <p className="mt-1 text-[10px] text-red-500">{errors.details.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 bg-brand-lavender hover:bg-brand-lavender-dark text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all cursor-pointer shadow-md disabled:opacity-60"
              >
                {isSubmitting ? "Generating..." : (<><Send size={14} /> Request <span className="lowercase font-serif">e</span>-<span className="uppercase font-serif">quotation</span></>)}
              </button>
            </form>
          </div>

          {/* Right: Live Interactive PDF Preview Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 w-full">
            <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-brand-lavender mb-3 text-left">
              Live PDF Document Preview
            </h4>

            {/* Document Frame Mockup (Flexible min-height for better text spacing and visibility) */}
            <div className="bg-brand-light border border-brand-gold/15 rounded-[2rem] shadow-2xl p-8 relative min-h-[550px] overflow-hidden text-left flex flex-col justify-between font-sans">

              {/* Draft Stamp Overlay */}
              <div className="absolute top-36 left-1/2 -translate-x-1/2 -rotate-12 border-4 border-dashed border-brand-lavender/10 text-brand-lavender/10 font-sans font-black text-3xl tracking-widest uppercase py-3 px-6 pointer-events-none select-none">
                Live Draft Preview
              </div>

              {/* PDF Header block */}
              <div>
                <div className="flex justify-between items-start border-b border-brand-lavender/15 pb-4 mb-5">
                  <div className="flex flex-col leading-none">
                    <span className="font-serif text-base sm:text-lg font-black uppercase text-brand-plum">RETAIL TEXTILE MALL</span>
                    <span className="text-[11px] tracking-widest uppercase text-brand-lavender font-bold mt-1">Sourcing Solutions</span>
                  </div>
                  <div className="text-right flex flex-col text-xs text-stone-500">
                    <span className="font-bold text-brand-plum">e-QUO-2026-990</span>
                    <span>Date: {new Date().toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Sender/Recipient details */}
                <div className="grid grid-cols-2 gap-4 text-xs mb-5">
                  <div>
                    <p className="font-bold text-stone-500 uppercase tracking-wider mb-1">PROCURER INFO</p>
                    <p className="font-bold text-brand-plum text-sm truncate">{companyName || "[Your Company Name]"}</p>
                    <p className="text-stone-500 truncate">{email || "procurement@email.com"}</p>
                    <p className="text-stone-500">{phone || "+91 XXXXX XXXXX"}</p>
                    {taxId && <p className="text-stone-500">GST: {taxId}</p>}
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-stone-500 uppercase tracking-wider mb-1">SUPPLIER INFO</p>
                    <p className="font-bold text-brand-plum text-sm">Retail Textile Mall</p>
                    <p className="text-stone-500">Kolkata, West Bengal, India</p>
                    <p className="text-stone-500">care@retailtextilemall.com</p>
                  </div>
                </div>

                {/* Table of selected categories */}
                <div className="border border-stone-200 rounded-2xl overflow-hidden mb-5">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-brand-cream text-xs font-bold text-brand-plum border-b border-stone-200">
                        <th className="p-3 w-12">S.No</th>
                        <th className="p-3">Requested Item Category</th>
                        <th className="p-3 text-right">Procure Base</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-stone-600">
                      {categories.length > 0 ? (
                        categories.map((cat, idx) => (
                          <tr key={cat} className="border-b border-stone-100 last:border-0">
                            <td className="p-3 font-mono">0{idx + 1}</td>
                            <td className="p-3 font-bold text-brand-plum">{cat}</td>
                            <td className="p-3 text-right text-brand-lavender font-bold">Bulk Enquiry</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={3} className="p-5 text-center italic text-stone-400">
                            Select category items on the left to populate table...
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Requirements info text */}
                <div className="bg-brand-cream/50 border border-brand-gold/10 p-4 rounded-2xl">
                  <p className="font-bold text-xs uppercase tracking-wider text-brand-lavender mb-1">Enquiry Specifications Details</p>
                  <p className="text-sm leading-relaxed text-stone-600 italic whitespace-pre-wrap truncate max-h-16 overflow-hidden">
                    "{details || "No additional requirements specified yet..."}"
                  </p>
                </div>
              </div>

              {/* PDF Footer signatures */}
              <div className="border-t border-stone-100 pt-4 mt-5 flex justify-between items-center text-xs">
                <div className="flex items-center gap-1.5 text-stone-500">
                  <FileText size={14} className="text-brand-lavender" />
                  <span>Verified SSL procurement database</span>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Downloading PDF Copy...")}
                  className="flex items-center gap-1 text-xs uppercase font-black text-brand-lavender tracking-wider hover:text-brand-plum transition-colors cursor-pointer"
                >
                  <Download size={13} /> Download PDF
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Quotation;
