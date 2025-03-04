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
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8 ">
        <div
          className="flex gap-1 border border-white/20 bg-white/20 backdrop-blur-lg shadow-lg 
        rounded-full"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 rounded-full text-sm transition-colors
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
        <button className="flex items-center text-sm text-gray-600 hover:text-gray-500">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
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
