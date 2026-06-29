import React from 'react';
import { BarChart3, Users, Box, Zap, Map, Settings, CheckCircle, ArrowUpRight, ShieldCheck, Globe, RefreshCw } from 'lucide-react';

const features = [
  {
    icon: <Box className="w-6 h-6 text-accent" />,
    title: 'Automated Replenishment',
    desc: 'Smart algorithms predict stockouts and automatically trigger purchase orders before shelves run dry.',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-accent" />,
    title: 'Advanced Sales Analytics',
    desc: 'Granular breakdowns of which of the 12 Collections perform best across your regions and store locations.',
    color: 'bg-purple-50 border-purple-100',
    iconBg: 'bg-purple-100',
  },
  {
    icon: <Users className="w-6 h-6 text-accent" />,
    title: 'Multi-Store Management',
    desc: 'Manage all your franchise or owned locations from a single master B2B partner account.',
    color: 'bg-orange-50 border-orange-100',
    iconBg: 'bg-orange-100',
  },
  {
    icon: <Map className="w-6 h-6 text-accent" />,
    title: 'Live Inventory Map',
    desc: 'A real-time geo-visual dashboard showing stock levels across your entire distribution network.',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100',
  },
  {
    icon: <Zap className="w-6 h-6 text-accent" />,
    title: 'Real-Time Sync',
    desc: 'Inventory data syncs across all connected warehouses and retail points in under 500ms.',
    color: 'bg-yellow-50 border-yellow-100',
    iconBg: 'bg-yellow-100',
  },
  {
    icon: <Settings className="w-6 h-6 text-accent" />,
    title: 'Custom B2B Settings',
    desc: 'Tailor pricing tiers, reorder thresholds, and partner-specific discount rules from one control panel.',
    color: 'bg-slate-50 border-slate-100',
    iconBg: 'bg-slate-200',
  },
];

const stats = [
  { label: 'Network Uptime', value: '99.9%', sub: 'SLA Guaranteed', icon: <ShieldCheck className="w-5 h-5 text-accent" /> },
  { label: 'Inventory Sync', value: 'Real-time', sub: 'Under 500ms', icon: <RefreshCw className="w-5 h-5 text-accent" /> },
  { label: 'Active Partners', value: '1,248', sub: '+12% this quarter', icon: <Globe className="w-5 h-5 text-accent" /> },
];

const RetailManagement = () => {
  return (
    <div className="bg-background min-h-screen pb-24">

      {/* Hero Section */}
      <section className="bg-primary pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-primary to-primary"></div>
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-5">
            Partner Portal
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
            Retail Management System
          </h1>
          <p className="text-slate-300 font-light text-lg max-w-2xl mx-auto leading-relaxed">
            Empowering our 1,200+ partners with real-time inventory syncing, sales analytics, and automated supply chain logistics across all 12 Collections.
          </p>

        </div>
      </section>



      {/* Feature Cards Grid */}
      <section className="py-20 px-4">
        <div className="container-custom">


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div
                key={i}
                className={`border rounded-xl p-8 flex flex-col gap-5 hover:shadow-lg transition-shadow duration-300 ${feat.color}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feat.iconBg} shadow-sm`}>
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary mb-2">{feat.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">{feat.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 tracking-wider mt-auto">
                  <CheckCircle className="w-3.5 h-3.5" /> Included in Partner Access
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default RetailManagement;
