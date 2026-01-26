"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProductImages({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div>
      {/* Main image */}
      <div className="mb-4">
        <Image
          src={images[selected]}
          alt={`Product image ${selected}`}
          width={800}
          height={800}
          className="w-full max-h-[600px] object-cover object-center rounded-md"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(index)}
            aria-pressed={selected === index}
            className={`rounded-md overflow-hidden border-2 focus:outline-none ${
              selected === index ? "border-primary" : "border-transparent"
            }`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index}`}
              width={100}
              height={100}
              className={`object-cover object-center ${selected === index ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
