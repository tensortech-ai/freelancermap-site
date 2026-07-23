import { FaCode, FaLanguage, FaLaptopCode } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import { techStack } from '../data/techIcons'
import { resumeData } from '../data/resume'
import { CircleProgress, ProgressBar, ScrollReveal, SectionTitle } from './ui/ScrollReveal'

const categoryIcons: Record<string, IconType> = {
  development: FaLaptopCode,
  language: FaLanguage,
  coding: FaCode,
}

export function Skills() {
  return (
    <div className="content-skills mt-10">
      <ScrollReveal delay={0.1}>
        <SectionTitle>Skill</SectionTitle>
      </ScrollReveal>

      {resumeData.skillCategories.map((category, index) => (
        <ScrollReveal key={category.title} delay={0.15 + index * 0.05}>
          <div className="border-b border-[#eee] pb-6">
            <div className="mb-6 flex items-center gap-3 border-b border-[#eee] pb-3">
              {(() => {
                const Icon = categoryIcons[category.icon] || FaCode
                return <Icon className="text-lg text-accent" />
              })()}
              <span className="text-sm font-medium capitalize text-[#323232]">{category.title}</span>
            </div>

            {category.variant === 'circles' && (
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
            )}

            {(category.variant === 'bar' || category.variant === 'dotted') && (
              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-[#323232]">{skill.name}</span>
                      <span className="text-xs font-medium text-accent">{skill.percentage}%</span>
                    </div>
                    <ProgressBar
                      percentage={skill.percentage}
                      variant={category.variant as 'bar' | 'dotted'}
                      animate={true}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
