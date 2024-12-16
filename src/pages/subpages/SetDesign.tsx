import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Palette, Brush, Camera, Star } from "lucide-react";
import Header from "@/components/Header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent } from "@/components/ui/card";

import GalleryGrid from "@/components/set-design/GalleryGrid";
import { images } from "@/components/set-design/constants";

function SetDesign() {
  return (
    <div className="w-full py-6 px-4 md:px-8">
      {/* Overlay to improve content readability */}
      <div className="fixed inset-0 pointer-events-none" />

      {/* Content wrapper */}
      <div>
        {/* Hero Section */}
        <Header title="Set Design" />

        {/* Main Content */}
        <div className="mx-auto space-y-20">
          {/* Accordion Section */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <Accordion type="multiple" className="w-full space-y-6">
              <AccordionItem
                value="item-1"
                className="border border-[#e8b5bd] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-[#d4848c] group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                      Script: "Sharper"
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6">
                  <div>
                    <div className="mt-6 space-y-4">
                      <h5 className="md:text-md lg:text-lg ml-5 font-semibold text-[#4a3034]">
                        Written by Brian Gatewood & Alessandro Tanaka
                      </h5>
                      <div className="flex items-center space-x-4 text-[#6d464c]">
                        <Brush className="w-5 h-5" />
                        <span className="italic">
                          Materials: Polymer Clay, Foamboard, Wood, Resin,
                          Paper, Paint, Metal Wire, Glue
                        </span>
                      </div>
                    </div>
                    <LightGallery
                      speed={500}
                      plugins={[lgZoom, lgThumbnail]}
                      elementClassNames="flex flex-col"
                      selector="a"
                    >
                      <GalleryGrid layout={3} images={images["scriptPages"]} />
                      <GalleryGrid
                        layout={2}
                        images={images["moodboardImages"]}
                      />
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
                      <GalleryGrid
                        layout={2}
                        images={images["conceptImages"]}
                      />
                      <GalleryGrid layout={2} images={images["modelImages"]} />
                      <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/55aaefbc-73ee-4423-8c85-b546ab9dde41_rw_1920.jpeg?h=a8325527c2af1f9099faf880be28f64b">
                        <img
                          loading="lazy"
                          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/55aaefbc-73ee-4423-8c85-b546ab9dde41_rw_1920.jpeg?h=a8325527c2af1f9099faf880be28f64b"
                        />
                      </a>
                    </LightGallery>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border border-[#e8b5bd] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-[#d4848c] group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                      TV Pilot Script: "The Book of Enchantment"
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6">
                  <LightGallery
                    speed={500}
                    plugins={[lgZoom, lgThumbnail]}
                    elementClassNames="flex flex-col"
                    selector="a"
                  >
                    <div className="mt-6 space-y-4">
                      <h5 className="md:text-md lg:text-lg ml-5 font-semibold text-[#4a3034]">
                        Based on The Disney Villains Series of Books by Serena
                        Valentino
                      </h5>
                      <div className="flex items-center space-x-4 text-[#6d464c]">
                        <Brush className="w-5 h-5" />
                        <span className="italic">
                          Materials used: Polymer Clay, Resin, Hot Glue, Foil,
                          Coffee Grounds, Tea Leaves, Paint
                        </span>
                      </div>
                    </div>
                    <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfd23547-b05e-4649-8d3d-19b3c94a58a7_rw_3840.jpg?h=218e0fe56f1feb1e0ba265b5e88f361d">
                      <img
                        src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfd23547-b05e-4649-8d3d-19b3c94a58a7_rw_3840.jpg?h=218e0fe56f1feb1e0ba265b5e88f361d"
                        className="w-3/4 ml-auto mr-auto mb-4 mt-6"
                      />
                    </a>
                    <GalleryGrid layout={4} images={images["tHouseImages"]} />
                  </LightGallery>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border border-[#e8b5bd] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-[#d4848c] group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                      "Midnight in Paris" (2011)
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6">
                  <AccordionContent>
                    <LightGallery
                      speed={500}
                      plugins={[lgZoom, lgThumbnail]}
                      elementClassNames="flex flex-col"
                      selector="a"
                    >
                      <div className="mt-6 space-y-4">
                        <h5 className="ml-5 font-semibold text-[#4a3034]">
                          This conceptual design represents the two timelines of
                          the story: 1920s and modern day
                        </h5>
                        <div className="flex items-center space-x-4 text-[#6d464c]">
                          <Brush className="w-5 h-5" />
                          <span className="italic">
                            Materials used: Foam core, task board, resin, paint,
                            metal leaf, sand, fairy light
                          </span>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 mb-4 mt-6">
                        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/3d3f146c-102d-4812-8df1-39d7d70052c4_rw_1920.jpg?h=f304b7c30dbd003b49a86eadeecc188e">
                          <img
                            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/3d3f146c-102d-4812-8df1-39d7d70052c4_rw_1920.jpg?h=f304b7c30dbd003b49a86eadeecc188e"
                            className="h-[50em]"
                            loading="lazy"
                          />
                        </a>
                        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0ad5d9de-8ed9-474d-bbe4-142f68f8c38d_rw_1920.jpg?h=02442fad0dcc0eec8be175487e4c0b2b">
                          <img
                            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0ad5d9de-8ed9-474d-bbe4-142f68f8c38d_rw_1920.jpg?h=02442fad0dcc0eec8be175487e4c0b2b"
                            className="h-[50em]"
                            loading="lazy"
                          />
                        </a>
                      </div>
                      <div className="flex gap-2">
                        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/ebff52b0-48cb-4240-bd77-abb3c77636ae_rw_1920.jpg?h=ee055e914f0f6d24349c9c9a4ccb3391">
                          <img
                            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/ebff52b0-48cb-4240-bd77-abb3c77636ae_rw_1920.jpg?h=ee055e914f0f6d24349c9c9a4ccb3391"
                            className=""
                            loading="lazy"
                          />
                        </a>
                        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d9badb57-304d-4bc3-b0bf-00359ac324cf_rw_1920.jpg?h=d7e5f25483933faed8a835414fcd7ae4">
                          <img
                            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d9badb57-304d-4bc3-b0bf-00359ac324cf_rw_1920.jpg?h=d7e5f25483933faed8a835414fcd7ae4"
                            className=""
                            loading="lazy"
                          />
                        </a>
                      </div>
                    </LightGallery>
                  </AccordionContent>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Project Stats Section */}
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 bg-white/100 backdrop-blur-sm ">
            {[
              {
                icon: Brush,
                title: "Projects",
                value: "3+",
                desc: "Major Set Designs",
              },
              {
                icon: Camera,
                title: "Hours",
                value: "100+",
                desc: "Of Detailed Crafting",
              },
              {
                icon: Star,
                title: "Pieces",
                value: "15+",
                desc: "Unique Set Elements",
              },
              {
                icon: Palette,
                title: "Materials",
                value: "8+",
                desc: "Different Media Used",
              },
            ].map(({ icon: Icon, title, value, desc }) => (
              <Card
                key={title}
                className="bg-white/80 backdrop-blur-sm border-[#e8b5bd] hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <Icon className="w-8 h-8 text-[#d4848c] mx-auto mb-3" />
                  <div className="text-4xl font-bold text-[#4a3034] mb-2">
                    {value}
                  </div>
                  <div className="text-[#6d464c] font-medium">{desc}</div>
                </CardContent>
              </Card>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SetDesign;
