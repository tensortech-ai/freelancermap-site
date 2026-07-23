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
  description?: string
  techs?: string[]
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
      items: [{ name: 'German', percentage: 100 },{ name: 'English', percentage: 80 }],
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
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      description: 'AI-powered video creation platform that transforms text into engaging videos with automated editing and smart templates.',
      techs: ['React', 'TypeScript', 'AI/ML', 'Video Processing', 'TailwindCSS'],
    },
    {
      title: 'JobWizard AI',
      url: 'https://chromewebstore.google.com/detail/jobwizard-ai-autofill-job/kbhgdbfkbgkokgkkdhnnlmkhnokjmfib',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
      description: 'Chrome extension that uses AI to autofill job applications, saving time and improving accuracy for job seekers.',
      techs: ['Chrome Extension', 'OpenAI', 'JavaScript', 'React', 'Automation'],
    },
    {
      title: 'Prodos Digital',
      url: 'https://www.prodosdigital.com.br/',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop',
      description: 'Digital marketing agency platform with portfolio showcase, service management, and client communication tools.',
      techs: ['WordPress', 'PHP', 'JavaScript', 'SEO', 'Responsive Design'],
    },
    {
      title: 'Isotopes AI',
      url: 'https://isotopes.ai/',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
      description: 'Advanced AI research platform for analyzing molecular structures and predicting chemical properties using machine learning.',
      techs: ['Python', 'TensorFlow', 'React', 'D3.js', 'Scientific Computing'],
    },
    {
      title: 'GPT3 Goke',
      url: 'https://gpt3-goke.vercel.app/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      description: 'Modern landing page showcasing GPT-3 capabilities with interactive demos and sleek UI design.',
      techs: ['React', 'Next.js', 'OpenAI API', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'React GPT-3',
      url: 'https://react-gpt-3.netlify.app/',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?w=800&h=600&fit=crop',
      description: 'Interactive GPT-3 demonstration app with real-time AI responses and conversation history management.',
      techs: ['React', 'OpenAI', 'JavaScript', 'CSS3', 'API Integration'],
    },
    {
      title: 'Bank Modern App',
      url: 'https://bank-modern-app-r9rw.vercel.app/',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      description: 'Modern banking interface with account management, transactions, analytics dashboard, and payment processing.',
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'REST API'],
    },
    {
      title: 'Expense Tracker',
      url: 'https://expense-tracker-phi-wine.vercel.app/',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
      description: 'Personal finance management tool with expense tracking, budget planning, and insightful spending analytics.',
      techs: ['React', 'Context API', 'Chart.js', 'LocalStorage', 'CSS Modules'],
    },
    {
      title: 'Eu Vou',
      url: 'https://euvou.volnewmer.com.br/?event=1',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
      description: 'Event management platform for creating, discovering, and RSVPing to local events with social features.',
      techs: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    },
    {
      title: 'Pokemon Go Dex PWA',
      url: 'https://pokemon-go-dex-pwa4.vercel.app/',
      image: 'https://images.unsplash.com/photo-1542779283-429940ce8336?w=800&h=600&fit=crop',
      description: 'Progressive Web App Pokédex with offline support, advanced search, and detailed Pokemon statistics.',
      techs: ['PWA', 'React', 'Service Workers', 'IndexedDB', 'Pokemon API'],
    },
    {
      title: 'Gerich Restaurant',
      url: 'https://gerich-restaurant-chi.vercel.app/',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      description: 'Elegant restaurant website with menu showcase, online reservations, and gallery of culinary creations.',
      techs: ['React', 'Styled Components', 'Framer Motion', 'Responsive Design'],
    },
    {
      title: 'Vibe',
      url: 'https://vibe.j2team.org/',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop',
      description: 'Social music platform where users discover, share, and collaborate on playlists with friends.',
      techs: ['React', 'Firebase', 'Spotify API', 'Real-time DB', 'Web Audio API'],
    },
    {
      title: 'Med Systems Assinatura',
      url: 'https://medsystemsassinatura.vercel.app/',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      description: 'Medical subscription management system for healthcare providers with patient records and billing automation.',
      techs: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'HIPAA Compliant'],
    },
    {
      title: 'Car Slayer',
      url: 'https://car-slayer.vercel.app/',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      description: 'Car marketplace platform with advanced filters, price comparisons, and dealer/seller management.',
      techs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    },
    {
      title: 'Stakify',
      url: 'https://stakify-rose.vercel.app/',
      image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=600&fit=crop',
      description: 'Cryptocurrency staking platform with real-time portfolio tracking, yield optimization, and analytics.',
      techs: ['React', 'Web3.js', 'Ethereum', 'Chart.js', 'Tailwind CSS'],
    },
    {
      title: 'Instor - Digital Storage',
      url: 'https://instor.alpaycelik.dev/',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
      description: 'Modern cloud storage platform with secure file management, real-time collaboration, and intelligent search capabilities.',
      techs: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL'],
    },
    {
      title: 'Silent Moon - Meditation App',
      url: 'https://silentmoon.alpaycelik.dev/',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
      description: 'Beautiful meditation and mindfulness app with guided sessions, progress tracking, and calming soundscapes.',
      techs: ['React', 'TypeScript', 'Framer Motion', 'Styled Components'],
    },
    {
      title: 'E-Commerce with Sanity & Stripe',
      url: 'https://nextjs-ecommerce-sanity-stripe.netlify.app/',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      description: 'Full-featured e-commerce platform with headless CMS, secure payments, cart management, and admin dashboard.',
      techs: ['Next.js', 'Sanity CMS', 'Stripe', 'React', 'Tailwind CSS'],
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
