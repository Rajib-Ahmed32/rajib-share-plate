import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BannerSection() {
  return (
    <section className="relative bg-background text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid lg:grid-cols-2 items-center justify-center gap-16">
        <div className="z-10 relative">
          <h1 className="text-4xl leading-snug md:text-5xl md:leading-relaxed font-extrabold lg:leading-relaxed banner-heading">
            <span className="text-lime-400 block">Share Surplus,</span>
            <span className="text-white block">Support Needy</span>
            <span className="text-white block">Reduce Food Waste</span>
          </h1>
          <p className="mt-5 text-sm md:text-lg text-gray-100 max-w-md leading-relaxed">
            Connect with your neighbors to share extra food, reduce waste, and
            ensure no meal goes to waste. Join the movement toward a more
            sustainable and caring community.
          </p>
          <div className="mt-5">
            <Link to="/available-foods">
              <Button className="bg-lime-600 hover:bg-primary/90 text-white font-bold px-6">
                Find Shared Food
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 justify-center items-center">
          <motion.img
            src="/food-1.png"
            alt="Food 1"
            className="rounded-full shadow-lg w-44 md:w-56"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
          <motion.img
            src="/food-2.png"
            alt="Food 2"
            className="rounded-full shadow-lg w-44 md:w-56"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          />
          <motion.img
            src="/food-3.png"
            alt="Food 3"
            className="rounded-full shadow-lg w-44 md:w-56"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          />
          <motion.img
            src="/food-4.png"
            alt="Food 4"
            className="rounded-full shadow-lg w-44 md:w-56"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
          />
        </div>
      </div>
    </section>
  );
}
