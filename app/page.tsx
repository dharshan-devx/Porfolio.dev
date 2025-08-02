"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { AboutSection } from '@/components/sections/about-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ChatBot } from '@/components/chatbot';

export type Section = 'home' | 'projects' | 'skills' | 'about' | 'contact';

const sections: { id: Section; component: React.ComponentType<{ onNavigate: (section: Section) => void }> }[] = [
  { id: 'home', component: HeroSection },
  { id: 'projects', component: ProjectsSection },
  { id: 'skills', component: SkillsSection },
  { id: 'about', component: AboutSection },
  { id: 'contact', component: ContactSection },
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('home');

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = sections.findIndex(s => s.id === currentSection);
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % sections.length;
        setCurrentSection(sections[nextIndex].id);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? sections.length - 1 : currentIndex - 1;
        setCurrentSection(sections[prevIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  return (
    <div className="h-screen overflow-hidden">
      <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
      <main className="relative h-full">
        <AnimatePresence mode="wait">
          {sections.map(({ id, component: Component }) => 
            currentSection === id ? (
              <Component key={id} onNavigate={handleNavigate} />
            ) : null
          )}
        </AnimatePresence>
      </main>
      <ChatBot />
      {currentSection === 'contact' && <Footer />}
    </div>
  );
}