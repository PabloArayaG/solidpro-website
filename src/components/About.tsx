import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Eye } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">
            {t.about.title}
          </h2>
          <p className="about-intro">
            {t.about.intro1}
          </p>
          <p className="about-intro">
            {t.about.intro2}
          </p>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="about-card-icon">
              <Target size={32} />
            </div>
            <h3 className="about-card-title">{t.about.missionTitle}</h3>
            <p className="about-card-text">
              {t.about.missionText}
            </p>
          </motion.div>

          <motion.div
            className="about-card"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="about-card-icon">
              <Eye size={32} />
            </div>
            <h3 className="about-card-title">{t.about.visionTitle}</h3>
            <p className="about-card-text">
              {t.about.visionText}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

