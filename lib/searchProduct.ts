import { fetchProducts } from "@/app/api/fetchProducts";
import { Product } from "@/components/ProductBox";

export const searchProduct = async (id: number) => {
  const products = await fetchProducts().then((data) => data.json());

  const product = products.find((product: Product) => product.id === id);

  return product as Product;
};
