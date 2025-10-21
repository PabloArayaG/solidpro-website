import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useLanguage } from '../contexts/LanguageContext';
import { Factory, Lightbulb, LineChart } from 'lucide-react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const { t } = useLanguage();

  const projects = [
    {
      icon: <Factory size={40} />,
      title: t.projects.project1.title,
      description: t.projects.project1.description,
      imageSrc: '/1.jpeg'
    },
    {
      icon: <Lightbulb size={40} />,
      title: t.projects.project2.title,
      description: t.projects.project2.description,
      imageSrc: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop'
    },
    {
      icon: <LineChart size={40} />,
      title: t.projects.project3.title,
      description: t.projects.project3.description,
      imageSrc: '/2.jpeg'
    }
  ];

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="projects-title">{t.projects.title}</h2>
          <p className="projects-subtitle">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -15 }}
            >
              <div className="project-image-container">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-icon">{project.icon}</div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

