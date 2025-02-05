import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Sanity client setup




export const client = createClient({
  projectId: "h0ftj8xn",
  dataset: "production",
  apiVersion: "2025-01-01",
  token: "skka4strq8wrTAzFpj4cr4PGTL5QguJJu7UzXhZcDKAlQtEeoDnLRYGYsuFMUsCOKA8bJoI17Hh9gdl8Mf5vfVhaQdxgBMQWxxui3QDaEXWKGxockFe3EOz3l0yCA4oIkO69R9pya49xGrcDiRzpsFPmSNh5dMOMyPK4nzHz63uscDyM9EMt",  // Ensure this token has write permissions
  useCdn: false,
});


// Function to get a product by its ID
export const getProductById = async (id: string) => {
  const query = `*[_type == "product" && _id == $id][0]`; // Fetch a product by its ID
  const params = { id };
  const product = await client.fetch(query, params);
  return product;
};

// Sanity image URL builder setup
const builder = createImageUrlBuilder({
  projectId: "h0ftj8xn", // Replace with your projectId
  dataset: "production", // Replace with your dataset name
});

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

// Function to fetch all products
export const fetchProducts = async () => {
  const query = '*[_type == "product"]'; // Example query to fetch all products
  try {
    const products = await client.fetch(query); // No need to import fetch separately
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
