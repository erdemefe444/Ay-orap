
import React from 'react';
import { CATEGORIES } from '../constants';
import { Tag, Star, Heart, Flame, Watch, User, UserCheck, Baby, ChevronRight, Home } from 'lucide-react';

interface SidebarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'Ana Sayfa': return <Home size={18} />;
    case 'Erkek Çorapları': return <UserCheck size={18} />;
    case 'Kadın Çorapları': return <User size={18} />;
    case 'Çocuk Çorapları': return <Baby size={18} />;
    case 'Spor Çoraplar': return <Flame size={18} />;
    case 'Günlük Çoraplar': return <Watch size={18} />;
    case 'Desenli Çoraplar': return <Star size={18} />;
    case 'İndirimdekiler': return <Tag size={18} />;
    default: return <Heart size={18} />;
  }
};

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}

      <aside className={`
        fixed left-0 top-20 bottom-0 w-80 bg-white border-r border-gray-100 p-8 z-40 transition-transform duration-500
        lg:translate-x-0 overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mb-10">
          <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-6">Navigasyon</p>
          <nav className="space-y-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  onSelectCategory(cat);
                  onClose();
                }}
                className={`
                  w-full flex items-center justify-between group px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300
                  ${activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-200' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <div className="flex items-center gap-3">
                  <CategoryIcon category={cat} />
                  {cat}
                </div>
                {activeCategory !== cat && (
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-1" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto">
          <div className="relative p-6 bg-red-600 rounded-[2rem] text-white overflow-hidden group">
            <div className="relative z-10">
              <h3 className="font-bold text-xl leading-tight mb-2">Mobil Uygulama</h3>
              <p className="text-red-100 text-xs mb-4">İlk siparişine özel %15 indirim fırsatı.</p>
              <button className="w-full bg-white text-red-600 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-900 hover:text-white transition-all">
                İndir ve Kazan
              </button>
            </div>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
