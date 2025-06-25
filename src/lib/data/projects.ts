export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'llm' | 'computer-vision' | 'web-dev' | 'mobile' | 'data-science' | 'all';
  demoUrl?: string;
  githubUrl?: string;
  year: number;
  slug: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot using GPT API with custom training data for specific domains.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    category: 'llm',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/ai-chat',
    year: 2024,
    slug: 'ai-chat-assistant'
  },
  {
    id: '2',
    title: 'Object Detection System',
    description: 'Real-time object detection using YOLO v8 for security and monitoring applications.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'YOLO', 'OpenCV', 'Flask'],
    category: 'computer-vision',
    githubUrl: 'https://github.com/username/object-detection',
    year: 2024,
    slug: 'object-detection-system'
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX and payment gateway integration.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['SvelteKit', 'PostgreSQL', 'Stripe', 'Tailwind'],
    category: 'web-dev',
    demoUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/username/ecommerce',
    year: 2023,
    slug: 'ecommerce-platform'
  },
  {
    id: '4',
    title: 'Face Recognition Attendance',
    description: 'Attendance system using face recognition with liveness detection.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'dlib', 'PostgreSQL', 'Streamlit'],
    category: 'computer-vision',
    githubUrl: 'https://github.com/username/face-attendance',
    year: 2023,
    slug: 'face-recognition-attendance'
  },
  {
    id: '5',
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for business intelligence with real-time updates.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['Python', 'Plotly', 'Pandas', 'Streamlit'],
    category: 'data-science',
    demoUrl: 'https://analytics-demo.example.com',
    githubUrl: 'https://github.com/username/analytics-dashboard',
    year: 2022,
    slug: 'data-analytics-dashboard'
  },
  {
    id: '6',
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile app for task management with offline sync.',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600',
    tags: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    category: 'mobile',
    githubUrl: 'https://github.com/username/task-manager',
    year: 2023,
    slug: 'mobile-task-manager'
  }
];

export const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'llm', label: 'LLM & AI', count: projects.filter(p => p.category === 'llm').length },
  { id: 'computer-vision', label: 'Computer Vision', count: projects.filter(p => p.category === 'computer-vision').length },
  { id: 'web-dev', label: 'Web Development', count: projects.filter(p => p.category === 'web-dev').length },
  { id: 'data-science', label: 'Data Science', count: projects.filter(p => p.category === 'data-science').length },
  { id: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length }
];