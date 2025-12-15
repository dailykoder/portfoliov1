import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";
import lgFullScreen from "lightgallery/plugins/fullscreen";
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

const Csuf = () => {
  const houseOfTheSpiritsMaterials = ["VectorWorks"];
  const danceMaterials = ["VectorWorks"];

  return (
    <div className="w-full py-6 px-4 md:px-8">
      <div className="fixed inset-0 pointer-events-none" />
      <div>
        <Header title="CSU Fullerton" />
        <div className="mx-auto space-y-20">
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <Accordion type="multiple" className="w-full space-y-6">
              <AccordionItem
                value="item-1"
                className="border border-border-pink rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
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
                        The House of the Spirits
                      </h4>
                      <p className="text-sm text-gray-700">
                        Scenic Designer - Fall 2025
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
                          Script by Caridad Svich
                        </h5>
                      </div>
                      <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                        <div>
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Materials Used
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#6d464c]">
                          {houseOfTheSpiritsMaterials.map((material, index) => (
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
                      speed={500}
                      plugins={[lgFullScreen, lgVideo, lgZoom, lgThumbnail]}
                      elementClassNames="flex flex-col"
                      selector="a"
                    >
                      <GalleryGrid
                        layout={3}
                        images={images["paintingElevationsHOTS"]}
                      />
                      <GalleryGrid
                        layout={2}
                        images={images["modelImagesHOTS"]}
                      />
                      <a href="https://res.cloudinary.com/dm2me9rsd/image/upload/v1765790176/The%20House%20of%20the%20Spirits/DRAFTING%20PHOTOS/IMG_1540_s85zn5.jpg">
                        <img
                          loading="lazy"
                          alt="HOTS Stage Image"
                          className="mb-2"
                          src="https://res.cloudinary.com/dm2me9rsd/image/upload/v1765790176/The%20House%20of%20the%20Spirits/DRAFTING%20PHOTOS/IMG_1540_s85zn5.jpg"
                        />
                      </a>
                      <GalleryGrid
                        layout={2}
                        images={images["productionImages1HOTS"]}
                      />
                      <GalleryGrid
                        layout={2}
                        images={images["productionImages2HOTS"]}
                      />
                      <GalleryGrid
                        layout={2}
                        images={images["productionImages3HOTS"]}
                      />
                    </LightGallery>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border border-border-pink rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Brush className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className="font-semibold text-sm md:text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                        Spring/Fall Dance 2025
                      </h4>
                      <p className="text-sm text-gray-700">
                        Scenic Co-Designer
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6">
                  <LightGallery
                    speed={500}
                    plugins={[lgZoom, lgThumbnail]}
                    elementClassNames="flex flex-col"
                    selector="a"
                  >
                    <hr className="border-border-pink w-full mb-4" />
                    <div className="flex flex-col gap-4 mb-4">
                      <div className="md:border-l-2 md:border-[#d4848c] pl-2">
                        <p className="text-center test-xs md:text-left text-[#6d464c]">
                          Description
                        </p>
                        <h5 className="text-center md:text-left md:text-lg font-semibold text-[#4a3034]">
                          Co-designed with Johnny Corde
                        </h5>
                      </div>
                      <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                        <div>
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Materials Used
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 text-[#6d464c]">
                          {danceMaterials.map((material, index) => (
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
                    <h3 className="text-sm uppercase tracking-widest mb-1">
                      Spring Dance
                    </h3>
                    <GalleryGrid
                      layout={2}
                      images={images["springDanceProduction"]}
                    />
                    <GalleryGrid
                      layout={3}
                      images={images["springDanceProduction2"]}
                    />
                    <h3 className="text-sm uppercase tracking-widest mb-1">
                      Fall Dance
                    </h3>
                    <GalleryGrid
                      layout={3}
                      images={images["springDanceDrafts"]}
                    />
                    <GalleryGrid
                      layout={2}
                      images={images["fallDanceModelImages"]}
                    />
                    <GalleryGrid
                      layout={1}
                      images={images["fallDanceProductionStageImages1"]}
                    />
                    <a href={images["fallDanceProductionStageImage"]}>
                      <img
                        src={images["fallDanceProductionStageImage"]}
                        loading="lazy"
                      />
                    </a>
                    <GalleryGrid
                      layout={3}
                      images={images["fallDanceProductionStageImages"]}
                    />
                  </LightGallery>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border border-border-pink rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Brush className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className="font-semibold text-sm md:text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                        The Magic Flute
                      </h4>
                      <p className="text-sm text-gray-700">
                        Scenic Design Assistant - Spring 2025
                      </p>
                    </div>
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
                      <hr className="border-border-pink w-full mb-2" />
                      <div className="flex flex-col gap-4 mb-4">
                        <div className="md:border-l-2 md:border-[#d4848c] pl-2">
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Description
                          </p>
                          <h5 className="text-center md:text-left md:text-lg font-semibold text-[#4a3034]">
                            Libretto by Emanuel Schikaneder
                          </h5>
                        </div>
                        <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                          <div>
                            <p className="text-center test-xs md:text-left text-[#6d464c]">
                              Materials Used
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 text-[#6d464c]">
                            {["Vectorworks"].map((material, index) => (
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
                      <GalleryGrid
                        layout={3}
                        images={images["magicFluteModelImages"]}
                      />
                      <GalleryGrid
                        layout={2}
                        images={images["magicFluteStageImages1"]}
                      />
                      <GalleryGrid
                        layout={3}
                        images={images["magicFluteStageImages2"]}
                      />
                      <GalleryGrid
                        layout={3}
                        images={images["magicFluteStageImages3"]}
                      />
                      <GalleryGrid
                        layout={3}
                        images={images["magicFluteStageImages4"]}
                      />
                      <GalleryGrid
                        layout={2}
                        images={images["magicFluteStageImages5"]}
                      />
                    </LightGallery>
                  </AccordionContent>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border border-border-pink rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-4 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <Brush className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className="font-semibold text-sm md:text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                        School Projects
                      </h4>
                      <p className="text-sm text-gray-700">2024-Present</p>
                    </div>
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
                      <hr className="border-border-pink w-full mb-2" />
                      <div className="flex flex-col gap-4 mb-4">
                        <div className="md:border-l-2 md:border-[#d4848c] pl-2">
                          <p className="text-center test-xs md:text-left text-[#6d464c]">
                            Description
                          </p>
                          <h5 className="text-center md:text-left md:text-lg font-semibold text-[#4a3034]">
                            In-class projects
                          </h5>
                        </div>
                        <div className="flex flex-col gap-2 md:border-l-2 md:border-[#d4848c] pl-2">
                          <div>
                            <p className="text-center test-xs md:text-left text-[#6d464c]">
                              Materials Used
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2 text-[#6d464c]">
                            {["Resin", "3D Printer"].map((material, index) => (
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
                      <h3 className="text-sm uppercase tracking-widest mb-1">
                        Exterior Model
                      </h3>
                      <GalleryGrid
                        layout={3}
                        images={images["schoolProjectExteriorImages1"]}
                      />
                      <h3 className="text-sm uppercase tracking-widest mb-1">
                        Interior Model
                      </h3>
                      <GalleryGrid
                        layout={1}
                        images={images["schoolProjectInteriorImages1"]}
                      />
                    </LightGallery>
                  </AccordionContent>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Csuf;
