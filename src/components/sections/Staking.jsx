import React from "react";

import NFTDescription from "../general/NFTDescription";
import NftImageCard from "../general/NftImageCard";
import { NFTImages } from "../data-display/data";

const Staking = () => {
  return (
    <>
      <div className="bg-black">
        <div className="bg-black text-white p-8 max-w-7xl mx-auto">
          <NFTDescription />
          <div className="grid grid-cols-12 gap-6">
            {NFTImages.map((image, index) => (
              <NftImageCard
                key={index}
                src={image.src}
                alt={image.alt}
                colSpan={image.colSpan}
                rowSpan={image.rowSpan}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
