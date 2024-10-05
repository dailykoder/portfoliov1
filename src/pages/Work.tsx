import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

function Work() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="relative">
        <Link to="/setdesign">
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
        <Link to="/window-installation">
          <img
            className=""
            src="https://cdn.myportfolio.com/06e0ed95-634c-4e1a-b024-66d229adfaa4/a4da34a4-6c3d-4967-bbd3-5a1aaa0fd40d_rwc_0x951x1920x1082x1280.jpg?h=4e2b14d5905df56dc7ed0d8732cf6da9"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-100 opacity-0 hover:opacity-95 transition-opacity duration-100">
            <p className="text-gray font-bold text-2xl">Window Installation</p>
          </div>
        </Link>
      </div>
      <div className="relative">
        <Link to="/digital-rendering">
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
        <Link to="/hand-rendering">
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
        <Link to="/">
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
        <Link to="/">
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
  );
}

export default Work;
