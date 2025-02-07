import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: "h0ftj8xn",
  dataset: "production",
  apiVersion: "2025-01-01",
  token: process.env.SANITY_TOKEN, // Fetch token from .env.local
  useCdn: process.env.NODE_ENV === 'production', // Enable CDN in production only
});

// Function to fetch all products
export const fetchProducts = async () => {
  const query = '*[_type == "product"]';
  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Sanity image URL builder setup
const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
