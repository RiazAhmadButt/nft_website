import React from "react";
import AboutCard from "../layout/AboutCard";
import { cardData } from "../data-display/data";
import BackgroundImgm from "../../assets/images/bg.png";

const About = () => {
  return (
    <>
      <section
        className="bg-cover bg-center p-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${BackgroundImgm})`,
        }}
        aria-labelledby="about-title"
      >
        <div className="flex flex-wrap justify-center items-center gap-6">
          {cardData.map((card, index) => (
            <AboutCard key={index} image={card.image} title={card.title} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
