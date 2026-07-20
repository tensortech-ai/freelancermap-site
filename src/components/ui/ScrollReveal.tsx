import { motion, type HTMLMotionProps } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
  ...props
}: ScrollRevealProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface SectionTitleProps {
  children: string
}

export function SectionTitle({ children }: SectionTitleProps) {
  const firstLetter = children.charAt(0)
  const rest = children.slice(1)

  return (
    <h2 className="relative mb-[30px] min-h-[51px] text-xl font-semibold leading-[21px] text-[#323232]">
      <span className="text-accent">{firstLetter}</span>
      {rest}
      <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-accent/15 to-transparent" />
    </h2>
  )
}

interface ProgressBarProps {
  percentage: number
  variant?: 'bar' | 'dotted'
  animate?: boolean
  icon?: IconType
  label?: string
}

export function ProgressBar({
  percentage,
  variant = 'bar',
  animate = true,
  icon: Icon,
  label,
}: ProgressBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <div ref={ref}>
      {(label || Icon) && (
        <div className="mb-2 flex items-center gap-2 text-sm text-[#646464]">
          {Icon && <Icon className="text-base text-accent" />}
          {label && <span>{label}</span>}
        </div>
      )}
      <div
        className={`relative h-1.5 w-full overflow-hidden rounded-full bg-[#eee] ${
          variant === 'dotted' ? 'border border-dashed border-accent/30 bg-transparent' : ''
        }`}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-[#4da8da]"
          initial={{ width: 0 }}
          animate={{ width: animate && inView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </div>
  )
}

interface CircleProgressProps {
  name: string
  percentage: number
  icon: IconType
  color?: string
}

export function CircleProgress({ name, percentage, icon: Icon, color = '#78cc6d' }: CircleProgressProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.li
      ref={ref}
      className="flex flex-col items-center gap-2 text-center"
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-[90px] w-[90px]">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="2"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#4da8da"
            strokeWidth="2"
            strokeDasharray={`${inView ? percentage : 0}, 100`}
            initial={{ strokeDasharray: '0, 100' }}
            animate={{ strokeDasharray: inView ? `${percentage}, 100` : '0, 100' }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="text-xl" style={{ color }} />
          <span className="mt-0.5 text-[10px] font-medium text-accent">{percentage}%</span>
        </div>
      </div>
      <span className="max-w-[100px] text-xs leading-tight text-[#646464]">{name}</span>
    </motion.li>
  )
}
