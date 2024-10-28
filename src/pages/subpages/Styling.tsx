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

function Styling() {
  return (
    <div className="w-full py-12 px-4 md:px-8">
      {/* Overlay to improve content readability */}
      <div className="fixed inset-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="w-full">
        {/* Hero Section */}
        <Header title="Styling" />

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
                      Commercial Campaign
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div>
                    <div className="flex flex-col items-center mt-6 space-y-4">
                      <div className="flex items-center space-x-4 text-[#6d464c]">
                        <Brush className="w-5 h-5" />
                        <span className="italic">
                          Material used: Camera, Adobe Photoshop, InDesign
                        </span>
                      </div>
                    </div>
                    <LightGallery
                      speed={100}
                      plugins={[lgZoom, lgThumbnail]}
                      elementClassNames="flex flex-col mt-4"
                      selector="a"
                    >
                      <a
                        href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/f02d97f3-50c2-4d00-9ee9-1e604f6d6b69_rw_3840.JPEG?h=348d17aca9b5d29ccfab36c5130bc1e0"
                        className="py-2"
                      >
                        <img
                          loading="lazy"
                          alt=""
                          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/f02d97f3-50c2-4d00-9ee9-1e604f6d6b69_rw_3840.JPEG?h=348d17aca9b5d29ccfab36c5130bc1e0"
                        />
                      </a>
                      <div className="w-full flex flex-col items-center">
                        <span className="font-bold py-2">FALL</span>
                        <p className="py-2">Sunglasses - Gentle Monster</p>
                      </div>
                      <a
                        href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/fd731e63-b8da-45f6-8a55-58d9f7926581_rw_3840.jpg?h=beb824f9c4d287f8d5fd7f35bd0d58b3"
                        className="py-2"
                      >
                        <img
                          loading="lazy"
                          alt=""
                          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/fd731e63-b8da-45f6-8a55-58d9f7926581_rw_3840.jpg?h=beb824f9c4d287f8d5fd7f35bd0d58b3"
                        />
                      </a>
                      <div className="w-full flex flex-col items-center">
                        <span className="font-bold py-2">SPRING</span>
                        <p className="py-2">Merino Wool - Balenciaga</p>
                      </div>
                      <a
                        href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/cfe7f26f-943b-41ca-b09d-cd42a6b9d990_rw_3840.jpg?h=6d8a35690e1dcd7ad9e05fcfbd22ddd3"
                        className="py-2"
                      >
                        <img
                          loading="lazy"
                          alt=""
                          src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/cfe7f26f-943b-41ca-b09d-cd42a6b9d990_rw_3840.jpg?h=6d8a35690e1dcd7ad9e05fcfbd22ddd3"
                        />
                      </a>
                      <div className="w-full flex flex-col items-center">
                        <span className="font-bold py-2">WINTER</span>
                        <p className="py-2">Sapphire Jewelry - Cartier</p>
                      </div>
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
                      Fresh Soy Face Cleanser
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <LightGallery
                    speed={100}
                    plugins={[lgZoom, lgThumbnail]}
                    elementClassNames="flex flex-col mt-4"
                    selector="a"
                  >
                    <a
                      href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0823420c-dc1a-4261-a106-a9c6127ac56e_rw_1920.jpg?h=42826269ea091ecf3854f4ef768003c8"
                      className="py-4"
                    >
                      <img
                        loading="lazy"
                        alt="Face Cleaner Notes"
                        src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0823420c-dc1a-4261-a106-a9c6127ac56e_rw_1920.jpg?h=42826269ea091ecf3854f4ef768003c8"
                      />
                    </a>
                    <GalleryGrid
                      layout={2}
                      images={images["faceCleanerImages"]}
                    />
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

export default Styling;
