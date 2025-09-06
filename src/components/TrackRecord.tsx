import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const TrackRecord = () => {
  const monthlyData = [
    { month: '2025-01', value: 7.15, height: 15 },
    { month: '2025-02', value: 53.09, height: 45 },
    { month: '2025-03', value: 85.96, height: 65 },
    { month: '2025-04', value: 16.89, height: 20 },
    { month: '2025-05', value: 102.43, height: 75 },
    { month: '2025-06', value: 36.73, height: 35 },
    { month: '2025-07', value: 191.51, height: 95 },
    { month: '2025-08', value: 38.38, height: 38 }
  ];

  const cumulativeData = [
    { month: '2025-01', value: 7.15, x: 50, y: 180 },
    { month: '2025-02', value: 60.24, x: 100, y: 160 },
    { month: '2025-03', value: 142.57, x: 150, y: 130 },
    { month: '2025-04', value: 163.09, x: 200, y: 125 },
    { month: '2025-05', value: 265.52, x: 250, y: 90 },
    { month: '2025-06', value: 298.25, x: 300, y: 80 },
    { month: '2025-07', value: 493.76, x: 350, y: 40 },
    { month: '2025-08', value: 533.65, x: 400, y: 35 }
  ];

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
          {/* Monthly Returns Chart - Bar Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-900/50 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-white group-hover:text-emerald-400 group-hover:scale-110 transition-all" />
                <h3 className="text-white text-xl font-semibold">Rentabilidade por Mês</h3>
              </div>
              <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm hover:bg-emerald-500/30 hover:scale-105 transition-all cursor-pointer">
                Avg: 66.8%
              </div>
            </div>
            
            <div className="relative h-80 bg-slate-900/50 rounded-xl p-4">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-4">
                <span>236</span>
                <span>88</span>
                <span>8</span>
                <span>-72</span>
              </div>
              
              {/* Grid lines */}
              <div className="absolute inset-4 left-8">
                <div className="h-full flex flex-col justify-between">
                  <div className="border-t border-slate-700/50"></div>
                  <div className="border-t border-slate-700/50"></div>
                  <div className="border-t border-slate-700/50"></div>
                  <div className="border-t border-slate-700/50"></div>
                </div>
              </div>
              
              {/* Bars */}
              <div className="absolute inset-4 left-8 flex items-end justify-between">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center group/bar cursor-pointer">
                    <div className="relative">
                      <div 
                        className="w-8 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t hover:from-emerald-400 hover:to-emerald-300 transition-all duration-300 group-hover/bar:scale-110"
                        style={{ height: `${data.height * 2.5}px` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-emerald-400 px-2 py-1 rounded text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                        {data.value}%
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 transform -rotate-45 origin-left">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Cumulative Growth Chart - Line Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-900/50 transition-all group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-emerald-400 group-hover:scale-110 group-hover:rotate-12 transition-all" />
                <h3 className="text-white text-xl font-semibold">Cumulative Return (%)</h3>
              </div>
              <div className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm hover:bg-emerald-500/30 hover:scale-105 transition-all cursor-pointer">
                Total: 533.65%
              </div>
            </div>
            
            <div className="relative h-80 bg-slate-900/50 rounded-xl p-4">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 py-4">
                <span>600</span>
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              
              {/* Grid lines */}
              <div className="absolute inset-4 left-8">
                <div className="h-full flex flex-col justify-between">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="border-t border-slate-700/30"></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex justify-between">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border-l border-slate-700/30 h-full"></div>
                  ))}
                </div>
              </div>
              
              {/* Line Chart */}
              <div className="absolute inset-4 left-8">
                <svg className="w-full h-full" viewBox="0 0 450 250">
                  {/* Line path */}
                  <path
                    d={`M ${cumulativeData.map(d => `${d.x} ${d.y}`).join(' L ')}`}
                    stroke="#fbbf24"
                    strokeWidth="3"
                    fill="none"
                    className="drop-shadow-lg"
                  />
                  
                  {/* Data points */}
                  {cumulativeData.map((data, index) => (
                    <g key={index}>
                      <circle
                        cx={data.x}
                        cy={data.y}
                        r="6"
                        fill="#fbbf24"
                        className="hover:r-8 hover:fill-yellow-300 transition-all cursor-pointer drop-shadow-lg"
                      />
                      <text
                        x={data.x}
                        y={data.y - 15}
                        textAnchor="middle"
                        className="fill-emerald-400 text-xs font-medium opacity-0 hover:opacity-100 transition-opacity"
                      >
                        {data.value}%
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-8 right-4 flex justify-between text-xs text-gray-400">
                {cumulativeData.map((data, index) => (
                  <span key={index} className="transform -rotate-45 origin-left">
                    {data.month}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2 hover:scale-110 hover:text-emerald-300 transition-all cursor-pointer">191.51%</div>
            <div className="text-gray-400">Best Month (July)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2 hover:scale-110 hover:text-emerald-300 transition-all cursor-pointer">8/8</div>
            <div className="text-gray-400">Profitable Months</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2 hover:scale-110 hover:text-emerald-300 transition-all cursor-pointer">5.3x</div>
            <div className="text-gray-400">Account Multiplier</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;