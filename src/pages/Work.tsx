import { Link } from "@tanstack/react-router";
import { Palette } from "lucide-react";
type Routes =
  | "/"
  | "/v1"
  | "/v1/about"
  | "/v1/branding"
  | "/v1/styling"
  | "/v1/set-design"
  | "/v1/work"
  | "/v1/hand-rendering"
  | "/v1/window-installation"
  | "/v1/digital-rendering";

function Work() {
  return (
    <div>
      <div className="flex flex-col items-center  mb-24 ">
        <div className="md:min-w-[25rem] lg:min-w-[40rem] bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center">
          <Palette className="w-12 h-12 text-[#d4848c] mb-4 mx-auto" />
          <h4 className="font-bold text-5xl mb-4 text-[#4a3034]">My Work</h4>
          {/* <p className="text-lg text-[#6d464c] max-w-2xl">
            Here's everything I've worked on so far!
          </p> */}
        </div>
      </div>
      {/* Process Section */}
      <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg mb-10">
        <h5 className="text-3xl font-semibold text-center mb-12 text-[#4a3034]">
          Design Process
        </h5>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
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
                  {index + 1}.
                </div>
                <h6 className="font-semibold mb-3 text-[#4a3034]">{step}</h6>
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
      <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-2">
        <div className="relative">
          <Link to={"/v1/set-design" as Routes}>
            <img
              className=""
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/0e96b101-8d11-4fa7-9ed7-a638e49015fa_rwc_0x401x3840x2164x1280.jpg?h=82af8d907ba3768107c35f4a9d0235bf"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 hover:opacity-95 transition-opacity duration-100">
              <p className="text-gray font-bold text-2xl">Set Design</p>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to={"/v1/window-installation" as Routes}>
            <img
              className=""
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/a4da34a4-6c3d-4967-bbd3-5a1aaa0fd40d_rwc_0x951x1920x1082x1280.jpg?h=4e2b14d5905df56dc7ed0d8732cf6da9"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 hover:opacity-95 transition-opacity duration-100">
              <p className="text-gray font-bold text-2xl">
                Window Installation
              </p>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to={"/v1/digital-rendering" as Routes}>
            <img
              className=""
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/20e9ad46-b0d7-4c90-8c33-a8949851781a_carw_16x9x1280.png?h=78bd95ec8db66b697edad56da380d14b"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 hover:opacity-95 transition-opacity duration-100">
              <p className="text-gray font-bold text-2xl">Digital Rendering</p>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to={"/v1/hand-rendering" as Routes}>
            <img
              className=""
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/a47f96cd-b2ae-4320-b0fe-19f71a4ec126_rwc_97x307x1782x1004x1280.jpg?h=a7092deb0d09512ec428422ee8f1253d"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 hover:opacity-95 transition-opacity duration-100">
              <p className="text-gray font-bold text-2xl">Hand Rendering</p>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to={"/v1/branding" as Routes}>
            <img
              className=""
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/8aee71d0-d6a5-438c-ab39-9fc321b5f14a_carw_16x9x1280.png?h=ae750fb66b5b20feb787cd5d420b7226"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 hover:opacity-95 transition-opacity duration-100">
              <p className="text-gray font-bold text-2xl">Branding</p>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link to={"/v1/styling" as Routes}>
            <img
              className=""
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/59ec1fca-cd5f-4b5b-9fce-7d24a64a30cc_rwc_0x122x3840x2164x1280.jpg?h=872d998f2102a330da8f36347699e17c"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 hover:opacity-95 transition-opacity duration-100">
              <p className="text-gray font-bold text-2xl">Styling</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
