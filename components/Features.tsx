
import React from 'react';
import { Truck, ShieldCheck, RefreshCcw, Headphones } from 'lucide-react';

const Features: React.FC = () => {
  const items = [
    { icon: Truck, title: "Hızlı Kargo", desc: "24 saatte kapında" },
    { icon: ShieldCheck, title: "Güvenli Ödeme", desc: "%100 SSL korumalı" },
    { icon: RefreshCcw, title: "Kolay İade", desc: "30 gün içinde iade" },
    { icon: Headphones, title: "7/24 Destek", desc: "Canlı yardım hattı" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
      {items.map((item, i) => (
        <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-red-600 transition-all duration-500 hover:scale-[1.02]">
          <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
            <item.icon size={28} />
          </div>
          <h4 className="font-bold text-slate-900 mb-1 group-hover:text-white">{item.title}</h4>
          <p className="text-slate-400 text-xs group-hover:text-red-100">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
