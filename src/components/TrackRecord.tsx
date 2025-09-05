import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const TrackRecord = () => {
  const monthlyData = [
    { month: 'Jan 25', value: 5 },
    { month: 'Feb 25', value: 52 },
    { month: 'Mar 25', value: 85 },
    { month: 'Apr 25', value: 15 },
    { month: 'May 25', value: 102 },
    { month: 'Jun 25', value: 35 },
    { month: 'Jul 25', value: 192 },
    { month: 'Aug 25', value: 38 }
  ];

  const maxValue = Math.max(...monthlyData.map(d => d.value));

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Track Record of <span className="text-emerald-400">Consistent Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every month tells a story of profitable trades. See the data that changed lives.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-white" />
                <h3 className="text-white text-xl font-semibold">Monthly Returns (%)</h3>
              </div>
              <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                Avg: 66.8%
              </div>
            </div>
            
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-gray-400 text-sm w-16">{data.month}</div>
                  <div className="flex-1 bg-slate-700 rounded-full h-8 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full flex items-center justify-end pr-2 transition-all duration-1000"
                      style={{ width: `${(data.value / maxValue) * 100}%` }}
                    >
                      {data.value > 30 && (
                        <span className="text-white text-xs font-medium">{data.value}%</span>
                      )}
                    </div>
                  </div>
                  {data.value <= 30 && (
                    <span className="text-gray-300 text-sm w-12">{data.value}%</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <h3 className="text-white text-xl font-semibold">Cumulative Growth (%)</h3>
              </div>
              <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                Total: 533.65%
              </div>
            </div>
            
            <div className="h-64 relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="growth-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <path
                  d="M 0 180 Q 50 160 100 140 Q 150 120 200 100 Q 250 80 300 60 Q 350 40 400 20"
                  stroke="rgb(16, 185, 129)"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M 0 180 Q 50 160 100 140 Q 150 120 200 100 Q 250 80 300 60 Q 350 40 400 20 L 400 200 L 0 200 Z"
                  fill="url(#growth-gradient)"
                />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">191.51%</div>
            <div className="text-gray-400">Best Month (July)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">8/8</div>
            <div className="text-gray-400">Profitable Months</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5.3x</div>
            <div className="text-gray-400">Account Multiplier</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;