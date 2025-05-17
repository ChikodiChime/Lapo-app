"use client";

import Link from "next/link";
import { ArrowLeft, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent animate-pulse">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
          Page not found
        </h2>

        <p className="text-muted-foreground">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="py-8 flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-secondary/30 rounded-full animate-ping-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Search className="h-24 w-24 text-primary/50" strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>

          <Link
            href="/"
            className="flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
