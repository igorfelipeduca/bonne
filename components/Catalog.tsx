"use client";

import { Image } from "@nextui-org/react";
import CartSheet from "./CartSheet";
import ProductBox, { Product } from "./ProductBox";
import { productsMock } from "@/lib/products.mock";
import { useState } from "react";
import { Search } from "lucide-react";
import CatalogFilters from "./CatalogFilters";
import CatalogSearch from "./Search";

export default function Catalog() {
  const [query, setQuery] = useState<string>("");

  return (
    <div className={`bg-black p-16 w-full min-h-screen`}>
      <CatalogSearch query={query} setQuery={setQuery} />

      <div className="pt-16">
        <CatalogFilters />
      </div>

      <div className="mt-8">
        {query ? (
          <div className="grid grid-cols-3 gap-x-8 items-center">
            {productsMock
              .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
              .map((product) => (
                <ProductBox product={product} key={product.id} />
              ))}
          </div>
        ) : (
          <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-3 lg:space-y-0 gap-x-8">
            {productsMock.map((product) => (
              <ProductBox product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
