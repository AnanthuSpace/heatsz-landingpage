const ProductCard = ({ image, title, price }) => {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg">
      <div className="relative mb-4">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-48 h-48 object-contain"
        />
        <div className="flex justify-center gap-1 mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-black"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
        </div>
      </div>
      <div className="text-left">
        <p className="text-sm text-gray-400 font-bold">Best Buy</p>
        <p className="text-sm text-black mb-2">{title}</p>
        <p className="font-medium text-black">₹ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
