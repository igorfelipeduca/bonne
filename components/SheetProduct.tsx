"use client";

import { Image } from "@nextui-org/react";
import { Product } from "./ProductBox";
import { Trash2, Trash2Icon, XIcon } from "lucide-react";
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
    searchProduct(product.id).then((product) => {
      setParsedProduct(product);
    });
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
        <div className="flex flex-col space-y-2 w-full">
          <Image
            alt={parsedProduct?.title}
            src={parsedProduct?.image}
            className="aspect-video object-cover"
            isBlurred
          />

          <h3 className="text-zinc-400">{parsedProduct?.title}</h3>

          <div className="w-full flex justify-between items-center text-md">
            <div className="flex gap-x-2 items-center text-red-500">
              <Trash2Icon onClick={removeProduct} className="h-5 w-5" />
              Remove
            </div>

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
        <div className="flex flex-col space-y-4 w-full">
          <Image
            alt={parsedProduct?.title}
            src={parsedProduct?.image}
            className="aspect-video object-cover"
            isBlurred
          />

          <div className="w-full mt-2">
            <h3 className="text-zinc-400">{parsedProduct?.title}</h3>
          </div>

          <div className="w-full flex justify-between items-center mt-2">
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
