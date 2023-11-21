"use client";

import ProductBox, { Product } from "./ProductBox";
import { useEffect, useState } from "react";
import CatalogFilters from "./CatalogFilters";
import CatalogSearch from "./Search";
import { fetchProducts } from "@/app/api/fetchProducts";

export default function Catalog() {
  const [query, setQuery] = useState<string>("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const products = fetchProducts().then((data) => data.json());

    products.then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={`bg-black py-16 px-2 lg:p-16 w-full min-h-screen`}>
      <CatalogSearch query={query} setQuery={setQuery} />

      <div className="pt-16">
        <CatalogFilters />
      </div>

      {loading ? (
        <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 gap-x-8 lg:items-start mt-8">
          {Array(12)
            .fill(Math.random())
            .map((_) => (
              <div className="w-full h-72 rounded-xl bg-zinc-800 animate-pulse" />
            ))}
        </div>
      ) : (
        <div className="mt-8">
          {query ? (
            <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 items-center">
              {products
                .filter((p: Product) =>
                  p.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((product: Product) => (
                  <ProductBox product={product} key={product.id} />
                ))}
            </div>
          ) : (
            <div className="flex flex-col space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0 gap-x-8 lg:items-start">
              {products.map((product: Product) => (
                <ProductBox product={product} key={product.id} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
