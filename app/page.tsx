"use client";

import { Image, NextUIProvider } from "@nextui-org/react";
import { MoveDown } from "lucide-react";
import { Koulen } from "next/font/google";
import ProductShowcase from "../components/ProductShowcase";
import { Toaster } from "sonner";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <NextUIProvider>
      <Toaster />

      <main className="h-screen w-screen bg-[url('/home-background.png')] bg-cover px-32 py-24">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-center">
              <Image
                src={"/icon.svg"}
                alt="Icon"
                className="h-32 w-32"
                isBlurred
              />
            </div>

            <div className="flex justify-center pt-16 pb-8">
              <h1
                className={`text-8xl text-white mix-blend-exclusion ${koulen.className}`}
              >
                E-COMMERCE MADE EASY
              </h1>
            </div>

            <div className="flex justify-center">
              <h1
                className={`text-8xl text-white mix-blend-exclusion ${koulen.className}`}
              >
                OPEN-SOURCE SAAS
              </h1>
            </div>
          </div>

          <div className="flex justify-center">
            <MoveDown className="text-white/75 w-10 h-auto animate animate-bounce duration-1000" />
          </div>
        </div>
      </main>

      <ProductShowcase />
    </NextUIProvider>
  );
}
