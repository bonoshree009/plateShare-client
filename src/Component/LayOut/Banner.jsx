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
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
         Delicious Food, Anytime
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          A community-driven platform to share food, reduce waste, and help others. Discover available foods near you.
        </motion.p>
        
<motion.nav
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <NavLink
    to="/available-foods"
    className="bg-green-600 px-6 py-3 rounded-xl text-lg font-semibold mt-3
                transition  duration-300 buttonbanner buttonin flex items-cente"
  > Expolore Food
   
  </NavLink>
</motion.nav>


      </motion.div>
    </section>
  );
};

export default Banner;
