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
  return (
    <div className="w-full py-6 px-4 md:px-8">
      {/* Overlay to improve content readability */}
      <div className="fixed inset-0 pointer-events-none" />

      {/* Content wrapper */}
      <div>
        {/* Hero Section */}
        <Header title="Window Installation" />

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
                <AccordionContent className="px-6 pb-6">
                  <div>
                    <div className="mt-6 space-y-4">
                      <h5 className="m-auto font-semibold text-[#4a3034]">
                        Inspired by Alice in Wonderland (1951), this conceptual
                        design represents a world that seems real but is not.
                      </h5>
                      <div className="flex items-center space-x-4 text-[#6d464c]">
                        <Brush className="w-5 h-5" />
                        <span className="italic">
                          Materials used: Foam core, vinyl, paint, monofilament,
                          cardstock
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-[#6d464c]">
                        <Anvil className="w-5 h-5" />
                        <span className="italic">Products used: Shoes</span>
                      </div>
                    </div>
                    <LightGallery
                      speed={100}
                      plugins={[lgZoom, lgThumbnail]}
                      elementClassNames="flex flex-col mt-4"
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
                        Zodiac Symbol conceptual design
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="mt-6 space-y-4">
                    <p className="font-semibold text-[#4a3034]">
                      This conceptual design is 1 of 4 windows, representing
                      various zodiac signs with their corresponding color,
                      stone, planet, and element.
                    </p>
                    <div className="flex items-center space-x-4 text-[#6d464c]">
                      <Brush className="w-5 h-5" />
                      <span className="italic">
                        Materials used: Foam core, resin, fairy light, styrofoam
                        half-sphere, air dry clay, paint, sapphire stone, chain,
                        jump ring
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-[#6d464c]">
                      <Anvil className="w-5 h-5" />
                      <span className="italic">Product: Necklaces, rings</span>
                    </div>
                  </div>
                  <LightGallery
                    speed={100}
                    plugins={[lgZoom, lgThumbnail]}
                    elementClassNames="flex flex-col mt-4"
                    selector="a"
                  >
                    <GalleryGrid layout={2} images={images["astroImages"]} />
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
