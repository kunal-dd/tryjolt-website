import React from "react";
import {
  InstagramIcon,
  LinkedInIcon,
  TryJoltLogoWithText,
  Xicon,
} from "../Assets/Icons";

const Footer = () => {
  return (
    <footer className="bg-[#3B0B22] text-white py-8 md:py-16 font-outfit">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-wrap">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0 lg:pr-12">
            <div className="mb-8">
              <div className="text-xl md:text-2xl font-bold">
                <TryJoltLogoWithText />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 md:mb-10 text-left">
              Engage. Acquire. Retain. Grow!!
            </h2>
            <p className="text-sm md:text-base text-left">
              Copyright © 2024 TryJolt. All Rights Reserved.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 mb-6 md:mb-0">
            <div className="p-6 md:p-8 rounded-lg border border-[#5F1639]">
              <div className="flex flex-col space-y-6 md:space-y-8 text-left">
                <div>
                  <h3 className="font-bold mb-2 md:mb-4 text-base">
                    CONTACT US
                  </h3>
                  <p className="text-sm md:text-base">team@tryjolt.com</p>
                </div>

                <hr className="border-t border-[#5F1639] -mx-4 md:-mx-8 w-[calc(100%+2rem)] md:w-[calc(100%+4rem)]" />

                <div>
                  <h3 className="font-bold mb-2 md:mb-4">FOLLOW US</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/Tryjoltio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80"
                    >
                      <span className="sr-only">Twitter</span>
                      <Xicon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </a>
                    <a
                      className="hover:opacity-80"
                      href="https://www.linkedin.com/company/tryjolt"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <LinkedInIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </a>
                    <a href="#" className="hover:opacity-80">
                      <span className="sr-only">Instagram</span>
                      <InstagramIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
