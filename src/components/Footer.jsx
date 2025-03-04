const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <div className="lg:max-w-md">
            <div className="mb-8">
              <img
                src="/MainLogo.svg"
                alt="Main Logo"
                width="120"
                height="40"
              />
            </div>

            <div className="mb-8 text-sm text-gray-400">
              <p>
                Heatz® is a registered brand of Adhelgroup. It is registered in
                different countries including Saudi Arabia and UAE. Especially
                in the middle east, Heatz® is well known for its variety and
                quality of products launched in every season.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex max-w-xs border-b border-gray-700">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent py-2 flex-grow focus:outline-none text-sm"
                />
                <button className="p-2">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#00E676"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-4 flex items-start gap-2">
                <input type="checkbox" id="privacy-consent" className="mt-1" />
                <label
                  htmlFor="privacy-consent"
                  className="text-xs text-gray-400"
                >
                  I confirm acceptance of the Privacy Policy and consent to
                  terms, including the use of cookies.
                </label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16">
            <div>
              <h3 className="font-medium mb-4">Mob Acc</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Earphones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cables
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Adapters
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Power Bank
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Batteries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Car Charger
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Holders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Smartwatches
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Com Acc</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Earphones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cables
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Adapters
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Power Bank
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Batteries
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Car Charger
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Holders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Smartwatches
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Payment Methods
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Track Your Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Delivery Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-xs text-gray-500 text-center">
          Copyright © 2024 Heatz. All rights reserved. | Developed by{" "}
          <a href="#" className="text-gray-400">
            Adagency
          </a>{" "}
          |{" "}
          <a href="#" className="text-gray-400">
            Technologies
          </a>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
