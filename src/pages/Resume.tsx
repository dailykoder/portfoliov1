import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Header from "@/components/Header";

const Resume = () => {
  return (
    <div className="py-6">
      <Header title="Resume" />
      <LightGallery
        speed={100}
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames="flex flex-col mt-4"
        selector="a"
      >
        <a href="https://drive.google.com/file/d/1i17RKvT7FyGlg5dc5Nb606K8HiRY4vKC/preview">
          {/* <img src="https://drive.google.com/file/d/1i17RKvT7FyGlg5dc5Nb606K8HiRY4vKC/preview" /> */}
          <iframe
            src="https://drive.google.com/file/d/1i17RKvT7FyGlg5dc5Nb606K8HiRY4vKC/preview"
            className="w-full h-screen"
          />
        </a>
      </LightGallery>
    </div>
  );
};

export default Resume;
