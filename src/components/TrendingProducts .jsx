import React from "react";

const TrendingProducts = ({ videos }) => {
  // Repeat videos to ensure 6 items
  const repeatedVideos = [...videos, ...videos];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
        Trending Products
      </h2>
        </div>

        <div className="flex items-center">
          <p className="text-gray-300 text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {repeatedVideos.map((video, index) => (
          <div key={index} className="relative w-full h-70 overflow-hidden rounded-lg shadow-lg">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
