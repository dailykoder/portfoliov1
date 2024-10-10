import { memo } from "react";

const GalleryItem = memo(({ src, alt = "" }) => {
  return (
    <a href={src}>
      <img alt={alt} src={src} loading="lazy" className="w-full h-auto" />
    </a>
  );
});

export default GalleryItem;
