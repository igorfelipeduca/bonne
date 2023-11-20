import { Product } from "@/components/ProductBox";

export const removeProductFromCart = (id: number) => {
  const existentProducts = localStorage.getItem("products");
  if (existentProducts) {
    const products = JSON.parse(existentProducts);
    const product = products.find((product: Product) => product.id === id);
    if (product) {
      product.quantity = product.quantity - 1;
      if (product.quantity === 0) {
        const newProducts = products.filter(
          (product: Product) => product.id !== id
        );
        return localStorage.setItem("products", JSON.stringify(newProducts));
      }
      return localStorage.setItem("products", JSON.stringify(products));
    }
  }
  return;
};
