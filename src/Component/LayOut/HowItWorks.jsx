import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          How It <span className="text-orange-500">Works</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-orange-500 text-white shadow-lg p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3">1. Post Food</h3>
            <p>
              Share extra food by uploading its details and availability.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-orange-500 text-white shadow-lg p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3">2. Find Food</h3>
            <p>
              Community members browse and request food items near them.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-orange-500 text-white shadow-lg p-8 rounded-xl"
          >
            <h3 className="text-xl font-semibold mb-3">3. Collect Food</h3>
            <p>
              Meet up and collect the food. Reduce waste & help others!
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
