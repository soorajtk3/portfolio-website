
import { Code, Database, Cloud, GitBranch, Award } from 'lucide-react';
export const experienceData =  [
  {
    id: 1,
    designation: 'Software Engineer',
    company: 'Revyrie Global',
    location: 'Trivandrum, Kerala',
    duration: 'April 2024 - January 2026',
    responsibilities: [
      {
        id: 1,
        title:
          'Built a production-grade AI chat platform powered by GPT-4o with real-time streaming responses using Server-Sent Events (SSE), delivering low-latency conversational UX.'
      },
      {
        id: 2,
        title:
          'Integrated Stripe Checkout to support subscriptions, renewals, and role-based feature access, ensuring secure payment workflows.'
      },
      {
        id: 3,
        title:
          'Developed a full admin panel for a social-wellbeing mobile platform enabling real-time issue triaging via push notifications and centralized moderation tools.'
      },
      {
        id: 4,
        title:
          'Built dynamic analytics dashboards using Recharts to visualize CAC, LTV, and subscriber trends, supporting data-driven product decisions.'
      },
      {
        id: 5,
        title:
          'Engineered a secure document-management platform with AI-assisted summarization and Q&A, including encrypted client-side API communication.'
      },
      {
        id: 6,
        title:
          'Implemented real-time document status synchronization using Firebase, eliminating manual refresh and improving perceived responsiveness.'
      }
    ]
  },

  {
    id: 2,
    designation: 'Software Engineer',
    company: 'Hamon Technologies',
    location: 'Calicut, Kerala',
    duration: 'January 2022 - February 2024',
    responsibilities: [
      {
        id: 1,
        title:
          'Built responsive admin dashboards and reusable UI systems for EV charging platforms optimized for desktop and tablet experiences.'
      },
      {
        id: 2,
        title:
          'Designed scalable state-managed components using Redux and API-driven workflows to improve frontend reliability.'
      },
      {
        id: 3,
        title:
          'Developed full-stack production features using React, Node.js, and Express across multiple applications.'
      },
      {
        id: 4,
        title:
          'Implemented secure video upload functionality for a medical education streaming platform serving global surgical institutions.'
      },
      {
        id: 5,
        title:
          'Designed and delivered real-time messaging features including UI, backend APIs, and data handling.'
      }
    ]
  }
];


export const educationDetails = {
  course: 'B-Tech in Electronics and Communications Engineering',
  university: 'Kannur University',
  year: 2017
}

export const skillDetails = [
  {
    id: 1,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    icon: Code,
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    chipColor: 'bg-blue-600'
  },
  {
    id: 2,
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'React Admin', 'MUI', 'Bootstrap', 'Tailwind CSS'],
    icon: Award,
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    chipColor: 'bg-green-600'
  },
  {
    id: 3,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'WebSockets', 'Middleware'],
    icon: Database,
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    chipColor: 'bg-purple-600'
  },
  {
    id: 4,
    title: 'State management',
    skills: ['Redux', 'MobX', 'Zustand'],
    icon: GitBranch,
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100 ',
    chipColor: 'bg-orange-600'
  },
  {
    id: 5,
    title: 'Databases',
    skills: ['PostgreSQL', 'Firebase'],
    icon: Database,
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100 ',
    chipColor: 'bg-red-600'
  },
  {
    id: 6,
    title: 'Tools & Cloud',
    skills: ['AWS', 'Git', 'VSCode', 'GitHub', 'GitLab', 'Jira', 'Postman'],
    icon: Cloud,
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    chipColor: 'bg-indigo-600'
  },
]
