// types/type.d.ts

// types/type.ts

export interface CartItem {
    id: string;               // Add id property here
    product: Product;
    quantity: number;
    selectedSize?: string;
    selectedColor?: string;
  }
  
  export interface Product {
    _id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    image: string;
    category: string;
    createdAt: string;
    updatedAt: string;
  }
  
// types/type.ts

export interface Order {
    id: string;
    fullName: string;
    email: string;
    totalPrice: number;
    items: { name: string; price: number; quantity: number }[];  // Add the items array
    orderDate: string;
  }
  
  
  
  
    // APIToken : "skka4strq8wrTAzFpj4cr4PGTL5QguJJu7UzXhZcDKAlQtEeoDnLRYGYsuFMUsCOKA8bJoI17Hh9gdl8Mf5vfVhaQdxgBMQWxxui3QDaEXWKGxockFe3EOz3l0yCA4oIkO69R9pya49xGrcDiRzpsFPmSNh5dMOMyPK4nzHz63uscDyM9EMt"
  
  
    // *[_type == "order"] | order(orderDate desc) {
    //   _id,
    //   fullName,
    //   email,
    //   totalPrice,
    //   items[]->{name, price, quantity},
    //   orderDate
    // }