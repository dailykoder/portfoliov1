import { memo } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import GalleryItem from "./GalleryItem";

const GalleryGrid = memo(({ layout, images }) => {
  const gridLayouts = {
    1: "w-full mb-4",
    2: "grid grid-cols-2 gap-2 mb-4",
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
