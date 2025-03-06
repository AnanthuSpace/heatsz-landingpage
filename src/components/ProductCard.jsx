const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
      <div className="relative mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain transition-transform duration-300 hover:scale-110"
        />
        <div className="flex justify-center gap-1 mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        </div>
      </div>
      <div className="text-left">
        <p className="text-xs sm:text-sm text-gray-400 font-bold">Best Buy</p>
        <p className="text-xs sm:text-sm text-black mb-2">{title}</p>
        <p className="font-medium text-black">₹ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
