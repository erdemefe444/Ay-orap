
import React from 'react';
import { ShoppingCart, Search, User, Menu, Moon, Heart } from 'lucide-react';
import { AuthType } from '../types';

interface HeaderProps {
  cartCount: number;
  favCount: number;
  onOpenCart: () => void;
  onOpenFavs: () => void;
  onSearch: (term: string) => void;
  onToggleSidebar: () => void;
  onOpenAuth: (type: AuthType) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  cartCount, favCount, onOpenCart, onOpenFavs, onSearch, onToggleSidebar, onOpenAuth 
}) => {
  return (
    <header className="sticky top-0 z-50 glass-effect border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Left: Brand */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onToggleSidebar}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl text-gray-600 transition-all"
          >
            <Menu size={22} />
          </button>
          <button onClick={() => window.location.reload()} className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-red-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-red-200">
              <Moon className="text-white fill-current" size={20} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              Ay<span className="text-red-600">Çorap</span>
            </span>
          </button>
        </div>

        {/* Middle: Search Bar */}
        <div className="hidden md:flex flex-1 max-w-xl relative group">
          <input 
            type="text" 
            placeholder="Ürün veya kategori ara..." 
            className="w-full bg-gray-100/50 border border-transparent rounded-2xl py-2.5 pl-12 pr-4 focus:outline-none focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500/20 transition-all text-sm"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" size={18} />
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <button 
              onClick={() => onOpenAuth('login')}
              className="text-sm font-bold text-slate-600 hover:text-red-600 transition-colors"
            >
              Giriş
            </button>
            <button 
              onClick={() => onOpenAuth('register')}
              className="px-5 py-2.5 text-sm font-bold bg-slate-900 text-white rounded-2xl hover:bg-red-600 transition-all shadow-md active:scale-95"
            >
              Üye Ol
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={onOpenFavs}
              className="relative p-2.5 text-slate-600 hover:bg-red-50 hover:text-red-600 rounded-2xl transition-all group"
            >
              <Heart size={22} className={favCount > 0 ? 'fill-red-500 text-red-500' : ''} />
              {favCount > 0 && (
                <span className="absolute top-1 right-1 bg-red-600 text-white text-[8px] font-black w-4 h-4 flex items-center justify-center rounded-full border border-white">
                  {favCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={onOpenCart}
              className="relative p-3 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white rounded-2xl transition-all duration-300 group shadow-sm"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white group-hover:scale-110 transition-transform">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
