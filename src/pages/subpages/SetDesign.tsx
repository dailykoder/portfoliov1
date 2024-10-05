import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function SetDesign() {
  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h4 className="font-bold text-2xl mb-20">Set Design</h4>
        <h4 className="font-semibold text-xl">Script: "Sharper"</h4>
        <span>Written by Brian Gatewood & Alessandro Tanaka</span>
        <span>
          Materials used: Polymer Clay, Foamboard, Wood, Resin, Paper, Paint,
          Metal Wire, Glue
        </span>
      </div>
      <LightGallery
        speed={500}
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames="grid grid-cols-1 md:grid-cols-3 gap-2"
      >
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/ce1bdb9f-f80c-479c-ab82-353d7e9a3957_rw_1920.png?h=1859e8b43b63d8ce77b56f6eea0a8853">
          <img
            alt="Script Page: 1"
            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/ce1bdb9f-f80c-479c-ab82-353d7e9a3957_rw_1920.png?h=1859e8b43b63d8ce77b56f6eea0a8853"
            className="w-96"
          />
        </a>
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35">
          <img
            alt="Script: Page 2"
            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35"
            className="w-96"
          />
        </a>
        <a
          href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/2754564d-2263-4eb9-b623-38a4e9a313a4_rw_1920.png?h=8f4294ae4b3fa5813f1579ccca2f66ff"
          className="w-96"
        >
          <img
            alt="Script: Page 3"
            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/2754564d-2263-4eb9-b623-38a4e9a313a4_rw_1920.png?h=8f4294ae4b3fa5813f1579ccca2f66ff"
            className="w-96"
          />
        </a>
        <a
          href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/a4ce7838-1e9c-4c0d-82d3-8eddd9220e2d_rw_1920.png?h=5c944bca6ae53017c75a62548be66434"
          className="w-96"
        >
          <img
            alt="Notes: Page 1"
            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/a4ce7838-1e9c-4c0d-82d3-8eddd9220e2d_rw_1920.png?h=5c944bca6ae53017c75a62548be66434"
            className="w-96"
          />
        </a>
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/04b6af69-0531-4b51-8cfb-b99a1928608d_rw_1920.png?h=467c8559898e1ea26f18b513f618bb19">
          <img
            alt="Notes: Page 2"
            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/04b6af69-0531-4b51-8cfb-b99a1928608d_rw_1920.png?h=467c8559898e1ea26f18b513f618bb19"
            className="w-96"
          />
        </a>
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/94c812bc-758e-4035-b59b-0537fee196e4_rw_3840.png?h=ff7c007c591c6c41af24b60c823ebbc3">
          <img
            alt="Notes: Page 3"
            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/94c812bc-758e-4035-b59b-0537fee196e4_rw_3840.png?h=ff7c007c591c6c41af24b60c823ebbc3"
            className="w-96"
          />
        </a>
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35">
          <img
            alt="img2"
            src="https://i.postimg.cc/mgmvhCKr/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8-rw-1920.png"
            className="w-96"
          />
        </a>
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35">
          <img
            alt="img2"
            src="https://i.postimg.cc/mgmvhCKr/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8-rw-1920.png"
            className="w-96"
          />
        </a>
        <a href="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35">
          <img
            alt="img2"
            src="https://i.postimg.cc/mgmvhCKr/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8-rw-1920.png"
            className="w-96"
          />
        </a>
      </LightGallery>
    </div>
    // <Carousel plugins={[Autoplay({})]} className="pt-10">
    //   <CarouselContent>
    //     <CarouselItem className="basis-1/3">
    //       <Dialog>
    //         <DialogTrigger>
    //           <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //         </DialogTrigger>
    //         <DialogContent>
    //           <DialogHeader>Header</DialogHeader>
    //           <DialogDescription>
    //             <Carousel>
    //               <CarouselContent>
    //                 <CarouselItem>
    //                   <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //                 </CarouselItem>
    //                 <CarouselItem>
    //                   <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //                 </CarouselItem>
    //                 <CarouselItem>
    //                   <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //                 </CarouselItem>
    //                 <CarouselItem>
    //                   <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //                 </CarouselItem>
    //               </CarouselContent>
    //             </Carousel>
    //           </DialogDescription>
    //         </DialogContent>
    //       </Dialog>
    //     </CarouselItem>
    //     <CarouselItem className="basis-1/3">
    //       <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //     </CarouselItem>
    //     <CarouselItem className="basis-1/3">
    //       <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //     </CarouselItem>
    //     <CarouselItem className="basis-1/3">
    //       <img src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d856d0f7-dcdf-4ac3-9dc5-49e46480ddc8_rw_1920.png?h=4353f684995146a9ddd3397e96fc4e35" />
    //     </CarouselItem>
    //   </CarouselContent>
    //   <CarouselPrevious />
    //   <CarouselNext />
    // </Carousel>
  );
}

export default SetDesign;
