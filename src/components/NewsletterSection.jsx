import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const NewsletterSection = () => {
  return (
    <section id="newsletter" className="section-container px-4 md:px-0">
      <motion.div
        variants={fadeIn("up", 0.05)}
        initial="hidden"
        whileInView="show"
        className="bg-red-600 rounded-2xl overflow-hidden opacity-85"
      >
        <div className="relative md:px-16 px-6 py-16 md:py-24">
          {/* Background Gradient */}
          <motion.div
            variants={fadeIn("left", 0.1)}
            className="absolute top-0 right-0 w-1/2 h-full bg-red-700 clip-path-slant hidden md:block opacity-85"
          ></motion.div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <motion.div
              variants={fadeIn("right", 0.11)}
              className="text-white max-w-lg text-center md:text-left"
            >
              <motion.h2
                variants={textVariant(0.12)}
                className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 text-center"
              >
                أحجز موعدك الأن
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.13)}
                className="text-white text-sm sm:text-base text-center "
              >
                أفضل فريق تنظيف وأفضل خدمات توصيل جميعها في خدمتكم. بيئة نظيفة
                وصحية بين يديك.
              </motion.p>
            </motion.div>

            {/* Email Form */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              className="w-full md:w-auto"
            >
              <motion.div
                variants={fadeIn("up", 0.6)}
                className="flex flex-col sm:flex-row gap-4 sm:gap-0"
              >
            <motion.a
              variants={fadeIn("up", 0.4)}
              href="tel:+966563309090"
              className="w-full bg-white text-red-500 text-xl px-20 py-2.5 rounded-lg hover:scale-105 font-medium transition-all   text-center block"
            >
              اتصل بنا الآن
            </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>
        {`
          .clip-path-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
};

export default NewsletterSection;
