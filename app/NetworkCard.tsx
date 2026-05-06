"use client";

import { useState } from "react";

interface NetworkCardProps {
  name: string;
  logo: string;
}

export default function NetworkCard({ name, logo }: NetworkCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="border border-gray-200 bg-white px-4 py-5 rounded-2xl flex items-center justify-center min-h-[80px] hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-pointer group">
      {!imgFailed ? (
        <img
          src={logo}
          alt={name}
          className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors duration-200">
          {name}
        </span>
      )}
    </div>
  );
}
