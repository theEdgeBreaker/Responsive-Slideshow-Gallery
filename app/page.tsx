"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import ImageViewer from "./ImageViewer";
import img1Path from "@/assets/Images/Img-1.jpg";
import img2Path from "@/assets/Images/Img-2.jpg";
import img3Path from "@/assets/Images/Img-3.jpg";
import img4Path from "@/assets/Images/Img-4.jpg";
import img5Path from "@/assets/Images/Img-5.jpg";
import img6Path from "@/assets/Images/Img-6.jpg";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: ImageProps[] = [
    { src: img1Path, alt: "Image 1" },
    { src: img2Path, alt: "Image 2" },
    { src: img3Path, alt: "Image 3" },
    { src: img4Path, alt: "Image 4" },
    { src: img5Path, alt: "Image 5" },
    { src: img6Path, alt: "Image 6" },
  ];

  const handleOnClicked = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    const nextIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setSelectedImage(images[nextIndex].src as string);
    setCurrentImageIndex(nextIndex);
  };

  const handlePreviousImage = () => {
    const prevIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setSelectedImage(images[prevIndex].src as string);
    setCurrentImageIndex(prevIndex);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {selectedImage && (
        <ImageViewer
          selectedImage={selectedImage}
          onNext={handleNextImage}
          onPrev={handlePreviousImage}
        />
      )}
      <div className="flex flex-row flex-wrap gap-3 justify-center px-3 md:px-0">
        {images.map((image, index) => (
          <Image
            key={index}
            {...image}
            className="border-4 border-solid border-blue-900 w-36 cursor-pointer hover:border-blue-500"
            onClick={() => handleOnClicked(image.src as string, index)}
          />
        ))}
      </div>
    </div>
  );
}
