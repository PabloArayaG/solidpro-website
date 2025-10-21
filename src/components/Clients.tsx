import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/Clients.css';

const Clients: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const clients = [
    { name: 'Clínica Biobío', logo: '/Logo Clinica Biobio - 388x136.png' },
    { name: 'AquaChile', logo: '/Logo-Aqua.png' },
    { name: 'MAF Chile', logo: '/logo-maf-chile.png' },
    { name: 'Cliente 4', logo: '/2ae0594cc1621fcb9219492d24797585-1-1.png' },
  ];

  return (
    <section className="clients" ref={ref}>
      <div className="clients-container">
        <motion.div
          className="clients-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="clients-title">{t.clients.title}</h2>
          <p className="clients-subtitle">
            {t.clients.subtitle}
          </p>
        </motion.div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="client-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="client-logo">
                <img src={client.logo} alt={client.name} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

