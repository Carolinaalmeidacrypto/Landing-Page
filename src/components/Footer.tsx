import React from 'react';
import { TrendingUp, Mail, MessageCircle, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all">
                <TrendingUp className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-white text-xl font-bold group-hover:text-cyan-400 transition-colors">CryptoVerse</span>
            </div>
            <p className="text-gray-400 hover:text-gray-300 transition-colors">
              Empowering traders worldwide with proven signals and consistent profits.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-400 hover:text-cyan-400 hover:scale-125 hover:-rotate-12 cursor-pointer transition-all" />
              <MessageCircle className="h-5 w-5 text-gray-400 hover:text-cyan-400 hover:scale-125 hover:rotate-12 cursor-pointer transition-all" />
              <Mail className="h-5 w-5 text-gray-400 hover:text-cyan-400 hover:scale-125 hover:-rotate-12 cursor-pointer transition-all" />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Signals</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Analytics</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Community</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">API</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Help Center</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Discord</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Telegram</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">About</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Careers</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 block transition-all">Terms</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center hover:border-slate-600 transition-colors">
          <p className="text-gray-400 hover:text-gray-300 transition-colors">
            © 2025 CryptoVerse. All rights reserved. Trading involves risk and is not suitable for all investors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;