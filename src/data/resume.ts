export interface SkillItem {
  name: string
  percentage: number
}

export interface SkillCategory {
  title: string
  icon: 'development' | 'language' | 'coding'
  variant: 'bar' | 'dotted' | 'circles'
  items: SkillItem[]
}

export interface ExperienceItem {
  date: string
  role: string
  company: string
  location: string
  description: string
  highlights: string[]
}

export interface ProjectItem {
  title: string
  url: string
  image: string
  imageFallback?: string
}

export interface ContactInfo {
  email: string
  location: string
  nationality: string
  linkLabel: string
}

export interface ResumeData {
  name: string
  titles: string[]
  location: string
  summary: string
  contact: ContactInfo
  skillCategories: SkillCategory[]
  experience: ExperienceItem[]
  education: {
    date: string
    degree: string
    institution: string
    location: string
    detail: string
  }
  projects: ProjectItem[]
}

export const resumeData: ResumeData = {
  name: 'Jakob Steinbrück',
  titles: ['AI & Full Stack Engineer', 'Full Stack Engineer'],
  location: 'Berlin - Germany',
  summary: `I have 9 years of experience as AI & Full Stack Engineer building web applications, AI-powered systems, automation solutions, and cloud-based platforms. My main work is to create practical business solutions with combining AI, backend, and frontend development. Also I have experience with LLMs, AI workflow automation, APIs, SaaS platforms, and data-driven applications. I have worked with international teams in Canada, Brazil, and Germany, delivering complete solutions from system design to cloud deployment that helped businesses reduce manual work, improve processes, and build scalable products.`,
  contact: {
    email: 'jakobsteinbruckwork@gmail.com',
    location: 'Berlin, Germany',
    nationality: 'German',
    linkLabel: 'Jakob Steinbruck',
  },
  skillCategories: [
    {
      title: 'development',
      icon: 'development',
      variant: 'bar',
      items: [
        { name: 'AI & ML', percentage: 95 },
        { name: 'Frontend', percentage: 90 },
        { name: 'Backend', percentage: 90 },
        { name: 'Cloud & DevOps', percentage: 85 },
      ],
    },
    {
      title: 'Language',
      icon: 'language',
      variant: 'dotted',
      items: [{ name: 'German', percentage: 100 }],
    },
    {
      title: 'Coding',
      icon: 'coding',
      variant: 'circles',
      items: [
        { name: 'Python', percentage: 95 },
        { name: 'OpenAI / LLM Integration', percentage: 95 },
        { name: 'LangChain', percentage: 90 },
        { name: 'RAG Systems', percentage: 90 },
        { name: 'TensorFlow / PyTorch', percentage: 85 },
        { name: 'React.js', percentage: 93 },
        { name: 'Next.js', percentage: 90 },
        { name: 'TypeScript', percentage: 95 },
        { name: 'Vue.js', percentage: 85 },
        { name: 'Tailwind CSS', percentage: 90 },
        { name: 'Node.js', percentage: 95 },
        { name: 'FastAPI', percentage: 90 },
        { name: 'Express.js', percentage: 88 },
        { name: 'NestJS', percentage: 85 },
        { name: 'REST / GraphQL API', percentage: 92 },
        { name: 'PostgreSQL', percentage: 90 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'MySQL', percentage: 85 },
        { name: 'Redis', percentage: 80 },
        { name: 'Pinecone / Vector DB', percentage: 90 },
        { name: 'AWS', percentage: 88 },
        { name: 'Docker', percentage: 90 },
        { name: 'Kubernetes', percentage: 82 },
        { name: 'CI/CD Pipelines', percentage: 88 },
        { name: 'Git / GitHub', percentage: 95 },
      ],
    },
  ],
  experience: [
    {
      date: '05/2024 – 01/2026',
      role: 'AI & Full Stack Engineer',
      company: 'ThinkOn Inc.',
      location: 'Toronto, Ontario, Canada (Remote)',
      description:
        'ThinkOn Inc. is a Canadian cloud service provider offering cloud infrastructure, backup, disaster recovery, and managed hosting solutions for businesses.',
      highlights: [
        'Built an AI assistant using OpenAI API, LangChain, FastAPI, and React to help support engineers search technical documents faster.',
        'Developed RAG pipelines with vector databases, reducing document search time by 65%.',
        'Automated cloud operation workflows with AI agents, reducing manual support work by 35%.',
        'Built secure REST APIs and frontend dashboards used by internal engineering teams.',
        'Improved deployment pipelines with Docker and GitHub Actions, reducing deployment time by 40%.',
      ],
    },
    {
      date: '09/2020 – 02/2024',
      role: 'Full Stack & AI Engineer',
      company: 'Zup IT Innovation S.A.',
      location: 'São Paulo, Brazil (Remote)',
      description:
        'Zup IT Innovation S.A. is a Brazilian technology company that develops cloud solutions, digital transformation services, and enterprise software.',
      highlights: [
        'Developed AI-powered workflow automation tools that reduced manual business operations by 30%.',
        'Built internal LLM chatbots for knowledge management, improving employee response time by 50%.',
        'Developed full-stack web applications using React, Node.js, PostgreSQL, and TypeScript.',
        'Created scalable FastAPI services for AI inference and document processing.',
        'Integrated OpenAI and vector databases to build enterprise search systems.',
        'Improved backend performance by 45% through API optimization and database tuning.',
        'Worked with DevOps teams to deploy applications on AWS using Docker and Kubernetes.',
      ],
    },
    {
      date: '03/2018 – 05/2020',
      role: 'Full Stack Engineer',
      company: 'Mayflower GmbH',
      location: 'Würzburg, Germany (Hybrid)',
      description:
        'Mayflower GmbH develops custom software solutions for startups and medium-sized companies in Germany.',
      highlights: [
        'Built React and Node.js applications that improved internal business processes.',
        'Designed REST APIs and database architecture for customer management systems.',
        'Improved application performance by 35% through frontend and backend optimization.',
        'Worked closely with customers to deliver software that reduced daily administrative work.',
      ],
    },
    {
      date: '11/2017 – 01/2018',
      role: 'Full Stack Engineer Intern',
      company: 'arconsis IT-Solutions GmbH',
      location: 'Karlsruhe, Germany (on-site)',
      description:
        'arconsis IT-Solutions GmbH provides custom software development and IT consulting services for German businesses.',
      highlights: [
        'Developed frontend features using React and JavaScript.',
        'Assisted in backend API development with Node.js and PostgreSQL.',
        'Automated reporting tasks, reducing manual work by 20%.',
      ],
    },
  ],
  education: {
    date: '2017',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Saarland University',
    location: 'Saarbrücken, Germany',
    detail: 'Graduated: 2017',
  },
  projects: [
    {
      title: 'Zebracat AI',
      url: 'https://www.zebracat.ai/',
      image: 'https://www.zebracat.ai/og-image.png',
    },
    {
      title: 'JobWizard AI',
      url: 'https://chromewebstore.google.com/detail/jobwizard-ai-autofill-job/kbhgdbfkbgkokgkkdhnnlmkhnokjmfib',
      image: '/projects/jobwizard.png',
    },
    {
      title: 'Prodos Digital',
      url: 'https://www.prodosdigital.com.br/',
      image: 'https://www.prodosdigital.com.br/wp-content/uploads/2024/01/prodos-og.jpg',
    },
    {
      title: 'Isotopes AI',
      url: 'https://isotopes.ai/',
      image: '/projects/isotopes.png',
    },
    {
      title: 'GPT3 Goke',
      url: 'https://gpt3-goke.vercel.app/',
      image: 'https://gpt3-goke.vercel.app/og.png',
    },
    {
      title: 'React GPT-3',
      url: 'https://react-gpt-3.netlify.app/',
      image: '/projects/react-gpt-3.png',
    },
    {
      title: 'Bank Modern App',
      url: 'https://bank-modern-app-r9rw.vercel.app/',
      image: 'https://bank-modern-app-r9rw.vercel.app/og-image.png',
    },
    {
      title: 'Expense Tracker',
      url: 'https://expense-tracker-phi-wine.vercel.app/',
      image: '/projects/expense-tracker.png',
    },
    {
      title: 'Eu Vou',
      url: 'https://euvou.volnewmer.com.br/?event=1',
      image: '/projects/euvou.png',
    },
    {
      title: 'Pokemon Go Dex PWA',
      url: 'https://pokemon-go-dex-pwa4.vercel.app/',
      image: 'https://pokemon-go-dex-pwa4.vercel.app/og.png',
    },
    {
      title: 'Gerich Restaurant',
      url: 'https://gerich-restaurant-chi.vercel.app/',
      image: 'https://gerich-restaurant-chi.vercel.app/og-image.png',
    },
    {
      title: 'Vibe',
      url: 'https://vibe.j2team.org/',
      image: 'https://vibe.j2team.org/og.png',
    },
    {
      title: 'Med Systems Assinatura',
      url: 'https://medsystemsassinatura.vercel.app/',
      image: '/projects/medsystems.png',
    },
    {
      title: 'Car Slayer',
      url: 'https://car-slayer.vercel.app/',
      image: 'https://car-slayer.vercel.app/og.png',
    },
    {
      title: 'Stakify',
      url: 'https://stakify-rose.vercel.app/',
      image: 'https://stakify-rose.vercel.app/og-image.png',
    },
  ],
}

export type NavSection = 'about' | 'resume' | 'works'

export const navItems: { id: NavSection; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'works', label: 'Works' },
]

export function getProjectScreenshotFallback(url: string): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=800`
}
