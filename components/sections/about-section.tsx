"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CodeIcon, CoffeeIcon, GlobeIcon, HeartIcon, BookOpenIcon, RocketIcon } from 'lucide-react';
import { Section } from '@/app/page';

const funFacts = [
  { icon: CodeIcon, text: "10+ years of coding experience" },
  { icon: CoffeeIcon, text: "Powered by specialty coffee ☕" },
  { icon: GlobeIcon, text: "Worked with teams across 15+ countries" },
  { icon: HeartIcon, text: "Open source contributor" },
  { icon: BookOpenIcon, text: "Continuous learner & tech enthusiast" },
  { icon: RocketIcon, text: "Launched 25+ successful projects" },
];

interface AboutSectionProps {
  onNavigate: (section: Section) => void;
}

export function AboutSection({ onNavigate }: AboutSectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The story behind the code, the passion that drives innovation, and the human side of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">The Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey into technology began over a decade ago with a simple curiosity: 
                <em> "How can we make complex things feel effortless?"</em> This question has driven 
                every project, every line of code, and every innovation I've pursued.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Starting as a self-taught developer, I've evolved into a full-stack engineer who 
                bridges the gap between cutting-edge technology and human-centered design. I believe 
                the best solutions are those that users don't have to think about – they just work.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">The Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about creating digital experiences that don't just function – they 
                delight. Whether it's implementing AI that feels magical or optimizing performance 
                to save users precious seconds, I obsess over the details that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring the latest in AI research, 
                contributing to open source projects, or mentoring fellow developers. I believe 
                in sharing knowledge and lifting others as we climb.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="glassmorphism glow-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold gradient-text mb-4">Fun Facts</h3>
                <div className="grid grid-cols-1 gap-4">
                  {funFacts.map((fact, index) => (
                    <motion.div
                      key={fact.text}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 rounded-lg glassmorphism"
                    >
                      <fact.icon className="h-5 w-5 text-purple-500" />
                      <span className="text-sm">{fact.text}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glassmorphism glow-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold gradient-text mb-4">Currently</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Building</span>
                    <Badge variant="secondary" className="glassmorphism">AI-Powered SaaS</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Learning</span>
                    <Badge variant="secondary" className="glassmorphism">Rust & WebAssembly</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Reading</span>
                    <Badge variant="secondary" className="glassmorphism">System Design</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Location</span>
                    <Badge variant="secondary" className="glassmorphism">San Francisco, CA</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}