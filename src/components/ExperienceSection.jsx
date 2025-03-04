import React from "react";

const ExperienceSection = ({ experienceImage, discription }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="flex items-center justify-start">
          <h1 className="text-3xl md:text-3xl font-bold text-white text-left">
            Boost up your <br /> Gaming experience.
          </h1>
        </div>

        <div className="flex items-center">
          <p className="text-gray-300 text-lg text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-80 flex items-center justify-center rounded-lg shadow-lg overflow-hidden">
        <img
          src={experienceImage}
          alt="Audio Experience"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {discription[0]} <br /> {discription[1]}
          </h2>
          <button className="px-6 py-2 mt-4 text-white font-semibold rounded-full shadow-lg border border-white hover:bg-primary-dark transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
