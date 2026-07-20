import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { resumeData } from '../data/resume'
import { ScrollReveal } from './ui/ScrollReveal'
import { ProjectImage } from './ui/TechIconBadge'

export function Projects() {
  return (
    <div className="content-works">
      <ScrollReveal>
        <h2
          className="mb-[30px] text-2xl font-semibold text-[#323232]"
          style={{
            textShadow: '0 6px 5px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
          }}
        >
          Recent Works
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-0 border-t border-[#eee] sm:grid-cols-2">
        {resumeData.projects.map((project, index) => (
          <ScrollReveal key={project.url} delay={0.05 * index}>
            <motion.article
              className="group border-b border-r border-[#eee] p-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-sm no-underline"
              >
                <div className="relative overflow-hidden bg-[#f5f5f5]">
                  <ProjectImage
                    title={project.title}
                    url={project.url}
                    image={project.image}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                    <ExternalLink className="h-8 w-8 text-white drop-shadow-lg" />
                  </div>
                </div>
                <div className="pt-3">
                  <p className="text-sm font-medium text-[#323232] transition-colors group-hover:text-accent">
                    {project.title}
                  </p>
                  <p className="truncate text-xs text-[#999]">
                    {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                  </p>
                </div>
              </a>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
