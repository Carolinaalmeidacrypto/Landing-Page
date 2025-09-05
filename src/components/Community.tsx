import React from 'react';
import { Users, DollarSign, Shield } from 'lucide-react';

const Community = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Traders',
      color: 'cyan'
    },
    {
      icon: DollarSign,
      value: '$2M+',
      label: 'Profits Generated',
      color: 'cyan'
    },
    {
      icon: Shield,
      value: '99%',
      label: 'Uptime Guarantee',
      color: 'cyan'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join <span className="text-cyan-400">10,000+</span> Successful Traders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stop losing money on bad trades. Start winning with our proven signal system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center hover:border-cyan-500/50 transition-all group">
                <div className="w-20 h-20 bg-cyan-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <Icon className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="text-5xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Community;