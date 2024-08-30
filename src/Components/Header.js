import React from "react";
import { ButtonArrow, TryJoltLogo } from "../Assets/Icons";
import "../Assets/Style.css";

const Header = () => {
  return (
    <header className="bg-[#27201D] font-outfit">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-xl font-bold mb-4 sm:mb-0">
          <TryJoltLogo />
        </div>

        <button className="bg-white text-[#4710BC] font-medium py-1 pl-4 sm:pl-6 pr-1 rounded-full flex items-center text-sm sm:text-base">
          <span className="mr-2">Talk to us</span>
          <div className="bg-[#4710BC] rounded-full p-1">
            <ButtonArrow />
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
