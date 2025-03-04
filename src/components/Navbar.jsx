import { useState } from "react";
import { Search, ShoppingBag, Heart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-[60%] z-50 
        border border-white/20 py-3 px-6 bg-white/15 backdrop-blur-lg shadow-lg 
        rounded-full flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="/Icone.svg" alt="Logo" className="w-7 h-7 object-contain" />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-primary font-medium">Mobile Accs</a>
          <a href="#" className="text-primary font-medium">Computer Accs</a>
          <a href="#" className="text-primary font-medium">Multimedia</a>
          <a href="#" className="text-primary font-medium">Support</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <Search className="h-4 w-4 text-primary" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <ShoppingBag className="h-4 w-4 text-primary" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <Heart className="h-4 w-4 text-primary" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <User className="h-4 w-4 text-primary" />
          </button>
        </div>

        <button className="md:hidden p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6 text-primary" />
        </button>
      </nav>

      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl 
          transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>

        <button className="absolute top-4 right-4 p-2 hover:bg-gray-200 rounded-full"
          onClick={() => setIsOpen(false)}>
          <X className="h-6 w-6 text-primary" />
        </button>

        <div className="mt-16 flex flex-col space-y-6 px-6">
          <a href="#" className="text-primary font-medium">Mobile Accs</a>
          <a href="#" className="text-primary font-medium">Computer Accs</a>
          <a href="#" className="text-primary font-medium">Multimedia</a>
          <a href="#" className="text-primary font-medium">Support</a>

          <div className="flex flex-col space-y-4 mt-6">
            <button className="p-2 rounded-full hover:bg-gray-200 transition flex items-center">
              <Search className="h-5 w-5 text-primary mr-2" /> Search
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition flex items-center">
              <ShoppingBag className="h-5 w-5 text-primary mr-2" /> Cart
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition flex items-center">
              <Heart className="h-5 w-5 text-primary mr-2" /> Wishlist
            </button>
            <button className="p-2 rounded-full hover:bg-gray-200 transition flex items-center">
              <User className="h-5 w-5 text-primary mr-2" /> Account
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}>
        </div>
      )}
    </>
  );
};

export default Navbar;
