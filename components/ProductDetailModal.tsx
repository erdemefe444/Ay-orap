
import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (p: Product, color: string, fabric: string, age?: string) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ 
  product, isOpen, onClose, onAddToCart, isFavorite, onToggleFavorite 
}) => {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedFabric, setSelectedFabric] = useState("");
  const [selectedAge, setSelectedAge] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedColor(product.availableColors?.[0] || "Standart");
      setSelectedFabric(product.availableFabrics?.[0] || "Pamuk");
      setSelectedAge(product.availableAges?.[0] || "");
    }
  }, [product]);

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-4xl bg-white rounded-[3rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-100 text-slate-900 rounded-full hover:bg-red-600 hover:text-white transition-all z-20">
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div className="bg-slate-50 aspect-square lg:aspect-auto h-full overflow-hidden relative">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            {product.isDiscounted && (
              <div className="absolute top-8 left-8 bg-red-600 text-white px-4 py-1.5 rounded-full font-black text-xs uppercase tracking-widest shadow-lg">
                Süper Fırsat
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="p-8 lg:p-14 flex flex-col">
            <div className="mb-6">
              <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-3 block">
                {product.category}
              </span>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4">
                {product.name}
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-slate-900">{product.price.toFixed(2)} TL</span>
                {product.isDiscounted && (
                  <span className="text-lg text-slate-400 line-through">{(product.price * 1.3).toFixed(2)} TL</span>
                )}
              </div>
            </div>

            {/* Options Selection */}
            <div className="space-y-6 mb-8">
              {/* Age Selection for Kids */}
              {product.category === "Çocuk Çorapları" && product.availableAges && (
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Yaş Aralığı</label>
                  <div className="flex flex-wrap gap-2">
                    {product.availableAges.map(age => (
                      <button
                        key={age}
                        onClick={() => setSelectedAge(age)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${selectedAge === age ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Renk Seçimi</label>
                <div className="flex flex-wrap gap-2">
                  {product.availableColors?.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${selectedColor === color ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Kumaş Türü</label>
                <div className="flex flex-wrap gap-2">
                  {product.availableFabrics?.map(fabric => (
                    <button
                      key={fabric}
                      onClick={() => setSelectedFabric(fabric)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border-2 transition-all ${selectedFabric === fabric ? 'border-red-600 bg-red-50 text-red-600' : 'border-slate-100 text-slate-500 hover:border-slate-200'}`}
                    >
                      {fabric}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed mb-8 text-sm">
              {product.description || "AyÇorap kalitesiyle üretilen bu özel parça, seçtiğiniz yüksek kaliteli kumaş yapısı ve nefes alan dokusuyla gün boyu maksimum konfor sunar."}
            </p>

            <div className="mt-auto flex gap-4">
              <button 
                onClick={() => onAddToCart(product, selectedColor, selectedFabric, selectedAge)}
                className="flex-1 bg-red-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-red-100 active:scale-95"
              >
                <ShoppingCart size={20} /> Sepete Ekle
              </button>
              <button 
                onClick={() => onToggleFavorite(product.id)}
                className={`p-4 rounded-2xl border-2 transition-all ${isFavorite ? 'bg-red-50 border-red-100 text-red-600' : 'bg-white border-slate-100 text-slate-400 hover:text-red-600'}`}
              >
                <Heart size={24} className={isFavorite ? 'fill-current' : ''} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
