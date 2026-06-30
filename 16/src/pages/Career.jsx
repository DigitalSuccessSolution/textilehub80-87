import React from 'react';
import { Briefcase, ArrowRight, CheckCircle, Users, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Career = () => {
  const jobs = [
    { id: 1, title: 'Senior B2B Sales Executive', department: 'Sales', location: 'Surat, Gujarat', type: 'Full-time' },
    { id: 2, title: 'Textile Supply Chain Manager', department: 'Operations', location: 'Surat, Gujarat', type: 'Full-time' },
    { id: 3, title: 'Digital Platform Coordinator', department: 'IT / Operations', location: 'Mumbai / Remote', type: 'Full-time' },
    { id: 4, title: 'Quality Assurance Inspector', department: 'Quality Control', location: 'Surat, Gujarat', type: 'Full-time' }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/80 z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Careers at Aurora</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            Join our mission to transform the textile supply chain.
          </p>
        </div>
      </div>
      <section className="container-custom py-12 lg:py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <span className="text-accent font-bold  tracking-[0.2em] text-[10px] mb-4 block">Join Our Team</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Build the Future of <span className="italic font-light">Textile Retail</span>
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md font-light">
            We're looking for passionate individuals who understand heritage and embrace innovation. Join us in transforming how textiles are traded globally.
          </p>
          <a href="#open-positions" className="bg-primary text-white px-8 py-3.5 rounded-full text-[10px] font-bold  tracking-widest inline-flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg">
            View Openings <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop" 
            alt="Team Meeting" 
            className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      </section>

      {/* Why Join Us */}
      <section className="bg-primary text-primary-foreground py-20 mt-12">
        <div className="container-custom text-center">
          <span className="text-accent font-bold  tracking-[0.2em] text-[10px] mb-4 block">Life at Aurora</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-16">Why Build Your Career With Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-white mb-3">Innovation Led</h3>
              <p className="text-white/70 text-xs leading-relaxed font-light max-w-xs">
                Work at the intersection of traditional textile manufacturing and cutting-edge B2B digital platforms.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-white mb-3">Collaborative Culture</h3>
              <p className="text-white/70 text-xs leading-relaxed font-light max-w-xs">
                A flat hierarchy that values ideas over designations. We believe in growing together.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-6">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg text-white mb-3">Comprehensive Benefits</h3>
              <p className="text-white/70 text-xs leading-relaxed font-light max-w-xs">
                Competitive compensation, health insurance, performance bonuses, and continuous learning programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="container-custom py-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border pb-8 mb-12">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary">Current Openings</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-card border border-border p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:shadow-md hover:border-accent/20 transition-all group">
              <div>
                <span className="inline-block bg-muted text-primary text-[9px] font-bold  tracking-widest px-3 py-1 rounded-full mb-3">
                  {job.department}
                </span>
                <h3 className="font-bold text-xl text-primary group-hover:text-accent transition-colors mb-2">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-xs font-light text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-primary/50" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5 text-primary/50" /> {job.type}</span>
                </div>
              </div>
              <button className="text-[10px] font-bold  tracking-widest text-primary border border-primary px-6 py-2.5 rounded-full hover:bg-primary hover:text-white transition-colors shrink-0">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Spontaneous Application */}
        <div className="mt-12 bg-muted p-8 rounded-2xl border border-border text-center">
          <p className="text-primary font-bold mb-2">Don't see a fit?</p>
          <p className="text-xs text-muted-foreground font-light mb-4">Send your resume to <a href="mailto:careers@auroramall.com" className="text-accent hover:underline">careers@auroramall.com</a> and we'll keep you in mind for future roles.</p>
        </div>
      </section>

    </div>
  );
};

export default Career;
