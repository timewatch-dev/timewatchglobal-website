import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center  px-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>
        <p className="text-2xl font-semibold text-primary mt-4">
          Page not found
        </p>
        <p className="text-gray-600 mt-2">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button asChild>
          <Link href="/" className="tomato-btn mt-6 py-3 block w-fit mx-auto ">
            Go back home

            
          </Link>
        </Button>
      </div>
    </div>
  );
}
