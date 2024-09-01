import React from "react";
import JoltStudio from "../Assets/Images/Joltstudio.png";
import StudioSectionBG from "../Assets/Images/StudioSectionBG.png";
import { ButtonArrow } from "../Assets/Icons";

const JoltStudioSection = () => {
  return (
    <section className="bg-[#0B353B] text-white font-outfit overflow-visible relative">
      <div className="container mx-auto px-20 relative">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 relative pb-[100px]">
            <div className="absolute left-[-50px] w-[calc(100%+50px)] top-[11px] bottom-[100px]">
              <img
                src={JoltStudio}
                alt="Jolt Studio"
                className="w-full h-full object-contain"
                style={{ marginTop: "-50px" }}
              />
            </div>
            <div style={{ paddingTop: "75%" }}></div>
          </div>

          <div className="w-full md:w-1/2 py-16 md:pl-8 text-left relative">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `url(${StudioSectionBG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            <div className="relative z-10">
              {" "}
              <h2 className="text-3xl font-bold mb-4 text-left text-[#E4FFCE]">Jolt Studio</h2>
              <p className="text-base mb-6 text-left">
                Jolt studio allows businesses to create tailored video messages for their customers. With this feature, you can produce professional-quality videos that are personalized for each customer segment or individual. These videos can be used for onboarding, product updates, or re-engagement, enhancing customer retention through a personalized approach.
              </p>
              <button onClick={() => window.open("https://cal.com/tryjolt/team", "_blank")} className="bg-white text-[#4710BC] font-medium py-1 pl-4 sm:pl-6 pr-1 rounded-full flex items-center text-sm sm:text-base">
                <span className="mr-2">Let's Get Started</span>
                <div className="bg-[#4710BC] rounded-full p-1">
                  <ButtonArrow />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoltStudioSection;
