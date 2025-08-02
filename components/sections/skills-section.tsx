"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/app/page';

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "Express.js", "Django", "GraphQL", "REST APIs", "Microservices"],
  },
  {
    title: "Database & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase", "AWS S3"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["OpenAI API", "TensorFlow", "PyTorch", "Langchain", "Vector Databases", "NLP"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD", "Monitoring", "Serverless"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Figma", "Stripe", "WebRTC", "Socket.io", "Testing", "Performance"],
  },
];

interface SkillsSectionProps {
  onNavigate: (section: Section) => void;
}

export function SkillsSection({ onNavigate }: SkillsSectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="absolute inset-0 py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-y-auto"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack, from modern frontend 
            frameworks to AI integration and cloud infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glassmorphism p-6 rounded-lg glow-hover"
            >
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge
                      variant="secondary"
                      className="glassmorphism glow-hover cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}