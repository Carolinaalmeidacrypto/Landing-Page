import React from 'react';
import { BarChart, TrendingUp, Target, DollarSign } from 'lucide-react';

const ProvenResults = () => {
  const stats = [
    {
      icon: BarChart,
      title: 'Total Trades',
      value: '965',
      description: 'Successfully executed',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Total Profit',
      value: '504.84%',
      description: 'Life-changing returns',
      color: 'emerald'
    },
    {
      icon: Target,
      title: 'Win Rate',
      value: '65.9%',
      description: 'Consistent accuracy',
      color: 'purple'
    },
    {
      icon: DollarSign,
      title: 'Average Monthly',
      value: '66.8%',
      description: 'Compound growth',
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proven <span className="text-cyan-400">Results</span> That Speak Volumes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While others lose money, our community consistently profits. Here's the proof.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-slate-600 transition-all group">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl border flex items-center justify-center ${getColorClasses(stat.color)}`}>
                  <Icon className="h-8 w-8" />
                </div>
                <div className="text-gray-400 text-sm mb-2">{stat.title}</div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              From $1,000 to $50,000+ in 8 Months
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              That's what a 504.84% return means in real money. Stop dreaming about financial 
              freedom and start achieving it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;