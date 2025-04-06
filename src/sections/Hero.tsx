'use client'
import FaceFormerTrans from '@/assets/faceformertrans.png'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Hero = () => {
  return (
    <section className="w-full pt-1 pb-5 md:pt-8 md:pb-10 sm:pb-8 sm:pt-16   bg-[radial-gradient(ellipse_50%_100%_at_bottom_left,#3CB371a75,#EAEEFE_170%)]">
      <div className="container mx-auto px-4">
        <div className="flex pt-1 flex-col md:flex-row items-center relative gap-8 lg:gap-40">
          {' '}
          {/* Added gap here */}
          <div className="w-full md:w-1/2 lg:max-w-lg z-10">
            <div className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
              FaceFormer®
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#81c642] text-transparent bg-clip-text mt-8 md:mt-12">
              Gesundheit braucht Verstand
            </h1>
            <p className="text-lg md:text-xl text-black tracking-tight mt-6">Ursachen</p>
            <p className="text-lg md:text-xl text-black tracking-tight mt-2">
              • Behandeln • Korrigieren • Vorbeugen
            </p>
            <div className="flex gap-3 items-center mt-6 md:mt-8">
              <a href="https://drberndsen.de/collections/all">
                <button className="btn btn-primary">Shop</button>
              </a>
              <button className="btn btn-text gap-1">
                <Link href="/wissen">
                  <span>Mehr Erfahren</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-1 md:mt-0 flex justify-end ">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-full flex justify-center lg:right-15 md:justify-end ">
              <motion.img
                src={FaceFormerTrans.src}
                alt="FaceFormer"
                className="w-auto h-full object-contain max-w-full md:pr-0"
                animate={{ translateY: [-30, 30], rotate: 3 }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 6,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
