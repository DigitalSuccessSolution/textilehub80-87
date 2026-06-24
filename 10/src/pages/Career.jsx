import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, MapPin, ArrowRight } from 'lucide-react';

const Career = () => {
  const [openJob, setOpenJob] = useState(null);

  const jobs = [
    {
      id: 1, title: 'Senior Textile Engineer', dept: 'Production', location: 'Surat, Gujarat', type: 'Full-time',
      desc: 'Oversee the quality control and operational efficiency of our automated Jacquard looms.'
    },
    {
      id: 2, title: 'B2B Sales Director', dept: 'Sales', location: 'Mumbai, Maharashtra', type: 'Full-time',
      desc: 'Lead the acquisition of tier-1 retail partners and manage the distribution of our 12 Collections.'
    },
    {
      id: 3, title: 'Supply Chain Analyst', dept: 'Logistics', location: 'Surat, Gujarat', type: 'Full-time',
      desc: 'Optimize warehouse operations and coordinate dispatch logistics for bulk B2B orders.'
    },
    {
      id: 4, title: 'Textile Designer', dept: 'Design Studio', location: 'Surat, Gujarat', type: 'Full-time',
      desc: 'Forecast trends and create weave patterns for our upcoming seasonal collections.'
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      
      {/* Split Hero */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-primary p-12 md:p-24 flex flex-col justify-center text-primary-foreground min-h-[60vh]">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] mb-6 block">Join The Legacy</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">Weave Your Career.</h1>
          <p className="text-slate-300 font-light text-lg max-w-md leading-relaxed">
            Be part of a 40-year legacy that powers the inventory of over 1,200 luxury retail brands globally.
          </p>
        </div>
        <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-[60vh] relative">
          <img 
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" 
            alt="Team Meeting" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Perks Grid */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">Why WeavesMart?</h2>
            <p className="text-slate-500 font-light">A culture of excellence, innovation, and mutual growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 border border-slate-100 text-center group hover:bg-primary transition-colors duration-300">
              <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">Industry Leaders</h3>
              <p className="text-sm font-light text-slate-500 group-hover:text-slate-300 transition-colors">Work with the finest looms and manage the distribution of premium 12 collections.</p>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-100 text-center group hover:bg-primary transition-colors duration-300">
              <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">Growth Trajectory</h3>
              <p className="text-sm font-light text-slate-500 group-hover:text-slate-300 transition-colors">Clear progression paths in a rapidly expanding global B2B network.</p>
            </div>
            <div className="bg-slate-50 p-8 border border-slate-100 text-center group hover:bg-primary transition-colors duration-300">
              <h3 className="font-heading text-xl font-bold text-primary mb-3 group-hover:text-white transition-colors">Comprehensive Benefits</h3>
              <p className="text-sm font-light text-slate-500 group-hover:text-slate-300 transition-colors">Health coverage, performance bonuses, and continuous learning programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Accordion */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8 text-accent" />
            <h2 className="font-heading text-4xl font-bold text-primary">Open Positions</h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenJob(openJob === job.id ? null : job.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <h3 className="font-bold text-primary text-lg">{job.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-[10px] uppercase tracking-widest font-bold text-slate-400">
                      <span>{job.dept}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                    </div>
                  </div>
                  <div className="bg-slate-100 p-2 rounded-full text-slate-500">
                    {openJob === job.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                
                {openJob === job.id && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                    <p className="text-sm font-light text-slate-600 mb-6 leading-relaxed">
                      {job.desc}
                    </p>
                    <button className="bg-primary text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center gap-2">
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Career;
