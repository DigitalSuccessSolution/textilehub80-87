import React from 'react';
import { BarChart3, Users, Box, Zap, Map, Settings, ArrowUpRight } from 'lucide-react';

const RetailManagement = () => {
  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-primary pt-24 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4 block">B2B Dashboard Solutions</span>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">Retail Management</h1>
          <p className="text-slate-300 font-light text-lg">
            Empowering our 1.2K+ partners with real-time inventory syncing, sales analytics, and automated supply chain logistics for the 12 Collections.
          </p>
        </div>
      </section>

      {/* Dashboard Vibe Container */}
      <section className="container-custom -mt-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Side Nav (Mock) */}
          <div className="w-full md:w-64 bg-slate-50 border-r border-slate-100 p-6 hidden md:block">
            <div className="font-heading text-xl font-bold text-primary mb-8 flex items-center gap-2">
              <div className="w-6 h-6 bg-accent rounded-sm"></div> Partner Portal
            </div>
            <nav className="space-y-2">
              {['Overview', 'Inventory Map', 'Sales Analytics', 'Auto-Replenish', 'B2B Settings'].map((item, i) => (
                <div key={i} className={`px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-3 cursor-pointer transition-colors ${i === 0 ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-200'}`}>
                  {i === 0 && <BarChart3 className="w-4 h-4" />}
                  {i === 1 && <Map className="w-4 h-4" />}
                  {i === 2 && <Zap className="w-4 h-4" />}
                  {i === 3 && <Box className="w-4 h-4" />}
                  {i === 4 && <Settings className="w-4 h-4" />}
                  {item}
                </div>
              ))}
            </nav>
          </div>

          {/* Main Dashboard Area (Mock) */}
          <div className="flex-1 p-8 md:p-12 bg-slate-50/50">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h3 className="font-heading text-3xl font-bold text-primary">System Capabilities</h3>
                <p className="text-sm text-slate-500 font-light mt-1">What our integrated retail management system offers.</p>
              </div>
              <button className="bg-accent text-primary px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white border border-accent transition-colors hidden sm:block">
                Request Demo
              </button>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Network Uptime</p>
                <div className="flex items-end gap-3">
                  <p className="font-heading text-4xl font-bold text-primary">99.9%</p>
                  <span className="text-green-500 flex items-center text-xs font-bold mb-1"><ArrowUpRight className="w-3 h-3" /> SLA</span>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Inventory Sync</p>
                <div className="flex items-end gap-3">
                  <p className="font-heading text-4xl font-bold text-primary">Real-time</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Active Partners</p>
                <div className="flex items-end gap-3">
                  <p className="font-heading text-4xl font-bold text-primary">1,248</p>
                  <span className="text-green-500 flex items-center text-xs font-bold mb-1"><ArrowUpRight className="w-3 h-3" /> +12%</span>
                </div>
              </div>
            </div>

            {/* Feature List */}
            <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="border-b border-slate-100 p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                  <Box className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Automated Replenishment</h4>
                  <p className="text-xs text-slate-500 mt-1">Smart algorithms predict stockouts and trigger PoS orders automatically.</p>
                </div>
              </div>
              <div className="border-b border-slate-100 p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Advanced Sales Analytics</h4>
                  <p className="text-xs text-slate-500 mt-1">Granular breakdown of which of the 12 Collections are performing best in your region.</p>
                </div>
              </div>
              <div className="p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
                  <Users className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Multi-Store Management</h4>
                  <p className="text-xs text-slate-500 mt-1">Manage all your franchise or owned locations from a single master B2B account.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default RetailManagement;
