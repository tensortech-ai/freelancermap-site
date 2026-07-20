import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGraphql,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si'
import { FaAws, FaBrain, FaCode, FaDatabase } from 'react-icons/fa6'
import { TbBrandOpenai } from 'react-icons/tb'

export interface TechIconEntry {
  name: string
  percentage: number
  icon: IconType
  color?: string
}

export const techStack: TechIconEntry[] = [
  { name: 'Python', percentage: 95, icon: FaCode, color: '#3776AB' },
  { name: 'OpenAI / LLM', percentage: 95, icon: TbBrandOpenai, color: '#412991' },
  { name: 'LangChain', percentage: 90, icon: SiLangchain, color: '#1C3C3C' },
  { name: 'RAG Systems', percentage: 90, icon: FaBrain, color: '#4da8da' },
  { name: 'TensorFlow', percentage: 85, icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PyTorch', percentage: 85, icon: SiPytorch, color: '#EE4C2C' },
  { name: 'React.js', percentage: 93, icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', percentage: 90, icon: SiNextdotjs, color: '#000000' },
  { name: 'TypeScript', percentage: 95, icon: SiTypescript, color: '#3178C6' },
  { name: 'Vue.js', percentage: 85, icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Tailwind CSS', percentage: 90, icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', percentage: 95, icon: SiNodedotjs, color: '#339933' },
  { name: 'FastAPI', percentage: 90, icon: SiFastapi, color: '#009688' },
  { name: 'Express.js', percentage: 88, icon: SiExpress, color: '#000000' },
  { name: 'NestJS', percentage: 85, icon: SiNestjs, color: '#E0234E' },
  { name: 'REST / GraphQL', percentage: 92, icon: SiGraphql, color: '#E10098' },
  { name: 'PostgreSQL', percentage: 90, icon: SiPostgresql, color: '#4169E1' },
  { name: 'MongoDB', percentage: 85, icon: SiMongodb, color: '#47A248' },
  { name: 'MySQL', percentage: 85, icon: SiMysql, color: '#4479A1' },
  { name: 'Redis', percentage: 80, icon: SiRedis, color: '#DC382D' },
  { name: 'Pinecone', percentage: 90, icon: FaDatabase, color: '#000000' },
  { name: 'AWS', percentage: 88, icon: FaAws, color: '#FF9900' },
  { name: 'Docker', percentage: 90, icon: SiDocker, color: '#2496ED' },
  { name: 'Kubernetes', percentage: 82, icon: SiKubernetes, color: '#326CE5' },
  { name: 'CI/CD', percentage: 88, icon: SiGithub, color: '#181717' },
  { name: 'Git / GitHub', percentage: 95, icon: SiGit, color: '#F05032' },
]


export function getTechIcon(name: string): IconType {
  return techStack.find((t) => t.name === name)?.icon ?? FaCode
}
