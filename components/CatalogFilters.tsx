import { ScrollShadow } from "@nextui-org/react";

export default function CatalogFilters() {
  return (
    <>
      <div className="w-full hidden lg:grid lg:grid-cols-3 gap-x-4">
        <div className="py-2 px-4 rounded-xl bg-zinc-950 text-zinc-300 text-center cursor-pointer transition-all duration-150 ease-linear hover:bg-zinc-800">
          Shoes
        </div>

        <div className="py-2 px-4 rounded-xl bg-zinc-950 text-zinc-300 text-center cursor-pointer transition-all duration-150 ease-linear hover:bg-zinc-800">
          Tech
        </div>

        <div className="py-2 px-4 rounded-xl bg-zinc-950 text-zinc-300 text-center cursor-pointer transition-all duration-150 ease-linear hover:bg-zinc-800">
          Sports
        </div>
      </div>

      <ScrollShadow
        orientation="horizontal"
        className="max-w-[400px] flex gap-x-3 lg:hidden"
      >
        <div className="py-2 px-4 rounded-xl bg-zinc-950 text-zinc-300 text-center cursor-pointer transition-all duration-150 ease-linear hover:bg-zinc-800">
          Shoes
        </div>

        <div className="py-2 px-4 rounded-xl bg-zinc-950 text-zinc-300 text-center cursor-pointer transition-all duration-150 ease-linear hover:bg-zinc-800">
          Tech
        </div>

        <div className="py-2 px-4 rounded-xl bg-zinc-950 text-zinc-300 text-center cursor-pointer transition-all duration-150 ease-linear hover:bg-zinc-800">
          Sports
        </div>
      </ScrollShadow>
    </>
  );
}
