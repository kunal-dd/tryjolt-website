import React, { useState, memo } from "react";

const FAQItem = memo(({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-[#2C155D] py-4">
      <button className="flex items-center w-full text-left" onClick={onToggle}>
        <span className="text-xl md:text-2xl mr-4 w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full">
          {isOpen ? "−" : "+"}
        </span>
        <span className="text-xl md:text-2xl font-medium text-[#2C155D]">
          {question}
        </span>
      </button>
      {isOpen && (
        <p className="mt-2 text-gray-600 pl-12 text-base md:text-lg">
          {answer}
        </p>
      )}
    </div>
  );
});

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What is the Customer Insights Journey?",
      answer:
        "Customer Insights Journey is a feature that provides a visual map of your customer's journey, from onboarding to retention. It helps you understand customer behavior and optimize each step to improve overall satisfaction and retention.",
    },
    {
      question: "How can Jolt Studio help with customer retention?",
      answer:
        "Jolt Studio enables businesses to create personalized videos for onboarding, product updates, and re-engagement, which can significantly improve customer retention rates.",
    },
    {
      question: "Is Jolt Studio easy to use?",
      answer:
        "Yes, Jolt Studio is designed with user-friendliness in mind. It provides intuitive tools and interfaces that make creating personalized videos simple and efficient.",
    },
    {
      question: "Can I integrate Jolt Studio with other platforms?",
      answer:
        "Absolutely! Jolt Studio offers seamless integration with various platforms to ensure all your customer data is synced and utilized effectively.",
    },
    {
      question: "How do I get started with Jolt Studio?",
      answer:
        "Getting started is easy. You can schedule a demo through our website, and our team will guide you through the setup process and show you how to make the most of Jolt Studio's features.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-[100px] bg-gray-50 font-outfit">
      <div className="container mx-auto px-4 md:px-20">
        <h2 className="text-2xl md:text-[48px] font-medium mb-8 md:mb-12 text-[#2C155D]">
          Frequently Asked Questions
        </h2>
        <div className="text-left">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
