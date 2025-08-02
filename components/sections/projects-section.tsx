"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { Section } from '@/app/page';

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "Intelligent productivity app with natural language processing for task creation and smart prioritization.",
    summary: "Built with Next.js and OpenAI API, this application revolutionizes task management by understanding context and automatically organizing workloads. Features include voice commands, smart scheduling, and predictive analytics.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://taskmaster-ai.demo.com",
    githubUrl: "https://github.com/alexthompson/taskmaster-ai",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Comprehensive analytics platform with live data visualization and customizable reporting for SaaS companies.",
    summary: "A powerful dashboard built with React and D3.js, providing real-time insights into user behavior, performance metrics, and business KPIs. Supports multiple data sources and offers advanced filtering capabilities.",
    tech: ["React", "D3.js", "Node.js", "Socket.io", "MongoDB", "Redis"],
    demoUrl: "https://analytics-pro.demo.com",
    githubUrl: "https://github.com/alexthompson/analytics-dashboard",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    title: "E-commerce Platform",
    description: "Modern, scalable e-commerce solution with advanced inventory management and seamless payment integration.",
    summary: "Full-stack e-commerce platform featuring microservices architecture, automated inventory tracking, and multi-payment gateway support. Includes admin dashboard, customer portal, and mobile app.",
    tech: ["Vue.js", "Express.js", "Stripe API", "Docker", "AWS", "GraphQL"],
    demoUrl: "https://shopflow-demo.com",
    githubUrl: "https://github.com/alexthompson/shopflow",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    title: "Social Learning Platform",
    description: "Interactive educational platform with gamification, peer-to-peer learning, and progress tracking.",
    summary: "Engaging learning environment that combines social features with educational content. Features include study groups, achievement systems, and adaptive learning paths powered by machine learning algorithms.",
    tech: ["React Native", "Firebase", "TensorFlow", "Python", "Flask", "WebRTC"],
    demoUrl: "https://learnhub-social.demo.com",
    githubUrl: "https://github.com/alexthompson/social-learning",
    image: "https://picsum.photos/600/400?random=4",
  },
];

interface ProjectsSectionProps {
  onNavigate: (section: Section) => void;
}

export function ProjectsSection({ onNavigate }: ProjectsSectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute inset-0 py-20 px-4 sm:px-6 lg:px-8 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions I've built, from AI-powered applications 
            to scalable web platforms that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group glassmorphism glow-hover border-white/20 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <div 
                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.summary}
                    </p>
                  </motion.div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="glassmorphism text-xs hover:glow transition-shadow duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 glow-hover text-white flex-1"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLinkIcon className="mr-2 h-4 w-4" />
                      Try Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="glassmorphism"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}