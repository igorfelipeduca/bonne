import { addProductToCard } from "@/lib/addProductToCart";
import { Image } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export default function ProductBox({ product }: { product: Product }) {
  const addToCart = () => {
    addProductToCard(product.id);

    toast(`📦 ${product.title} added to cart!`);
  };

  return (
    <>
      <Link
        href={`/product/${product.id}`}
        className="hidden lg:flex lg:flex-col gap-x-4"
      >
        <Image
          src={product.image}
          className="h-auto lg:h-96 w-auto aspect-video object-cover cursor-pointer transition-all "
          isBlurred
        />

        <div className="flex justify-between items-center lg:mt-4">
          <h3 className="text-zinc-500 text-lg font-medium max-w-sm truncate">
            {product.title}
          </h3>

          <div className="flex gap-x-2 items-center">
            <ShoppingBag
              onClick={addToCart}
              className="text-zinc-500 h-6 w-6 stroke-1 transtion-all duration-150 ease-linear hover:text-blue-500 cursor-pointer"
            />
          </div>
        </div>

        <p className="text-zinc-700 mt-3">{product.description}</p>
      </Link>

      <Link
        href={`/product/${product.id}`}
        className="flex flex-col lg:hidden gap-y-4"
      >
        <Image
          src={product.image}
          className="h-auto lg:h-96 w-auto aspect-video object-cover cursor-pointer transition-all "
          isBlurred
        />

        <div className="flex gap-x-2 items-center" onClick={addToCart}>
          <ShoppingBag
            onClick={addToCart}
            className="text-blue-500 h-6 w-6 stroke-1 transtion-all duration-150 ease-linear cursor-pointer"
          />

          <h3 className="text-md">Add to cart</h3>
        </div>

        <div className="flex justify-center">
          <h3 className="text-zinc-500 text-lg font-medium max-w-sm truncate">
            {product.title}
          </h3>
        </div>

        <p className="text-zinc-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          quo aspernatur fugit consectetur excepturi maxime similique possimus
          totam soluta laudantium exercitationem, ipsam id autem ea.
        </p>
      </Link>
    </>
  );
}
