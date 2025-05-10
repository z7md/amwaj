import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "../assets/logo.webp";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50"
    >
      <div className="section-container">
        <motion.div
          variants={fadeIn("up", 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeIn("right", 0.4)} className="lg:col-span-4">
            <motion.div
              variants={fadeIn("down", 0.5)}
              className="flex items-center gap-1 mb-6"
            >
              <motion.div
                variants={fadeIn("right", 0.3)}
                className="flex items-center gap-1 cursor-pointer"
              >
                <img
                  src={Image}
                  alt="Logo"
                  style={{ width: "70px", height: "50px", objectFit: "cover" }}
                />
              </motion.div>
              {/* <span className="text-xl font-medium ml-1">الأمواج النظيفة</span> */}
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.13)}
              className="text-gray-600 mb-6"
            >
              أفضل فريق تنظيف وأفضل خدمات توصيل جميعها في خدمتكم. بيئة نظيفة
              وصحية بين يديك.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.26)} className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="tel:+966563309090"
                aria-label="call"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                <IoCallOutline className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://wa.me/966563309090"
                aria-label="Whatsapp"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-700 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                aria-label="Google map"
                href="https://www.google.com/maps/place/%D8%A7%D9%84%D8%A7%D9%85%D9%88%D8%A7%D8%AC+%D8%A7%D9%84%D9%86%D8%B8%D9%8A%D9%81%D8%A9%E2%80%AD/@26.3277324,43.8908074,18z/data=!4m14!1m7!3m6!1s0x1581fd7e5e801fad:0x64474ec1a9b24315!2z2KfZhNin2YXZiNin2Kwg2KfZhNmG2LjZitmB2Kk!8m2!3d26.3276675!4d43.8895521!16s%2Fg%2F11kpvxw5sy!3m5!1s0x1581fd7e5e801fad:0x64474ec1a9b24315!8m2!3d26.3276675!4d43.8895521!16s%2Fg%2F11kpvxw5sy?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-colors"
              >
                <SiGooglemaps className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            className="lg:col-span-8"
          ></motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={fadeIn("up", 0.22)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div
            variants={fadeIn("up", 0.33)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={fadeIn("right", 0.44)}
              className="text-gray-600 text-sm"
            >
              جميع الحقوق محفوظة © {new Date().getFullYear()} الأمواج النظيفة
            </motion.p>
            <motion.p
              variants={fadeIn("left", 0.44)}
              className="text-gray-600 text-sm"
            >
              Created by{" "}
              <a
                href="https://www.linkedin.com/in/hamad-almohaimeed/"
                className="text-red-600 hover:opacity-70"
              >
                Hamad AlMohaimeed
              </a>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
