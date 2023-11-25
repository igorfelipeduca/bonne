interface ProductSizeBoxProps {
  type: "available" | "unavailable" | "selected";
  label: string;
  defaultSelected?: boolean;
  onClick?: () => void;
}

export default function ProductSpecBox({
  type,
  label,
  onClick,
}: ProductSizeBoxProps) {
  switch (type) {
    case "unavailable":
      return (
        <div
          className={
            "p-px rounded-lg bg-gradient-to-b from-zinc-700 to-zinc-900 transition-all duration-150 ease-linear cursor-not-allowed"
          }
          onClick={onClick}
        >
          <div className="relative h-full w-full bg-black rounded-lg p-2 transition-all duration-150 ease-linear flex items-center justify-center">
            <h2 className="text-zinc-700 text-lg font-medium">{label}</h2>
            <div className="absolute w-px h-full rotate-45 bg-zinc-700" />
          </div>
        </div>
      );

    case "selected":
      return (
        <div className="rounded-lg p-2 h-16 w-16 bg-blue-700 transition-all duration-150 ease-linear hover:bg-blue-800 flex items-center justify-center cursor-pointer">
          <h2 className="text-white text-lg font-medium">{label}</h2>
        </div>
      );

    default:
      return (
        <div
          className={
            "p-px aspect-square rounded-lg bg-gradient-to-b from-zinc-700 to-zinc-900 transition-all duration-150 ease-linear cursor-pointer"
          }
          onClick={onClick}
        >
          <div className="rounded-lg p-2 h-full w-full bg-black transition-all duration-150 ease-linear hover:bg-zinc-900 flex items-center justify-center">
            <h2 className="text-zinc-500 text-lg font-medium">{label}</h2>
          </div>
        </div>
      );
  }
}
