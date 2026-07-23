import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

// Floating soft-glow orbs for depth
const orbs = [
  { x: '8%',  y: '15%', size: 420, color: 'rgba(134,239,172,0.18)', duration: 22 },
  { x: '65%', y: '55%', size: 360, color: 'rgba(96,165,250,0.13)',  duration: 28 },
  { x: '35%', y: '75%', size: 300, color: 'rgba(167,243,208,0.15)', duration: 19 },
  { x: '80%', y: '10%', size: 260, color: 'rgba(147,197,253,0.12)', duration: 24 },
]

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

function AnimatedCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    const init = () => {
      const count = Math.floor((canvas.width * canvas.height) / 14000)
      particles = Array.from({ length: count }, () => ({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        vx:      (Math.random() - 0.5) * 0.4,
        vy:      (Math.random() - 0.5) * 0.4,
        radius:  1.5 + Math.random() * 2,
        opacity: 0.25 + Math.random() * 0.35,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Connect nearby particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = 130

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(74,168,122,${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(74,168,122,${p.opacity})`
        ctx.fill()
      }

      // Move
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      }

      animId = requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
    />
  )
}

export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#f0fdf4]"
      aria-hidden="true"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16,185,129,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,1) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Animated particle canvas */}
      <AnimatedCanvas />

      {/* Soft glow orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width:      orb.size,
            height:     orb.size,
            left:       orb.x,
            top:        orb.y,
            background: orb.color,
          }}
          animate={{
            x:     [0, 35, -25, 0],
            y:     [0, -40,  25, 0],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{
            duration:   orb.duration,
            repeat:     Infinity,
            ease:       'easeInOut',
          }}
        />
      ))}

      {/* Drifting diagonal accent lines */}
      <motion.div
        className="absolute -left-1/4 top-1/4 h-px w-[150%] bg-gradient-to-r from-transparent via-emerald-300/20 to-transparent"
        animate={{ x: ['-8%', '8%'] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-1/4 top-2/3 h-px w-[150%] bg-gradient-to-r from-transparent via-green-200/25 to-transparent"
        animate={{ x: ['8%', '-8%'] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      />

      {/* Corner accent blobs */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-100/40 blur-2xl" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-green-100/35 blur-2xl" />
    </div>
  )
}
