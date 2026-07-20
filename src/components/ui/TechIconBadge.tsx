import { useState } from 'react'
import type { IconType } from 'react-icons'
import { getProjectScreenshotFallback } from '../../data/resume'

interface ProjectImageProps {
  title: string
  url: string
  image: string
  className?: string
}

export function ProjectImage({ title, url, image, className = '' }: ProjectImageProps) {
  const sources = [image, getProjectScreenshotFallback(url)]
  const [sourceIndex, setSourceIndex] = useState(0)

  return (
    <img
      src={sources[sourceIndex]}
      alt={`${title} preview`}
      loading="lazy"
      className={`h-[180px] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${className}`}
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((prev) => prev + 1)
        }
      }}
    />
  )
}

interface TechIconBadgeProps {
  name: string
  icon: IconType
  color?: string
  percentage?: number
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: { wrap: 'h-12 w-12', icon: 'text-xl', text: 'text-[10px]' },
  md: { wrap: 'h-16 w-16', icon: 'text-2xl', text: 'text-xs' },
  lg: { wrap: 'h-[90px] w-[90px]', icon: 'text-3xl', text: 'text-xs' },
}

export function TechIconBadge({
  name,
  icon: Icon,
  color = '#78cc6d',
  percentage,
  size = 'md',
}: TechIconBadgeProps) {
  const sizes = sizeClasses[size]

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div
        className={`${sizes.wrap} flex items-center justify-center rounded-full border border-[#eee] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-transform hover:scale-110`}
        title={name}
      >
        <Icon className={sizes.icon} style={{ color }} />
      </div>
      <span className={`max-w-[100px] leading-tight text-[#646464] ${sizes.text}`}>{name}</span>
      {percentage !== undefined && (
        <span className="text-[10px] font-medium text-accent">{percentage}%</span>
      )}
    </div>
  )
}
