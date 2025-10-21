import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkSection, setIsDarkSection] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detectar si estamos en una sección negra (Services o Contact)
      const servicesSection = document.getElementById('services');
      const contactSection = document.getElementById('contact');
      const navbarHeight = 80;
      
      let inDarkSection = false;
      
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          inDarkSection = true;
        }
      }
      
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          inDarkSection = true;
        }
      }
      
      setIsDarkSection(inDarkSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ES' ? 'EN' : 'ES');
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''} ${isDarkSection ? 'dark' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar-container">
        <motion.a 
          href="#home" 
          className="navbar-logo"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <span className="logo-solid">SOLID</span>
          <span className="logo-pro">PRO</span>
        </motion.a>

        <div className="navbar-center">
          <div className="navbar-menu">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="navbar-link"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="navbar-actions">
          <motion.button
            className="navbar-language"
            onClick={toggleLanguage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Cambiar idioma"
          >
            <Globe size={18} />
            <span>{language}</span>
          </motion.button>

          <motion.a
            href="#contact"
            className="navbar-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.nav.contact}
          </motion.a>
        </div>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="navbar-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="navbar-mobile-actions">
              <motion.button
                className="navbar-mobile-language"
                onClick={toggleLanguage}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Globe size={18} />
                <span>{language === 'ES' ? 'English' : 'Español'}</span>
              </motion.button>
              <motion.a
                href="#contact"
                className="navbar-mobile-cta"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navItems.length + 1) * 0.1 }}
              >
                {t.nav.contact}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

