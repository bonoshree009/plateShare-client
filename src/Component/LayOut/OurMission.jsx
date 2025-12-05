import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaSmile, FaLeaf, FaShoppingBasket } from "react-icons/fa";

export default function OurMission() {
  return (
    <section className="relative max-w-6xl mx-auto px-4 py-16">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-10"
      >
        Our <span className="text-orange-500">Mission</span>
      </motion.h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">

        {[
          { icon: <FaLeaf />, number: "120+", text: "Available Foods" },
          { icon: <FaUsers />, number: "5000+", text: "Active Users" },
          { icon: <FaShoppingBasket />, number: "8500+", text: "Total Orders" },
          { icon: <FaSmile />, number: "99%", text: "Happy Customers" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
              relative 
              w-[200px] h-[250px]
              rounded-[14px]
              flex flex-col items-center justify-center
              overflow-hidden
              shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
            "
          >
            {/* Moving blob (same as CSS path) */}
            <motion.div
              animate={{
                x: ["-100%", "100%", "100%", "0%", "-100%", "-100%"],
                y: ["-100%", "-100%", "100%", "100%", "0%", "-100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute top-1/2 left-1/2 
                w-[150px] h-[150px]
                bg-orange-500 opacity-60 
                rounded-full blur-xl 
                z-1
              "
            />

            {/* Glass layer EXACT like .bg */}
            <div
              className="
                absolute top-[5px] left-[5px]
                w-[190px] h-60
                bg-white/90 backdrop-blur-2xl
                border border-white
                rounded-[10px]
                overflow-hidden
                z-2
              "
            ></div>

            {/* Content */}
            <div className="z-5 flex flex-col items-center justify-center">
              <div className="text-orange-500 text-4xl mb-3">{item.icon}</div>
              <h3 className="text-2xl font-semibold">{item.number}</h3>
              <p className="text-gray-500">{item.text}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
