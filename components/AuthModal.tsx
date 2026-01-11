
import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import { AuthType } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType: AuthType;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialType }) => {
  const [type, setType] = useState<AuthType>(initialType);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-50 rounded-full transition-colors z-10">
          <X size={20} />
        </button>

        <div className="flex border-b border-slate-100">
          <button 
            onClick={() => setType('login')}
            className={`flex-1 py-6 font-bold text-sm transition-all ${type === 'login' ? 'text-red-600 border-b-2 border-red-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Giriş Yap
          </button>
          <button 
            onClick={() => setType('register')}
            className={`flex-1 py-6 font-bold text-sm transition-all ${type === 'register' ? 'text-red-600 border-b-2 border-red-600' : 'text-slate-400 hover:text-slate-600'}`}
          >
            Yeni Üyelik
          </button>
        </div>

        <div className="p-10">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              {type === 'login' ? 'Tekrar Hoş Geldin!' : 'Ailemize Katıl'}
            </h2>
            <p className="text-slate-400 text-sm">
              {type === 'login' ? 'Ayaklarınızın konforu için giriş yapın.' : 'Şimdi üye ol, ilk alışverişinde %15 indirimi kap!'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {type === 'register' && (
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Ad Soyad" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600/20 transition-all text-sm"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                placeholder="E-posta Adresi" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600/20 transition-all text-sm"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                placeholder="Şifre" 
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-600/20 transition-all text-sm"
              />
            </div>

            {type === 'login' && (
              <div className="text-right">
                <button className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors">Şifremi Unuttum</button>
              </div>
            )}

            <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 group">
              {type === 'login' ? 'Giriş Yap' : 'Hesap Oluştur'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-400 text-xs font-medium">Sosyal hesapla devam et</p>
            <div className="flex gap-4 mt-4">
              <button className="flex-1 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors font-bold text-xs">Google</button>
              <button className="flex-1 py-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors font-bold text-xs">Apple</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
