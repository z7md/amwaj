import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const testimonials = [
  {
    id: 1,
    name: "Malek Ghlab", 
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "ما شاء الله.الشركة عنوان للتنظيف الدقيق في مدينةالقصيم.ما شاء الله عمالتهم جدا محترفين ودقيقين في العمل وسريعين في الانجاز.يتقبلون الملاحظات بصدر رحب ويقومون بالتعديل والتصحيح فورا.تهمهم تجربة العميل معاهم.سلمهم بيتك وانت مرتاح شكرا لهم",
  },
  {
    id: 2,
    name: "Om Lamees",
    image: "https://randomuser.me/api/portraits/women/90.jpg", 
    text: "  دلله ربي وفقني وتعاملت معهم وكان اختيار موفق اشتغلوا على البيت بعد ترميم العماره بداية من الخزان العلوي للخزان السفلي مع الأرصفة للبيت وكانوا دقيقين وسريعين وشغل احترافي وممتاز وسعر ممتاز وتعامل الأستاذ أبو إلياس ومتابعته ب استمرار للموقع والعمالهشكرا لكم ومن افضل شركات التنظيف والنقل بالمنطقة 🙏🏻👌🏻  ",
  },
  {
    id: 3,
    name: "فهد الضبيعي",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "بكل صراحه انا متعامل مع شركات تنظيف كثير ممكن اكثر من خمس شركات لكن و الامواج شغلهم احترافي ١٠٠٪؜ الله يعطيهم العافية من اليوم و رايح ما راح اتعامل الا مع الامواج .",
  },
  {
    id: 4,
    name: "naif almrwni",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: `الصراحة من ابدع ما يكون
1- اخلاق العمال جدا رائعة
2- السرعة
3- النظافة
انصح بها وبقوة
الله يوفقهم`,
  },
  {
    id: 5,
    name: "Ahmad Mohmad",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: `بيض الله وجهكم
الصراحة شغلكم يوسع الصدر ماقصرتو
زينت العمال مهب مزاجيين يتقبلون التوجيه والتدبير
وشغلهم زين دقيقين بالتركيب دقيقين بالشيل وزود على ذالك قرمين`,
  },
  {
    id: 6,
    name: "Afrah Ebrahim",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: `بدون مبالغة أفضل شركة تنظيف بالقصيم رقي بالعمل والتعامل ، جربتهم بتنظيف فيلا وشالية تنظيفهم لايعلى عليه مناشفهم أستخدام واحد وأسعارهم مناسبه جدا`
  },

];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 px-4 max-w-7xl mx-auto">
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          عملاءنا السعداء
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 0.4)}
          className="text-gray-600"
        >
          اشياء تجعلنا الافضل
        </motion.p>
      </motion.div>

      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="relative"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id} className='h-full md:py-12 py-4'>
              <motion.div 
                variants={fadeIn('up', 0.3 * (index + 1))}
                className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col"
              >
                <motion.div 
                  variants={fadeIn('down', 0.4 * (index + 1))}
                  className="w-24 h-24 mx-auto mb-4"
                >
                  <motion.img
                    variants={fadeIn('up', 0.5 * (index + 1))}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </motion.div>
                <motion.div 
                  variants={fadeIn('up', 0.4 * (index + 1))}
                  className="flex justify-center mb-2"
                >
                  {[...Array(5)].map((_, starIndex) => (
                    <motion.span 
                      key={starIndex} 
                      variants={fadeIn('up', 0.1 * starIndex)}
                      className="text-blue-600"
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>
                <motion.h3 
                  variants={textVariant(0.3)}
                  className="font-semibold text-xl mb-3"
                >
                  {testimonial.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn('up', 0.6 * (index + 1))}
                  className="text-gray-600"
                >
                  {testimonial.text}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <motion.div 
          variants={fadeIn('up', 0.7)}
          className="flex justify-center gap-4 mt-8"
        >
          <motion.button 
            variants={fadeIn('right', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronRight className="w-6 h-6" />
          </motion.button>
          <motion.button 
            variants={fadeIn('left', 0.8)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer transition-colors"
          >
            <BsChevronLeft className="w-6 h-6" />
          </motion.button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
