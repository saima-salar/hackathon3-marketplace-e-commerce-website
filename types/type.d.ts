import { ReactNode } from 'react';
export interface CartItem {
  description: ReactNode; // ✅ Use ReactNode instead of ReactI18NextChildren
  id: string;
  name: string;
  price: number;
  quantity?: number; // Optional property
  imagePath: string;
  image?: string;  // Make the 'image' field optional
}

// Define a Product structure that matches the API
export interface Product {
  id: string;
  name: string;
  imagePath: { asset: { _ref: string } }; // ✅ Fixing type
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
  image?:string;
}


// Define a structure for Wishlist Items, matching API data
export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  imagePath: string;
  image?: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;

  
}

// Define Order Item structure for each item in an order
export interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

// Define Order structure for storing customer orders
export interface Order {
  id: string;
  fullName: string;
  email: string;
  totalPrice: number;
  items: OrderItem[];
  orderDate: string;
}

export interface CartItem extends Product {

  quantity: number;

  image: string;

  imagePath: { asset: { _ref: string; } };

}






// skUIjmmwATXUZBCxR0Lon3cGq38DB5SbAjvGZHfaacUgMdbDFIe6kpkvlcXLAv6Cu8r5wlUhpK38KaJns2HKhw0j17mUCoSwfXnLuuhqcNcv4bR3q8mD3M07RkmF6eVDf7uu7lGotnUrDWC6MITFYZbaPeIzq6UueAnQcQ51B3ZXWL3AtujX