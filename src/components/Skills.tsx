import { FaCode } from 'react-icons/fa6'
import { techStack } from '../data/techIcons'
import { CircleProgress, ScrollReveal, SectionTitle } from './ui/ScrollReveal'

export function Skills() {
  return (
    <div className="content-skills mt-10">
      <ScrollReveal delay={0.1}>
        <SectionTitle>Skill</SectionTitle>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <div className="border-b border-[#eee] pb-6">
          <div className="mb-6 flex items-center gap-3 border-b border-[#eee] pb-3">
            <FaCode className="text-lg text-accent" />
            <span className="text-sm font-medium capitalize text-[#323232]">Coding</span>
          </div>
          <ul className="grid grid-cols-2 gap-4 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {techStack.map((skill) => (
              <CircleProgress
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                icon={skill.icon}
                color={skill.color}
              />
            ))}
          </ul>
        </div>
      </ScrollReveal>
    </div>
  )
}
