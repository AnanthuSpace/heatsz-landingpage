import React from "react";
import EntryComponent from "../components/EntryComponent";
import ExperienceSection from "../components/ExperienceSection";
import ProductShowcase from "../components/ProductShowcase";
import { SecondCard } from "../components/SecondCard";
import TrendingProducts from "../components/TrendingProducts ";

const videoUrls = ["/footer1.mp4", "/footer2.mp4", "/footer3.mp4"];

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <EntryComponent />
      <ExperienceSection
        experienceImage="/Experince.svg"
        discription={["Boost up your ", "Audio experience."]}
      />
      <ProductShowcase />
      <SecondCard img="/2k26.svg" vid="/secondFrame.mp4" />
      <ExperienceSection
        experienceImage="/Banner.svg"
        discription={["Queen's Edition ", "Smartwatch "]}
      />
      <SecondCard img="/watch.svg" vid="/secondFrame.mp4" />
      <TrendingProducts videos={videoUrls} />
    </div>
  );
};

export default HomePage;
