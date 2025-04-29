import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import heroImage from '../assets/heroImage.png'
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 pt-44 pb-16 container mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-1/2 space-y-8">


        <motion.h1
          variants={textVariant(0.3)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          بيتك يلمع... ومكتبك يتألق! {' '}
          <span className="text-red-600 relative inline-block">
            مع الأمواج، النظافة صارت أسهل وأسرع.


          </span>

        </motion.h1>

        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          خدمة احترافية، أسعار منافسة، ونتائج تبهر العيون.

          احجز الآن وعيش راحة البال! 🧹🏡


        </motion.p>
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
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            style={{ width: '1200px', height: "800px" }}
            alt="Team meeting"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero