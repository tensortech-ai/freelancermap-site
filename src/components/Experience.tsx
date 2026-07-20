import { FaBriefcase } from 'react-icons/fa6'
import { resumeData } from '../data/resume'
import { ScrollReveal, SectionTitle } from './ui/ScrollReveal'

export function Experience() {
  return (
    <div className="content-resume">
      <ScrollReveal>
        <SectionTitle>Resume</SectionTitle>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <div className="mb-8 border-b border-[#eee] pb-4">
          <div className="mb-6 flex items-center gap-3 border-b border-[#eee] pb-3">
            <FaBriefcase className="text-lg text-accent" />
            <span className="text-sm font-medium lowercase text-[#323232]">experience</span>
          </div>

          <div className="space-y-8">
            {resumeData.experience.map((item, index) => (
              <ScrollReveal key={`${item.company}-${item.date}`} delay={0.05 * index}>
                <article className="group border-b border-[#eee] pb-6 last:border-0">
                  <div className="mb-1 flex flex-wrap items-start gap-x-4 gap-y-1">
                    <time className="min-w-[140px] text-sm font-medium text-accent">
                      {item.date}
                    </time>
                  </div>
                  <h3 className="text-base font-semibold text-[#323232]">{item.role}</h3>
                  <p className="mb-1 text-sm font-medium text-[#646464]">
                    {item.company}
                    <span className="ml-2 text-xs text-[#999]">({item.location})</span>
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-[#646464]">{item.description}</p>
                  <ul className="space-y-2 pl-4">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-3 text-sm leading-relaxed text-[#646464] before:absolute before:left-0 before:content-['•']"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
