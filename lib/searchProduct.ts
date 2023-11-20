import { Product } from "@/components/ProductBox";
import { productsMock } from "./products.mock";

export const searchProduct = (id: number): Product | undefined => {
  const existentProducts = localStorage.getItem("products");

  if (existentProducts) {
    const products = JSON.parse(existentProducts);
    const product = products.find((product: any) => product.id === id);

    const mockedProduct = productsMock.find((product) => product.id === id);

    return mockedProduct;
  }

  return;
};
