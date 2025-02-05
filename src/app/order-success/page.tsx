"use client";

import { useRouter } from "next/navigation";

const OrderSuccessPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-green-600" aria-live="polite">
          Order Placed Successfully!
        </h1>
        <p className="mt-4 text-gray-600">
          Thank you for shopping with us. Your order will be delivered soon.
        </p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
