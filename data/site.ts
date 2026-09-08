export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Han Win Aung | Resume',
    description:
      'Portfolio example: shipping reliable web products with clear architecture, tests, and delivery practices.',
  },
  hero: {
    name: 'Han Win Aung',
    role: 'Software Developer',
    tagline: 'From product intent to production, pragmatic systems, accessible UI, and clean & maintainable code.',
    contact: 'Open to collaborations on product-minded teams.',
    avatarSrc: 'portfolio.jpg',
    avatarAlt: 'hwa',
  },
  about: {
    paragraphs: [
      'I am a versatile Software Developer with over 4 years of experience architecting and delivering high-performance, mobile-first web applications. With a strong foundation in the modern JavaScript ecosystem, I specialize in building scalable, user-centric frontend experiences using TypeScript, React.js, Angular, and Astro. My engineering approach centers on bridging the gap between complex technical requirements and intuitive, highly responsive user interfaces.',
      'Beyond the frontend, I engineer comprehensive full-stack and content-driven solutions. By leveraging Supabase and PostgreSQL, I design secure relational databases, implement robust Row-Level Security (RLS), and build end-to-end applications without compromising on speed or scalability. Additionally, I utilize WordPress as a headless CMS, separating content management from presentation to empower marketing teams while maintaining blazing-fast, modern frontend architectures.',
      'Holding a Pearson BTEC HND Diploma in Computing from Lithan Academy, my technical foundation is matched by a continuous drive to adopt and implement cutting-edge web standards. Whether I am optimizing complex database queries, configuring secure authentication flows, or refining modular UI components, I prioritize clean code, performance, and accessibility.',
      'I am passionate about solving complex business problems through modern web architecture and am currently seeking opportunities to bring my blend of frontend expertise and full-stack capabilities to a forward-thinking, innovative team.',
      {
        heading: 'Frontend Development',
        bullets: [
          'Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3',
          'Modern Frameworks: React.js, Angular, Astro',
          'UI/UX Architecture: Mobile-First Web Design, Responsive Interfaces, Modular Component Development',
        ],
      },
      {
        heading: 'Backend & Database Engineering',
        bullets: [
          'Infrastructure: Supabase (Backend-as-a-Service), Serverless Functions',
          'Database: PostgreSQL, Relational Database Design, Data Normalization',
          'Security & Auth: Row-Level Security (RLS) implementation, End-to-End Authentication Flows',
        ],
      },
      {
        heading: 'CMS & API Integration',
        bullets: [
          'Platforms: WordPress',
          'System Architecture: Headless CMS, Decoupled Web Architectures',
          'Data Fetching: REST APIs, Third-Party Service Integration (bridging frontend to Supabase/WordPress)',
        ],
      },
      {
        heading: 'Core Engineering Practices',
        techItems: ['Frontend Development', 'Backend & Database Engineering', 'CMS & API Integration', 'Web Performance Optimization', 'Web Accessibility (a11y) Standards', 'Clean Code Principles & Scalable Application Architecture', 'Cross-Functional Collaboration'],
      },
    ],
  },
  experiences: [
    {
      period: 'Aug 2026 - Present',
      title: 'Software Developer',
      company: 'Modus Operandi',
      summary:
        'Built & polished marketing websites experience with accessible UI, motion-led interactions, and reusable components.',
      highlights: [
        'Designed and shipped the complete website using Astro, Tailwind CSS, and content-driven components',
        'Crafted consistent responsive layouts and accessible typography across desktop and mobile',
        'Optimized asset delivery and performance for sub-1s page load metrics',
      ],
      tech: ['Astro', 'Angular', 'React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Node', 'Vite'],
    },
    {
      period: 'Jan 2025 - Jul 2026',
      title: 'Frontend Developer',
      company: 'Shwe Bank',
      summary:
        'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      highlights: [
        'Implemented a component-based design system with reusable cards, buttons, and hero sections',
        'Built content-driven project pages, archive views, and client-side navigation enhancements',
        'Added cross-browser polish and performance tuning with image optimization and lazy loading',
      ],
      tech: ['WordPress', 'React', 'MicrosoftPowerPlatform', 'JavaScript'],
    },
    {
      period: 'Apr 2025 - Jan 2026',
      title: 'Frontend Developer',
      company: 'Modus Operandi',
      summary:
        'Created an interactive product showcase with a clean visual system and accessible component library.',
      highlights: [
        'Built a flexible project card system for content updates without code changes',
        'Improved brand consistency with typography, color, and motion guidelines',
        'Added testing and quality checks for cross-device UI fidelity',
      ],
      tech: ['WordPress', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    },
  ],
  featuredProjects: [
    {
      title: 'Modern Portfolio',
      period: '2025',
      summary: 'Built a polished portfolio experience with accessible UI, motion-led interactions, and reusable components.',
      solution: 'Designed a modular headless component system with Astro and React utilizing the styling with Tailwind CSS, ensuring consistent brand experience across all breakpoints.',
      impact: 'Achieved sub-1s page load metrics and 95+ Lighthouse scores through optimized asset delivery and lazy loading strategies.',
      image: 'img/portfolio-app.png',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['TypeScript', 'Astro', 'React', 'Tailwind CSS'],
        },
        {
          category: 'Performance',
          items: ['Responsive Design', 'Asset Optimization', 'Lazy Loading', 'Image CDN'],
        },
      ],
    },
    {
      title: 'MO Wallet web-app',
      period: '2025',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'img/mo-wallet-web-app.png',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2026', project: 'Headless Design Patterns', role: 'Frontend', techStack: 'Astro, Angular, React, Tailwind, Typescript, JavaScript, Supabase, SQL' },
    { date: '2025', project: 'CMS Solutions', role: 'Full-stack', techStack: 'WordPress, PHP, Javascript' },
    { date: '2022-2024', project: 'Authentication & Authorization', role: 'Backend', techStack: 'Python, Flask' },
    { date: '2021', project: 'Simple CRUD Projects', role: 'Data', techStack: 'Python, Django, HTML, CSS, JavaScript' },
    { date: '2020', project: 'Car Service Portal', role: 'Frontend', techStack: 'HTML, CSS, Responsive Design' },
  ],
  contact: {
    email: 'private.tommy.dev@gmail.com',
    github: 'https://github.com/buildbyhwa',
    linkedin: 'https://www.linkedin.com/in/hanwinaungdev/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
