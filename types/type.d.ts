
interface CartItem {
  description: ReactNode; // ✅ Use ReactNode instead of ReactI18NextChildren
  id: string;
  name: string;
  price: number;
  quantity: number;
  imagePath: string;
  image?: string;  // Make the 'image' field optional
}

// Define a Product structure that matches the API
export interface Product {
  id: string;
  name: string;
  imagePath: { asset: { _ref: string } }; // ✅ Fixing type
  price: string;
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
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
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
