import React from "react";

const Newsletter = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Enjoy exclusive discounts on our best-selling products for a limited
        time only
      </p>
      <from className="w-full sm:w-1/2 flex items-center gap-3 mmx-auto my-6 border pl-3">
        <input
          className="w-full sm:flex-1 outline-none"
          type="emil"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-2 cursor-pointer hover:scale-110"
        >
          SUBSCRIBE
        </button>
      </from>
    </div>
  );
};

export default Newsletter;
