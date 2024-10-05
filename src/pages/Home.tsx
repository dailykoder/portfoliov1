import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <div className="flex flex-col flex-grow items-center mt-10 mb-10">
        <div className="mb-20">
          <h1 className="text-5xl font-bold uppercase">Gina Kim</h1>
          <h6 className="text-xl mt-4 font-semibold">
            Visual Concept Designer
          </h6>
        </div>
        <div className="flex items-center w-1/2 mb-10">
          <p className="text-3xl font-bold text-center">
            Hello, and welcome my portfolio! I'm a visual concept designer based
            in SoCal, take a look and see what I've been working on!
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 w-full">
          <Card className="">
            <CardHeader className="font-bold text-3xl">Set Design</CardHeader>
            <CardContent>
              <img
                src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/b63908a6-be0e-41c8-a695-8cee002d30fd_rw_3840.png?h=773f62547b66aea6fe51e800792202cc"
                className="h-80"
                loading="lazy"
              />
              <CardFooter className="flex flex-col justify-between pt-0 p-0 h-32">
                <div>Concept Sketch</div>
                <Button className="w-full">View More</Button>
              </CardFooter>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-bold text-3xl">
              Window Installation
            </CardHeader>
            <CardContent>
              <img
                src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/da2be984-98b1-4224-9e33-22701e9e5956_rw_1920.png?h=a3def0e4c10cb59de9d5217924c93828"
                className=""
                loading="lazy"
              />
              <CardFooter>Concept Sketch</CardFooter>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-bold text-3xl">
              Digital Rendering
            </CardHeader>
            <CardContent>
              <img
                src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/05bb0c99-63ed-4e5d-b131-6a2b2c94592a_rw_1920.jpg?h=51287d0eabf42ced280ceba44e00ca96"
                className="h-80"
                loading="lazy"
              />
              <CardFooter>Concept Sketch</CardFooter>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="font-bold text-3xl">
              Hand Rendering
            </CardHeader>
            <CardContent>
              <img
                src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d8f3faf2-ae63-4b75-a881-99f44ce7790a_rw_600.jpg?h=520b2b496b39ebb30bec692c35bf28e1"
                className="h-80"
                loading="lazy"
              />
              <CardFooter>Concept Sketch</CardFooter>
            </CardContent>
          </Card>
          {/* <div className="text-center h-60 relative">
            <div className="absolute left-0 right-0 bottom-0">Set Design</div>
            <img
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/b63908a6-be0e-41c8-a695-8cee002d30fd_rw_3840.png?h=773f62547b66aea6fe51e800792202cc"
              className="h-60 opacity-60"
              loading="lazy"
            />
          </div>
          <div className="text-center h-60 relative">
            <div className="absolute left-0 right-0 bottom-0">
              Window Installation
            </div>
            <img
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/da2be984-98b1-4224-9e33-22701e9e5956_rw_1920.png?h=a3def0e4c10cb59de9d5217924c93828"
              className="h-60 opacity-60"
              loading="lazy"
            />
          </div>
          <div className="text-center h-60 relative">
            <div className="absolute left-0 right-0 bottom-0">
              Digital Rendering
            </div>
            <img
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/05bb0c99-63ed-4e5d-b131-6a2b2c94592a_rw_1920.jpg?h=51287d0eabf42ced280ceba44e00ca96"
              className="h-60 opacity-60"
              loading="lazy"
            />
          </div>
          <div className="text-center h-60 relative">
            <div className="absolute left-0 right-0 bottom-0">
              Hand Rendering
            </div>
            <img
              src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/d8f3faf2-ae63-4b75-a881-99f44ce7790a_rw_600.jpg?h=520b2b496b39ebb30bec692c35bf28e1"
              className="h-60 opacity-60"
              loading="lazy"
            />
          </div>
          <div className="text-center h-60">Branding</div>
          <div className="text-center h-60">Styling</div>
          <div className="text-center h-60">About Me</div>
          <div className="text-center h-60">Resume</div>
          <div className="text-center h-60">Contact</div>
          <div className="text-center h-60">View All</div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
