import React from "react";
import BorderImg from "../../assets/images/border.png";
import VerticalLineLeft from "../../assets/images/verticalLine.png";
import VerticalLineRight from "../../assets/images/verticalLineRight.png";

const AboutCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center">
        <div
          className="h-52 w-1"
          style={{
            backgroundImage: `url(${VerticalLineLeft})`,
          }}
        />

        {/* Card with Border Image */}
        <div
          className="relative flex flex-col items-center justify-center p-6 space-y-4 bg-center bg-cover w-[300px] h-[300px]"
          style={{
            backgroundImage: `url(${BorderImg})`,
          }}
        >
          <img src={image} alt={title} className="relative z-10 w-20 h-20" />
          <h3 className="relative z-10 text-white text-center text-xl font-normal leading-6 w-56 font-inter">
            {title}
          </h3>
        </div>

        {/* Right Gradient Bar */}
        <div
          className="h-52 w-1"
          style={{
            marginRight: "-2px",
            backgroundImage: `url(${VerticalLineRight})`,
          }}
        />
      </div>
    </div>
  );
};

export default AboutCard;
