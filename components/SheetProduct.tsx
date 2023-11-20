"use client";

import { Image } from "@nextui-org/react";
import { Product } from "./ProductBox";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { removeProductFromCart } from "@/lib/removeProductFromCart";
import { CartProduct } from "@/lib/addProductToCart";
import { searchProduct } from "@/lib/searchProduct";

export default function SheetProduct({ product }: { product: CartProduct }) {
  const [parsedProduct, setParsedProduct] = useState<Product>();
  const [removeVisible, setRemoveVisible] = useState<boolean>(false);
  const [removeClicked, setRemoveClicked] = useState<boolean>(false);
  const [productHidden, setProductHidden] = useState<boolean>(false);

  useEffect(() => {
    setParsedProduct(searchProduct(product.id));
  }, [product]);

  const removeProduct = () => {
    setRemoveClicked(true);
    removeProductFromCart(product.id);

    setTimeout(() => {
      setProductHidden(true);
    }, 350);
  };

  return (
    <>
      <div
        className={`w-full h-auto hidden lg:flex ${
          removeClicked
            ? "animate-out slide-out-to-bottom fade-out duration-400"
            : ""
        }`}
        onMouseEnter={() => setRemoveVisible(!removeVisible)}
        onMouseLeave={() => setRemoveVisible(!removeVisible)}
        hidden={productHidden}
      >
        <div
          className="bg-red-500/40 w-[21rem] h-48 absolute z-50 rounded-xl mix-blend-screen transition-all duration-150 ease-linear"
          hidden={!removeVisible}
        >
          <div className={`h-full flex justify-center items-center`}>
            <Trash2
              className="h-10 w-10 text-white cursor-pointer"
              onClick={removeProduct}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 w-full">
          <Image
            alt={parsedProduct?.name}
            src={`/${parsedProduct?.image}`}
            className="aspect-video object-cover"
            isBlurred
          />

          <div className="w-full flex justify-between items-center">
            <h3 className="text-zinc-700">{parsedProduct?.name}</h3>

            <h3 className="text-zinc-500">
              {parsedProduct?.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-auto flex lg:hidden ${
          removeClicked
            ? "animate-out slide-out-to-bottom fade-out duration-400"
            : ""
        }`}
        onMouseEnter={() => setRemoveVisible(!removeVisible)}
        onMouseLeave={() => setRemoveVisible(!removeVisible)}
        hidden={productHidden}
      >
        <div className="flex flex-col space-y-2 w-full">
          <Image
            alt={parsedProduct?.name}
            src={`/${parsedProduct?.image}`}
            className="aspect-video object-cover"
            isBlurred
          />

          <div className="w-full flex justify-between items-center">
            <h3 className="text-zinc-700">{parsedProduct?.name}</h3>

            <h3 className="text-zinc-500">
              {parsedProduct?.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>

            <div
              className="flex gap-x-2 items-center text-red-500"
              onClick={removeProduct}
            >
              <Trash2 className="h-4 w-4" />
              <h3>Remove</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
