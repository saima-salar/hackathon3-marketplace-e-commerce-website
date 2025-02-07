"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const { cart, removeFromCart, totalPrice } = useCart();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white shadow rounded-lg flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p>
                  Size: <span className="font-semibold">{item.selectedSize}</span> | Color:{" "}
                  <span
                    className="inline-block w-5 h-5 rounded-full border border-gray-300"
                    style={{ backgroundColor: item.selectedColor }}
                  ></span>
                </p>
                <p className="text-lg font-semibold mt-2">${item.price}</p>
              </div>
              <button
                onClick={() => {
                  removeFromCart(item.id);
                  alert(`❌ Removed ${item.name} from cart.`);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price Section */}
          <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>

          {/* Proceed to Checkout Button */}
          <button
            onClick={() => {
              if (cart.length > 0) {
                alert("🛒 Proceeding to Checkout...");
                router.push("/checkoutpage");
              }
            }}
            className="w-full bg-green-500 text-white py-3 rounded-lg mt-4 hover:bg-green-600"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
