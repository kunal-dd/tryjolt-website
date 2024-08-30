import React from "react";
import {
  LeftFirstImage,
  RightFirstImage,
  SecondLeftImage,
  SecondRightImage,
} from "../Assets/Icons";
import Integrations from "../Assets/Images/integrations.png";

const FeaturesSection = () => {
  return (
    <div className="bg-white py-20 md:py-40 font-outfit">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-8 md:mb-16 text-[#2C155D] leading-snug">
          Features That Wow
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-[57%]">
            <div className="bg-[#F9FAFD] rounded-lg p-6 md:p-8 border-solid border-sky-500">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-left text-[#1D1137]">
                Journey Illuminator
              </h3>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-left text-[#736C82]">
                Shine a light on every step of your customer's path with our
                Journey Illuminator, mapping insights from first click to loyal
                advocate.
              </p>
              <div className="flex justify-center">
                <LeftFirstImage />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <div className="bg-[#F9FAFD] rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-left text-[#1D1137]">
                AI Engagement Pulse
              </h3>
              <p className="text-base md:text-lg mb-8 md:mb-16 text-left text-[#736C82]">
                Keep your finger on the customer pulse with our AI-powered
                Engagement Pulse, predicting trends and supercharging your
                strategies in real-time.
              </p>
              <div className="flex justify-center">
                <RightFirstImage />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 py-8 md:py-10">
          <div className="w-full md:w-[40%]">
            <div className="bg-[#F9FAFD] rounded-lg p-6 md:p-8 border-solid border-sky-500">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-left text-[#1D1137]">
                Synchronized Screen Sharing & Browsing
              </h3>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-left text-[#736C82]">
                Break down barriers with Synchronized Screen Sharing, allowing
                your team to navigate alongside customers for instant,
                crystal-clear support
              </p>
              <div className="flex justify-center">
                <SecondLeftImage />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[57%]">
            <div className="bg-[#F9FAFD] rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-left text-[#1D1137]">
                Smart Message Maestro
              </h3>
              <p className="text-base md:text-lg mb-8 md:mb-16 text-left text-[#736C82]">
                Orchestrate perfect communication with our Smart Message
                Maestro, crafting AI-driven, personalized symphonies across all
                your channels.
              </p>
              <div className="flex justify-center">
                <SecondRightImage />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start bg-[#F9FAFD] rounded-lg p-6 md:p-8 border-solid border-violet-500">
          <div className="w-full md:w-[45%] relative h-64 md:h-80 mb-6 md:mb-0">
            <div className="w-full h-full">
              <img
                src={Integrations}
                alt="integrations"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-[45%] pt-0 md:pt-20">
            <h2 className="text-2xl md:text-4xl mb-4 text-left text-[#2C155D]">
              Ecosystem Synchronizer
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-left text-[#736C82]">
              Harmonize your tech stack with our Ecosystem Synchronizer,
              ensuring your customer data flows seamlessly across all platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
