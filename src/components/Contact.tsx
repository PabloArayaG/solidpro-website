import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="contact-title">{t.contact.title}</h2>
          <p className="contact-subtitle">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="contact-info-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <div className="contact-details">
                <h3>{t.contact.phone}</h3>
                <a href="tel:+56974580597">+56 9 7458 0597</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <div className="contact-details">
                <h3>{t.contact.email}</h3>
                <a href="mailto:contacto@solidpro.cl">contacto@solidpro.cl</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-details">
                <h3>{t.contact.address}</h3>
                <p>San Martín 1030, Penco, Chile</p>
              </div>
            </div>

            <motion.a
              href="mailto:contacto@solidpro.cl"
              className="contact-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.contact.cta}
            </motion.a>
          </motion.div>

          <motion.div
            className="contact-map"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3265!2d-72.9936!3d-36.7397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDQ0JzIzLjAiUyA3MsKwNTknMzcuMCJX!5e0!3m2!1sen!2scl!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación SolidPro"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

