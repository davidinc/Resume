export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/#expertise', label: 'Expertise' }
];

export const hero = {
  name: 'Dawit Ayalew Chernet',
  subtitle: 'Modern resume, mobile and web portfolio, and graphical work presented in a dynamic Next.js experience.',
  description: 'Solution architect and developer with deep telecom BSS/OSS experience, plus hands-on Java, Swift, and web application delivery. This dynamic resume makes it easy to add new projects, graphical work, and mobile application examples as your portfolio grows.',
  roles: [
    'Solution Architect',
    'Senior Software Developer',
    'Java | Swift | JavaScript',
    'Telecom & Graphics Portfolio'
  ]
};

export const stats = [
  { label: 'Years Exp', value: '10+' },
  { label: 'Projects', value: '30+' },
  { label: 'Certifications', value: 'PMP' },
  { label: 'Domains', value: 'BSS/OSS' }
];

export const expertise = [
  {
    title: 'Telecom Architecture',
    description: 'BSS/OSS catalog modeling, convergent charging, and TM Forum-aligned product architecture for large-scale systems.'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Azure, containerized services, CI/CD, and automated deployments for resilient production delivery.'
  },
  {
    title: 'Mobile & Web',
    description: 'Native Swift apps, Java backend services, and responsive JavaScript websites created for real business adoption.'
  }
];

