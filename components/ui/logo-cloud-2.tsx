"use client";

import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",
        className
      )}
      {...props}
    >
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="flex items-center justify-center bg-gray-900 rounded-2xl px-5 py-6 border border-gray-800 hover:border-primary/50 hover:shadow-lg transition-all duration-200 cursor-pointer group"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-10 w-auto object-contain select-none pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>
      ))}
    </div>
  );
}
