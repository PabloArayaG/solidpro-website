import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const testimonials = [
    {
      name: t.testimonials.testimonial1.name,
      role: t.testimonials.testimonial1.role,
      text: t.testimonials.testimonial1.text,
      company: t.testimonials.testimonial1.company
    },
    {
      name: t.testimonials.testimonial2.name,
      role: t.testimonials.testimonial2.role,
      text: t.testimonials.testimonial2.text,
      company: t.testimonials.testimonial2.company
    }
  ];

  return (
    <section className="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="testimonials-title">{t.testimonials.title}</h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Quote className="testimonial-quote-icon" size={40} />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                  <p className="testimonial-company">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

