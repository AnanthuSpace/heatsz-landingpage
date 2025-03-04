import React from "react";

export const SecondCard = ({ img, vid }) => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 h-[400px] w-full">
      <div
        className="h-full flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="h-full relative flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={vid} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
