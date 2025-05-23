import  { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "../assets/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "الصفحة الرئيسية" },
    { href: "#about", label: "لماذا تختارنا" },
    { href: "#services", label: "خدماتنا" },
    { href: "#pricing", label: "الأسعار التقريبية" },
    { href: "#testimonials", label: "اراء العملاء" },
  ];

  return (
    <motion.nav
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16">
        {/* Logo */}
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
        {/* Mobile Menu Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </motion.button>

        {/* Navigation Links - Desktop */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden md:flex items-center gap-10"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={fadeIn("down", 0.1 * (index + 1))}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-red-600 after:transition-all
                ${
                  activeLink === link.href
                    ? "text-red-600 after:w-full  "
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-red-100 cursor-pointer"
        >
          <a href="tel:+966563309090">اتصل بنا الآن</a>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4"
        >
          <motion.div
            variants={fadeIn("down", 0.3)}
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={fadeIn("right", 0.1 * (index + 1))}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium py-2
                  ${
                    activeLink === link.href
                      ? "text-red-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              variants={fadeIn("up", 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+966563309090"
              className="w-full bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-red-100 text-center block"
            >
              اتصل بنا الآن
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
