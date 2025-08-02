"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircleIcon, XIcon, SendIcon, BotIcon, UserIcon, DownloadIcon, MinimizeIcon } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Alex's AI assistant. I can help you learn about his projects, skills, experience, and even download his resume. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('resume') || message.includes('cv')) {
      return "I can help you download Alex's resume! It includes his complete work history, technical skills, and project details. Would you like me to start the download?";
    }
    
    if (message.includes('best project') || message.includes('favorite project')) {
      return "Alex's standout project is definitely the AI-Powered Task Manager! It uses natural language processing and OpenAI's API to understand context and automatically organize workloads. It's a perfect example of his expertise in AI integration and user-centered design.";
    }
    
    if (message.includes('project') || message.includes('work')) {
      return "Alex has worked on some amazing projects! His standouts include an AI-powered task manager with natural language processing, a real-time analytics dashboard, and a scalable e-commerce platform. Which type of project interests you most?";
    }
    
    if (message.includes('hire') || message.includes('available') || message.includes('work with')) {
      return "Great question! Alex is currently available for new projects and collaborations. He specializes in full-stack development with AI integration. You can reach him at alex@alexthompson.dev or use the contact form. He typically responds within 24 hours!";
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('tech')) {
      return "Alex is a full-stack developer with expertise in React, Next.js, Node.js, Python, and AI integration. He's particularly strong in building scalable web applications and implementing AI solutions. Is there a specific technology you'd like to know about?";
    }
    
    if (message.includes('experience') || message.includes('background')) {
      return "Alex has over 10 years of development experience, working with teams across 15+ countries. He's launched 25+ successful projects, contributed to open source (his React library has 10K+ GitHub stars!), and is passionate about creating user-friendly solutions.";
    }
    
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return "You can reach Alex at alex@alexthompson.dev, connect on LinkedIn, or use the contact form on this site. He's also active on GitHub and Twitter. He typically responds within 24 hours and is always open to interesting conversations!";
    }
    
    if (message.includes('ai') || message.includes('artificial intelligence')) {
      return "Alex specializes in AI integration! He's worked with OpenAI API, TensorFlow, Langchain, and various NLP solutions. His AI-powered task manager and this very chatbot are great examples of practical AI implementation. He's passionate about making AI feel magical, not overwhelming.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Great to meet you! I'm Alex's AI assistant, here to help you learn about his work. I can tell you about his projects (like AI tools and analytics dashboards), his technical skills, his experience, or help you get in touch. What interests you most?";
    }
    
    if (message.includes('download')) {
      return "Starting resume download... The file includes Alex's complete professional history, technical expertise, and notable achievements. Check your downloads folder!";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm here whenever you need to know more about Alex's work. Feel free to ask about his projects, download his resume, or get his contact info. Is there anything else you'd like to know?";
    }
    
    return "That's a great question! I can tell you about Alex's projects (AI tools, analytics dashboards, e-commerce platforms), his technical skills (React, Next.js, AI integration), his 10+ years of experience, or help you contact him. What would you like to explore?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Check if user wants to download resume
    if (inputValue.toLowerCase().includes('download') || inputValue.toLowerCase().includes('resume')) {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Alex_Thompson_Resume.pdf';
        link.click();
        toast.success('Resume download started!');
      }, 1000);
    }

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 glow-hover shadow-2xl border-2 border-white/20"
            >
              <MessageCircleIcon className="h-7 w-7 text-white" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Window */}
            <motion.div
              initial={{ 
                opacity: 0, 
                y: "100%",
                scale: 0.9
              }}
              animate={{ 
                opacity: 1, 
                y: isMinimized ? "calc(100% - 60px)" : 0,
                scale: 1
              }}
              exit={{ 
                opacity: 0, 
                y: "100%",
                scale: 0.9
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 w-full md:w-96 h-full md:h-auto md:max-h-[600px]"
            >
              <Card className="glassmorphism glow border-2 border-purple-500/30 shadow-2xl h-full md:h-auto backdrop-blur-xl bg-background/95">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <BotIcon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg gradient-text">Alex's AI Assistant</CardTitle>
                      <p className="text-xs text-muted-foreground">Always here to help</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="h-8 w-8 hidden md:flex"
                    >
                      <MinimizeIcon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="h-8 w-8"
                    >
                      <XIcon className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                
                {!isMinimized && (
                  <CardContent className="p-0 flex flex-col h-full md:h-auto">
                    {/* Messages */}
                    <div className="flex-1 h-80 md:h-64 overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                        >
                          <div className={`flex max-w-[85%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className={`flex-shrink-0 ${message.isBot ? 'mr-3' : 'ml-3'}`}>
                              {message.isBot ? (
                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                                  <BotIcon className="h-4 w-4 text-white" />
                                </div>
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                  <UserIcon className="h-4 w-4" />
                                </div>
                              )}
                            </div>
                            <div
                              className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                                message.isBot
                                  ? 'bg-muted/80 text-foreground rounded-bl-md'
                                  : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-md'
                              }`}
                            >
                              {message.content}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-white/10 space-y-3">
                      <div className="flex space-x-2">
                        <Input
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          onKeyPress={handleKeyPress}
                          placeholder="Ask about projects, skills, or experience..."
                          className="glassmorphism flex-1 border-white/20 focus:border-purple-500/50"
                        />
                        <Button
                          onClick={handleSendMessage}
                          size="icon"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 glow-hover"
                        >
                          <SendIcon className="h-4 w-4 text-white" />
                        </Button>
                      </div>

                      {/* Quick Actions */}
                      <div className="flex flex-wrap gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setInputValue('What\'s your best project?')}
                          className="glassmorphism text-xs border-white/20 hover:border-purple-500/50"
                        >
                          Best Project
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setInputValue('What are his skills?')}
                          className="glassmorphism text-xs border-white/20 hover:border-purple-500/50"
                        >
                          Skills
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setInputValue('Can I hire him?')}
                          className="glassmorphism text-xs border-white/20 hover:border-purple-500/50"
                        >
                          Hire Alex
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setInputValue('Download resume')}
                          className="glassmorphism text-xs border-white/20 hover:border-purple-500/50"
                        >
                          <DownloadIcon className="mr-1 h-3 w-3" />
                          Resume
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}