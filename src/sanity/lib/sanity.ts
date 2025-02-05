import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity client setup
export const client = createClient({
  projectId: "h0ftj8xn",
  dataset: "production",
  apiVersion: "2025-01-01",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,  // Use environment variable for security
  useCdn: false,
});

// Function to get a product by its ID
export const getProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == $id][0]`;
  const params = { id };
  try {
    const product = await client.fetch(query, params);
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

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

// Generic data fetching function
export const fetchData = async (query: string, params: Record<string, any> = {}) => {
  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// Sanity image URL builder setup
const builder = createImageUrlBuilder({
  projectId: "h0ftj8xn",
  dataset: "production",
});

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
