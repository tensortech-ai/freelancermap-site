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
  initial: {
    opacity: 0,
    x: -120,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const },
  },
  exit: {
    opacity: 0,
    x: -120,
    transition: { duration: 0.35, ease: [0.43, 0.13, 0.23, 0.96] as const },
  },
}

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

  const handleNavigate = useCallback(
    (section: NavSection) => {
      setActiveSection(section)

      if (!isLargeScreen) {
        requestAnimationFrame(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    },
    [isLargeScreen],
  )

  return (
    <div className="relative isolate min-h-[100dvh] w-full">
      <Background />
      <Preloader loading={loading} />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-[1280px] flex-col items-stretch justify-start p-2 pl-[64px] pt-3 sm:p-3 sm:pl-[72px] sm:pt-4 md:p-4 md:pl-[80px] lg:flex-row lg:items-center lg:justify-center lg:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {/* Navbar positioned left of Hero on desktop */}
        <div className="hidden lg:mr-4 lg:flex lg:items-center">
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
        </div>

        {/* Navbar fixed on mobile/tablet */}
        <div className="lg:hidden">
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} isMobile />
        </div>

        {/* Hero card — consistent height, 12px taller on desktop */}
        <Hero />

        {/* Content pages card — animate entire card, not just content */}
        {isLargeScreen ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative -ml-2 flex min-h-0 w-full flex-1 overflow-hidden rounded-lg bg-white shadow-[0_0_40px_rgba(0,0,0,0.1)] lg:h-[542px] lg:max-h-[542px]"
            >
              <div className="h-full w-full overflow-y-auto overflow-x-hidden px-5 py-8 sm:px-8">
                <SectionContent section={activeSection} />
                <Footer />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="mt-4 flex w-full flex-1 flex-col pb-4 sm:mt-5 md:mt-6">
            <div className="space-y-4">
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
              <div className="px-1">
                <Footer />
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

function MobileCard({ children, id }: { children: React.ReactNode; id: string }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-3 overflow-hidden rounded-lg bg-white p-3 shadow-[0_0_15px_rgba(0,0,0,0.06)] sm:scroll-mt-4 sm:p-4 md:p-6"
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
