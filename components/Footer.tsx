
import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Phone, Mail, MapPin, Moon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded-xl flex items-center justify-center">
                <Moon className="text-white fill-current" size={16} />
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Ay<span className="text-red-600">Çorap</span>
              </span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              AyÇorap, konforu modern tasarımlarla birleştirerek her adımınıza anlam katar. Kalite bizim imzamızdır.
            </p>
            <div className="flex items-center gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.2em] text-[10px]">Keşfet</h4>
            <ul className="space-y-4">
              {['Yeni Sezon', 'En Çok Satanlar', 'Hediye Setleri', 'Sürdürülebilir Koleksiyon', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-red-600 text-sm font-medium transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-[0.2em] text-[10px]">Kurumsal</h4>
            <ul className="space-y-4">
              {['Hakkımızda', 'Mağazalarımız', 'Kariyer', 'İş Ortaklığı', 'Basın'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-red-600 text-sm font-medium transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 p-8 rounded-[2rem]">
            <h4 className="font-black text-slate-900 mb-6 uppercase tracking-[0.2em] text-[10px]">Bize Ulaşın</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 flex-shrink-0 mt-1" size={16} />
                <span className="text-slate-600 text-xs font-medium leading-relaxed">Moda Plaza Kat:4, Levent, İstanbul</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 flex-shrink-0" size={16} />
                <span className="text-slate-600 text-xs font-bold">+90 850 300 12 12</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 flex-shrink-0" size={16} />
                <span className="text-slate-600 text-xs font-medium">hello@aycorap.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
            &copy; {new Date().getFullYear()} AyÇorap INC. Her Adım Değerlidir.
          </p>
          <div className="flex items-center gap-8 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
             <div className="h-4 border-l border-slate-200"></div>
             <span className="text-[10px] font-black tracking-widest text-slate-400">VISA</span>
             <span className="text-[10px] font-black tracking-widest text-slate-400">MASTERCARD</span>
             <span className="text-[10px] font-black tracking-widest text-slate-400">AMEX</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
