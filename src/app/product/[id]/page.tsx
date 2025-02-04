// import { client } from "@/sanity/lib/client";
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



// // import { client } from "@/sanity/lib/client";
// // import ProductPage from "../../components/ProductPage";

// // // Define the Product type
// // interface Product {
// //   id: string;
// //   name: string;
// //   price: number;
// //   description: string;
// //   category: string;
// //   image: string; // Assuming it's a reference to an image URL or asset ref
// // }

// // interface PageProps {
// //   params: {
// //     id: string; // The id from the dynamic route parameter
// //   };
// // }

// // const Page = async ({ params }: PageProps) => {
// //   const query = `*[_type == "product" && _id == $id][0]{
// //     name,
// //     "id": _id,
// //     price,
// //     description,
// //     category,
// //     "image": image.asset._ref
// //   }`;

// //   const product: Product | null = await client.fetch(query, { id: params.id });

// //   if (!product) {
// //     return (
// //       <div className="flex items-center justify-center h-screen bg-gray-100">
// //         <h1 className="text-2xl font-semibold text-gray-600">Product not found</h1>
// //       </div>
// //     );
// //   }

// //   return <ProductPage product={product} />;
// // };

// // export default Page;
import { client } from "@/sanity/lib/client";
import ProductPage from "../../components/ProductPage";

// Define the Product type
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string; // Assuming it's a reference to an image URL or asset ref
}

const Page = async ({ params }: { params: { id: string } }) => {
  const query = `*[_type == "product" && _id == $id][0]{
    name,
    "id": _id,
    price,
    description,
    category,
    "image": image.asset._ref
  }`;

  const product: Product | null = await client.fetch(query, { id: params.id });

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-600">Product not found</h1>
      </div>
    );
  }

  return <ProductPage product={product} />;
};

export default Page;
