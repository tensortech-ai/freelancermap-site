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
  titles: ['AI Solutions Engineer', 'Software Engineering & AI Systems'],
  location: 'Berlin - Germany',
  summary: `AI Solutions Engineer with 9 years of experience building production software and AI systems. I focus on correctness and practical engineering across APIs, databases, RAG pipelines, and full-stack applications. Recent work with Python/FastAPI, OpenAI APIs, RAG, AI agents, TypeScript/React, and cloud infrastructure has delivered clear results: 65% faster document search, 35% less manual support work, and 45% better system performance. I bring an engineering mindset to AI evaluation—understanding requirements, inspecting implementations, finding real failures, and explaining tradeoffs clearly.`,
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
        { name: 'AI & Machine Learning', percentage: 95 },
        { name: 'Frontend Engineering', percentage: 90 },
        { name: 'Backend Engineering', percentage: 95 },
        { name: 'Cloud & Infrastructure', percentage: 90 },
      ],
    },
    {
      title: 'Language',
      icon: 'language',
      variant: 'dotted',
      items: [{ name: 'German', percentage: 100 },{ name: 'English', percentage: 85 }],
    },
    {
      title: 'Coding',
      icon: 'coding',
      variant: 'circles',
      items: [
        { name: 'Python', percentage: 95 },
        { name: 'TypeScript', percentage: 95 },
        { name: 'JavaScript', percentage: 95 },
        { name: 'OpenAI API', percentage: 95 },
        { name: 'LangChain', percentage: 90 },
        { name: 'RAG', percentage: 90 },
        { name: 'TensorFlow / PyTorch', percentage: 85 },
        { name: 'React.js', percentage: 90 },
        { name: 'Next.js', percentage: 90 },
        { name: 'Vue.js', percentage: 85 },
        { name: 'HTML5 / CSS3', percentage: 90 },
        { name: 'Tailwind CSS', percentage: 90 },
        { name: 'Node.js', percentage: 95 },
        { name: 'FastAPI', percentage: 90 },
        { name: 'Express.js', percentage: 88 },
        { name: 'NestJS', percentage: 85 },
        { name: 'REST APIs', percentage: 92 },
        { name: 'GraphQL', percentage: 85 },
        { name: 'PostgreSQL', percentage: 90 },
        { name: 'MongoDB', percentage: 85 },
        { name: 'MySQL', percentage: 85 },
        { name: 'Redis', percentage: 80 },
        { name: 'Pinecone', percentage: 90 },
        { name: 'Vector Databases', percentage: 90 },
        { name: 'AWS', percentage: 88 },
        { name: 'Docker', percentage: 90 },
        { name: 'Kubernetes', percentage: 82 },
        { name: 'CI/CD', percentage: 88 },
        { name: 'GitHub Actions', percentage: 90 },
        { name: 'Git', percentage: 95 },
      ],
    },
  ],
  experience: [
    {
      date: '05/2024 – 04/2026',
      role: 'AI Solutions Engineer',
      company: 'ThinkOn Inc.',
      location: 'Toronto, Canada',
      description:
        'Built a production AI assistant using Python, OpenAI API, LangChain, FastAPI, and React to help support engineers search and use technical documentation more efficiently.',
      highlights: [
        'Designed and implemented Retrieval-Augmented Generation pipelines and vector-database retrieval, reducing document search time by 65%.',
        'Developed AI-agent workflows for cloud operations, reducing manual support workload by 35%.',
        'Designed secure REST APIs and internal engineering dashboards used in daily operations.',
        'Worked across backend, frontend, AI integration, data retrieval, and deployment layers to deliver complete production features.',
        'Improved containerized deployment workflows using Docker and GitHub Actions, reducing average deployment time by 40%.',
        'Investigated implementation and integration issues across AI services, APIs, data sources, and application components.',
      ],
    },
    {
      date: '09/2020 – 02/2024',
      role: 'AI Applications Engineer',
      company: 'Zup IT Innovation S.A.',
      location: 'São Paulo, Brazil',
      description:
        'Developed AI-powered workflow automation systems and built internal LLM-based knowledge-management applications.',
      highlights: [
        'Developed AI-powered workflow automation systems that reduced manual business operations by 30%.',
        'Built internal LLM-based knowledge-management applications, improving employee response time by 50%.',
        'Designed and implemented full-stack applications using React, TypeScript, Node.js, and PostgreSQL.',
        'Built scalable FastAPI microservices supporting AI inference and document-processing workloads.',
        'Integrated OpenAI models and vector databases into enterprise search and retrieval systems.',
        'Optimized backend APIs and database queries, improving overall system performance by 45%.',
        'Collaborated with DevOps teams to deploy and maintain production applications using AWS, Docker, and Kubernetes.',
      ],
    },
    {
      date: '03/2018 – 05/2020',
      role: 'Web Application Engineer',
      company: 'Mayflower GmbH',
      location: 'Würzburg, Germany',
      description:
        'Built production web applications using React and Node.js to improve internal business processes.',
      highlights: [
        'Built production web applications using React and Node.js to improve internal business processes.',
        'Designed REST APIs and relational database architecture for customer-management systems.',
        'Improved application performance by 35% through frontend rendering optimization and backend query tuning.',
        'Investigated application performance issues across frontend and backend components and implemented targeted improvements.',
        'Worked directly with customers to understand requirements and translate them into maintainable software solutions.',
      ],
    },
    {
      date: '06/2017 – 01/2018',
      role: 'Software Development Intern',
      company: 'Arconsis IT-Solutions GmbH',
      location: 'Karlsruhe, Germany',
      description:
        'Developed frontend functionality using React and JavaScript, and assisted with backend API development.',
      highlights: [
        'Developed frontend functionality using React and JavaScript.',
        'Assisted with backend API development using Node.js and PostgreSQL.',
        'Automated recurring reporting tasks, reducing manual effort by 20%.',
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
