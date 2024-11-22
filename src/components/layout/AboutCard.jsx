import React from "react";
import BorderImg from "../../assets/images/border.png";
import VerticalLineLeft from "../../assets/images/verticalLine.png";
import VerticalLineRight from "../../assets/images/verticalLineRight.png";

const AboutCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Card Wrapper */}
      <div className="flex items-center">
        {/* Left Gradient Bar */}
        <div
          className="h-[205px] w-[7px]"
          style={{
            backgroundImage: `url(${VerticalLineLeft})`,
          }}
        />

        {/* Card with Border Image */}
        <div
          className="relative flex flex-col items-center justify-center p-6 space-y-4"
          style={{
            backgroundImage: `url(${BorderImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "300px",
            height: "300px",
          }}
        >
          <img src={image} alt={title} className="relative z-10 w-20 h-20" />
          <h3 className="relative z-10 text-white text-center text-xl font-normal leading-6 w-56 font-inter">
            {title}
          </h3>
        </div>

        {/* Right Gradient Bar */}
        <div
          className="h-[205px] w-[7px]"
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
