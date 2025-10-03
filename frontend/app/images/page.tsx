"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Image = {
  id?: number;
  name?: string;
  url: string;
};
export default function ImagesPage() {
  const [imagesData, setImagesData] = useState<Image[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:3001/api/images");
      const data = await response.json();
      setImagesData(data.images);
    };
    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-20 mt-10">
      {imagesData.map((image: Image) => (
        <div
          key={image.id}
          className="relative flex flex-col items-center bg-gray-200 py-2 rounded-lg h-[320px] overflow-hidden group "
        >
          <Image
            src={image.url}
            width={300}
            height={300}
            alt={`Image ${image.id}`}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="absolute translate-y-full group-hover:-translate-y-10 bottom-2 bg-white bg-opacity-70 p-1 rounded transition-all duration-300 text-center mx-auto">
            <p>{image.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
