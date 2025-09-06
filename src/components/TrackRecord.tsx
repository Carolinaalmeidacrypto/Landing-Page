import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const TrackRecord = () => {
  const monthlyData = [
    { month: '2025-01', value: 7.15, barHeight: 80 },
    { month: '2025-02', value: 53.09, barHeight: 125 },
    { month: '2025-03', value: 85.96, barHeight: 155 },
    { month: '2025-04', value: 16.89, barHeight: 90 },
    { month: '2025-05', value: 102.43, barHeight: 175 },
    { month: '2025-06', value: 36.73, barHeight: 110 },
    { month: '2025-07', value: 191.51, barHeight: 220 },
    { month: '2025-08', value: 38.38, barHeight: 115 }
  ];

  const cumulativeData = [
    { month: '2025-01', value: 7.15, x: 12.5, y: 92 },
    { month: '2025-02', value: 60.24, x: 25, y: 85 },
    { month: '2025-03', value: 142.57, x: 37.5, y: 76 },
    { month: '2025-04', value: 163.09, x: 50, y: 73 },
    { month: '2025-05', value: 265.52, x: 62.5, y: 56 },
    { month: '2025-06', value: 298.25, x: 75, y: 50 },
    { month: '2025-07', value: 493.76, x: 87.5, y: 18 },
    { month: '2025-08', value: 533.65, x: 100, y: 11 }
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
            
            <div className="relative h-80 bg-slate-900/50 rounded-xl p-6">
              {/* Y-axis */}
              <div className="absolute left-2 top-6 bottom-12 flex flex-col justify-between text-xs text-gray-400">
                <span>236</span>
                <span>88</span>
                <span>8</span>
                <span>-72</span>
              </div>
              
              {/* Grid lines */}
              <div className="absolute left-12 right-6 top-6 bottom-12">
                <div className="h-full flex flex-col justify-between">
                  <div className="border-t border-slate-700/30"></div>
                  <div className="border-t border-slate-700/30"></div>
                  <div className="border-t border-slate-700/30"></div>
                  <div className="border-t border-slate-700/30"></div>
                </div>
              </div>
              
              {/* Bars */}
              <div className="absolute left-12 right-6 bottom-12 flex items-end justify-between" style={{ height: '240px' }}>
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center group/bar cursor-pointer">
                    <div className="relative">
                      <div 
                        className="w-8 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t hover:from-emerald-500 hover:to-emerald-300 transition-all duration-300 group-hover/bar:scale-110 group-hover/bar:shadow-lg group-hover/bar:shadow-emerald-500/50"
                        style={{ height: `${data.barHeight}px` }}
                      ></div>
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-emerald-400 px-2 py-1 rounded text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-emerald-500/30">
                        {data.value}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* X-axis labels */}
              <div className="absolute left-12 right-6 bottom-0 flex justify-between text-xs text-gray-400">
                {monthlyData.map((data, index) => (
                  <span key={index} className="transform -rotate-45 origin-left">
                    {data.month}
                  </span>
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
            
            <div className="relative h-80 bg-slate-900/50 rounded-xl p-6">
              {/* Y-axis */}
              <div className="absolute left-2 top-6 bottom-12 flex flex-col justify-between text-xs text-gray-400">
                <span>600</span>
                <span>500</span>
                <span>400</span>
                <span>300</span>
                <span>200</span>
                <span>100</span>
                <span>0</span>
              </div>
              
              {/* Grid */}
              <div className="absolute left-12 right-6 top-6 bottom-12">
                {/* Horizontal grid lines */}
                <div className="h-full flex flex-col justify-between">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="border-t border-slate-700/30"></div>
                  ))}
                </div>
                {/* Vertical grid lines */}
                <div className="absolute inset-0 flex justify-between">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border-l border-slate-700/30 h-full"></div>
                  ))}
                </div>
              </div>
              
              {/* Line Chart */}
              <div className="absolute left-12 right-6 top-6 bottom-12">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Line path */}
                  <polyline
                    points={cumulativeData.map(d => `${d.x},${d.y}`).join(' ')}
                    stroke="#fbbf24"
                    strokeWidth="0.8"
                    fill="none"
                    className="drop-shadow-lg"
                    vectorEffect="non-scaling-stroke"
                  />
                  
                  {/* Data points */}
                  {cumulativeData.map((data, index) => (
                    <g key={index}>
                      <circle
                        cx={data.x}
                        cy={data.y}
                        r="1.5"
                        fill="#fbbf24"
                        className="hover:r-2 transition-all cursor-pointer drop-shadow-lg"
                        vectorEffect="non-scaling-stroke"
                      />
                    </g>
                  ))}
                </svg>
                
                {/* Hover labels */}
                {cumulativeData.map((data, index) => (
                  <div
                    key={index}
                    className="absolute w-4 h-4 -ml-2 -mt-2 cursor-pointer group/point"
                    style={{ 
                      left: `${data.x}%`, 
                      top: `${data.y}%` 
                    }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-800 text-yellow-400 px-2 py-1 rounded text-xs opacity-0 group-hover/point:opacity-100 transition-opacity whitespace-nowrap border border-yellow-500/30">
                      {data.value}%
                    </div>
                  </div>
                ))}
              </div>
              
              {/* X-axis labels */}
              <div className="absolute left-12 right-6 bottom-0 flex justify-between text-xs text-gray-400">
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