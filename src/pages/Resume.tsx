import { useState } from "react";
import Header from "@/components/Header";
import { Maximize2, X, Download } from "lucide-react"; // Optional: standard icons

const Resume = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const resumeUrl = "/GKResume.jpg";

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <div className="py-6 min-h-screen">
      <Header title="Resume" />

      <div className="mt-4 flex justify-center">
        <a
          href={resumeUrl}
          download="Gina_Kim_Resume.png"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors shadow-md"
        >
          <Download size={20} />
          Download PDF/Image
        </a>
      </div>

      <div className="mt-8 flex justify-center px-4">
        <div
          className="relative group cursor-zoom-in"
          onClick={toggleFullscreen}
        >
          <img
            src="/GKResume.jpg"
            alt="Professional Resume"
            className="w-full max-w-4xl h-auto shadow-lg"
            style={{ imageRendering: "auto" }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 bg-white/90 p-2 rounded-full shadow-lg transition-opacity">
              <Maximize2 className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={toggleFullscreen}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
            onClick={toggleFullscreen}
          >
            <X size={40} />
          </button>

          <img
            src={resumeUrl}
            alt="Fullscreen Resume"
            className="max-w-full max-h-full object-contain shadow-2xl cursor-default"
            style={{ touchAction: "pinch-zoom" }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Resume;
