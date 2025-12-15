import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Brush } from "lucide-react";
// import { Palette, Camera, Star } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// import { Card, CardContent } from "@/components/ui/card";

import GalleryGrid from "@/components/set-design/GalleryGrid";
import { images } from "@/components/set-design/constants";
import Header from "@/components/Header";

function HandRendering() {
  const livingRoomMaterials = ["Primsacolor Marker", "Pen"];
  const patternMaterials = ["Primsacolor Marker", "White Gel Pen"];
  return (
    <div className="w-full py-6 px-4 md:px-8">
      <div className="fixed inset-0 pointer-events-none" />

      <div>
        <Header title="Hand Rendering" />
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
                      <h4 className="font-semibold italic text-sm md:text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                        Living Room
                      </h4>
                      <p className="text-sm text-gray-700">Original Concept</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <hr className="border-border-pink w-full mb-4" />
                  <div>
                    <div className="flex flex-col gap-4 mb-4">
                      <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                        <div>
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Materials Used
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#6d464c]">
                          {livingRoomMaterials.map((material, index) => (
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
                      elementClassNames="flex flex-col mt-4"
                      selector="a"
                    >
                      <GalleryGrid
                        layout={1}
                        images={images["livingRoomImages"]}
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
                      <h4 className="font-semibold italic text-sm md:text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                        Patterns
                      </h4>
                      <p className="text-sm text-gray-700">Original Concept</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <hr className="border-border-pink w-full mb-4" />
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                      <div>
                        <p className="text-center test-xs md:text-left text-[#6d464c]">
                          Materials Used
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[#6d464c]">
                        {patternMaterials.map((material, index) => (
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
                    elementClassNames="flex flex-col mt-4"
                    selector="a"
                  >
                    <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d159c223-f75a-4ba4-b907-86e854007485_rw_1920.jpg?h=2dd47ec831ea9b04a27703da957a8a64">
                      <img
                        src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d159c223-f75a-4ba4-b907-86e854007485_rw_1920.jpg?h=2dd47ec831ea9b04a27703da957a8a64"
                        className="w-full"
                      />
                    </a>
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

export default HandRendering;
