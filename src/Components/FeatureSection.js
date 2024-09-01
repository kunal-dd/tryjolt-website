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
    <div className="bg-white py-10 lg:py-40 font-outfit">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-8 md:mb-16 text-[#2C155D] leading-snug">
          Revolutionize Engagement: Tryjolt's Cutting-Edge Features
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="w-full md:w-[57%]">
            <div className="bg-[#F9FAFD] rounded-lg p-6 md:p-8 border-solid border-sky-500">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-left text-[#1D1137]">
                Customer Insight Journey Mapping
              </h3>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-left text-[#736C82]">
                Customer insights helping businesses understand each touchpoint from onboarding to post-purchase interactions.
              </p>
              <div className="flex justify-center">
                <LeftFirstImage />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[40%]">
            <div className="bg-[#F9FAFD] rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-left text-[#1D1137]">
                AI-Based Engagement Tracker
              </h3>
              <p className="text-base md:text-lg mb-8 md:mb-16 text-left text-[#736C82]">
                Tryjolt Engagement Tracker leverages AI to monitor and analyze customer interactions, providing predictive insights to enhance engagement strategies.
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
                Co-Browsing Capabilities
              </h3>
              <p className="text-base md:text-lg mb-6 md:mb-8 text-left text-[#736C82]">
                Co-browsing allows support agents to browse with the customer in real time, offering immediate assistance.
              </p>
              <div className="flex justify-center">
                <SecondLeftImage />
              </div>
            </div>
          </div>

          <div className="w-full md:w-[57%]">
            <div className="bg-[#F9FAFD] rounded-lg p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-left text-[#1D1137]">
                Smart Communication Tools
              </h3>
              <p className="text-base md:text-lg mb-8 md:mb-16 text-left text-[#736C82]">
                Tryjolt Smart Communication uses AI to craft personalized messages includes automated responses, follow-ups, and engagement campaigns across multiple channels.
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
              Seamless Integrations
            </h2>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-left text-[#736C82]">
              Tryjolt seamlessly integrates with various platforms to ensure all customer data is synced across platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
