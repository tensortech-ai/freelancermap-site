import { FaGraduationCap } from 'react-icons/fa6'
import { resumeData } from '../data/resume'
import { ScrollReveal } from './ui/ScrollReveal'

export function Education() {
  const { education } = resumeData

  return (
    <ScrollReveal delay={0.2}>
      <div className="mb-8 border-b border-[#eee] pb-4">
        <div className="mb-6 flex items-center gap-3 border-b border-[#eee] pb-3">
          <FaGraduationCap className="text-lg text-accent" />
          <span className="text-sm font-medium lowercase text-[#323232]">education</span>
        </div>

        <article className="border-b border-[#eee] pb-6">
          <time className="text-sm font-medium text-accent">{education.date}</time>
          <h3 className="mt-1 text-base font-semibold text-[#323232]">{education.institution}</h3>
          <p className="text-sm text-[#646464]">{education.degree}</p>
          <p className="mt-1 text-xs text-[#999]">
            {education.location} · {education.detail}
          </p>
        </article>
      </div>
    </ScrollReveal>
  )
}
