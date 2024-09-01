import React, { useState } from "react";
import herosectionimage from "../Assets/Images/HeroSectionGirl.png";
import { BlueButtonArrow, ButtonArrow } from "../Assets/Icons";
import DashboardImage from "../Assets/Images/DashboardImage.png";

const JoinWaitlistPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await fetch(
      "https://script.google.com/macros/s/AKfycbyZlRo5P_JUH8MjXTJzxvIemQgCeCKvd8g_IvdICvHjuxbWoPTmSzTToKSDbqNXEHA0kw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({ email }),
      }
    );

    setMessage("You've successfully joined the waitlist!");
    setIsSubmitting(false);
    setEmail("");
  };


  // <div data-dialog-backdrop="animated-dialog" data-dialog-backdrop-close="true"
  //      class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300">
  //   <div data-dialog="animated-dialog" data-dialog-mount="opacity-100 translate-y-0 scale-100"
  //        data-dialog-unmount="opacity-0 -translate-y-28 scale-90 pointer-events-none"
  //        data-dialog-transition="transition-all duration-300"
  //        class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
  //
  //   </div>
  //
  // </div>

  return (
    <div style={{ zIndex: 999999 }}
         className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-500">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 w-full max-w-sm sm:w-96 relative mx-4">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Join the Waitlist</h2>
        <p className="mb-4">Enter your details to join the waitlist.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-[#4710BC] text-white py-2 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining..." : "Join Now"}
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
        <button
          onClick={onClose}
          className="absolute top-1 right-3 text-2xl text-gray-600 hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const HeroAndDashboard = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="font-outfit relative">
      {/* Hero Section */}
      <div className="bg-[#27201D] text-white py-10 md:py-16 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 pr-0 lg:pr-8 text-center lg:text-left">
            <h1 className="text-3xl min-[320px]:text-4xl lg:text-[55px] font-bold mb-4 lg:leading-normal min-[320px]:leading-normal">
              <span className="text-[#FFF5C1]">Revolutionize Customer</span>
              <br />
              <span>Retention & Acquisition</span>
            </h1>
            <p className="text-lg min-[320px]:text-xl mb-8">
              Track and monitor all your customer from one dashboard
            </p>
            <div className="pt:20 pb-20 min-[320px]:pb-16 lg:space-y-0 lg:space-x-4 min-[320px]:space-x-4 flex flex-col lg:flex-row min-[320px]:flex-row justify-center lg:justify-start">
              <button onClick={() => window.open("https://cal.com/tryjolt/team", "_blank")}
                  className="bg-white text-[#4710BC] font-medium py-2 px-4 rounded-full flex items-center">
                <span className="mr-2">Schedule a Demo</span>
                <div className="bg-[#4710BC] rounded-full p-1">
                  <ButtonArrow />
                </div>
              </button>
              <button
                onClick={openPopup}
                className="bg-transparent hover:bg-white hover:text-[#27201D] text-white font-medium py-2 px-4 rounded-full border-2 border-white flex items-center"
              >
                <span className="mr-2">Join Waitlist</span>
                <div className="bg-white rounded-full p-1">
                  <BlueButtonArrow />
                </div>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex lg:mb-20">
            <img
              src={herosectionimage}
              alt="Hero section"
              className="w-full flex h-auto mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Dashboard Image */}
      <div className="container mx-auto lg:mb-[550px] xl:mb-[650px] px-4 relative z-[99999]">
        <div className="lg:absolute top xl:-top-36 w-full max-w-[1410px] mx-auto px-4">
          <div
              className="absolute inset-0 rounded-[20px] p-6"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                backdropFilter: "blur(4.5px)",
                WebkitBackdropFilter: "blur(4.5px)",
                zIndex: -1,
              }}
          ></div>
          <div className="p-6">
            <img
                src={DashboardImage}
                alt="Dashboard Screenshot"
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && <JoinWaitlistPopup onClose={closePopup} />}
    </div>
  );
};

export default HeroAndDashboard;
