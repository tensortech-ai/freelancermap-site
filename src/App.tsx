import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import {
  About,
  Background,
  Education,
  Experience,
  Footer,
  Hero,
  Navbar,
  Preloader,
  Projects,
  Skills,
} from './components'
import type { NavSection } from './data/resume'
import { useMediaQuery, usePreloader } from './hooks/useMediaQuery'

const cardVariants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 60 : -60,
    scale: 0.98,
  }),
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -60 : 60,
    scale: 0.98,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

const sectionOrder: NavSection[] = ['about', 'resume', 'works']

function SectionContent({ section }: { section: NavSection }) {
  switch (section) {
    case 'about':
      return (
        <>
          <About />
          <Skills />
        </>
      )
    case 'resume':
      return (
        <>
          <Experience />
          <Education />
        </>
      )
    case 'works':
      return <Projects />
    default:
      return null
  }
}

function App() {
  const loading = usePreloader()
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const [activeSection, setActiveSection] = useState<NavSection>('about')
  const [direction, setDirection] = useState(0)

  const handleNavigate = useCallback(
    (section: NavSection) => {
      const currentIndex = sectionOrder.indexOf(activeSection)
      const nextIndex = sectionOrder.indexOf(section)
      setDirection(nextIndex > currentIndex ? 1 : -1)
      setActiveSection(section)

      if (!isLargeScreen) {
        requestAnimationFrame(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    },
    [activeSection, isLargeScreen],
  )

  return (
    <div className="relative isolate min-h-[100dvh] w-full">
      <Background />
      <Preloader loading={loading} />

      {/* Mobile / tablet: fixed sidebar nav */}
      {!isLargeScreen && (
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} variant="sidebar" />
      )}

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1280px] items-center justify-center p-3 pt-4 sm:p-4 lg:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <div className="flex w-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] lg:max-h-[90dvh] lg:min-h-[640px] lg:flex-row lg:items-stretch">
          {isLargeScreen && (
            <Navbar activeSection={activeSection} onNavigate={handleNavigate} variant="inline" />
          )}
          <Hero />

          {isLargeScreen ? (
            <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.main
                  key={activeSection}
                  custom={direction}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="absolute inset-0 overflow-hidden bg-white"
                >
                  <div className="h-full overflow-y-auto overflow-x-hidden px-5 py-8 sm:px-8">
                    <SectionContent section={activeSection} />
                    <Footer />
                  </div>
                </motion.main>
              </AnimatePresence>
            </div>
          ) : (
            <div className="space-y-4 border-t border-[#eee] p-4 pl-[76px] sm:pl-[84px] sm:pr-5">
              <MobileCard id="about">
                <About />
                <Skills />
              </MobileCard>
              <MobileCard id="resume">
                <Experience />
                <Education />
              </MobileCard>
              <MobileCard id="works">
                <Projects />
              </MobileCard>
              <Footer />
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

function MobileCard({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-4 overflow-hidden rounded-lg bg-white p-4 shadow-[0_0_15px_rgba(0,0,0,0.06)] sm:p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  )
}

export default App
