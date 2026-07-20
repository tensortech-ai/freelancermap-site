import { ScrollReveal, SectionTitle } from './ui/ScrollReveal'
import { resumeData } from '../data/resume'

export function About() {
  return (
    <div className="content-about">
      <ScrollReveal>
        <SectionTitle>About Me</SectionTitle>
        <div className="border-b border-[#eee] pb-6">
          <p className="text-base leading-[1.8] text-[#646464]">{resumeData.summary}</p>
        </div>
      </ScrollReveal>

      {/* <ScrollReveal delay={0.15} className="mt-8">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#323232]">
          Tech Stack
        </h3>
        <div className="grid grid-cols-4 gap-4 border-b border-[#eee] pb-8 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7">
          {techStack.map((tech, index) => (
            <FadeIn key={tech.name} delay={index * 0.03}>
              <TechIconBadge
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                size="sm"
              />
            </FadeIn>
          ))}
        </div>
      </ScrollReveal> */}
    </div>
  )
}
