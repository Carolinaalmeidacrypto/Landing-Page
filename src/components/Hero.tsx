import React from 'react';
import { TrendingUp, Users, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Stop <span className="text-red-400">Losing</span><br />
              Money.<br />
              Start <span className="text-emerald-400">Winning</span><br />
              Trades.
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Tired of losing your hard-earned money on crypto trades? 
              Join thousands who turned their trading around with our{' '}
              <span className="text-cyan-400">proven signals</span> and{' '}
              <span className="text-cyan-400">504.84% total profits</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                Get Winning Signals Now
                <TrendingUp className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-gray-600 text-gray-300 hover:bg-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-slate-900"></div>
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <span className="text-gray-400 text-sm">Trusted by 10,000+ traders</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-400 text-sm">30-day money-back guarantee</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-xl font-semibold">Live Performance Dashboard</h3>
              <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                +191.51%
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-emerald-400">504.84%</div>
                <div className="text-gray-400 text-sm">Total Profit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-400">65.9%</div>
                <div className="text-gray-400 text-sm">Win Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">965</div>
                <div className="text-gray-400 text-sm">Total Trades</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">$2M+</div>
                <div className="text-gray-400 text-sm">Volume</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 font-medium">Live Trading Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;