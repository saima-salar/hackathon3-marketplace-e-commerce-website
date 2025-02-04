const orderSchema = {
  name: "order",
  type: "document",
  title: "Orders",
  fields: [
    { name: "fullName", type: "string", title: "Full Name" },
    { name: "email", type: "string", title: "Email" },
    { name: "address", type: "string", title: "Address" },
    { name: "city", type: "string", title: "City" },
    { name: "country", type: "string", title: "Country" },
    { 
      name: "items", 
      type: "array", 
      title: "Items", 
      of: [
        { 
          type: "object", 
          fields: [
            { name: "productId", type: "string", title: "Product ID" },
            { name: "name", type: "string", title: "Product Name" },
            { name: "quantity", type: "number", title: "Quantity" },
            { name: "price", type: "number", title: "Price" },
            { name: "selectedSize", type: "string", title: "Size" },
            { 
              name: "selectedColor", 
              type: "string", 
              title: "Color", 
              options: { 
                layout: "color" 
              } 
            },
          ] 
        }
      ] 
    },
    { name: "totalPrice", type: "number", title: "Total Price" },
    { name: "orderDate", type: "datetime", title: "Order Date" }, // ✅ New field
  ],
};
export default orderSchema;