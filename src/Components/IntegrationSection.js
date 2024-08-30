import React from "react";
import { IntegrationTJLogo, Zlogo } from "../Assets/Icons";

const IntegrationSection = () => {
    const integrations = [
        { name: "Salesforce", icon: "☁️" },
        { name: "Mixpanel", icon: "M" },
        { name: "HubSpot", icon: "🟠" },
        { name: "Google Analytics", icon: "📊" },
        { name: "Zapier", icon: "Z" },
        { name: "Trello", icon: "T" },
        { name: "Slack", icon: <Zlogo /> },
    ];

    return (
        <div className="bg-sky-100 py-20 font-outfit">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="w-[45%] relative h-80">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-purple-800 rounded-full flex items-center justify-center">
                            <span className="text-white text-3xl">
                                <IntegrationTJLogo />
                            </span>
                        </div>
                        {integrations.map((integration, index) => {
                            const angle =
                                (index / (integrations.length - 1)) * Math.PI;
                            const x = 50 + 45 * Math.cos(angle);
                            const y = 50 - 45 * Math.sin(angle);
                            return (
                                <div
                                    key={integration.name}
                                    className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center"
                                    style={{
                                        top: `${y}%`,
                                        left: `${x}%`,
                                        transform: "translate(-50%, -50%)",
                                    }}
                                >
                                    <span className="text-xl">
                                        {integration.icon}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-[45%]">
                        <h2 className="text-3xl font-bold mb-4 text-purple-800 text-left">
                            Seamless Integrations
                        </h2>
                        <p className="text-lg text-gray-600 text-left">
                            Tryjolt seamlessly integrates with various platforms
                            to ensure all customer data is synced across
                            platforms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntegrationSection;
