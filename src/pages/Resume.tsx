import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Header from "@/components/Header";

const Resume = () => {
  return (
    <div>
      <Header title="Resume" />
      <LightGallery
        speed={100}
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames="flex flex-col mt-4"
        selector="a"
      >
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/c4b49ef8-0d2f-4fc9-a2ab-783794f70303_rw_1920.png?h=2aea4330be14e502fdaecd3de1b4daa9">
          <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/c4b49ef8-0d2f-4fc9-a2ab-783794f70303_rw_1920.png?h=2aea4330be14e502fdaecd3de1b4daa9" />
        </a>
      </LightGallery>
    </div>
  );
};

export default Resume;
