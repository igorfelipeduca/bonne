import { Image } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="w-screen h-screen bg-black items-center justify-center">
      <Image
        src={"/icon.svg"}
        alt="Bonne"
        className="h-32 w-32 animate-pulse"
        isBlurred
      />
    </div>
  );
}
