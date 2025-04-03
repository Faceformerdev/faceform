"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import avatar1 from "@/assets/marion.jpg";
import avatar2 from "@/assets/cornelia.jpg";
import avatar3 from "@/assets/carsten.jpg";
import avatar4 from "@/assets/jutta.jpg";

interface Testimonial {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Seit 18 Jahren empfehle ich meinen Patienten den FaceFormer. Alle Störungen die Sie im Infoblatt aufzählen haben sich bei den Patienten tatsächlich überwunden.",
    imageSrc: avatar1.src,
    name: "Marion Haberstroh",
    username: "Logopädin–Logopädische Praxis Haberstroh",
  },
  {
    text: "Wird von unseren Patienten sehr positiv erlebt. ",
    imageSrc: avatar2.src,
    name: "Dr. Cornelia Maier",
    username: "Kieferorthopädin–Praxis für ganzheitliche Kieferorthopädie",
  },
  {
    text: "Ein effektiver Teil unserer Behandlung bei Kiefergelenksstörungen. FaceFormer Training konnte vielen unserer Patienten helfen.",
    imageSrc: avatar3.src,
    name: "Carsten Goedde-Krupp",
    username: "Osteopath–OsteoK",
  },
  {
    text: "Das FaceFormer Trainingsprogramm ist leicht verständlich. Schon nach wenigen Wochen konsequentem Üben berichten meine Patienten von Verbesserungen ihrer Beschwerden.",
    imageSrc: avatar4.src,
    name: "Jutta Chibidziura-Priesching",
    username: "Logopädin",
  },
];

export const Testimonials: React.FC = () => {
  // Make sure currentIndex is always valid by using a safe default and constraining it
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Ensure currentIndex is always valid
  const safeCurrentIndex = currentIndex >= 0 && currentIndex < testimonials.length ? currentIndex : 0;
  
  // Now we're sure that currentTestimonial will never be undefined
  const currentTestimonial = testimonials[safeCurrentIndex] || {
    text: "",
    imageSrc: "",
    name: "Unknown",
    username: "",
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToTestimonial = (index: number): void => {
    if (index >= 0 && index < testimonials.length) {
      setCurrentIndex(index);
      setAutoplay(false);
    }
  };

  useEffect(() => {
    if (autoplay) return;

    const timeout = setTimeout(() => {
      setAutoplay(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [autoplay]);

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoplay(false);
  };

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoplay(false);
  };

  return (
    <section className="py-8 bg-gradient-to-b from-gray-30 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FaceFormer® Feedback
          </motion.h2>
          <motion.div 
            className="h-1 w-16 bg-[#81c642] mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-5 h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={safeCurrentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 relative"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <motion.div 
                    className="w-20 h-20 rounded-full overflow-hidden border-4 border-[#81c642]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image 
                      src={currentTestimonial.imageSrc} 
                      alt={currentTestimonial.name} 
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="flex-1">
                  <motion.p 
                    className="text-gray-700 italic text-lg mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    &quot;{currentTestimonial.text}&quot;
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <p className="font-bold text-gray-900">{currentTestimonial.name}</p>
                    <p className="text-[#81c642] text-sm">{currentTestimonial.username}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center flex-wrap gap-2">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`relative rounded-full overflow-hidden border-2 transition-all duration-300 ${
                safeCurrentIndex === index ? 'border-[#81c642] scale-110 z-10' : 'border-gray-200'
              }`}
              whileHover={{ scale: 1.1, zIndex: 20 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image 
                src={testimonial.imageSrc} 
                alt={testimonial.name} 
                width={40}
                height={40}
                className="w-10 h-10 object-cover"
              />
              {hoveredIndex === index && (
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Progress kram */}
        <div className="flex justify-center mt-5 space-x-2">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full ${safeCurrentIndex === index ? 'bg-[#81c642] w-6' : 'bg-gray-300 w-2'}`}
              initial={false}
              animate={{ 
                width: safeCurrentIndex === index ? 24 : 8,
                backgroundColor: safeCurrentIndex === index ? '#81c642' : '#D1D5DB' 
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;