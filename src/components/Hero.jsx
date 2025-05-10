import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto"
    >
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* ✅ LCP Optimized: No animation on h1 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-red-600 relative inline-block p-2">
            مع الأمواج{" "}
          </span>
          ،النظافة صارت أسهل وأسرع.
        </h1>

        <motion.p
          variants={fadeIn("up", 0.05)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          خدمة احترافية، أسعار منافسة، ونتائج تبهر العيون. احجز الآن وعيش راحة
          البال! 🧹🏡
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.1)}
          className="flex gap-4"
          initial="hidden"
          whileInView="show"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="tel:+966563309090"
            aria-label="call"
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
          >
            <IoCallOutline className="w-7 h-7" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            aria-label="whatsapp"
            href="https://wa.me/966563309090"
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-colors"
          >
            <FaWhatsapp className="w-7 h-7" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            aria-label="Google map"
            href="https://www.google.com/maps/place/..."
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
          >
            <SiGooglemaps className="w-7 h-7" />
          </motion.a>
        </motion.div>
      </div>

      {/* Right Column - Images (optional future use) */}
      <motion.div
        variants={fadeIn("left", 0.05)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        {/* Optional image section */}
      </motion.div>
    </section>
  );
};

export default Hero;
