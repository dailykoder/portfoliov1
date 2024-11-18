import {
  Palette,
  Sparkles,
  Paintbrush,
  Shapes,
  ArrowRight,
  Eye,
  Camera,
  Ruler,
  Clock,
} from "lucide-react";

import { Link } from "@tanstack/react-router";

function Home() {
  return (
    <div className="px-3 md:px-6 pt-6 pb-12">
      <div className="mx-auto">
        {/* Name and Title */}
        <div className="relative inline-block group cursor-pointer mb-16">
          <div
            className="absolute -inset-x-6 -inset-y-4 
                           rounded-2xl scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 
                           transition-all duration-500 shadow-lg border border-[#e8b5bd]/30"
          />
          <h1 className="relative text-3xl md:text-4xl lg:text-7xl font-semibold">
            Gina Kim
          </h1>
        </div>

        {/* Introduction Grid */}
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
          {/* Main Introduction */}
          <div
            className="bg-white/70 p-8 rounded-2xl 
                           shadow-lg border border-[#e8b5bd]/30"
          >
            <p className="sm:text-[1.4rem] md:text-3xl font-bold text-[#4a3034] leading-relaxed mb-6">
              I'm a visual concept designer based in SD,
              <span className="text-[#d4848c]">
                {" "}
                crafting miniature worlds that tell stories.
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Paintbrush, text: "Set Design" },
                { icon: Eye, text: "Visual Concepts" },
                { icon: Ruler, text: "Miniature Crafting" },
                { icon: Camera, text: "Creative Direction" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2 bg-white/50 
                                  rounded-full border border-[#e8b5bd]/30 
                                  hover:bg-white/70 transition-all duration-300
                                  hover:shadow-md"
                >
                  <Icon className="w-4 h-4 text-[#d4848c]" />
                  <span className="text-[#6d464c]">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              { number: "2+", label: "Years Experience", icon: Clock },
              { number: "5+", label: "Projects Completed", icon: Shapes },
              {
                number: "20+",
                label: "Set Pieces Created",
                icon: Palette,
              },
              { number: "3+", label: "Awards Achieved", icon: Sparkles },
            ].map(({ number, label, icon: Icon }) => (
              <div
                key={label}
                className="bg-white/70 p-6 rounded-2xl
                                shadow-lg border border-[#e8b5bd]/30
                                hover:bg-white/70 transition-all duration-300
                                group"
              >
                <Icon
                  className="w-6 h-6 text-[#d4848c] mb-3 
                                   group-hover:scale-110 transition-transform duration-300"
                />
                <div className="text-3xl font-bold text-[#4a3034] mb-1">
                  {number}
                </div>
                <div className="text-[#6d464c]">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Preview */}
        <div
          className="bg-white/70 p-8 rounded-2xl 
                        border border-[#e8b5bd]/30 mb-20"
        >
          <h2 className="text-3xl font-bold text-[#4a3034] mb-8">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-1 xl:grid-cols-3 gap-6">
            {[
              {
                title: '"Sharper" Set Design',
                desc: "Miniature world crafting for dramatic scenes",
                progress: "100%",
              },
              {
                title: "The Book of Enchantment",
                desc: "Disney Villains-inspired creative direction",
                progress: "100%",
              },
              {
                title: "Midnight in Paris (2011)",
                desc: "Period-accurate set piece recreation",
                progress: "100%",
              },
            ].map(({ title, desc, progress }) => (
              <Link to="/v1/set-design">
                <div
                  key={title}
                  className="flex flex-col justify-between group relative bg-white/60 p-6 rounded-xl
                                border border-[#e8b5bd]/30 hover:bg-white/70 
                                transition-all duration-300 cursor-pointer h-full"
                >
                  <div
                    className="absolute bottom-0 left-0 h-1 bg-[#d4848c]/30 
                                  rounded-full w-full overflow-hidden"
                  >
                    <div
                      className="h-full bg-[#d4848c] rounded-full"
                      style={{ width: progress }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#4a3034] mb-2 group-hover:text-[#d4848c] transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-[#6d464c] mb-6">{desc}</p>
                  <div className="flex items-center text-[#d4848c] font-medium">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
