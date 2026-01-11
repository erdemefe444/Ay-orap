
import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Minus, Plus, ShoppingBag, Tag, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, delta: number) => void;
  onClearCart: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, onClearCart }) => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [isOrderSuccess, setIsOrderSuccess] = useState(false);
  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = isPromoApplied ? subtotal * 0.3 : 0;
  const total = subtotal - discountAmount;

  const handleApplyPromo = () => {
    if (promoCode.trim().length > 0) {
      setIsPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    setIsOrderSuccess(true);
    setTimeout(() => {
      onClearCart();
    }, 500);
  };

  const handleCloseSuccess = () => {
    setIsOrderSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {isOrderSuccess ? (
          <div className="h-full flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 relative">
              <CheckCircle2 size={48} />
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Siparişiniz Alındı!</h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Harika bir seçim yaptınız! Çoraplarınız hazırlanmak üzere yola çıktı bile. Sipariş detaylarını e-posta adresinize gönderdik.
            </p>
            <div className="bg-slate-50 w-full p-6 rounded-3xl mb-10 border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Sipariş Numarası</p>
              <p className="text-xl font-black text-slate-900">#AYC-{orderNumber}</p>
            </div>
            <button 
              onClick={handleCloseSuccess}
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-xl flex items-center justify-center gap-3 group"
            >
              Alışverişe Devam Et
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : (
          <>
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                  <ShoppingBag size={20} />
                </div>
                <h2 className="text-xl font-bold">Sepetim</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag size={40} className="text-gray-300" />
                  </div>
                  <p className="text-gray-500 font-medium">Sepetinizde ürün bulunmamaktadır.</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-red-600 font-bold hover:underline"
                  >
                    Alışverişe Başla
                  </button>
                </div>
              ) : (
                <>
                  {items.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="flex gap-4 group">
                      <div className="relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-24 min-w-[80px] object-cover rounded-xl bg-gray-100 shadow-sm"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 truncate text-sm">{item.name}</h3>
                        <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-400 font-bold uppercase mt-1 mb-2">
                          {item.selectedAge && <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded border border-red-100">{item.selectedAge}</span>}
                          <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{item.selectedColor}</span>
                          <span className="bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{item.selectedFabric}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-slate-100">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:bg-white hover:shadow-sm rounded transition-all disabled:opacity-30"
                              disabled={item.quantity <= 1}
                            >
                              <Minus size={12} />
                            </button>
                            <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:bg-white hover:shadow-sm rounded transition-all"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="font-bold text-red-600 text-sm">{(item.price * item.quantity).toFixed(2)} TL</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="self-start p-2 text-gray-300 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))}
                </>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gray-100 space-y-4 bg-slate-50/50">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="İndirim Kodu Girin"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={isPromoApplied}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-10 pr-24 text-sm focus:outline-none focus:ring-4 focus:ring-red-500/5 focus:border-red-500/20 disabled:opacity-60 transition-all shadow-sm"
                  />
                  <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <button 
                    onClick={handleApplyPromo}
                    disabled={isPromoApplied || !promoCode}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-red-600 transition-all disabled:bg-slate-200"
                  >
                    {isPromoApplied ? 'Uygulandı' : 'Uygula'}
                  </button>
                </div>

                {isPromoApplied && (
                  <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 bg-green-50 p-2.5 rounded-xl border border-green-100 animate-in slide-in-from-top-2 duration-300">
                    <Sparkles size={14} />
                    <span>Harika! %30 indirim kodu sepetine uygulandı.</span>
                  </div>
                )}

                <div className="space-y-2 py-2">
                  <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
                    <span>Ara Toplam</span>
                    <span>{subtotal.toFixed(2)} TL</span>
                  </div>
                  {isPromoApplied && (
                    <div className="flex items-center justify-between text-green-600 text-sm font-bold">
                      <span>İndirim (%30)</span>
                      <span>-{discountAmount.toFixed(2)} TL</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-slate-500 text-sm font-medium">
                    <span>Kargo</span>
                    <span className="text-green-600 font-bold uppercase text-[10px] bg-green-50 px-2 py-0.5 rounded">Ücretsiz</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-2xl font-black pt-4 border-t border-slate-200">
                  <span className="text-slate-900">Toplam</span>
                  <span className="text-red-600">{total.toFixed(2)} TL</span>
                </div>
                
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-red-600 text-white py-4.5 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-red-200 active:scale-95 flex items-center justify-center gap-3"
                >
                  Siparişi Güvenle Tamamla
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
