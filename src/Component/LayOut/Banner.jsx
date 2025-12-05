import React from 'react';
import { motion } from 'framer-motion';
import banner from '../../assets/banner.jpg';
import { NavLink } from 'react-router';

const Banner = () => {
  return (
    <section
      className="w-full relative bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: `url(${banner})`
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 "></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative py-30 px-auto text-center text-white"
      >
        <h1 className="text-6xl font-bold mb-4">
          Delicious Food, Anytime
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-6">
          A community-driven platform to share food, reduce waste, and help others.
          Discover available foods near you.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-6 py-3 rounded-xl text-lg font-semibold 
          hover:bg-green-700 transition duration-300 buttonbanner"
        >
        <div className="hoverEffect">
           <div></div>
             </div>

           <NavLink to="/available-foods"> Available Foods </NavLink>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Banner;
