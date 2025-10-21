import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Services.css';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [titleBlur, setTitleBlur] = useState(10);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: t.services.service1.title,
      description: t.services.service1.description,
      image: '/4.jpeg'
    },
    {
      title: t.services.service2.title,
      description: t.services.service2.description,
      image: '/5.jpeg'
    },
    {
      title: t.services.service3.title,
      description: t.services.service3.description,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop&q=80'
    },
    {
      title: t.services.service4.title,
      description: t.services.service4.description,
      image: '/2.jpeg'
    },
    {
      title: t.services.service5.title,
      description: t.services.service5.description,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=80'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isMobile = window.innerWidth <= 768;
      
      // Detectar si está en viewport
      if (rect.top < windowHeight * 0.8) {
        setIsInView(true);
      }
      
      // Animación de blur del título (solo desktop)
      if (!isMobile) {
        if (rect.top <= windowHeight && rect.top > 0) {
          // Progreso de entrada: de difuminado a claro
          const enterProgress = 1 - (rect.top / windowHeight);
          
          // Blur: de 10px a 0px
          const blur = 10 * (1 - enterProgress);
          setTitleBlur(Math.max(0, blur));
        } else if (rect.top <= 0) {
          setTitleBlur(0);
        } else {
          setTitleBlur(10);
        }
      } else {
        setTitleBlur(0); // Sin blur en mobile
      }
      
      // Calcula el progreso de los servicios
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const sectionHeight = section.offsetHeight;
        const scrollableHeight = sectionHeight - windowHeight;
        
        // Cuánto hemos scrolleado dentro de la sección
        const scrolled = Math.abs(rect.top);
        const progress = Math.max(0, Math.min(scrolled / scrollableHeight, 1));
        
        // Calcula el índice basado en el progreso
        const totalServices = services.length;
        const serviceIndex = Math.floor(progress * totalServices);
        
        setActiveService(Math.min(serviceIndex, totalServices - 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [services.length]);

  return (
    <section className="services" id="services" ref={sectionRef}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: isInView ? 1 : 0,
          }}
          style={{
            filter: `blur(${titleBlur}px)`
          }}
          transition={{ opacity: { duration: 0.6 } }}
        >
          <h2 className="services-title">{t.services.title}</h2>
        </motion.div>

        <div className="services-content">
          <div className="services-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="service-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="service-number">0{activeService + 1}</div>
                <h3 className="service-title">{services[activeService].title}</h3>
                <p className="service-description">{services[activeService].description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="services-indicators">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`service-indicator ${index === activeService ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                  aria-label={`Service ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="services-image">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService}
                src={services[activeService].image}
                alt={services[activeService].title}
                className="service-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

