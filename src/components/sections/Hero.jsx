import React from "react";

const Hero = () => {
  return (
    <div className="container text-white flex flex-col items-start pb-32 px-4 sm:px-6 md:px-8">
      {/* Main Heading */}
      <h1 className="font-zen-dots text-5xl sm:text-6xl md:text-7xl font-normal leading-[60px] sm:leading-[70px] text-left">
        Generate with AI, <br /> Scan, Mint, <br /> Sell & Trade
      </h1>

      <p className="text-xl sm:text-2xl leading-[24px] sm:leading-[29.75px] font-normal text-left pt-4 pb-4">
        Explore 3dotlink, where Web3 meets cultural legacy, and <br /> AI
        breathes life into NFTs
      </p>

      {/* Buy Button */}
      <button className="bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white font-bold text-lg sm:text-2xl leading-[24px] rounded-lg px-6 py-3">
        Buy NFT’s
      </button>
    </div>
  );
};

export default Hero;
