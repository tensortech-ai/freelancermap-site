import { motion } from 'framer-motion'
import { FaFileLines, FaPaintbrush, FaUser } from 'react-icons/fa6'
import { navItems, type NavSection } from '../data/resume'

interface NavbarProps {
  activeSection: NavSection
  onNavigate: (section: NavSection) => void
  isMobile?: boolean
}

const icons: Record<NavSection, typeof FaUser> = {
  about: FaUser,
  resume: FaFileLines,
  works: FaPaintbrush,
}

export function Navbar({ activeSection, onNavigate, isMobile = false }: NavbarProps) {
  return (
    <header
      className={`z-30 rounded-xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.12)] ${
        isMobile
          ? 'fixed left-2 top-1/2 w-[52px] -translate-y-1/2 sm:left-3 sm:w-[56px] md:left-4 md:w-[60px]'
          : 'relative w-[60px]'
      }`}
    >
      <nav>
        <ul className="flex w-full flex-col items-center justify-center py-2 sm:py-3">
          {navItems.map((item) => {
            const Icon = icons[item.id]
            const isActive = activeSection === item.id

            return (
              <li key={item.id} className="relative w-full">
                <motion.button
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  aria-label={item.label}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex w-full flex-col items-center gap-0.5 px-1.5 py-2 text-xs font-medium uppercase transition-colors sm:gap-1 sm:px-2 sm:py-2.5 ${
                    isActive ? 'text-accent' : 'text-[#666] hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]" />
                  <span className="text-[8px] font-semibold tracking-wide sm:text-[9px] md:text-[10px]">{item.label}</span>
                </motion.button>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="pointer-events-none absolute inset-1 -z-10 rounded-lg bg-gradient-to-b from-accent/10 to-transparent"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
