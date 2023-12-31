import { Image } from "@nextui-org/react";
import { Search } from "lucide-react";
import CartSheet from "./CartSheet";
import Link from "next/link";

interface CatalogSearchProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function CatalogSearch({ query, setQuery }: CatalogSearchProps) {
  return (
    <>
      <div className="hidden lg:flex lg:justify-center items-center gap-x-4 w-full">
        <Link href={"/"}>
          <Image src={"/icon.svg"} alt="Icon" className="h-10 w-10" isBlurred />
        </Link>

        <div className="w-full px-2 lg:px-0 lg:w-2/3 border border-zinc-900 rounded-lg bg-black p-4 text-center flex justify-center">
          <div className="flex text-zinc-700 gap-x-2">
            <Search className={`transition-all duration-300 ease-linear`} />

            <input
              className="text-md text-zinc-500 bg-transparent placeholder:text-zinc-700 w-full text-center outline-none"
              placeholder="Looking for something?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <CartSheet />
      </div>

      <div className="flex lg:hidden px-2 items-center gap-x-4 w-full">
        <Link href={"/"}>
          <Image src={"/icon.svg"} alt="Icon" className="h-10 w-10" isBlurred />
        </Link>

        <div className="w-full px-2 lg:px-0 lg:w-2/3 border border-zinc-900 rounded-lg bg-black p-4 text-center flex justify-center">
          <div className="flex text-zinc-700 gap-x-2">
            <Search className={`transition-all duration-300 ease-linear`} />

            <input
              className="text-md text-zinc-500 bg-transparent placeholder:text-zinc-700 w-full text-center outline-none"
              placeholder="Looking for something?"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        <CartSheet />
      </div>
    </>
  );
}
