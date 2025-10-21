import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar } from 'lucide-react';
import '../styles/History.css';

const History: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section className="history" ref={ref}>
      <div className="history-container">
        <motion.div
          className="history-content"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="history-badge">
            <Calendar size={20} />
            <span>{t.history.badge}</span>
          </div>
          <h2 className="history-title">{t.history.title}</h2>
          <p className="history-text">
            {t.history.text1}
          </p>
          <p className="history-text">
            {t.history.text2}
          </p>
        </motion.div>

        <motion.div
          className="history-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2009</span>
                <p className="timeline-desc">{t.history.timeline.item1}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2015</span>
                <p className="timeline-desc">{t.history.timeline.item2}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2020</span>
                <p className="timeline-desc">{t.history.timeline.item3}</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot active"></div>
              <div className="timeline-content">
                <span className="timeline-year">2025</span>
                <p className="timeline-desc">{t.history.timeline.item4}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;

