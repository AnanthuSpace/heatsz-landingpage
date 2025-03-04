import React from "react";

const EntryComponent = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-fill"
        autoPlay
        loop
        muted
      >
        <source src="/EntryVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>

      <div
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[60%] z-50
        border border-white/10 bg-white/10 backdrop-blur-lg shadow-lg 
        rounded-full flex justify-center flex-wrap gap-3"
      >
        {[...Array(12)].map((_, index) => (
          <img
            key={index}
            src="/Headset.svg"
            alt={`Item ${index + 1}`}
            className="w-15 h-15 object-cover rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default EntryComponent;
