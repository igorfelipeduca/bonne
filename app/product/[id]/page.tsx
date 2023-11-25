"use client";

import { Product } from "@/components/ProductBox";
import ProductSizeBox from "@/components/ProductSizeBox";
import CatalogSearch from "@/components/Search";
import { searchProduct } from "@/lib/searchProduct";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

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
    label: "Blue",
    isAvailable: true,
  },
  {
    label: "Red",
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

  return (
    <>
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
                  <h1 className="text-white text-xl">{product?.title}</h1>

                  <div className="mt-4">
                    <h3 className="text-zinc-600 max-w-lg">
                      {product?.description}
                    </h3>
                  </div>

                  <div className="grid grid-cols-6 gap-x-4 mt-4">
                    {specifications.map((specification, index) => (
                      <ProductSizeBox
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

                <div className="mt-10">
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
                  <h1 className="text-white text-xl">{product?.title}</h1>

                  <div className="mt-4">
                    <h3 className="text-zinc-600 max-w-lg">
                      {product?.description}
                    </h3>
                  </div>

                  <div className="grid grid-cols-4 gap-x-4 mt-4">
                    {specifications.map((specification, index) => (
                      <ProductSizeBox
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

                <div className="mt-10">
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
