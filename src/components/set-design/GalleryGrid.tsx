import { memo } from "react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import GalleryItem from "./GalleryItem";

interface GalleryItemProps {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  layout: number;
  images: GalleryItemProps[];
}

const GalleryGrid = memo(({ layout, images }: GalleryGridProps) => {
  const gridLayouts: { [key: number]: string } = {
    1: "grid grid-cols-1 gap-2 w-full mb-4",
    2: "grid sm:grid-cols-1 md:grid-cols-2 gap-2 mb-4",
    3: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4",
    4: "grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-4",
  };

  return (
    <div className={gridLayouts[layout]}>
      {images.map((img, index) => (
        <GalleryItem key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
});

export default GalleryGrid;
