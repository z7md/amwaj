
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
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
        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          <span className="text-red-600 relative inline-block p-2 ">
            مع الأمواج {"    "}
          </span>
          ،النظافة صارت أسهل وأسرع.
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
          
        >
          خدمة احترافية، أسعار منافسة، ونتائج تبهر العيون. احجز الآن وعيش راحة
          البال! 🧹🏡
        </motion.p>
        <motion.div
          variants={fadeIn("up", 0.7)}
          className="flex gap-4"
          initial="hidden"
          whileInView="show"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            initial="hidden"
            whileInView="show"
            href="tel:+966563309090"
            aria-label="call"
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
          >
            <IoCallOutline className="w-7 h-7" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            initial="hidden"
            whileInView="show"
            aria-label="whatsapp"
            href="https://wa.me/966563309090"
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-colors"
          >
            <FaWhatsapp className="w-7 h-7" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            initial="hidden"
            whileInView="show"
            aria-label="Google map"
            href="https://www.google.com/maps/place/%D8%A7%D9%84%D8%A7%D9%85%D9%88%D8%A7%D8%AC+%D8%A7%D9%84%D9%86%D8%B8%D9%8A%D9%81%D8%A9%E2%80%AD/@26.3277324,43.8908074,18z/data=!4m14!1m7!3m6!1s0x1581fd7e5e801fad:0x64474ec1a9b24315!2z2KfZhNin2YXZiNin2Kwg2KfZhNmG2LjZitmB2Kk!8m2!3d26.3276675!4d43.8895521!16s%2Fg%2F11kpvxw5sy!3m5!1s0x1581fd7e5e801fad:0x64474ec1a9b24315!8m2!3d26.3276675!4d43.8895521!16s%2Fg%2F11kpvxw5sy?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
            className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
          >
            <SiGooglemaps className="w-7 h-7" />
          </motion.a>
        </motion.div>
        {/* 
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md justify-center items-center"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95 w-[30%]"
          >
            <IoCallOutline className="w-full" />
          </motion.a>


          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-100 active:scale-95 w-[30%]"
          >
            <FaWhatsapp className="w-full" />
          </motion.a>

        </motion.div> */}
      </div>

      {/* Right Column - Images */}
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        {/* <div className="relative">
          <img
            src={heroImage}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
