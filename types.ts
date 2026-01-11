
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isDiscounted?: boolean;
  description?: string;
  availableColors?: string[];
  availableFabrics?: string[];
  availableAges?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedFabric?: string;
  selectedAge?: string;
}

export type AuthType = 'login' | 'register';

export type CategoryType = 
  | "Ana Sayfa"
  | "Favorilerim"
  | "Erkek Çorapları" 
  | "Kadın Çorapları" 
  | "Çocuk Çorapları" 
  | "Spor Çoraplar" 
  | "Günlük Çoraplar" 
  | "Desenli Çoraplar" 
  | "İndirimdekiler";
