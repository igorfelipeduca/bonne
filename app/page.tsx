"use client";

import { Image, NextUIProvider } from "@nextui-org/react";
import { MoveDown } from "lucide-react";
import { Koulen } from "next/font/google";
import Catalog from "../components/Catalog";
import { Toaster } from "sonner";
import TopBanner from "@/components/TopBanner";

const koulen = Koulen({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <NextUIProvider>
      <Toaster />

      <TopBanner />

      <Catalog />
    </NextUIProvider>
  );
}
