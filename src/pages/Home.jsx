import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";
import Ourpolicy from "../components/Ourpolicy";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <LatestCollections />
      <BestSeller />
      <Ourpolicy />
      <Newsletter />
    </div>
  );
};

export default Home;
