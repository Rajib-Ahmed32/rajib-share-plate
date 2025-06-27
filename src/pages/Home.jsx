import React from "react";
import BannerSection from "../home-page/BannerSection";
import FeaturedFoods from "../home-page/FeaturedFoods";
import AboutSection from "../home-page/AboutSection";
import TestimonialsSection from "../home-page/TestimonialsSection";
import CallToActionSection from "../home-page/CallToActionSection";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <FeaturedFoods />
      <AboutSection />
      <TestimonialsSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
