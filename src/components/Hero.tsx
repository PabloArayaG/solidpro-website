import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = [
    '/engineer.png',
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1920&auto=format&fit=crop&q=80',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="hero-background-image"
            style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="hero-cta-primary"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(196, 30, 58, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t.hero.ctaQuote}</span>
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="#projects"
              className="hero-cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={20} />
              <span>{t.hero.ctaProjects}</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="hero-image-frame">
            <img 
              src="/engineer.png" 
              alt="SolidPro Engineering" 
              className="hero-engineer-image"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          className="scroll-line"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;

