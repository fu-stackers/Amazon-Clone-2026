import React from "react";

function Footer() {
  return (
    <footer className="w-full font-sans text-white">
      <div className="bg-[#37475a] hover:bg-[#485769] transition-colors py-4 text-center text-sm cursor-pointer">
        Back to top
      </div>

      <div className="bg-[#232f3e] py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4 text-base">Get to Know Us</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">About Amazon</li>
            </ul>
          </div>

          {/* Repeat for other columns...  
    











          */}
          <div>
            <h3 className="font-bold mb-4 text-base"> Make Money with Us</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">
                Sell products on Amazon
              </li>
              <li className="hover:underline cursor-pointer">
                Become an Affiliate
              </li>
              <li className="hover:underline cursor-pointer">
                Advertise Your Products
              </li>
              <li className="hover:underline cursor-pointer">
                Self-Publish with Us
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-base"> Amazon Payment</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">
                Amazon Business Card
              </li>
              <li className="hover:underline cursor-pointer">
                Shop with Points
              </li>
              <li className="hover:underline cursor-pointer">
                Reload Your Balance
              </li>
              <li className="hover:underline cursor-pointer">
                Currency Converter
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-base"> Let Us Help You</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Your Account</li>
              <li className="hover:underline cursor-pointer">Your Orders</li>
              <li className="hover:underline cursor-pointer">
                Shipping Policies
              </li>
              <li className="hover:underline cursor-pointer">Help Center</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal Bar */}
      <div className="bg-[#131a22] py-8 text-center border-t border-gray-700">
        <div className="flex justify-center space-x-6 text-xs text-gray-400 mb-2">
          <span className="hover:underline cursor-pointer">
            Conditions of Use
          </span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
          <span className="hover:underline cursor-pointer">
            Your Ads Privacy Choices
          </span>
        </div>
        <p className="text-xs text-gray-400">
          © 1996-2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
}

export default Footer;
