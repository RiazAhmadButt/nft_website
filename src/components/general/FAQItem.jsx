import React from "react";

const FAQItem = ({ question, answer }) => {
  return (
    <div className="bg-red-600 bg-opacity-20 rounded-lg overflow-hidden">
      <div className="p-4 cursor-pointer hover:bg-opacity-30 transition-colors">
        <h3 className="text-lg font-semibold">{question}</h3>
        <p className="text-sm text-gray-300 mt-2">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
