interface ProductSizeBoxProps {
  type: "available" | "unavailable" | "selected";
  label: string;
  defaultSelected?: boolean;
  onClick?: () => void;
}

export default function ProductSizeBox({
  type,
  label,
  onClick,
}: ProductSizeBoxProps) {
  switch (type) {
    case "unavailable":
      return (
        <div
          className={
            "p-px aspect-square h-16 w-16 rounded-lg bg-gradient-to-b from-zinc-700 to-zinc-900 transition-all duration-150 ease-linear cursor-not-allowed"
          }
          onClick={onClick}
        >
          <div className="rounded-lg p-2 h-[3.9rem] w-[3.9rem] transition-all duration-150 ease-linear flex items-center justify-center absolute bg-black">
            <h2 className="text-zinc-700 text-lg font-medium">{label}</h2>
          </div>

          <div className="relative h-[5.3rem] w-px bg-zinc-700 rotate-45 left-8 bottom-3" />
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
            "p-px aspect-square h-16 w-16 rounded-lg bg-gradient-to-b from-zinc-700 to-zinc-900 transition-all duration-150 ease-linear cursor-pointer"
          }
          onClick={onClick}
        >
          <div className="rounded-lg p-2 h-full bg-black transition-all duration-150 ease-linear hover:bg-zinc-900 flex items-center justify-center">
            <h2 className="text-zinc-500 text-lg font-medium">{label}</h2>
          </div>
        </div>
      );
  }
}
