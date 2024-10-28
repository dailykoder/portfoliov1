import { Palette } from "lucide-react";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div className="sm:mx-10 flex flex-col items-center mb-24 ">
      <div className="md:min-w-[25rem] lg:min-w-[30rem] bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center">
        <Palette className="w-12 h-12 text-[#d4848c] mb-4 mx-auto" />
        <h4 className="font-bold text-5xl mb-4 text-[#4a3034]">{title}</h4>
      </div>
    </div>
  );
}

export default Header;
