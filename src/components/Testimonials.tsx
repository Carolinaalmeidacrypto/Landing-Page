import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I was losing $500-1000 every week before CryptoVerse. Now I'm making $3,000+ monthly. This changed my life completely.",
      profit: "+$47,000",
      name: "Marcus Chen",
      role: "Day Trader",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "From $2,000 to $15,000 in 4 months. The signals are incredibly accurate and the community support is amazing.",
      profit: "+$13,000",
      name: "Sarah Williams",
      role: "Crypto Investor",
      avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    },
    {
      quote: "Lost my restaurant due to COVID. CryptoVerse signals helped me rebuild my finances. Now I trade full-time.",
      profit: "+$89,000",
      name: "David Rodriguez",
      role: "Former Restaurant Owner",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Real People, <span className="text-emerald-400">Real Profits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our community members are saying about 
            their success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-900/50 transition-all group cursor-pointer hover:-translate-y-2">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current hover:scale-125 hover:rotate-12 transition-all cursor-pointer" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-8 italic group-hover:text-gray-200 transition-colors">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-6 py-3 rounded-full text-center font-bold text-lg mb-6 group-hover:bg-emerald-500/30 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-emerald-500/25 transition-all">
                {testimonial.profit} profit
              </div>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover group-hover:scale-110 group-hover:ring-2 group-hover:ring-cyan-400 transition-all"
                />
                <div>
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-slate-600 hover:shadow-2xl hover:shadow-slate-900/50 transition-all group cursor-pointer">
          <h3 className="text-2xl font-bold text-white mb-4">Join 10,000+ Successful Traders</h3>
          <div className="flex items-center justify-center space-x-6 text-gray-300 group-hover:text-gray-200 transition-colors">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current hover:scale-110 hover:rotate-12 transition-all cursor-pointer" />
                ))}
              </div>
              <span>4.9/5 rating</span>
            </div>
            <span>•</span>
            <span>2,847 reviews</span>
            <span>•</span>
            <span>🛡️ Trusted platform</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;