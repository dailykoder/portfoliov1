import {
  Palette,
  Book,
  GraduationCap,
  Trophy,
  Briefcase,
  Award,
} from "lucide-react";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="relative w-full py-6">
      <div className="relative">
        <div>
          <div className="mx-auto">
            {/* Title with hover effect */}
            <Header title="About me" />

            {/* Main Content */}
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
              {/* Left Column - Bio and Skills */}
              <div className="space-y-8">
                {/* Bio Section */}
                <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#e8b5bd]/30 transform hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="w-6 h-6 text-[#d4848c]" />
                    <h2 className="text-2xl font-bold text-[#4a3034]">
                      Summary
                    </h2>
                  </div>
                  <p className="text-lg leading-relaxed text-[#4a3034] mb-4">
                    Gina Kim is a versatile and bilingual Marketing Specialist
                    who has experience managing advertisement campaigns and
                    special events. Utilizing her extensive knowledge of
                    branding and computer rendering, she is dedicated to
                    designing memorable experiences for consumers online and
                    in-person.
                  </p>
                  <p className="text-lg leading-relaxed text-[#4a3034]">
                    Over the years, her interest in visual conceptualization and
                    passion for graphic design eventually led her to pursue a
                    career in Visual Communications. She ultimately aspires to
                    be a Set and Production Designer.
                  </p>
                </div>

                {/* Skills Section */}
                <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#e8b5bd]/30">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-6 h-6 text-[#d4848c]" />
                    <h2 className="text-2xl font-bold text-[#4a3034]">
                      Core Competencies
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        category: "Design",
                        skills: [
                          "Visual Communications",
                          "Set Design",
                          "Production Design",
                          "Graphic Design",
                        ],
                      },
                      {
                        category: "Marketing",
                        skills: [
                          "Campaign Management",
                          "Event Planning",
                          "Branding Strategy",
                        ],
                      },
                      {
                        category: "Technical",
                        skills: [
                          "Computer Rendering",
                          "Visual Conceptualization",
                          "Digital Tools",
                        ],
                      },
                      {
                        category: "Other",
                        skills: [
                          "Bilingual Communication",
                          "Project Management",
                          "Creative Direction",
                        ],
                      },
                    ].map(({ category, skills }) => (
                      <div key={category} className="space-y-2">
                        <h3 className="font-semibold text-[#d4848c]">
                          {category}
                        </h3>
                        {skills.map((skill) => (
                          <div
                            key={skill}
                            className="text-sm px-3 py-1.5 bg-white/50 
                                     rounded-full border border-[#e8b5bd]/30 
                                     hover:bg-white/70 transition-all duration-300
                                     hover:shadow-md text-[#6d464c]"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Education & Experience */}
              <div className="grid gap-4">
                {[
                  {
                    icon: Trophy,
                    title: "Visual Communications Award",
                    details: "FIDM Graduate Recognition",
                    subtitle: "Excellence in Visual Communication",
                    description:
                      "Awarded for exceptional achievement in visual communications",
                  },
                  {
                    icon: Book,
                    title: "Visual Communications",
                    details: "Fashion Institute of Design & Merchandising",
                    subtitle: "Associate of Arts • 2021",
                    description:
                      "Specialized in visual design and creative direction",
                  },
                  {
                    icon: GraduationCap,
                    title: "BA in Economics",
                    details: "University of California, Riverside",
                    subtitle: "Marketing Emphasis • 2017",
                    description:
                      "Focused on marketing strategy and consumer behavior",
                  },
                  {
                    icon: Palette,
                    title: "Professional Experience",
                    details: "Set & Production Design",
                    subtitle: "2+ Years Experience",
                    description:
                      "Specialized in creating immersive visual experiences",
                  },
                ].map(
                  ({ icon: Icon, title, details, subtitle, description }) => (
                    <div
                      key={title}
                      className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl
                             shadow-lg border border-[#e8b5bd]/30
                             hover:bg-white/70 transition-all duration-300
                             group"
                    >
                      <Icon
                        className="w-6 h-6 text-[#d4848c] mb-3 
                                   group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="text-xl font-bold text-[#4a3034] mb-1">
                        {title}
                      </div>
                      <div className="text-[#d4848c] font-medium mb-1">
                        {details}
                      </div>
                      <div className="text-[#6d464c] font-medium mb-2">
                        {subtitle}
                      </div>
                      <div className="text-[#6d464c]/80 text-sm">
                        {description}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
