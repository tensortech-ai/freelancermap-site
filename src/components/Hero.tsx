import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { resumeData } from '../data/resume'
import { useTypingEffect } from '../hooks/useMediaQuery'

const profileImage = '/images/profile.png'

export function Hero() {
  const typedTitle = useTypingEffect(resumeData.titles)

  return (
    <motion.aside
      className="relative flex w-full min-w-0 flex-col overflow-hidden bg-white lg:h-full lg:w-[420px] lg:max-w-[420px] lg:shrink-0 xl:w-[480px] xl:max-w-[480px]"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Profile photo area */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden sm:h-[260px] lg:h-[280px] xl:h-[320px]">
        <div
          className="pointer-events-none absolute left-[-25%] bottom-[-30%] z-[1] h-[70%] w-full rotate-[-8deg] bg-[#7ec8e3]/20"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[-25%] bottom-[-30%] z-[1] h-[70%] w-full rotate-[8deg] bg-[#7ec8e3]/20"
          aria-hidden
        />
        <motion.img
          src={profileImage}
          alt={resumeData.name}
          className="relative z-[2] h-full w-full object-cover object-[center_20%]"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-16 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-2 text-center sm:px-10 sm:pb-12 lg:px-[50px]">
        <div className="relative z-10 flex flex-col items-center">
          <motion.h1
            className="text-2xl font-semibold text-[#323232] sm:text-3xl lg:text-[34px]"
            style={{
              textShadow: '0 4px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.18)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {resumeData.name}
          </motion.h1>

          <motion.div
            className="mt-4 min-h-[28px] text-lg text-[#323232] sm:mt-5 sm:text-xl lg:text-2xl"
            style={{
              textShadow: '0 4px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.18)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {typedTitle}
            <span className="ml-0.5 inline-block animate-pulse text-accent">|</span>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center gap-2 text-sm text-[#323232] sm:mt-8 sm:text-base"
            style={{
              textShadow: '0 4px 4px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.18)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <MapPin className="h-4 w-4 text-accent" />
            <span>{resumeData.location}</span>
          </motion.div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#7ec8e3]/25 to-transparent"
        aria-hidden
      />
    </motion.aside>
  )
}
