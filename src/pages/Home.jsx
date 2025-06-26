import React from "react";
import BannerSection from "../home-page/BannerSection";
import FeaturedFoods from "../home-page/FeaturedFoods";
import AboutSection from "../home-page/AboutSection";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <FeaturedFoods />
      <AboutSection />
    </div>
  );
};

export default Home;
