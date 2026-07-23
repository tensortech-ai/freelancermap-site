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

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {resumeData.projects.map((project, index) => (
          <ScrollReveal key={project.url} delay={0.05 * index}>
            <motion.article
              className="group overflow-hidden rounded-lg border border-[#eee] bg-white shadow-sm transition-shadow hover:shadow-md"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline"
              >
                <div className="relative overflow-hidden bg-[#f5f5f5]">
                  <ProjectImage
                    title={project.title}
                    url={project.url}
                    image={project.image}
                    className="h-[220px]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 to-black/0 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ExternalLink className="h-10 w-10 translate-y-4 text-white drop-shadow-lg transition-transform group-hover:translate-y-0" />
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="mb-2 text-base font-semibold text-[#323232] transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  
                  {project.description && (
                    <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-[#646464]">
                      {project.description}
                    </p>
                  )}
                  
                  {project.techs && project.techs.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {!project.description && !project.techs && (
                    <p className="truncate text-xs text-[#999]">
                      {project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </p>
                  )}
                </div>
              </a>
            </motion.article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
