import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: "h0ftj8xn",
  dataset:"production",
  apiVersion: "2025-01-01",
  token: "skka4strq8wrTAzFpj4cr4PGTL5QguJJu7UzXhZcDKAlQtEeoDnLRYGYsuFMUsCOKA8bJoI17Hh9gdl8Mf5vfVhaQdxgBMQWxxui3QDaEXWKGxockFe3EOz3l0yCA4oIkO69R9pya49xGrcDiRzpsFPmSNh5dMOMyPK4nzHz63uscDyM9EMt",  // This will be pulled from .env.local
  useCdn: process.env.NODE_ENV === 'production', // Make sure CDN is enabled in production only
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

// Sanity image URL builder setup
const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
