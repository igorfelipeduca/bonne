"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import SheetProduct from "./SheetProduct";
import { Badge } from "@nextui-org/react";
import { CartProduct } from "@/lib/addProductToCart";
import { useEffect, useState } from "react";

export default function CartSheet() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    setCartProducts(JSON.parse(localStorage.getItem("products") as string));
  }, []);

  return (
    <Sheet>
      <SheetTrigger>
        <Badge
          className="bg-blue-500"
          content={cartProducts?.length}
          shape="circle"
          isInvisible={cartProducts?.length === 0}
        >
          <ShoppingBag className="text-zinc-500 h-10 w-10 stroke-1 transtion-all duration-150 ease-linear hover:text-blue-500 cursor-pointer" />
        </Badge>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-medium">Your wanted items</SheetTitle>
        </SheetHeader>

        {cartProducts?.length ? (
          <div className="mt-8 space-y-4">
            {cartProducts.map((product) => (
              <SheetProduct key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="h-full flex justify-center items-center">
            <h3 className="text-zinc-700">
              What about choosing some products?
            </h3>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
