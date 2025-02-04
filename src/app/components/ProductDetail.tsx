// import { urlFor } from '@/sanity/lib/image';


// const ProductDetail = ({ product}:{product:Product})=>{
//     return (
//         <div className='flex'>
//             <img src={urlFor(product.image).url()} alt={product.name} className='w-1/2 h-auto object-cover'/>
//             <div className='ml-4'>
//             <h2 className='text-xl font-bold'>{product.name}</h2>
//             <p className='text-gray-600'>{product.description}</p>
//             <h3 className='mt-4 text-xl'>${product.price}</h3> 
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;



// import { urlFor } from '@/sanity/lib/image';

// const ProductDetail = ({ product }: { product: Product }) => {
//     return (
//         <div className='flex'>
//             <img 
//                 src={urlFor(product.image).url()} 
//                 alt={product.name} 
//                 className='w-[250px] h-[250px] object-cover rounded-lg' 
//             />
//             <div className='ml-4'>
//                 <h2 className='text-xl font-bold'>{product.name}</h2>
//                 <p className='text-gray-600'>{product.description}</p>
//                 <h3 className='mt-4 text-xl'>${product.price}</h3>
//             </div>
//         </div>
//     );
// };

// export default ProductDetail;


import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

interface Product {
    image: {
        asset: {
            _ref: string;
        };
    };
    name: string;
    description: string;
    price: number;
}

const ProductDetail = ({ product }: { product: Product }) => {
    return (
        <div className="flex">
            <Image 
                src={urlFor(product.image).url()} 
                alt={product.name} 
                width={500} // Adjust width & height as needed
                height={500}
                className="w-[250px] h-[250px] object-cover rounded-lg" 
            />
            <div className="ml-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.description}</p>
                <h3 className="mt-4 text-xl">${product.price.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default ProductDetail;


