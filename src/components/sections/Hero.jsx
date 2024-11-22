import React from "react";

const Hero = () => {
  return (
    <div className="container text-white flex flex-col items-start pb-32">
      {/* Main Heading */}
      <h1 className="font-zen-dots text-7xl font-normal leading-[80px] text-left">
        Generate with AI, <br /> Scan, Mint, <br /> Sell & Trade
      </h1>

      <p className="text-2xl leading-[29.75px] font-normal text-left pt-2 pb-2">
        Explore 3dotlink, where Web3 meets cultural legacy, and <br /> AI
        breathes life into NFTs
      </p>

      {/* Buy Button */}
      <button className="bg-gradient-to-r from-[#ED213A] to-[#FD1640] text-white font-bold text-2xl leading-[24px] rounded-lg px-6 py-3">
        Buy NFT’s
      </button>
    </div>
  );
};

export default Hero;
