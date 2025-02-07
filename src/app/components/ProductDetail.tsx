import { Product } from "../../../types/type";  // Adjust path if necessary
import { urlFor } from "@/sanity/lib/sanity";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col md:flex-row p-4">
      <img
        src={product.image ? urlFor(product.image).url() : ''}  // Make sure urlFor is correctly defined
        alt={product.name}
        className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0"
      />
      <div className="md:ml-6 flex flex-col justify-between">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <h3 className="mt-4 text-xl font-semibold">${product.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetail;