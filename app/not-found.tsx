"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { HomeIcon, ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient opacity-10 dark:opacity-20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Large 404 */}
          <motion.div
            className="text-8xl sm:text-9xl font-bold gradient-text mb-8"
            animate={{ 
              textShadow: ['0 0 20px rgba(139,92,246,0.5)', '0 0 40px rgba(139,92,246,0.8)', '0 0 20px rgba(139,92,246,0.5)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.div>

          {/* Error Message */}
          <motion.h1
            className="text-2xl sm:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Looks like you've wandered into uncharted digital territory. 
            Don't worry, even the best explorers take wrong turns sometimes.
          </motion.p>

          {/* Inspirational Quote */}
          <motion.blockquote
            className="text-muted-foreground/80 italic mb-8 border-l-4 border-purple-500/50 pl-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            "Creativity is intelligence having fun. Sometimes that means getting lost 
            and finding something even better along the way."
            <footer className="text-sm mt-2 not-italic">— Albert Einstein (probably)</footer>
          </motion.blockquote>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 glow-hover text-white px-8 py-3"
              >
                <HomeIcon className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Back to Home
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="glassmorphism glow-hover px-8 py-3"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </motion.div>

          {/* Fun Interactive Element */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="inline-block cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.location.reload()}
            >
              <div className="text-4xl">🚀</div>
              <p className="text-xs text-muted-foreground mt-2">Click me for a surprise!</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}