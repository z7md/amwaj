import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const FeaturesSection = () => {
  const features = [
    {
      icon: "⭐", 
      title: "جودة عالية",
      description: "نقدم لك أفضل خدمات التنظيف باستخدام أدوات ومعدات حديثة."
    },
    {
      icon: "👨‍🔧",
      title: "فريق محترف", 
      description: "لدينا فريق من الخبراء المدربين على أعلى مستوى لضمان تحقيق أفضل النتائج"
    },
    {
      icon: "💲",
      title: "أسعار تنافسية",
      description: "نقدم لك خدمات تنظيف عالية الجودة بأسعار معقولة"
    },
    {
      icon: " 😊",
      title: "رضاء العملاء",
      description: "نضع رضا عملائنا في مقدمة أولوياتنا ونسعى دائمًا لتحسين خدماتنا."
    }
  ]

  return (
    <motion.section 
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 py-16"
      id="about"
    >
      <motion.div 
        variants={fadeIn('up', 0.3)}
        className="text-center mb-12"
      >
        <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl font-bold mb-4"
        >
          لماذا تختارنا
        </motion.h2>

      </motion.div>
      
      <motion.div 
        variants={fadeIn('up', 0.1)}
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={fadeIn('up', 0.2 )}
            className="flex flex-col items-center p-6 "
          >
            <motion.div 
              variants={fadeIn('down', 0.23)}
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center border-3 border-red-500" 
              // style={{ 
              //   backgroundColor: index === 0 ? '#F1EFFD' : 
              //                  index === 1 ? '#FFE7E7' : 
              //                  '#FFF3E4'
              // }}
            >
              <motion.div 
                variants={fadeIn('up', 0.22 )}
                className="text-3xl"
                aria-label={feature.icon}
              >
                {feature.icon}
              </motion.div>
            </motion.div>
            <motion.h3 
              variants={textVariant(0.12)}
              className="text-2xl font-medium mb-3"
            >
              {feature.title}
            </motion.h3>
            <motion.p 
              variants={fadeIn('up', 0.22 )}
              className="text-gray-500 text-center"
            >
              {feature.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>


    </motion.section>
  )
}

export default FeaturesSection