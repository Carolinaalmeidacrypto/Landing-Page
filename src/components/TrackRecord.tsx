import React from 'react';
import { BarChart3, TrendingUp } from 'lucide-react';

const TrackRecord = () => {
  const monthlyData = [
    { month: 'Jan/25', value: 7.15, height: 25 },
    { month: 'Fev/25', value: 53.09, height: 60 },
    { month: 'Mar/25', value: 85.96, height: 85 },
    { month: 'Abr/25', value: 16.89, height: 30 },
    { month: 'Mai/25', value: 102.43, height: 95 },
    { month: 'Jun/25', value: 36.73, height: 45 },
    { month: 'Jul/25', value: 191.51, height: 150 },
    { month: 'Ago/25', value: 38.38, height: 50 }
  ];

  // Calcular valores cumulativos começando do zero
  const cumulativeData = monthlyData.reduce((acc, curr, index) => {
    const prevValue = index === 0 ? 0 : acc[index - 1].value;
    const newValue = prevValue + curr.value;
    const yPosition = 200 - (newValue / 600) * 180; // Escala de 0 a 600
    
    acc.push({
      month: curr.month,
      value: newValue,
      x: 50 + (index * 50),
      y: yPosition
    });
    return acc;
  }, [] as Array<{ month: string; value: number; x: number; y: number }>);

  // Adicionar ponto inicial no zero
  const cumulativeWithZero = [
    { month: 'Início', value: 0, x: 25, y: 200 },
    ...cumulativeData
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
                <span>200%</span>
                <span>150%</span>
                <span>100%</span>
                <span>50%</span>
                <span>0%</span>
              </div>
              
              {/* Grid lines */}
              <div className="absolute inset-4 left-8">
                <div className="h-full flex flex-col justify-between">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="border-t border-slate-700/30"></div>
                  ))}
                </div>
              </div>
              
              {/* Bars */}
              <div className="absolute inset-4 left-8 flex items-end justify-between">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center group/bar cursor-pointer">
                    {/* Valor em cima da barra */}
                    <div className="text-emerald-400 text-xs font-semibold mb-1 opacity-100 group-hover/bar:text-emerald-300 transition-colors">
                      {data.value}%
                    </div>
                    <div className="relative">
                      <div 
                        className="w-12 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t hover:from-emerald-400 hover:to-emerald-300 transition-all duration-300 group-hover/bar:scale-110 group-hover/bar:shadow-lg group-hover/bar:shadow-emerald-500/25"
                        style={{ height: `${data.height * 1.5}px` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 group-hover/bar:text-gray-300 transition-colors">
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
                <span>600%</span>
                <span>500%</span>
                <span>400%</span>
                <span>300%</span>
                <span>200%</span>
                <span>100%</span>
                <span>0%</span>
              </div>
              
              {/* Grid lines */}
              <div className="absolute inset-4 left-8">
                <div className="h-full flex flex-col justify-between">
                  {[...Array(7)].map((_, i) => (
                    <div key={i} className="border-t border-slate-700/30"></div>
                  ))}
                </div>
              </div>
              
              {/* Line Chart */}
              <div className="absolute inset-4 left-8">
                <svg className="w-full h-full" viewBox="0 0 450 220">
                  {/* Line path */}
                  <path
                    d={`M ${cumulativeWithZero.map(d => `${d.x} ${d.y}`).join(' L ')}`}
                    stroke="#22d3ee"
                    strokeWidth="3"
                    fill="none"
                    className="drop-shadow-lg hover:stroke-cyan-300 transition-colors"
                  />
                  
                  {/* Data points */}
                  {cumulativeWithZero.map((data, index) => (
                    <g key={index}>
                      <circle
                        cx={data.x}
                        cy={data.y}
                        r="5"
                        fill="#22d3ee"
                        className="hover:fill-cyan-300 transition-all cursor-pointer drop-shadow-lg"
                        style={{ r: '5' }}
                        onMouseEnter={(e) => e.currentTarget.setAttribute('r', '8')}
                        onMouseLeave={(e) => e.currentTarget.setAttribute('r', '5')}
                      />
                      <text
                        x={data.x}
                        y={data.y - 15}
                        textAnchor="middle"
                        className="fill-cyan-400 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                      >
                        {data.value.toFixed(1)}%
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-8 right-4 flex justify-between text-xs text-gray-400">
                {cumulativeWithZero.map((data, index) => (
                  <span key={index} className="text-center">
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
            <div className="text-4xl font-bold text-emerald-400 mb-2 hover:scale-110 hover:text-emerald-300 transition-all cursor-pointer">{cumulativeData[cumulativeData.length - 1].value.toFixed(1)}%</div>
            <div className="text-gray-400">Total Return</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;