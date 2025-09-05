import React from 'react';
import { TrendingUp, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
              <TrendingUp className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-white text-xl font-bold group-hover:text-cyan-400 transition-colors">CryptoVerse</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white hover:scale-105 transition-all relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#results" className="text-gray-300 hover:text-white hover:scale-105 transition-all relative group">
              Results
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#community" className="text-gray-300 hover:text-white hover:scale-105 transition-all relative group">
              Community
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-white hover:scale-105 transition-all relative group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
              Get Started
            </button>
            <button className="md:hidden text-gray-300 hover:text-white hover:scale-110 transition-all">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;