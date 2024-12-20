import { memo } from "react";

interface GalleryItemProps {
  src: string;
  alt?: string;
}

const GalleryItem = memo(({ src, alt = "" }: GalleryItemProps) => {
  return (
    <a href={src}>
      <img alt={alt} src={src} loading="lazy" className="w-full h-auto" />
    </a>
  );
});

export default GalleryItem;
