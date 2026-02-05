import React from "react";
import { assets } from "../assets/assets";

const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-aroundcgap-2 text-center py-20 text-20 text-xs sm:text-sm md:text-sm md:text-base text-gray-700 justify-center gap-35 sm:col-1 ">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We Offer Free Exchange Policy</p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5 " />
        <p className="font-semibold"> 7 Day return Policy</p>
        <p className="text-gray-400">We Offer 7 Day Free Return Policy</p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5 " />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We Provide 24/7 Customer Support</p>
      </div>
    </div>
  );
};

export default Ourpolicy;
