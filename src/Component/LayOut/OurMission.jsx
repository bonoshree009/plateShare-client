import React from "react";
import {motion}  from "framer-motion";
import { FaUsers, FaSmile, FaLeaf, FaShoppingBasket } from "react-icons/fa";

export default function OurMission() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-6"
      >
        Our <span className="text-orange-500">Mission</span>
      </motion.h2>

      {/* Mission Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 max-w-3xl mx-auto mb-12"
      >
        We aim to connect food lovers with the best homemade and hygienic food
        prepared with love. Our mission is to support local food creators,
        promote healthy eating, and ensure a smooth food-sharing experience for
        everyone.
      </motion.p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">

        {/* Card Template */}
        {[
          { icon: <FaLeaf />, number: "120+", text: "Available Foods" },
          { icon: <FaUsers />, number: "5000+", text: "Active Users" },
          { icon: <FaShoppingBasket />, number: "8500+", text: "Total Orders" },
          { icon: <FaSmile />, number: "99%", text: "Happy Customers" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition"
          >
            <div className="text-orange-500 text-4xl mb-3 mx-auto flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-2xl font-semibold text-center">{item.number}</h3>
            <p className="text-gray-500 text-center">{item.text}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
