import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Titles from "./Titles";
import ProductItem from "./ProductItem";

const LatestCollections = () => {
  const { Products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(Products.slice(0, 10));
  }, [Products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Titles text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Trendy, comfortable, and affordable fashion for every style. Discover
          quality clothes, fresh designs, and perfect fits that make you feel
          confident every day.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProduct.map((item, index) => (
          <ProductItem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
