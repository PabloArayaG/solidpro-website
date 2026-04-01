import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
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

      </div>
    </section>
  );
};

export default About;

