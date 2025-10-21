import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Linkedin, Instagram } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const menuItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">SOLIDPRO</h3>
            <p className="footer-tagline">
              {t.footer.tagline}
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">{t.footer.navigation}</h4>
            <nav className="footer-nav">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="footer-link"
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>

          <div className="footer-social">
            <h4 className="footer-social-title">{t.footer.followUs}</h4>
            <div className="footer-social-links">
              <motion.a
                href="https://linkedin.com/company/solidpro"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://instagram.com/solidpro"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                whileHover={{ y: -3 }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

