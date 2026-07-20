import { motion } from 'framer-motion'

const bubbles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 20 + (i % 4) * 15,
  left: `${(i * 8.5) % 100}%`,
  delay: i * 1.5,
  duration: 18 + (i % 5) * 4,
}))

const orbs = [
  { x: '10%', y: '20%', size: 300, duration: 20 },
  { x: '70%', y: '60%', size: 250, duration: 25 },
  { x: '40%', y: '80%', size: 200, duration: 18 },
]

export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#7ec8e3] via-[#a8d8f0] to-[#c5e8f7]"
      aria-hidden="true"
    >
      {/* Slow gradient shift */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#6bb6ff]/30 via-transparent to-[#b8e0ff]/40"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full bg-white/20 blur-3xl"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Rising bubbles */}
      <ul className="absolute inset-0 overflow-hidden">
        {bubbles.map((b) => (
          <motion.li
            key={b.id}
            className="absolute bottom-[-80px] block rounded-full bg-white/25 backdrop-blur-sm"
            style={{ left: b.left, width: b.size, height: b.size }}
            animate={{
              y: [0, -1100],
              x: [0, Math.sin(b.id) * 60, Math.cos(b.id) * 40, 0],
              rotate: [0, 360],
              opacity: [0, 0.6, 0.4, 0],
            }}
            transition={{
              duration: b.duration,
              repeat: Infinity,
              delay: b.delay,
              ease: 'linear',
            }}
          />
        ))}
      </ul>

      {/* Drifting wave lines */}
      <motion.div
        className="absolute -left-1/4 top-1/3 h-px w-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ['-10%', '10%'] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-1/4 top-2/3 h-px w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['10%', '-10%'] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
    </div>
  )
}
