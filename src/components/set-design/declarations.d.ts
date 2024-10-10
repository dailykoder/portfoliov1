declare module "@/components/set-design/constants" {
  export const images: any;
}

declare module "@/components/set-design/GalleryGrid" {
  import { ReactNode } from "react";

  interface GalleryItemProps {
    src: string;
    alt: string;
  }

  interface GalleryGridProps {
    layout: number;
    images: GalleryItemProps[];
  }

  const GalleryGrid: (props: GalleryGridProps) => ReactNode;
  export default GalleryGrid;
}
