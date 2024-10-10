// import LightGallery from "lightgallery/react";
// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";
// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// import GalleryGrid from "@/components/set-design/GalleryGrid";
// import { images } from "@/components/set-design/constants";

// function SetDesign() {
//   return (
//     <div className="w-full">
//       <div className="flex flex-col items-center">
//         <h4 className="font-bold text-5xl mb-20">Set Design</h4>
//       </div>
//       <Accordion type="multiple" className="w-full">
//         <AccordionItem value="item-1">
//           <AccordionTrigger>
//             <h4 className="font-semibold text-xl">
//               Script: "Sharper" - Written by Brian Gatewood & Alessandro Tanaka
//             </h4>
//           </AccordionTrigger>
//           <AccordionContent>
//             <div className="flex flex-col mt-10">
//               <span className="text-xl mb-10">
//                 Written by Brian Gatewood & Alessandro Tanaka
//               </span>
//               <span className="text-xl mb-10 italic">
//                 Materials used: Polymer Clay, Foamboard, Wood, Resin, Paper,
//                 Paint, Metal Wire, Glue
//               </span>
//             </div>
//             <LightGallery
//               speed={100}
//               plugins={[lgZoom, lgThumbnail]}
//               elementClassNames="flex flex-col"
//               selector="a"
//             >
//               <GalleryGrid layout={3} images={images["scriptPages"]} />
//               <GalleryGrid layout={2} images={images["moodboardImages"]} />
//               <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/b63908a6-be0e-41c8-a695-8cee002d30fd_rw_3840.png?h=773f62547b66aea6fe51e800792202cc">
//                 <img
//                   loading="lazy"
//                   alt=""
//                   src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/b63908a6-be0e-41c8-a695-8cee002d30fd_rw_3840.png?h=773f62547b66aea6fe51e800792202cc"
//                 />
//               </a>
//               <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/edadcdd1-fc84-43e6-98de-bc91668471af_rw_1920.png?h=5b1c6aa12db089c432da5625583e6d69">
//                 <img
//                   loading="lazy"
//                   alt=""
//                   src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/edadcdd1-fc84-43e6-98de-bc91668471af_rw_1920.png?h=5b1c6aa12db089c432da5625583e6d69"
//                 />
//               </a>
//               <GalleryGrid layout={2} images={images["conceptImages"]} />
//               <GalleryGrid layout={2} images={images["modelImages"]} />
//               <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/55aaefbc-73ee-4423-8c85-b546ab9dde41_rw_1920.jpeg?h=a8325527c2af1f9099faf880be28f64b">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/55aaefbc-73ee-4423-8c85-b546ab9dde41_rw_1920.jpeg?h=a8325527c2af1f9099faf880be28f64b"
//                 />
//               </a>
//             </LightGallery>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-2">
//           <AccordionTrigger>
//             <h4 className="font-semibold text-xl">
//               TV Pilot Script: "The Book of Enchantment" - Based on The Disney
//               Villains Series of Books by Serena Valentino
//             </h4>
//           </AccordionTrigger>
//           <AccordionContent>
//             <div className="flex flex-col mt-10">
//               <span className="text-xl mb-10">
//                 Based on The Disney Villains Series of Books by Serena Valentino
//               </span>
//               <span className="text-xl mb-10 italic">
//                 Materials used: Polymer Clay, Resin, Hot Glue, Foil, Coffee
//                 Grounds, Tea Leaves, Paint
//               </span>
//             </div>
//             <LightGallery
//               speed={100}
//               plugins={[lgZoom, lgThumbnail]}
//               elementClassNames="flex flex-col"
//               selector="a"
//             >
//               <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfd23547-b05e-4649-8d3d-19b3c94a58a7_rw_3840.jpg?h=218e0fe56f1feb1e0ba265b5e88f361d">
//                 <img
//                   src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/bfd23547-b05e-4649-8d3d-19b3c94a58a7_rw_3840.jpg?h=218e0fe56f1feb1e0ba265b5e88f361d"
//                   className="w-3/4 ml-auto mr-auto mb-4"
//                 />
//               </a>
//               <GalleryGrid layout={4} images={images["tHouseImages"]} />
//             </LightGallery>
//           </AccordionContent>
//         </AccordionItem>
//         <AccordionItem value="item-3">
//           <AccordionTrigger>
//             <h4 className="font-semibold text-xl">"Midnight in Paris"(2011)</h4>
//           </AccordionTrigger>
//           <AccordionContent>
//             <LightGallery
//               speed={100}
//               plugins={[lgZoom, lgThumbnail]}
//               elementClassNames="flex flex-col"
//               selector="a"
//             >
//               <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-2 mb-4">
//                 <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/3d3f146c-102d-4812-8df1-39d7d70052c4_rw_1920.jpg?h=f304b7c30dbd003b49a86eadeecc188e">
//                   <img
//                     src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/3d3f146c-102d-4812-8df1-39d7d70052c4_rw_1920.jpg?h=f304b7c30dbd003b49a86eadeecc188e"
//                     className="h-[55em]"
//                   />
//                 </a>
//                 <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0ad5d9de-8ed9-474d-bbe4-142f68f8c38d_rw_1920.jpg?h=02442fad0dcc0eec8be175487e4c0b2b">
//                   <img
//                     src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0ad5d9de-8ed9-474d-bbe4-142f68f8c38d_rw_1920.jpg?h=02442fad0dcc0eec8be175487e4c0b2b"
//                     className="h-[55em]"
//                   />
//                 </a>
//               </div>
//             </LightGallery>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// }

