import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState("Headset");

  const tabs = ["Headset", "Mouse", "Keyboard", "10% Offers"];

  const products = [
    {
      image: "/airpod.svg",
      title: "Lorem ipsum is simply dummy text of the printing",
      price: "2599",
    },
    {
      image: "/earphone.svg",
      title: "Lorem ipsum is simply dummy text of the printing",
      price: "2599",
    },
    {
      image: "/bud.svg",
      title: "Lorem ipsum is simply dummy text of the printing",
      price: "2599",
    },
    {
      image: "/headphone.svg",
      title: "Lorem ipsum is simply dummy text of the printing",
      price: "2599",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Tabs Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        {/* Tab Buttons */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 border border-white/20 bg-white/20 backdrop-blur-lg shadow-lg 
        rounded-full p-1"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm transition-colors
                ${
                  activeTab === tab
                    ? "bg-emerald-400 text-black font-bold"
                    : "text-gray-600 hover:bg-gray-800 font-bold"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <button className="flex items-center text-xs sm:text-sm text-gray-600 hover:text-gray-500">
          View All Products
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
