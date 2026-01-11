
import React from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';

interface HeroProps {
  onStartShopping: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartShopping }) => {
  return (
    <div className="relative mb-16 overflow-hidden rounded-[3rem] bg-slate-900 h-[500px] flex items-center group">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/30 rounded-full blur-[120px] group-hover:bg-red-600/40 transition-all duration-700"></div>
      
      <div className="relative z-10 px-12 md:px-20 max-w-2xl">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="text-white text-xs font-bold uppercase tracking-widest">Yeni Sezon Yayında</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tighter">
          Adımlarına <span className="text-red-500">Renk</span> Kat.
        </h1>
        
        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
          Dünyanın en rahat ve tarz çorapları şimdi AyÇorap kalitesiyle kapında. Konforu yeniden keşfet.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={onStartShopping}
            className="px-8 py-4 bg-red-600 text-white rounded-2xl font-bold flex items-center gap-3 hover:bg-white hover:text-slate-900 transition-all shadow-2xl shadow-red-600/20 active:scale-95 group"
          >
            Hemen Alışverişe Başla 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center gap-3">
            <ShoppingBag size={20} /> Koleksiyonlar
          </button>
        </div>
      </div>

      {/* Hero Image (Abstract) */}
      <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop" 
          alt="Style" 
          className="w-full h-full object-cover rounded-[3rem] shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-700 border-4 border-white/10"
        />
      </div>
    </div>
  );
};

export default Hero;
