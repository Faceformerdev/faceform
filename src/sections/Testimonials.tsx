'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
// Assuming your imports are correct and avatar images work
import avatar1 from '@/assets/marion.jpg'
import avatar2 from '@/assets/cornelia.jpg'
import avatar3 from '@/assets/carsten.jpg'
import avatar4 from '@/assets/jutta.jpg'

interface Testimonial {
  text: string
  imageSrc: string // Use StaticImageData or string depending on import type
  name: string
  username: string
}

// It's safer to type the image sources if possible,
// otherwise ensure they are correctly resolved strings at runtime.
const testimonials: Testimonial[] = [
  {
    text: 'Seit 18 Jahren empfehle ich meinen Patienten den FaceFormer. Alle Störungen die Sie im Infoblatt aufzählen haben sich bei den Patienten tatsächlich überwunden.',
    // Use .src if Image requires a string URL, or just avatar1 if it handles StaticImageData
    imageSrc: avatar1.src,
    name: 'Marion Haberstroh',
    username: 'Logopädin–Logopädische Praxis Haberstroh',
  },
  {
    text: 'Wird von unseren Patienten sehr positiv erlebt. ',
    imageSrc: avatar2.src,
    name: 'Dr. Cornelia Maier',
    username: 'Kieferorthopädin–Praxis für ganzheitliche Kieferorthopädie',
  },
  {
    text: 'Ein effektiver Teil unserer Behandlung bei Kiefergelenksstörungen. FaceFormer Training konnte vielen unserer Patienten helfen.',
    imageSrc: avatar3.src,
    name: 'Carsten Goedde-Krupp',
    username: 'Osteopath–OsteoK',
  },
  {
    text: 'Das FaceFormer Trainingsprogramm ist leicht verständlich. Schon nach wenigen Wochen konsequentem Üben berichten meine Patienten von Verbesserungen ihrer Beschwerden.',
    imageSrc: avatar4.src,
    name: 'Jutta Chibidziura-Priesching',
    username: 'Logopädin',
  },
]

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [autoplay, setAutoplay] = useState<boolean>(true)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Ensure currentIndex is always valid
  const safeCurrentIndex =
    currentIndex >= 0 && currentIndex < testimonials.length ? currentIndex : 0

  // Get current testimonial safely
  const currentTestimonial = testimonials[safeCurrentIndex]

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [autoplay])

  const goToTestimonial = (index: number): void => {
    if (index >= 0 && index < testimonials.length) {
      setCurrentIndex(index)
      setAutoplay(false)
    }
  }

  // Resume autoplay after interaction
  useEffect(() => {
    if (autoplay) return
    const timeout = setTimeout(() => {
      setAutoplay(true)
    }, 10000) // Resume after 10 seconds of inactivity
    return () => clearTimeout(timeout)
  }, [autoplay])

  const handleNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setAutoplay(false)
  }

  const handlePrev = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setAutoplay(false)
  }

  return (
    <section className="py-8 bg-gradient-to-b from-gray-30 to-white overflow-hidden">
      {/* Increased horizontal padding on mobile */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Featured Testimonial - Removed h-64, added min-h-[16rem] (optional), increased mb */}
        {/* Added more padding inside on mobile (px-4 sm:px-8) */}
        <div className="relative mb-10 md:mb-8">
          {' '}
          {/* Increased bottom margin */}
          <AnimatePresence mode="wait">
            <motion.div
              key={safeCurrentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              // Added more padding inside, especially horizontal on mobile
              // min-h-[16rem] or similar can be added if you want a minimum size, but auto is often better
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 relative min-h-[16rem] flex" // Use flex to ensure children align well
            >
              {/* Adjusted flex direction and alignment for better responsiveness */}
              <div className="flex flex-col md:flex-row items-center w-full">
                {/* Avatar container */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-[#81c642]"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      src={currentTestimonial?.imageSrc ?? ''}
                      alt={currentTestimonial?.name ?? 'Default Name'}
                      // Use layout="responsive" or fixed sizes depending on need
                      // For fixed avatar, width/height are fine
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                {/* Text content container */}
                <div className="flex-1 text-center md:text-left">
                  <motion.p
                    className="text-gray-700 italic text-base sm:text-lg mb-4" // Slightly smaller base text on mobile
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {currentTestimonial?.text ?? 'No testimonial available'}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {currentTestimonial && (
                      <p className="font-bold text-gray-900">{currentTestimonial.name}</p>
                    )}
                    {currentTestimonial && (
                      <p className="text-[#81c642] text-sm">{currentTestimonial.username}</p>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          {/* Navigation arrows - Adjust positioning slightly */}
          {/* Placed arrows further out on smallest screens (left-1/right-1), standard on sm+ */}
          {/* Adjusted vertical centering slightly if needed */}
        </div>

        {/* Thumbnails */}
        {/* Added margin-bottom to separate from progress dots */}
        <div className="flex justify-center flex-wrap gap-2 mb-6">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1} by ${testimonial.name}`}
              className={`relative rounded-full overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#81c642] focus:ring-offset-2 ${
                safeCurrentIndex === index
                  ? 'border-[#81c642] scale-110 z-10'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
              whileHover={{ scale: 1.15, zIndex: 20 }} // Increased hover scale slightly
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ width: '40px', height: '40px' }} // Explicit size for button
            >
              <Image
                src={testimonial.imageSrc}
                alt={testimonial.name}
                width={40}
                height={40}
                className="w-full h-full object-cover" // Ensure image fills the button
              />
              {hoveredIndex === index && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center pointer-events-none" // Added pointer-events-none
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Number removed as it was small, hover effect is enough */}
                </motion.div>
              )}
              {/* Screen reader text for selected state */}
              {safeCurrentIndex === index && <span className="sr-only">(Current)</span>}
            </motion.button>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${safeCurrentIndex === index ? 'bg-[#81c642]' : 'bg-gray-300'}`}
              initial={false}
              animate={{
                width: safeCurrentIndex === index ? 24 : 8, // Animate width change
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }} // Smoother transition
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
