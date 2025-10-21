import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import History from './components/History';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <History />
        <Projects />
        <Testimonials />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

