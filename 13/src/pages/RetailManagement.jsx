import React from 'react';
import { BarChart3, Users, Box, Zap, Map, Settings, ArrowUpRight } from 'lucide-react';

const RetailManagement = () => {
  return (
    <div className="bg-background min-h-screen">
      
      {/* Unified Violet/Peach Page Header */}
      <div className="relative py-16 lg:py-24 overflow-hidden border-b border-border mb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent z-0 opacity-100"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop')] mix-blend-overlay opacity-10 bg-cover bg-center"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">Retail Management</h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm lg:text-base font-light">
            End-to-end retail solutions bridging the gap between mills and storefronts.
          </p>
        </div>
      </div>

      <div className="container-custom">
        {/* Dashboard Mockup / Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-20 border border-border">
          <div className="bg-white px-4 py-3 border-b border-border flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="mx-auto bg-muted px-32 py-1 rounded-md text-[10px] text-muted-foreground font-medium flex items-center gap-2">
              <Lock className="w-3 h-3" /> https://rms.texmart.com
            </div>
          </div>
          <div className="bg-muted p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              {/* Sidebar */}
              <div className="bg-white rounded-xl shadow-sm border border-border p-6 hidden md:block">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">T</div>
                  <span className="font-heading font-bold text-primary">RMS Portal</span>
                </div>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  <li className="text-primary flex items-center gap-3"><BarChart3 className="w-4 h-4" /> Overview</li>
                  <li className="flex items-center gap-3"><Box className="w-4 h-4" /> Inventory</li>
                  <li className="flex items-center gap-3"><Users className="w-4 h-4" /> Staff</li>
                  <li className="flex items-center gap-3"><Map className="w-4 h-4" /> Logistics</li>
                  <li className="flex items-center gap-3 pt-8 mt-8 border-t border-border"><Settings className="w-4 h-4" /> Settings</li>
                </ul>
              </div>
              
              {/* Main Dash Area */}
              <div className="md:col-span-3 space-y-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-2 block">Monthly Revenue</span>
                    <span className="text-2xl font-bold text-primary">₹2.4M</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-2 block">Active Orders</span>
                    <span className="text-2xl font-bold text-primary">142</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-2 block">Stock Level</span>
                    <span className="text-2xl font-bold text-accent">Low</span>
                  </div>
                </div>
                <div className="bg-white h-48 rounded-xl shadow-sm border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-muted via-white to-white"></div>
                  <BarChart3 className="w-16 h-16 text-muted-foreground/20 relative z-10" />
                  <span className="absolute bottom-4 left-6 text-xs font-bold uppercase tracking-widest text-primary">Sales Trajectory</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary">Powerful Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary">
              <Box className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary text-lg mb-3">Smart Inventory Control</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-light">
              Real-time synchronization across multiple warehouses and retail outlets. Automated re-order alerts when stock falls below defined thresholds.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary">
              <Map className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary text-lg mb-3">Logistics Tracking</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-light">
              Live GPS tracking for bulk shipments. Automated dispatch notifications and digital proof of delivery integration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-primary text-lg mb-3">Sales Analytics</h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-light">
              AI-driven insights into top-performing collections, seasonal trends, and slow-moving stock identification.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-primary text-primary-foreground rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="relative z-10">
            <h3 className="font-heading text-3xl font-bold mb-4">Ready to upgrade your retail operations?</h3>
            <p className="text-white/70 text-sm font-light mb-8 max-w-lg mx-auto">
              Our RMS is available exclusively to certified Texmart partners. Contact your dedicated account manager for a demo.
            </p>
            <a href="/trade-enquiry" className="bg-white text-primary px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all shadow-lg inline-flex items-center gap-2">
              Request RMS Access <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

// Mock Lock Icon for URL bar
const Lock = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);

export default RetailManagement;
