const API_URL = 'https://fakestoreapi.com/products?limit=10';

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};