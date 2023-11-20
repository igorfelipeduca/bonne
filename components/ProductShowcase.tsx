"use client";

import { Image } from "@nextui-org/react";
import CartSheet from "./CartSheet";
import ProductBox, { Product } from "./ProductBox";
import { productsMock } from "@/lib/products.mock";
import { useState } from "react";
import { Search } from "lucide-react";

export default function ProductShowcase() {
  const [query, setQuery] = useState<string>("");
  const [searchClicked, setSearchClicked] = useState<boolean>(false);

  return (
    <div className={`bg-black p-16 w-full`}>
      <div className="flex justify-center items-center gap-x-4 w-full">
        <Image src={"/icon.svg"} alt="Icon" className="h-10 w-10" isBlurred />

        <div className="w-2/3 border border-zinc-900 rounded-lg bg-black p-4 text-center flex justify-center">
          <div className="flex text-zinc-700 gap-x-2">
            <Search
              className={`${
                searchClicked ? "opacity-0" : "opacity-100"
              } transition-all duration-300 ease-linear`}
            />

            <input
              className="text-md text-zinc-500 bg-transparent placeholder:text-zinc-700 w-full text-center outline-none"
              placeholder="Looking for something?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchClicked(true)}
            />
          </div>
        </div>

        <CartSheet />
      </div>

      <div className="mt-16">
        {query ? (
          <div className="grid grid-cols-3 gap-x-8">
            {productsMock
              .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
              .map((product) => (
                <ProductBox product={product} key={product.id} />
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-x-8">
            {productsMock.map((product) => (
              <ProductBox product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
