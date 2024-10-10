import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import GalleryGrid from "@/components/set-design/GalleryGrid";
import { images } from "@/components/set-design/constants";

function SetDesign() {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-5xl mb-20">Set Design</h4>
      </div>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h4 className="font-semibold text-xl">
              Script: "Sharper" - Written by Brian Gatewood & Alessandro Tanaka
            </h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col mt-10">
              <span className="text-xl mb-10">
                Written by Brian Gatewood & Alessandro Tanaka
              </span>
              <span className="text-xl mb-10 italic">
                Materials used: Polymer Clay, Foamboard, Wood, Resin, Paper,
                Paint, Metal Wire, Glue
              </span>
            </div>
            <LightGallery
              speed={100}
              plugins={[lgZoom, lgThumbnail]}
              elementClassNames="flex flex-col"
              selector="a"
            >
              <GalleryGrid layout={3} images={images["scriptPages"]} />
              <GalleryGrid layout={2} images={images["moodboardImages"]} />
              <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/b63908a6-be0e-41c8-a695-8cee002d30fd_rw_3840.png?h=773f62547b66aea6fe51e800792202cc">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/b63908a6-be0e-41c8-a695-8cee002d30fd_rw_3840.png?h=773f62547b66aea6fe51e800792202cc"
                />
              </a>
              <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/edadcdd1-fc84-43e6-98de-bc91668471af_rw_1920.png?h=5b1c6aa12db089c432da5625583e6d69">
                <img
                  loading="lazy"
                  alt=""
                  src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/edadcdd1-fc84-43e6-98de-bc91668471af_rw_1920.png?h=5b1c6aa12db089c432da5625583e6d69"
                />
              </a>
              <GalleryGrid layout={2} images={images["conceptImages"]} />
              <GalleryGrid layout={2} images={images["modelImages"]} />
              <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/55aaefbc-73ee-4423-8c85-b546ab9dde41_rw_1920.jpeg?h=a8325527c2af1f9099faf880be28f64b">
                <img
                  loading="lazy"
                  src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/55aaefbc-73ee-4423-8c85-b546ab9dde41_rw_1920.jpeg?h=a8325527c2af1f9099faf880be28f64b"
                />
              </a>
            </LightGallery>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <h4 className="font-semibold text-xl">
              TV Pilot Script: "The Book of Enchantment" - Based on The Disney
              Villains Series of Books by Serena Valentino
            </h4>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col mt-10">
              <span className="text-xl mb-10">
                Based on The Disney Villains Series of Books by Serena Valentino
              </span>
              <span className="text-xl mb-10 italic">
                Materials used: Polymer Clay, Resin, Hot Glue, Foil, Coffee
                Grounds, Tea Leaves, Paint
              </span>
            </div>
            <LightGallery
              speed={100}
              plugins={[lgZoom, lgThumbnail]}
              elementClassNames="flex flex-col"
              selector="a"
            >
              <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfd23547-b05e-4649-8d3d-19b3c94a58a7_rw_3840.jpg?h=218e0fe56f1feb1e0ba265b5e88f361d">
                <img
                  src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfd23547-b05e-4649-8d3d-19b3c94a58a7_rw_3840.jpg?h=218e0fe56f1feb1e0ba265b5e88f361d"
                  className="w-3/4 ml-auto mr-auto mb-4"
                />
              </a>
              <GalleryGrid layout={4} images={images["tHouseImages"]} />
            </LightGallery>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <h4 className="font-semibold text-xl">"Midnight in Paris"(2011)</h4>
          </AccordionTrigger>
          <AccordionContent>
            <LightGallery
              speed={100}
              plugins={[lgZoom, lgThumbnail]}
              elementClassNames="flex flex-col"
              selector="a"
            >
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
                <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/3d3f146c-102d-4812-8df1-39d7d70052c4_rw_1920.jpg?h=f304b7c30dbd003b49a86eadeecc188e">
                  <img
                    src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/3d3f146c-102d-4812-8df1-39d7d70052c4_rw_1920.jpg?h=f304b7c30dbd003b49a86eadeecc188e"
                    className="h-[55em]"
                  />
                </a>
                <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0ad5d9de-8ed9-474d-bbe4-142f68f8c38d_rw_1920.jpg?h=02442fad0dcc0eec8be175487e4c0b2b">
                  <img
                    src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0ad5d9de-8ed9-474d-bbe4-142f68f8c38d_rw_1920.jpg?h=02442fad0dcc0eec8be175487e4c0b2b"
                    className="h-[55em]"
                  />
                </a>
              </div>
            </LightGallery>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SetDesign;
