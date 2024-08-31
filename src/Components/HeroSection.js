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

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 relative">
        <h2 className="text-xl font-bold mb-4">Join the Waitlist</h2>
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
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
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
      <div
        className="bg-[#27201D] text-white py-20 relative z-10"
        style={{ height: "850px" }}
      >
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2 pr-8">
            <h1 className="text-[55px] font-bold mb-4 text-left">
              <span className="text-[#FFF5C1]">Amplify Engagement, Accelerate Acquisition,</span>
              <br />
              <span>Retain Smarter, Grow Bigger.</span>
            </h1>
            <p className="text-xl mb-8 text-left">
              With Tryjolt, SaaS teams engage, acquire, retain, and grow—all in
              one powerful platform designed for high-impact results.
            </p>
            <div className="space-x-4 flex">
              <button className="bg-white text-[#4710BC] font-medium py-1 pl-4 pr-1 rounded-full flex items-center">
                <span className="mr-3">Talk to us</span>
                <div className="bg-[#4710BC] rounded-full p-1">
                  <ButtonArrow />
                </div>
              </button>
              <button
                onClick={openPopup}
                className="bg-transparent hover:bg-white hover:text-[#27201D] text-white font-medium py-1 pl-4 pr-1 rounded-full border-2 border-white flex items-center"
              >
                <span className="mr-3">Join Waitlist</span>
                <div className="bg-white rounded-full p-1">
                  <BlueButtonArrow />
                </div>
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src={herosectionimage}
              alt="Hero section"
              className="relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="py-40 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-full h-64"></div>
          </div>
        </div>
      </div>

      {/* Dashboard Image */}
      <div
        className="absolute left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1280px] mx-auto"
        style={{ marginTop: "-50px", zIndex: 9999 }}
      >
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

      {/* Popup */}
      {isPopupVisible && <JoinWaitlistPopup onClose={closePopup} />}
    </div>
  );
};

export default HeroAndDashboard;
