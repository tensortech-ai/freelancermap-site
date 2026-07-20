import { motion } from 'framer-motion'
import { FaFileLines, FaPaintbrush, FaUser } from 'react-icons/fa6'
import { navItems, type NavSection } from '../data/resume'

interface NavbarProps {
  activeSection: NavSection
  onNavigate: (section: NavSection) => void
  variant?: 'sidebar' | 'inline'
}

const icons: Record<NavSection, typeof FaUser> = {
  about: FaUser,
  resume: FaFileLines,
  works: FaPaintbrush,
}

export function Navbar({ activeSection, onNavigate, variant = 'inline' }: NavbarProps) {
  const isSidebar = variant === 'sidebar'

  return (
    <header
      className={`shrink-0 bg-white ${
        isSidebar
          ? 'fixed left-3 top-1/2 z-30 w-[64px] -translate-y-1/2 rounded-lg shadow-[0_0_25px_rgba(0,0,0,0.08)] sm:left-4 sm:w-[72px]'
          : 'flex w-[64px] items-center justify-center self-center border-r border-[#eee] sm:w-[72px]'
      }`}
    >
      <nav className={`flex h-full w-full ${isSidebar ? '' : 'items-center justify-center'}`}>
        <ul className="flex w-full flex-col items-center justify-center py-2">
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
                  className={`group flex w-full flex-col items-center px-2 py-3 text-xs font-medium uppercase transition-colors ${
                    isActive ? 'text-accent' : 'text-[#323232] hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="mb-1 h-[28px] w-10 text-lg leading-[28px] sm:text-xl" />
                  <span className="text-[10px] sm:text-[11px]">{item.label}</span>
                </motion.button>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="pointer-events-none absolute inset-1 -z-10 rounded-md bg-gradient-to-b from-[#7ec8e3]/20 to-transparent"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
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
