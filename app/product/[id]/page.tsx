"use client";

import { Product } from "@/components/ProductBox";
import ProductSpecBox from "@/components/ProductSpecBox";
import CatalogSearch from "@/components/Search";
import { addProductToCard } from "@/lib/addProductToCart";
import { searchProduct } from "@/lib/searchProduct";
import { Image } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";

interface ProductPageProps {
  params: {
    id: string;
  };
}

export interface Specification {
  label: string;
  isAvailable: boolean;
}

const mockSpecifications: Specification[] = [
  {
    label: "144hz",
    isAvailable: true,
  },
  {
    label: "244hz",
    isAvailable: false,
  },
];

export default function ProductPage({ params }: ProductPageProps) {
  const [query, setQuery] = useState<string>("");
  const [product, setProduct] = useState<Product | null>(null);
  const [specifications, setSpecifications] = useState<Specification[]>([]);
  const [selectedSpecification, setSelectedSpecification] =
    useState<string>("");

  useEffect(() => {
    searchProduct(Number(params.id)).then((product) => {
      setProduct(product);

      setSpecifications(mockSpecifications);
    });
  }, []);

  const addToCart = () => {
    addProductToCard(product?.id ?? 0);

    toast(`📦 ${product?.title} added to cart!`);
  };

  return (
    <>
      <Toaster />

      <div className="hidden lg:flex">
        <div className="min-h-screen w-screen bg-black py-8">
          <CatalogSearch query={query} setQuery={setQuery} />

          <div className="flex gap-x-8 py-16 px-48">
            <Image
              src={product?.image}
              className="aspect-square h-[30rem] w-auto object-cover"
            />

            <div className="h-full flex">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white text-xl max-w-lg">
                    {product?.title}
                  </h1>

                  <div className="mt-4">
                    <h3 className="text-zinc-600 max-w-lg">
                      {product?.description}
                    </h3>
                  </div>

                  <div className="grid grid-cols-6 gap-x-4 mt-4">
                    {specifications.map((specification, index) => (
                      <ProductSpecBox
                        type={
                          selectedSpecification === specification.label
                            ? "selected"
                            : specification.isAvailable
                            ? "available"
                            : "unavailable"
                        }
                        label={specification.label}
                        key={index}
                        onClick={() =>
                          setSelectedSpecification(specification.label)
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3>Shipping Details & Fees</h3>

                  <h4 className="text-zinc-400">
                    Address: igorducca@gmail.com
                  </h4>
                  <h4 className="text-zinc-400">
                    Delivery Fee:{" "}
                    {(20).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h4>
                  <h4 className="text-zinc-400">📍 Deliver to Brazil 🇧🇷</h4>
                </div>

                <div className="mt-10 flex gap-x-4 items-center">
                  <div className="p-px rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900">
                    <div
                      className="py-2 px-8 rounded-lg bg-black flex gap-x-2 items-center transition-all duration-150 ease-linear hover:bg-zinc-900 cursor-pointer"
                      onClick={addToCart}
                    >
                      <ShoppingBag className="h-4 w-4" /> Add to cart
                    </div>
                  </div>

                  <div className="w-48 py-2 px-4 rounded-lg bg-blue-700 text-white transition-all duration-150 ease-linear hover:bg-blue-800 text-center cursor-pointer">
                    Buy for{" "}
                    {(product?.price ?? 0).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden">
        <div className="min-h-screen w-screen bg-black py-8 px-4">
          <CatalogSearch query={query} setQuery={setQuery} />

          <div className="py-16 px-2">
            <Image src={product?.image} className="aspect-video object-cover" />

            <div className="h-full flex mt-10">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <h1 className="text-white text-xl max-w-lg">
                    {product?.title}
                  </h1>

                  <div className="mt-4">
                    <h3 className="text-zinc-600 max-w-lg">
                      {product?.description}
                    </h3>
                  </div>

                  <div className="grid grid-cols-4 gap-x-4 mt-4">
                    {specifications.map((specification, index) => (
                      <ProductSpecBox
                        type={
                          selectedSpecification === specification.label
                            ? "selected"
                            : specification.isAvailable
                            ? "available"
                            : "unavailable"
                        }
                        label={specification.label}
                        key={index}
                        onClick={() =>
                          setSelectedSpecification(specification.label)
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3>Shipping Details & Fees</h3>

                  <h4 className="text-zinc-400">
                    Address: igorducca@gmail.com
                  </h4>
                  <h4 className="text-zinc-400">
                    Delivery Fee:{" "}
                    {(20).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h4>
                  <h4 className="text-zinc-400">📍 Deliver to Brazil 🇧🇷</h4>
                </div>

                <div className="mt-10 flex flex-col items-center">
                  <div className="p-px rounded-lg bg-gradient-to-b from-zinc-800 to-zinc-900 mb-4 w-full">
                    <div
                      className="py-2 w-full rounded-lg bg-black gap-x-2 items-center transition-all duration-150 ease-linear hover:bg-zinc-900 cursor-pointer flex justify-center"
                      onClick={addToCart}
                    >
                      <ShoppingBag className="h-4 w-4" /> Add to cart
                    </div>
                  </div>

                  <div className="w-full py-2 px-4 rounded-lg bg-blue-700 text-white transition-all duration-150 ease-linear hover:bg-blue-800 text-center cursor-pointer">
                    Buy for{" "}
                    {(product?.price ?? 0).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
