
import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onClick: (p: Product) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, onAddToCart, onClick, isFavorite, onToggleFavorite 
}) => {
  return (
    <div className="group bg-white rounded-[2.5rem] p-3 border border-gray-100 hover:border-red-100 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500 cursor-pointer">
      <div className="aspect-[4/5] relative overflow-hidden rounded-[2rem] bg-slate-50" onClick={() => onClick(product)}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          {product.isDiscounted && (
            <div className="bg-red-600 text-white text-[9px] font-black px-2.5 py-1 rounded-full shadow-lg uppercase tracking-widest">
              İndirim
            </div>
          )}
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(product.id);
          }}
          className={`absolute top-4 right-4 p-2.5 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 z-10 ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-slate-400 hover:text-red-500'}`}
        >
          <Heart size={18} className={isFavorite ? 'fill-current' : ''} />
        </button>

        <div className="absolute inset-x-4 bottom-4 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-2 active:scale-95 hover:bg-red-600 transition-colors"
          >
            <ShoppingCart size={16} /> Sepete Ekle
          </button>
        </div>
      </div>
      
      <div className="px-3 py-5 flex flex-col gap-1" onClick={() => onClick(product)}>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          {product.category}
        </span>
        <h3 className="font-bold text-slate-900 text-base line-clamp-1 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-xl font-extrabold text-slate-900">{product.price.toFixed(2)} TL</span>
          {product.isDiscounted && (
             <span className="text-xs text-slate-400 line-through">{(product.price * 1.3).toFixed(2)} TL</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
