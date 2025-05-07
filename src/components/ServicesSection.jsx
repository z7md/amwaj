import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { FaHouseDamage } from "react-icons/fa"; // House cleaning
import { MdOutlineCleaningServices } from "react-icons/md"; // Tile and marble cleaning
import { FaTools } from "react-icons/fa"; // Furniture assembly
import { IoMdBrush } from "react-icons/io"; // Carpet and sofa cleaning
import { IoBugSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaTruck className="w-8 h-8 text-red-500" />, // Red for pest control
      title: "نقل العفش",
      description:
        " نقدم حلول فعالة لمكافحة الحشرات لضمان بيئة نظيفة وآمنة لك ولعائلتك.",
      link: "#learn-more",
    },
    {
      icon: <FaHouseDamage className="w-8 h-8 text-blue-400" />, // Light blue for house cleaning
      title: "غسيل المنازل",
      description:
        " نقدم خدمة غسيل المنازل بكفاءة عالية، لجعل منزلك نظيفاً ومشرقاً.",
      link: "#learn-more",
    },
    {
      icon: <MdOutlineCleaningServices className="w-8 h-8 text-yellow-400" />, // Light yellow for tile cleaning
      title: "جلي وتلميع البلاط والرخام",
      description:
        " متخصصون في جلي وتلميع البلاط والرخام لضمان لمسة نهائية لامعة وجميلة.",
      link: "#learn-more",
    },
    {
      icon: <FaTools className="w-8 h-8 text-orange-500" />, // Orange for furniture assembly
      title: "فك وتركيب الأثاث",
      description:
        "نقدم خدمة فك وتركيب الأثاث بدقة واحترافية، لنضمن لك ترتيب منزلك بسهولة.",
      link: "#learn-more",
    },
    {
      icon: <IoMdBrush className="w-8 h-8 text-green-400" />, // Green for carpet and sofa cleaning
      title: "غسيل المجالس والسجاد",
      description:
        " نوفر خدمة غسيل المجالس والسجاد لإعادة النظافة والانتعاش لكل زاوية في منزلك.",
      link: "#learn-more",
    },
    {
      icon: <IoBugSharp className="w-8 h-8 text-red-500" />, // Red for pest control
      title: "مكافحة الحشرات",
      description:
        " نقدم حلول فعالة لمكافحة الحشرات لضمان بيئة نظيفة وآمنة لك ولعائلتك.",
      link: "#learn-more",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={fadeIn("up", 0.2)}
        className="flex flex-col  items-center justify-between gap-12 lg:gap-12"
      >
        {/* Header */}
        <motion.div variants={fadeIn("right", 0.4)} className="md:w-1/3">
          <motion.h2
            variants={textVariant(0.2)}
            className="text-3xl md:text-4xl font-bold mb-6 text-center"
          >
            خدماتنا
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("left", 0.4)}
          className="flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.3)}
              whileHover={{ scale: 1.05 }}
              initial="hidden"
              whileInView="show"
              className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 shadow-xl transition-shadow duration-300"
            >
              <motion.div
                variants={fadeIn("down", 0.6 )}
                initial="hidden"
                whileInView="show"
                className="mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView="show"
                className="text-xl font-semibold mb-2"
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="show"
                variants={fadeIn("up", 0.7)}
                className="text-gray-600 mb-4"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;
