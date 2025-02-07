import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


export const sanityClient = createClient({
  projectId: "h0ftj8xn", // 🔹 Replace with your actual project ID
  dataset: "production", // or your dataset name
  apiVersion: "2025-01-01", // 🔹 Use the latest API version
  useCdn: false, // Set to false for real-time updates
  token:"skUIjmmwATXUZBCxR0Lon3cGq38DB5SbAjvGZHfaacUgMdbDFIe6kpkvlcXLAv6Cu8r5wlUhpK38KaJns2HKhw0j17mUCoSwfXnLuuhqcNcv4bR3q8mD3M07RkmF6eVDf7uu7lGotnUrDWC6MITFYZbaPeIzq6UueAnQcQ51B3ZXWL3AtujX", // ✅ Add your API token securely
});




// // ✅ Use environment variables for security
// export const sanityClient = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h0ftj8xn',
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01',  // ✅ Use stable API version
//   useCdn: false, // Set to `true` in production for caching
// });

// ✅ Function to fetch all products
export const fetchProducts = async () => {
  const query = `*[_type == "product"]`;
  try {
    const products = await sanityClient.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// ✅ Corrected Sanity Image URL Builder
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
