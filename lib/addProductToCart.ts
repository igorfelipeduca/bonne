export interface CartProduct {
  id: number;
  quantity: number;
}

export const addProductToCard = (id: number) => {
  const existentProducts = localStorage.getItem("products");

  if (existentProducts) {
    const products = JSON.parse(existentProducts);
    const product = products.find((product: any) => product.id === id);

    if (product) {
      product.quantity = product.quantity + 1;
    } else {
      products.push({
        id,
        quantity: 1,
      });
    }

    return localStorage.setItem("products", JSON.stringify(products));
  } else {
    return localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id,
          quantity: 1,
        },
      ])
    );
  }
};
