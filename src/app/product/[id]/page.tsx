// import { client } from "../../../sanity/lib/sanity";
// import  ProductPage  from "../../components/ProductPage";



// const Page = async ({ params }: { params: { id: string } }) => {
//   const query = `*[_type == "product" && _id == $id][0]{
//     name,
//     "id": _id,
//     price,
//     description,
//     category,
//     "image": image.asset._ref
//   }`;

//   const product: Product | null = await client.fetch(query, { id: params.id });

//   if (!product) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-2xl font-semibold text-gray-600">Product not found</h1>
//       </div>
//     );
//   }

//   return <ProductPage product={product} />;
// };

// export default Page;


import { client } from "../../../sanity/lib/sanity";
import ProductPage from "../../components/ProductPage";
import { Product } from "../../../../types/type";  // Import your Product type
import { urlFor } from "../../../sanity/lib/sanity";  // Add URL builder for images

const Page = async ({ params }: { params: { id: string } }) => {
  const query = `*[_type == "product" && _id == $id][0]{
    name,
    "id": _id,
    price,
    description,
    category,
    "image": image.asset._ref
  }`;

  // Fetch the product data
  const product: Product | null = await client.fetch(query, { id: params.id });

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-600">Product not found</h1>
      </div>
    );
  }

  // Ensure image URL is built from the Sanity image reference
  if (product.imagePath) {
    product.imagePath = urlFor(product.imagePath).url();  // Use urlFor function to build image URL
  }

  return <ProductPage product={product} />;
};

export default Page;
