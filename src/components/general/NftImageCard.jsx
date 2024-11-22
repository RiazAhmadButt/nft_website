import React from "react";

const NftImageCard = ({ src, alt, colSpan, rowSpan }) => {
  return (
    <>
      <div className={`col-span-${colSpan} row-span-${rowSpan}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
      </div>
    </>
  );
};

export default NftImageCard;