export const featuredProjects = [
  {
    title: 'Adaptive Charging Engine',
    category: 'Java',
    description: 'High-performance billing system handling 10M+ subscribers with real-time rate recalculation and dynamic pricing rules.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Kafka'],
    highlights: [
      'Real-time charging with <50ms latency',
      'Multi-tenant pricing rule engine',
      'Automated billing cycle orchestration'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Mobile Service Hub',
    category: 'Swift',
    description: 'Native iOS application for telecom subscribers to manage services, payments, and account lifecycle.',
    technologies: ['Swift', 'UIKit', 'REST API', 'Local Storage'],
    highlights: [
      'Intuitive plan management dashboard',
      'Integrated payment processing',
      'Real-time balance notifications'
    ],
    image: 'https://images.unsplash.com/photo-1512941691920-25e2e7f22538?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Operations Portal',
    category: 'JavaScript',
    description: 'Real-time operations dashboard for service management, incident tracking, and KPI monitoring.',
    technologies: ['Next.js', 'React', 'D3.js', 'WebSocket'],
    highlights: [
      'Live KPI visualizations',
      'Incident workflow automation',
      'Multi-region service health'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70db4220?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  }
];

export const projects = [
  {
    title: 'Human Resource Management System',
    category: 'C#/.Net',
    description: 'Enterprise HR platform for Humber organization enabling employee lifecycle management, payroll integration, and performance tracking.',
    technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Angular'],
    highlights: [
      'Employee database with multi-role access control',
      'Automated payroll calculation & tax withholding',
      'Performance review & leave management workflows'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Product Catalog & Pricing Rules',
    category: 'Java',
    description: 'Enterprise-grade product catalog with dynamic pricing, discount matrices, and promotion management for telecommunications platforms.',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis'],
    highlights: [
      'Catalog versioning & approval workflow',
      'Complex discount rule execution',
      'Real-time pricing impact simulation'
    ],
    image: 'https://images.unsplash.com/photo-1551663730-f0b19d9f76ba?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Telecom OSS Analytics',
    category: 'JavaScript',
    description: 'Interactive service operations dashboard combining KPI visualizations, incident tracking, and automated alerting.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    highlights: [
      'Custom KPI dashboard builder',
      'Predictive anomaly detection',
      'Automated SLA tracking & reporting'
    ],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Subscriber Mobile Portal',
    category: 'Swift',
    description: 'Feature-rich iOS application enabling subscribers to manage plans, view usage, make payments, and access customer support.',
    technologies: ['Swift', 'Combine', 'REST API', 'CoreData'],
    highlights: [
      'Biometric authentication integration',
      'Offline-first data synchronization',
      'Streamed video tutorials & support'
    ],
    image: 'https://images.unsplash.com/photo-1523875335684-37898b6baf30?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Analytics Data Pipeline',
    category: 'Java',
    description: 'Scalable ETL system processing billions of telecom events daily for billing accuracy and operational insights.',
    technologies: ['Apache Kafka', 'Spark', 'Hadoop', 'Java'],
    highlights: [
      'Handles 10B+ events per day at scale',
      'Sub-second event processing window',
      'Automatic data quality validation'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Brand Marketing Site',
    category: 'JavaScript',
    description: 'High-performance marketing website showcasing telecom services, pricing, and promotional campaigns with CMS integration.',
    technologies: ['Next.js', 'Tailwind CSS', 'Strapi CMS', 'Vercel'],
    highlights: [
      'Dynamic pricing calculator widget',
      'Multi-language support (8 languages)',
      'A/B testing framework built-in'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Customer Data Platform',
    category: 'Java',
    description: 'Real-time customer 360 platform aggregating telecom usage, payments, and interactions for personalized service delivery.',
    technologies: ['Java', 'Apache Flink', 'Elasticsearch', 'MongoDB'],
    highlights: [
      'Real-time customer segment calculation',
      'Unified customer experience scoring',
      'AI-powered recommendation engine integration'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70db4220?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  },
  {
    title: 'Invoice & Billing Portal',
    category: 'C#/.Net',
    description: 'White-label invoice management and payment portal with multi-currency support and reconciliation automation.',
    technologies: ['C#', 'ASP.NET Core', 'Angular', 'SQL Server'],
    highlights: [
      'Multi-currency invoice generation',
      'Automated payment reconciliation',
      'PCI-compliant payment processing'
    ],
    image: 'https://images.unsplash.com/photo-1554774853-c996979f4a04?w=800&h=400&fit=crop',
    live: '',
    repo: ''
  }
];

export const portfolio = [
  {
    title: 'Network Operations Center UI',
    category: 'Graphics',
    description: 'High-fidelity design system for telecom NOC with real-time metrics, alert routing, and incident management dashboards.',
    background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
    link: ''
  },
  {
    title: 'Mobile App Flows & Prototypes',
    category: 'Mobile Design',
    description: 'Complete iOS app design system including 40+ screens, micro-interactions, and accessibility guidelines.',
    background: 'linear-gradient(135deg, #166534 0%, #0c3d1e 100%)',
    image: 'https://images.unsplash.com/photo-1512941691920-25e2e7f22538?w=800&h=400&fit=crop',
    link: ''
  },
  {
    title: 'Customer Portal Web Design',
    category: 'Web Design',
    description: 'Enterprise portal design with 20+ pages, interactive components, and responsive patterns for all devices.',
    background: 'linear-gradient(135deg, #5b21b6 0%, #2e1065 100%)',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    link: ''
  },
  {
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete brand guidelines including logo system, color palette, typography, and application examples across 12 touchpoints.',
    background: 'linear-gradient(135deg, #92400e 0%, #3f2305 100%)',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
    link: ''
  },
  {
    title: 'Service Dashboard Concept',
    category: 'UI/UX',
    description: 'Concept design for advanced analytics dashboard with customizable widgets and real-time data streaming.',
    background: 'linear-gradient(135deg, #0c4a6e 0%, #051d2c 100%)',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=400&fit=crop',
    link: ''
  },
  {
    title: 'Onboarding Experience',
    category: 'UX Design',
    description: 'Comprehensive user onboarding journey spanning 12 screens with progressive disclosure and contextual help.',
    background: 'linear-gradient(135deg, #7c2d12 0%, #3a1d0f 100%)',
    image: 'https://images.unsplash.com/photo-1523875335684-37898b6baf30?w=800&h=400&fit=crop',
    link: ''
  }
];

export const experience = [
  {
    title: 'Solution Architect / Developer',
    company: 'Freelance & Contract Role',
    period: '2024 - Present | Toronto',
    summary: 'Architecting telecom billing systems and leading full-stack product delivery across Java, Swift, and JavaScript. Designing cloud-native platforms for BSS/OSS modernization, managing technical strategy, and delivering PMP-certified project leadership. Currently mentoring 3 junior developers on system design best practices.'
  },
  {
    title: 'Full-Stack Developer',
    company: 'Humber College / Organization',
    period: '2023 - 2024',
    summary: 'Developed comprehensive Human Resource Management System using C# ASP.NET Core backend with Angular frontend. Implemented employee lifecycle workflows, automated payroll processing with tax calculations, and integrated multi-role access control for 500+ organizational users. Delivered on-time with 99.2% uptime SLA.'
  },
  {
    title: 'Senior Software Developer',
    company: 'Huawei OSS/BSS Division',
    period: '2020 - 2024',
    summary: 'Led charge control module architecture for global telecom operators across APAC and EMEA regions. Designed product catalog systems handling 10M+ subscribers, optimized real-time charging engine to <50ms latency for billions of daily transactions, and mentored team of 8 engineers on microservices design patterns. Achieved 40% performance improvement through Redis caching strategies.'
  },
  {
    title: 'Systems Integration Engineer',
    company: 'Telecom Infrastructure Provider',
    period: '2017 - 2020',
    summary: 'Delivered end-to-end OSS/BSS integrations for enterprise telecom customers (20+ deployments). Managed zero-downtime migrations of legacy billing systems to cloud infrastructure, designed customer portal architectures supporting 5M+ concurrent users, and led technical workshops on modern service delivery patterns for 200+ partners.'
  },
  {
    title: 'Software Developer',
    company: 'Early Career',
    period: '2015 - 2017',
    summary: 'Built foundation in telecommunications systems and full-stack development. Contributed to REST API design, gained hands-on experience with Java/Spring stack, completed PMP certification, and participated in agile transformation initiatives across 3 product teams.'
  }
];

export const skills = [
  'Java',
  'C#/.NET',
  'Angular',
  'Swift',
  'Next.js',
  'React',
  'Azure',
  'SQL Server',
  'PostgreSQL',
  'Redis',
  'Kafka',
  'Apache Spark',
  'Docker',
  'Kubernetes',
  'BSS/OSS',
  'Product Catalog',
  'UI/UX Design',
  'Project Delivery',
  'Agile/Scrum',
  'Microservices',
  'REST APIs',
  'Real-time Systems'
];
