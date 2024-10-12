import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Palette, Brush, Camera, Star, Anvil } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Card, CardContent } from "@/components/ui/card";

import GalleryGrid from "@/components/set-design/GalleryGrid";
import { images } from "@/components/set-design/constants";

function Branding() {
  return (
    <div className="w-full py-12 px-4 md:px-8">
      {/* Overlay to improve content readability */}
      <div className="fixed inset-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="w-[]">
        {/* Hero Section */}
        <div className="flex flex-col items-center relative mb-24">
          <div className="" />
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center">
            <Palette className="w-12 h-12 text-[#d4848c] mb-4 mx-auto" />
            <h4 className="font-bold text-5xl mb-4 text-[#4a3034]">Branding</h4>
            <p className="text-lg text-[#6d464c] max-w-2xl">
              Crafting miniature worlds that tell stories through carefully
              designed environments
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto space-y-20">
          {/* Accordion Section */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <Accordion type="multiple" className="w-full space-y-6">
              <AccordionItem
                value="item-1"
                className="border border-[#e8b5bd] rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white/90"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-[#d4848c] group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                      Original Brand Concept
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div>
                    <div className="flex flex-col mt-6 space-y-4">
                      <div className="flex items-center space-x-4 text-[#6d464c]">
                        <Brush className="w-5 h-5" />
                        <span className="italic">
                          Materials used: Adobe InDesign, Photoshop, Illustrator
                        </span>
                      </div>
                    </div>
                    <LightGallery
                      speed={100}
                      plugins={[lgZoom, lgThumbnail]}
                      elementClassNames="flex flex-col mt-4"
                      selector="a"
                    >
                      <GalleryGrid layout={3} images={images["EWEImages"]} />
                      <GalleryGrid layout={2} images={images["EWEWebImages"]} />
                      <a
                        href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfc2329d-0c09-4c04-bd7a-959278e06393_rw_1920.png?h=3422d4a82310e61bf85f8bb1b642498d"
                        className="w-full"
                      >
                        <img
                          className="w-full"
                          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfc2329d-0c09-4c04-bd7a-959278e06393_rw_1920.png?h=3422d4a82310e61bf85f8bb1b642498d"
                        />
                      </a>
                      <a
                        href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/775a1cf7-390d-445c-a4f3-4a59949c5146_rw_1920.png?h=7dda4475373dc8f0e0f0854638853201"
                        className="w-full"
                      >
                        <img
                          className="w-full"
                          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/775a1cf7-390d-445c-a4f3-4a59949c5146_rw_1920.png?h=7dda4475373dc8f0e0f0854638853201"
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
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-[#d4848c] group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                      Patterns
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="flex flex-col mt-6 space-y-4">
                    <div className="flex items-center space-x-4 text-[#6d464c]">
                      <Brush className="w-5 h-5" />
                      <span className="italic">
                        Materials used: Prismacolor marker, white gel pen
                      </span>
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

          {/* Project Stats Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 bg-white/100 backdrop-blur-sm ">
            {[
              {
                icon: Brush,
                title: "Projects",
                value: "2",
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
                value: "9+",
                desc: "Unique Set Elements",
              },
              {
                icon: Palette,
                title: "Materials",
                value: "4+",
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;