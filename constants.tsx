
import { Product } from './types';

const defaultColors = ["Siyah", "Beyaz", "Gri", "Lacivert"];
const defaultFabrics = ["Pamuk", "Yün", "Polyester", "Bambu"];

export const PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: "Klasik Siyah Pamuklu Çorap", 
    price: 49.99, 
    category: "Erkek Çorapları", 
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?q=80&w=800&auto=format&fit=crop",
    availableColors: ["Siyah", "Antrasit"],
    availableFabrics: ["Pamuk", "Bambu"]
  },
  { 
    id: 2, 
    name: "Renkli Geometrik Desenli", 
    price: 59.90, 
    category: "Desenli Çoraplar", 
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=800&auto=format&fit=crop",
    availableColors: ["Çok Renkli", "Mavi-Sarı"],
    availableFabrics: ["Pamuk", "Polyester"]
  },
  { 
    id: 3, 
    name: "Yumuşak Kadın Ev Çorabı", 
    price: 75.00, 
    category: "Kadın Çorapları", 
    image: "https://images.unsplash.com/photo-1590001007205-728b12278f35?q=80&w=800&auto=format&fit=crop",
    availableColors: ["Pembe", "Ekru", "Lila"],
    availableFabrics: ["Yün", "Peluş"]
  },
  { 
    id: 11, 
    name: "Yılbaşı Temalı Kadın Çorabı", 
    price: 85.00, 
    category: "Kadın Çorapları", 
    image: "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800&auto=format&fit=crop",
    availableColors: ["Kırmızı", "Yeşil", "Beyaz"],
    availableFabrics: ["Pamuk", "Yün"],
    description: "Yılbaşı ruhunu adımlarınıza taşıyın! Geyik ve kar tanesi desenli, yumuşacık dokusuyla kış gecelerinin vazgeçilmezi."
  },
  { id: 4, name: "Performans Koşu Çorabı", price: 120.00, category: "Spor Çoraplar", image: "https://images.unsplash.com/photo-1610444583737-9f13fc30bb3c?q=80&w=800&auto=format&fit=crop", availableColors: ["Neon Yeşil", "Siyah"], availableFabrics: ["Polyester", "Naylon"] },
  { 
    id: 5, 
    name: "Çizgi Film Karakterli Çocuk", 
    price: 35.00, 
    category: "Çocuk Çorapları", 
    image: "https://images.unsplash.com/photo-1621501174351-50e56166116c?q=80&w=800&auto=format&fit=crop", 
    availableColors: ["Sarı", "Mavi", "Kırmızı"], 
    availableFabrics: ["Pamuk"],
    availableAges: ["3-4 Yaş", "5-6 Yaş", "7-8 Yaş", "9-10 Yaş"]
  },
  { id: 6, name: "Lacivert Casual Günlük", price: 45.00, category: "Günlük Çoraplar", image: "https://images.unsplash.com/photo-1612444530582-fc66183b16f4?q=80&w=800&auto=format&fit=crop", availableColors: ["Lacivert", "Siyah", "Haki"], availableFabrics: ["Pamuk", "Bambu"] },
  { id: 7, name: "Kırmızı Puantiyeli Neşeli", price: 55.00, category: "Desenli Çoraplar", image: "https://images.unsplash.com/photo-1601054704854-1a2e79dea4d3?q=80&w=800&auto=format&fit=crop", isDiscounted: true, availableColors: ["Kırmızı", "Siyah"], availableFabrics: ["Pamuk"] },
  { id: 8, name: "Termal Kışlık Dağcı Çorabı", price: 150.00, category: "Spor Çoraplar", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop", availableColors: ["Gri", "Siyah"], availableFabrics: ["Yün", "Termal Lif"] },
  { 
    id: 9, 
    name: "Bebek İlk Adım Çorabı", 
    price: 29.99, 
    category: "Çocuk Çorapları", 
    image: "https://images.unsplash.com/photo-1560506840-ec148e82a604?q=80&w=800&auto=format&fit=crop", 
    isDiscounted: true, 
    availableColors: ["Mavi", "Pembe", "Beyaz"], 
    availableFabrics: ["Pamuk"],
    availableAges: ["0-6 Ay", "6-12 Ay", "1-2 Yaş"]
  },
  { id: 10, name: "Beyaz Tenis Çorabı (3'lü)", price: 89.00, category: "Spor Çoraplar", image: "https://images.unsplash.com/photo-1582967710926-d66827038e24?q=80&w=800&auto=format&fit=crop", availableColors: ["Beyaz"], availableFabrics: ["Pamuk", "Polyester"] },
];

export const CATEGORIES = [
  "Ana Sayfa",
  "Erkek Çorapları",
  "Kadın Çorapları",
  "Çocuk Çorapları",
  "Spor Çoraplar",
  "Günlük Çoraplar",
  "Desenli Çoraplar",
  "İndirimdekiler"
];
