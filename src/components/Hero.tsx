import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { resumeData } from '../data/resume'
import { useTypingEffect } from '../hooks/useMediaQuery'

const profileImage = '/images/profile.png'

export function Hero() {
  const typedTitle = useTypingEffect(resumeData.titles)

  return (
    <motion.aside
      className="relative border-[1px] border-[wheat] z-10 flex w-full min-w-0 flex-col overflow-hidden rounded-lg bg-white shadow-[-12px_-12px_2px_rgba(255,255,255,0.9)] lg:w-[300px] lg:max-w-[300px] lg:shrink-0 xl:w-[340px] xl:max-w-[340px]"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Profile photo — consistent height with smart cropping */}
      <div className="relative h-[400px] w-full shrink-0 overflow-hidden sm:h-[420px] lg:h-[440px]">
        <motion.img
          src={profileImage}
          alt={resumeData.name}
          className="h-full w-full object-cover object-[center_30%]"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        />
      </div>

      {/* Name / title / location */}
      <div className="flex shrink-0 flex-col items-center gap-2 border-t border-[#f0f0f0] bg-white px-4 py-5 text-center sm:px-6 sm:py-6">
        <motion.h1
          className="text-lg font-semibold text-[#323232] sm:text-xl lg:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.55 }}
        >
          {resumeData.name}
        </motion.h1>

        <motion.div
          className="min-h-[20px] text-sm font-medium text-accent sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          {typedTitle}
          <span className="ml-0.5 inline-block animate-pulse text-accent">|</span>
        </motion.div>

        <motion.div
          className="mt-1 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#888]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <MapPin className="h-3.5 w-3.5 text-accent" />
          <span>{resumeData.location}</span>
        </motion.div>
      </div>
    </motion.aside>
  )
}
