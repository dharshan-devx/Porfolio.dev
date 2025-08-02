"use client";

import { motion } from 'framer-motion';
import { HeartIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="text-2xl font-bold gradient-text">Alex Thompson</div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Crafting exceptional digital experiences through innovative technology and thoughtful design.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <HeartIcon className="h-4 w-4 text-red-500" />
            <span>using Next.js, Tailwind CSS, and Framer Motion</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 Alex Thompson. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}