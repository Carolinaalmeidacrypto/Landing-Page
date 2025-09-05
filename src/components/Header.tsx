import React from 'react';
import { TrendingUp } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold">CryptoVerse</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#results" className="text-gray-300 hover:text-white transition-colors">Results</a>
            <a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
          </nav>
          
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;