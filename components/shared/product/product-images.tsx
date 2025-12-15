import React from "react";
import Image from "next/image";

export default function ProductImages({ images }: { images: string[] }) {
  return (
    <div>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Product image ${index}`}
          width={1000}
          height={1000}
          className="min-h-[300px] object-cover object-center"
        />
      ))}
    </div>
  );
}