// export default SetDesign;

import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Palette, Brush, Camera, Star } from "lucide-react";

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
    <div
      className="min-h-screen w-full py-12 px-4 md:px-8"
      style={{
        backgroundImage: `url('https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/b4ae4543-e4fb-4972-888f-23a8f86829cf_rwc_83x0x10583x4500x4096.jpg?h=c41ff844684ff54bb661d3227b086bbc')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay to improve content readability */}
      <div className="fixed inset-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center relative mb-24">
          <div className="" />
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center">
            <Palette className="w-12 h-12 text-[#d4848c] mb-4 mx-auto" />
            <h4 className="font-bold text-5xl mb-4 text-[#4a3034]">
              Set Design
            </h4>
            <p className="text-lg text-[#6d464c] max-w-2xl">
              Crafting miniature worlds that tell stories through carefully
              designed environments
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto space-y-20">
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
                      Script: "Sharper"
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="prose max-w-none">
                    <div className="flex flex-col mt-6 space-y-4">
                      <h5 className="text-lg font-semibold text-[#4a3034]">
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
                      speed={100}
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
                <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 rounded-full bg-[#d4848c] group-hover:scale-125 transition-transform duration-300" />
                    <h4 className="font-semibold text-xl text-[#4a3034] group-hover:text-[#d4848c] transition-colors duration-300">
                      Script: "Sharper"
                    </h4>
                  </div>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Project Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
          </div>

          {/* Process Section */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h5 className="text-3xl font-semibold text-center mb-12 text-[#4a3034]">
              Design Process
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "Research",
                  desc: "Immersing in the script and source material to understand the world we need to create",
                  details: [
                    "Script analysis",
                    "Historical research",
                    "Visual references",
                    "Material exploration",
                  ],
                },
                {
                  step: "Conceptualize",
                  desc: "Developing the visual language and technical approach for each set piece",
                  details: [
                    "Mood boards",
                    "Sketches",
                    "Color palettes",
                    "Material selection",
                  ],
                },
                {
                  step: "Create",
                  desc: "Bringing the vision to life through careful crafting and construction",
                  details: [
                    "Scale modeling",
                    "Material manipulation",
                    "Detail work",
                    "Texture development",
                  ],
                },
                {
                  step: "Perfect",
                  desc: "Refining every detail to ensure the set tells the right story",
                  details: [
                    "Fine-tuning",
                    "Lighting tests",
                    "Photography",
                    "Final touches",
                  ],
                },
              ].map(({ step, desc, details }, index) => (
                <div key={step} className="relative group">
                  <div className="bg-white/90 rounded-lg p-6 border border-[#e8b5bd] h-full hover:shadow-lg transition-all duration-300">
                    <div className="text-[#d4848c] font-bold text-lg mb-2">
                      0{index + 1}
                    </div>
                    <h6 className="font-semibold mb-3 text-[#4a3034]">
                      {step}
                    </h6>
                    <p className="text-[#6d464c] text-sm mb-4">{desc}</p>
                    <ul className="text-[#6d464c] text-sm space-y-2">
                      {details.map((detail, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#e8b5bd] mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-[#e8b5bd]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h5 className="text-3xl font-semibold text-center mb-12 text-[#4a3034]">
              Technical Skills
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  category: "Materials",
                  skills: [
                    "Polymer Clay",
                    "Resin Casting",
                    "Woodworking",
                    "Metal Work",
                  ],
                },
                {
                  category: "Techniques",
                  skills: [
                    "Scale Modeling",
                    "Weathering",
                    "Paint Effects",
                    "Lighting Design",
                  ],
                },
                {
                  category: "Design",
                  skills: [
                    "Technical Drawing",
                    "Color Theory",
                    "Spatial Planning",
                    "Texture Creation",
                  ],
                },
              ].map(({ category, skills }) => (
                <Card key={category} className="bg-white/90 border-[#e8b5bd]">
                  <CardContent className="p-6">
                    <h6 className="font-semibold text-lg text-[#4a3034] mb-4">
                      {category}
                    </h6>
                    <div className="space-y-3">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-full bg-[#f8e1e6] rounded-full h-2">
                            <div
                              className="bg-[#d4848c] h-2 rounded-full"
                              style={{ width: `${Math.random() * 30 + 70}%` }}
                            />
                          </div>
                          <span className="text-sm text-[#6d464c] min-w-[100px]">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetDesign;
