import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

// قائمة الخدمات المتاحة
const allServices = [
  { id: 1, name: 'تصميم موقع', price: 500 },
  { id: 2, name: 'برمجة تطبيق', price: 1200 },
  { id: 3, name: 'كتابة محتوى', price: 300 },
  { id: 4, name: 'استضافة سنوية', price: 150 },
];

export default function PricingSection() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [quantities, setQuantities] = useState({});

  // إضافة خدمة مختارة
  const handleAddService = (serviceId) => {
    const service = allServices.find(s => s.id === serviceId);
  
    // إذا كانت الخدمة موجودة بالفعل، يتم إزالتها
    if (selectedServices.some(s => s.id === serviceId)) {
      setSelectedServices(selectedServices.filter(s => s.id !== serviceId));
    } else {
      // إذا لم تكن موجودة، يتم إضافتها
      setSelectedServices([...selectedServices, service]);
    }
  };

  // تحديث الكمية
  const handleQuantityChange = (serviceId, quantity) => {
    setQuantities(prev => ({
      ...prev,
      [serviceId]: Number(quantity),
    }));
  };

  // حساب المجموع
  const total = selectedServices.reduce((sum, service) => {
    const quantity = quantities[service.id] || 0;
    return sum + (service.price * quantity);
  }, 0);

  return (
    <section id="pricing" className="py-16 px-4 max-w-7xl mx-auto">
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeIn('up', 0.2)}
      className="text-center mb-12 flex flex-col justify-center items-center"
    >
                <motion.h2 
          variants={textVariant(0.2)}
          className="text-3xl md:text-4xl font-bold mb-16"
        >
           الأسعار التقريبية
        </motion.h2>

      <motion.h2
        variants={textVariant(0.3)}
        className="text-2xl font-bold mb-6 "
      >
        اختر الخدمات المطلوبة
      </motion.h2>

      {/* عرض الخدمات للاختيار منها */}
      <motion.div className="mb-4">
        <motion.div variants={fadeIn('up', 0.4)} className="w-full flex gap-2">
          {allServices.map(service => (
            <motion.div
              key={service.id}
              onClick={() => handleAddService(service.id)}
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              className={`border-red-500 border-2  rounded-full p-2 cursor-pointer px-4 ${
                selectedServices.some(s => s.id === service.id)
                  ? 'bg-red-500 text-white'
                  : null
              }`}
            >
              {service.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* عرض الخدمات التي اختارها المستخدم */}
      {selectedServices.length > 0 && (
        <div
          
          className="mb-6"
        >
          {selectedServices.map(service => (
            <div
              key={service.id}
              
              className="flex items-center justify-between mb-4 border-2 border-red-500 rounded-xl p-1 gap-2"
            >
              <div>
                <h3
                  
                  className="font-semibold"
                >
                  {service.name}
                </h3>
                <p
                  
                  className="text-sm text-gray-500"
                >
                  {service.price} ريال للخدمة
                </p>
              </div>
              <div
                
                className="flex items-center"
              >
                <input
                  
                  type="number"
                  min="0"
                  className="border-red-500 border rounded p-2 w-20 "
                  value={quantities[service.id] || ''}
                  onChange={(e) => handleQuantityChange(service.id, e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* عرض المجموع الكلي */}
      <motion.div
        className="mt-6 text-xl font-bold"
        variants={fadeIn('up', 0.2)}
      >
        المجموع الكلي: {total} ريال
      </motion.div>

      {/* زر الحجز */}
      <motion.div
        variants={fadeIn('up', 0.5)}
        className="text-center mt-12"
      >
        <motion.p
          variants={textVariant(0.6)}
          className="text-xl text-gray-600 mb-4"
        >
          جاهز للحجز؟
        </motion.p>
        <motion.a
          variants={fadeIn('up', 0.7)}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors cursor-pointer"
          href="tel:+966563309090"
        >
          أتصل الآن
        </motion.a>
      </motion.div>
    </motion.div> 
    </section>
  );
}
