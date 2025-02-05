"use client"; // Ensure this is a client-side component

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation"; // Use next/navigation for newer Next.js routing
import { client } from "../../sanity/lib/sanity"; // Import Sanity client

const CheckoutPage = () => {
  const { cart, totalPrice, clearCart } = useCart(); // Get cart & total price from context
  const router = useRouter(); // useRouter hook for navigation

  // Local state for the form data
  const [form, setForm] = useState({
    fullName: "",
    address: "",
    city: "",
    country: "",
    email: "",
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle checkout process
  const handleCheckout = async () => {
    // Check if all fields are filled out
    if (!form.fullName || !form.address || !form.city || !form.country || !form.email) {
      alert("⚠️ Please fill in all fields before proceeding.");
      return;
    }

    try {
      // Prepare order data for Sanity
      const orderData = {
        _type: "order",
        fullName: form.fullName,
        email: form.email,
        address: form.address,
        city: form.city,
        country: form.country,
        items: cart.map((item) => ({
          _type: "object",
          productId: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          selectedSize: item.selectedSize,
          selectedColor: item.selectedColor,
        })),
        totalPrice,
        orderDate: new Date().toISOString(),
      };

      // Save order to Sanity
      await client.create(orderData);

      // Success handling
      alert("✅ Order placed successfully!");
      clearCart(); // Clears cart after successful order
      router.push("/order-success"); // Redirect to the success page

    } catch (error) {
      console.error("Checkout Error:", error);
      alert("❌ Failed to place order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Shipping Details Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleInputChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleInputChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            onChange={handleInputChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleInputChange}
            className="p-3 border rounded-lg w-full"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleInputChange}
            className="p-3 border rounded-lg w-full"
          />
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <ul className="space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} (x{item.quantity})</span>
              <span>${item.price * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="border-t mt-4 pt-4 flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${totalPrice}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
