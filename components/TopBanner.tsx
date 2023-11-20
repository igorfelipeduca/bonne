import { LucideGithub } from "lucide-react";

export default function TopBanner() {
  return (
    <div className="h-12 bg-blue-500">
      <div className="flex justify-center items-center h-full">
        <a
          className="flex gap-x-2 items-center"
          href="https://github.com/igorfelipeduca/bonne"
          target="_blank"
          rel="noreferrer"
        >
          <LucideGithub className="h-5 w-5" />
          <h1>Checkout the project repo on Github</h1>
        </a>
      </div>
    </div>
  );
}
