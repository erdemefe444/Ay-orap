
import React, { useState, useMemo } from 'react';
import { Product, CartItem, AuthType } from './types';
import { PRODUCTS } from './constants';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import CartModal from './components/CartModal';
import ProductDetailModal from './components/ProductDetailModal';
import AuthModal from './components/AuthModal';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import { LayoutGrid, Sparkles, Heart, SearchX } from 'lucide-react';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Ana Sayfa");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Önerilen");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: AuthType }>({
    isOpen: false,
    type: 'login'
  });

  const sortedAndFilteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.category.toLowerCase().includes(term)
      );
    } 
    else if (activeCategory !== "Ana Sayfa") {
      if (activeCategory === "Favorilerim") {
        result = result.filter(product => favorites.includes(product.id));
      } else if (activeCategory === "İndirimdekiler") {
        result = result.filter(product => product.isDiscounted);
      } else {
        result = result.filter(product => product.category === activeCategory);
      }
    }

    switch (sortType) {
      case "Fiyat: Düşükten Yükseğe":
        result.sort((a, b) => a.price - b.price);
        break;
      case "Fiyat: Yüksekten Düşüğe":
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [activeCategory, searchTerm, favorites, sortType]);

  const addToCart = (product: Product, color?: string, fabric?: string, age?: string) => {
    const finalColor = color || product.availableColors?.[0] || "Standart";
    const finalFabric = fabric || product.availableFabrics?.[0] || "Pamuk";
    const finalAge = age || "";

    setCartItems(prev => {
      const existing = prev.find(item => 
        item.id === product.id && 
        item.selectedColor === finalColor && 
        item.selectedFabric === finalFabric &&
        item.selectedAge === finalAge
      );

      if (existing) {
        return prev.map(item => 
          (item.id === product.id && item.selectedColor === finalColor && item.selectedFabric === finalFabric && item.selectedAge === finalAge)
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      return [...prev, { ...product, quantity: 1, selectedColor: finalColor, selectedFabric: finalFabric, selectedAge: finalAge }];
    });
    setIsCartOpen(true);
    setIsDetailOpen(false);
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsDetailOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col selection:bg-red-500 selection:text-white">
      <Header 
        cartCount={totalCartCount} 
        favCount={favorites.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFavs={() => {
          setActiveCategory("Favorilerim");
          setSearchTerm("");
        }}
        onSearch={setSearchTerm}
        onToggleSidebar={() => setIsSidebarOpen(true)}
        onOpenAuth={(type) => setAuthModal({ isOpen: true, type })}
      />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-12">
          <Sidebar 
            activeCategory={activeCategory} 
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              setSearchTerm("");
            }} 
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />

          <main className="flex-1 lg:ml-80">
            {activeCategory === "Ana Sayfa" && searchTerm === "" && (
              <>
                <Hero onStartShopping={() => setActiveCategory("Erkek Çorapları")} />
                <Features />
              </>
            )}

            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="p-1.5 bg-red-100 text-red-600 rounded-lg">
                      {searchTerm ? <SearchX size={14} /> : (activeCategory === "Favorilerim" ? <Heart size={14} className="fill-current" /> : <Sparkles size={14} />)}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600">
                      {searchTerm ? "MAĞAZADA ARA" : (activeCategory === "Ana Sayfa" ? "ÖNE ÇIKANLAR" : "KOLEKSİYON")}
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {searchTerm ? `"${searchTerm}" Sonuçları` : (activeCategory === "Ana Sayfa" ? "Sizin İçin Seçtiklerimiz" : activeCategory)}
                  </h1>
                </div>

                <div className="flex items-center gap-3">
                   <div className="flex items-center bg-white border border-slate-100 rounded-2xl p-1 shadow-sm">
                      <button className="p-2 text-slate-400 bg-slate-50 rounded-xl"><LayoutGrid size={18} /></button>
                   </div>
                   <select 
                    value={sortType}
                    onChange={(e) => setSortType(e.target.value)}
                    className="bg-white border border-slate-100 rounded-2xl py-3 px-5 text-sm font-bold text-slate-600 focus:outline-none focus:ring-4 focus:ring-red-500/5 shadow-sm cursor-pointer hover:border-red-200 transition-all outline-none"
                   >
                      <option value="Önerilen">Sıralama: Önerilen</option>
                      <option value="Fiyat: Düşükten Yükseğe">Fiyat: Düşükten Yükseğe</option>
                      <option value="Fiyat: Yüksekten Düşüğe">Fiyat: Yüksekten Düşüğe</option>
                   </select>
                </div>
              </div>
            </div>

            {sortedAndFilteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedAndFilteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={(p) => openProductDetail(p)}
                    onClick={openProductDetail}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="py-32 flex flex-col items-center justify-center bg-white rounded-[3rem] border border-slate-100 shadow-sm text-center px-6">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-200">
                  <SearchX size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Sonuç Bulunamadı
                </h3>
                <p className="text-slate-400 text-sm mb-8 max-w-xs">
                  "{searchTerm}" aramasına uygun ürün bulamadık.
                </p>
                <button 
                  onClick={() => {setActiveCategory("Ana Sayfa"); setSearchTerm(""); setSortType("Önerilen");}}
                  className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-red-600 transition-all shadow-xl active:scale-95"
                >
                  Tüm Ürünleri Gör
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems} 
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onClearCart={clearCart}
      />

      <ProductDetailModal 
        product={selectedProduct}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
        onAddToCart={addToCart}
        isFavorite={selectedProduct ? favorites.includes(selectedProduct.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        initialType={authModal.type}
      />
    </div>
  );
};

export default App;
