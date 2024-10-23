import { Link } from "@tanstack/react-router";

interface MobileNavbarProps {
  isOpen: boolean;
  className: string;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavbar = ({ isOpen, className, setIsOpen }: MobileNavbarProps) => {
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <div className={`${className}`}>
      {isOpen ? (
        <div className="flex flex-col justify-center items-center mx-auto gap-4 h-[100svh] text-black">
          <Link to="/" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/v1/work" onClick={closeNavbar}>
            Work
          </Link>
          <Link to="/v1/set-design" onClick={closeNavbar}>
            Set Design
          </Link>
          <Link to="/v1/window-installation" onClick={closeNavbar}>
            Window Installation
          </Link>
          <Link to="/v1/digital-rendering" onClick={closeNavbar}>
            Digital Rendering
          </Link>
          <Link to="/v1/hand-rendering" onClick={closeNavbar}>
            Hand Rendering
          </Link>
          <Link to="/v1/branding" onClick={closeNavbar}>
            Branding
          </Link>
          <Link to="/v1/styling" onClick={closeNavbar}>
            Styling
          </Link>
          <Link to="/v1/about" onClick={closeNavbar}>
            About Me
          </Link>
          <Link to="/v1/resume" onClick={closeNavbar}>
            Resume
          </Link>
          <Link to="/v1/contact" onClick={closeNavbar}>
            Contact
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MobileNavbar;
