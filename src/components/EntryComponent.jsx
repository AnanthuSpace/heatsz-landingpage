import React from "react";

const EntryComponent = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden pb-20">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/EntryVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="absolute bottom-2 sm:bottom-10 md:bottom-2 left-1/2 transform -translate-x-1/2 
        w-[90%] sm:w-[70%] md:w-[60%] z-40 
        border border-white/10 bg-white/10 backdrop-blur-lg shadow-lg 
        rounded-full flex justify-center flex-wrap gap-1 sm:gap-2 md:gap-3 p-2"
      >
        {[...Array(12)].map((_, index) => (
          <img
            key={index}
            src="/Headset.svg"
            alt={`Item ${index + 1}`}
            className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default EntryComponent;
