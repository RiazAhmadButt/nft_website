import React, { useState } from "react";
import FAQsImg from "../../assets/images/spider.png"; // Adjust the path as per your project structure
import FAQsBgImg from "../../assets/images/faqBg.png";
import FAQItem from "../general/FAQItem";

const categories = ["General", "Pre-ICO", "Token", "Client", "Legal"];

const faqItems = [
  {
    question: "How do I create NFTs on 3dotlink?",
    answer:
      "Artists and creators can use our AI-integrated platform to generate NFTs by providing specific inputs, such as the desired features and elements for their digital artwork.",
  },
  {
    question: "What kind of art does 3dotlink support?",
    answer:
      "Our platform uses blockchain technology to verify and authenticate all digital artworks, ensuring their uniqueness and ownership.",
  },
  {
    question: "How are digital artworks verified for authenticity?",
    answer:
      "Yes, artists have full control over their collections through our dedicated dashboard and management tools.",
  },
  {
    question: "Can artists access and manage their collections on 3dotlink?",
    answer:
      "Yes, artists have full control over their collections through our dedicated dashboard and management tools.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={FAQsBgImg}
          alt="Smoke effect"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-8">
            <h1 className="text-4xl font-bold mb-2 font-['Zen_Dots']">
              Have any question?
            </h1>
            <p className="text-gray-400 mb-8">
              Curious about 3dotlink? Explore our frequently asked questions to
              find answers.
            </p>

            {/* Category Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-4 py-2 text-sm font-['Zen_Dots'] text-white font-normal leading-[24px]"
                >
                  {category}
                </button>
              ))}
              <div className="relative mt-2 w-[610px] border border-gray-500 mx-auto">
                {/* Red bar at the start */}
                <div className="absolute mt-[-3px] left-0 w-[97px] h-[6px] bg-red-600 opacity-100" />
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-red-600 bg-opacity-20 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  {/* Question */}
                  <div className="p-4 hover:bg-opacity-30 transition-colors">
                    <h3 className=" font-zen-dots ">{item.question}</h3>
                  </div>
                  {/* Answer */}
                  {activeIndex === index && (
                    <div className="p-4 font-sans bg-red-600 bg-opacity-10">
                      <p className="text-sm text-gray-300">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={FAQsImg}
              alt="Character illustration"
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
