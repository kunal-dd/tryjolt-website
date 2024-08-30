import React from "react";
import Monday from "../Assets/Images/monday.png";
import MixPanel from "../Assets/Images/MixpanelWhite.png";
import Hubspot from "../Assets/Images/HubspotWhite.png";
import Trello from "../Assets/Images/Trello.png";
import Jira from "../Assets/Images/Jira.png";
import Google from "../Assets/Images/google.png";
import Zapier from "../Assets/Images/zapierwhite.png";
import Segment from "../Assets/Images/segment.png";
import Zendesk from "../Assets/Images/zendesk.png";
import Salesforce from "../Assets/Images/salesforce.png";

const boxStyles = {
  mixpanel: "bg-[#1B0B3A]",
  monday: "bg-[#6161FF]",
  hubspot: "bg-[#FF7A59]",
  trello: "bg-[#0C1836]",
  jira: "bg-[#2684FF]",
  google: "bg-[#303030]",
  zapier: "bg-[#FF4A00]",
  segment: "bg-[#52BD94]",
  zendesk: "bg-[#03363D]",
  salesforce: "bg-[#1E3161]",
};

const boxes = [
  {
    id: 1,
    value: "mixpanel",
    content: <img src={MixPanel} alt="mixpanel" height={94} width={174} />,
  },
  {
    id: 2,
    value: "monday",
    content: <img src={Monday} alt="Monday" height={127} width={156} />,
  },
  {
    id: 3,
    value: "hubspot",
    content: <img src={Hubspot} alt="Hubspot" height={114} width={122} />,
  },
  {
    id: 4,
    value: "trello",
    content: <img src={Trello} alt="Trello" height={80} width={80} />,
  },
  {
    id: 5,
    value: "jira",
    content: <img src={Jira} alt="Jira" height={40} width={100} />,
  },
  {
    id: 6,
    value: "google",
    content: <img src={Google} alt="Google" height={10} width={100} />,
  },
  {
    id: 7,
    value: "zapier",
    content: <img src={Zapier} alt="zapier" height={10} width={100} />,
  },
  {
    id: 8,
    value: "segment",
    content: <img src={Segment} alt="segment" height={10} width={100} />,
  },
  {
    id: 9,
    value: "zendesk",
    content: <img src={Zendesk} alt="zendesk" height={10} width={100} />,
  },
  {
    id: 10,
    value: "salesforce",
    content: <img src={Salesforce} alt="salesforce" height={10} width={100} />,
  },
];

const MarqueeSection = () => {
  return (
    <section className="py-20 md:py-40 bg-white font-outfit">
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl md:text-5xl text-center mb-6 text-[#2C155D] font-medium">
          Integrations
        </h2>
        <p className="text-sm md:text-base mb-6 text-center max-w-2xl mx-auto">
          Tryjolt seamlessly integrates with various platforms to ensure all customer data is synced across platforms.
        </p>
      </div>

      <div className="overflow-hidden w-full">
        <div className="flex animate-marquee">
          {boxes.concat(boxes).map((box, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[150px] h-[150px] md:w-[267px] md:h-[267px] mx-2 md:mx-6 flex items-center justify-center text-2xl font-bold rounded-3xl ${
                boxStyles[box.value]
              }`}
            >
              {box.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(MarqueeSection);
