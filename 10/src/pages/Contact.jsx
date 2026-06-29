import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-background min-h-screen pb-0">

      {/* Page Header */}
      <div className="bg-primary pt-24 pb-16 px-4">
        <div className="container-custom max-w-4xl text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-slate-300 font-light text-lg max-w-xl mx-auto">
            Reach out to our B2B coordinators to request private viewings of our 12 collections, or discuss custom manufacturing requirements.
          </p>
        </div>
      </div>

      {/* Full-Width Map */}
      <div className="w-full h-[50vh] min-h-[320px]">
        <iframe
          title="WeavesMart Surat Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.012356123456!2d72.825123!3d21.192345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f123456789b%3A0x123456789b123456!2sRing+Road%2C+Surat%2C+Gujarat!5e0!3m2!1sen!2sin!4v1592345678901!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Details Panel */}
      <div className="bg-white border-t border-slate-100 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Address */}
            <div className="flex flex-col items-start gap-4 p-6 bg-slate-50 border border-slate-100 hover:border-accent/40 transition-colors rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary mb-1">Headquarters</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Textile Trade Tower, Ring Road<br />Surat, Gujarat — 395002
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-start gap-4 p-6 bg-slate-50 border border-slate-100 hover:border-accent/40 transition-colors rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary mb-1">Direct Line</h4>
                <a
                  href="tel:+919876543210"
                  className="text-xs text-slate-500 font-light hover:text-accent transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col items-start gap-4 p-6 bg-slate-50 border border-slate-100 hover:border-accent/40 transition-colors rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary mb-1">Email</h4>
                <a
                  href="mailto:info@weavesmart.com"
                  className="text-xs text-slate-500 font-light hover:text-accent transition-colors"
                >
                  info@weavesmart.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-start gap-4 p-6 bg-slate-50 border border-slate-100 hover:border-accent/40 transition-colors rounded-lg">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-primary mb-1">Business Hours</h4>
                <p className="text-xs text-slate-500 font-light leading-relaxed">
                  Mon – Sat<br />09:30 AM – 07:00 PM IST
                </p>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/trade-enquiry"
              className="inline-flex items-center gap-2 bg-primary hover:bg-accent text-white hover:text-primary px-10 py-4 text-xs font-bold tracking-wider transition-colors duration-300"
            >
              Submit Trade Enquiry <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Contact;
