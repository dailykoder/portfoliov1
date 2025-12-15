import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Brush, Anvil } from "lucide-react";
// import { Palette, Camera, Star } from "lucide-react";
import Header from "@/components/Header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// import { Card, CardContent } from "@/components/ui/card";

import GalleryGrid from "@/components/set-design/GalleryGrid";
import { images } from "@/components/set-design/constants";

function WindowInstallation() {
  const opticalMaterials = ["Foam Core", "Monofilament", "Vinyl", "Paint"];
  const opticalProducts = ["Shoes"];
  const astrologyMaterials = [
    "Styrofoam Half-Sphere",
    "Sapphire Stone",
    "Air Dry Clay",
    "Fairy Light",
    "Foam Core",
    "Jump Ring",
    "Resin",
    "Paint",
    "Chain",
  ];
  const astrologyProducts = ["Necklaces", "Rings"];
  return (
    <div className="w-full py-6 px-4 md:px-8">
      <div className="fixed inset-0 pointer-events-none" />

      <div>
        <Header title="Window Installation" />

        <div className="mx-auto space-y-20">
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <Accordion type="multiple" className="w-full space-y-6">
              <AccordionItem
                value="item-1"
                className="border border-[#e8b5bd] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Brush className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                        Optical Illusion
                      </h4>
                      <p className="text-sm text-gray-700">
                        Alice in Wonderland (1951)
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <hr className="border-border-pink w-full mb-4" />
                  <div>
                    <div className="flex flex-col gap-4 mb-4">
                      <div className="md:border-l-2 md:border-[#d4848c] pl-2">
                        <p className="text-center test-xs md:text-left text-[#6d464c]">
                          Description
                        </p>
                        <h5 className="text-center md:text-left md:text-lg font-semibold text-[#4a3034]">
                          Inspired by Alice in Wonderland (1951), this
                          conceptual design represents a world that seems real
                          but is not.
                        </h5>
                      </div>
                      <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                        <div>
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Materials Used
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#6d464c]">
                          {opticalMaterials.map((material, index) => (
                            <span
                              key={index}
                              className="px-2 py-1.5 text-xs border-2 rounded-lg"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                        <div>
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Products Used
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#6d464c]">
                          {opticalProducts.map((material, index) => (
                            <span
                              key={index}
                              className="px-2 py-1.5 text-xs border-2 rounded-lg"
                            >
                              {material}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <LightGallery
                      speed={100}
                      plugins={[lgZoom, lgThumbnail]}
                      selector="a"
                    >
                      <GalleryGrid
                        layout={2}
                        images={images["opticalIllImages"]}
                      />
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
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Brush className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                        Astrology
                      </h4>
                      <p className="text-sm text-gray-700">
                        Zodiac symbol conceptual design
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0">
                  <hr className="border-border-pink w-full mb-4" />
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="md:border-l-2 md:border-[#d4848c] pl-2">
                      <p className="text-center test-xs md:text-left text-[#6d464c]">
                        Description
                      </p>
                      <h5 className="text-center md:text-left md:text-md font-semibold text-[#4a3034]">
                        This conceptual design is 1 of 4 windows, representing
                        various zodiac signs with their corresponding color,
                        stone, planet, and element.
                      </h5>
                    </div>
                    <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                      <div>
                        <p className="text-center test-xs md:text-left text-[#6d464c]">
                          Materials Used
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[#6d464c]">
                        {astrologyMaterials.map((material, index) => (
                          <span
                            key={index}
                            className="px-2 py-1.5 text-xs border-2 rounded-lg"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                      <div>
                        <p className="text-center test-xs md:text-left text-[#6d464c]">
                          Products Used
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[#6d464c]">
                        {astrologyProducts.map((material, index) => (
                          <span
                            key={index}
                            className="px-2 py-1.5 text-xs border-2 rounded-lg"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <LightGallery
                    speed={100}
                    plugins={[lgZoom, lgThumbnail]}
                    selector="a"
                  >
                    <GalleryGrid layout={1} images={images["astroImages"]} />
                  </LightGallery>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowInstallation;
