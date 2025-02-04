import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "h0ftj8xn", // 🔹 Replace with your actual project ID
  dataset: "production", // or your dataset name
  apiVersion: "2025-01-01", // 🔹 Use the latest API version
  useCdn: false, // Set to false for real-time updates
  token: "skka4strq8wrTAzFpj4cr4PGTL5QguJJu7UzXhZcDKAlQtEeoDnLRYGYsuFMUsCOKA8bJoI17Hh9gdl8Mf5vfVhaQdxgBMQWxxui3QDaEXWKGxockFe3EOz3l0yCA4oIkO69R9pya49xGrcDiRzpsFPmSNh5dMOMyPK4nzHz63uscDyM9EMt", // ✅ Add your API token securely
});
