import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Brush } from "lucide-react";
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

function DigitalRendering() {
  const gatsbyMaterials = ["Sketchup", "Adobe Photoshop"];
  return (
    <div className="w-full py-6 px-4 md:px-8">
      <div className="fixed inset-0 pointer-events-none" />
      <div>
        <Header title="Digital Rendering" />

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
                        Great Gatsby (2013)
                      </h4>
                      <p className="text-sm text-gray-700">2025</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <hr className="border-border-pink w-full mb-4" />
                  <div>
                    <div className="flex flex-col gap-4 mb-4">
                      <div className="md:border-l-2 md:border-[#d4848c] pl-2">
                        <p className="text-center test-xs md:text-left text-[#6d464c]">
                          Description
                        </p>
                        <h5 className="text-center md:text-left md:text-lg font-semibold text-[#4a3034]">
                          Daisy Buchanan's Sitting Room
                        </h5>
                      </div>
                      <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                        <div>
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Materials Used
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#6d464c]">
                          {gatsbyMaterials.map((material, index) => (
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
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/05bb0c99-63ed-4e5d-b131-6a2b2c94592a_rw_1920.jpg?h=51287d0eabf42ced280ceba44e00ca96">
                          <img
                            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/05bb0c99-63ed-4e5d-b131-6a2b2c94592a_rw_1920.jpg?h=51287d0eabf42ced280ceba44e00ca96"
                            className="h-[16rem]"
                          />
                        </a>
                        <a
                          href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bc56279f-d5cc-4670-a75d-f2c0ace61b61_rw_3840.jpg?h=4ed979cc21115621ddd4e8a1664515e5"
                          className="col-span-2"
                        >
                          <img
                            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bc56279f-d5cc-4670-a75d-f2c0ace61b61_rw_3840.jpg?h=4ed979cc21115621ddd4e8a1664515e5"
                            className="h-[16rem]"
                          />
                        </a>
                      </div>
                      <GalleryGrid layout={2} images={images["gatsbyImages"]} />
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
                        Glossier x The Ordinary: The "Face to Face" Experience
                      </h4>
                      <p className="text-sm text-gray-700">
                        Scenic Designer - Fall 2025
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <hr className="border-border-pink w-full mb-4" />
                  <div className="flex flex-col gap-4 mb-4">
                    <div className="md:border-l-2 md:border-[#d4848c] pl-2">
                      <p className="text-center test-xs md:text-left text-[#6d464c]">
                        Description
                      </p>
                      <h5 className="text-center md:text-left md:text-lg font-semibold text-[#4a3034]">
                        Original Concept
                      </h5>
                    </div>
                    <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                      <div>
                        <p className="text-center test-xs md:text-left text-[#6d464c]">
                          Materials Used
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 text-[#6d464c]">
                        {gatsbyMaterials.map((material, index) => (
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
                    <GalleryGrid layout={2} images={images["glossierImages"]} />
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

export default DigitalRendering;
