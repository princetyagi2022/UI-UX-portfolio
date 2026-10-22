import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import ProcessSection from './components/ProcessSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import InspectBanner from './components/InspectBanner';

function App() {
  const [inspectMode, setInspectMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const jumpTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`portfolio-app ${inspectMode ? 'is-inspect-mode' : ''}`}>
      <Navbar 
        inspectMode={inspectMode} 
        setInspectMode={setInspectMode} 
        jumpTo={jumpTo} 
      />

      <main id="main-content">
        <Hero jumpTo={jumpTo} inspectMode={inspectMode} />
        <Marquee />
        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)} 
          inspectMode={inspectMode} 
        />
        <SkillsSection inspectMode={inspectMode} />
        <EducationSection inspectMode={inspectMode} />
        <ProcessSection inspectMode={inspectMode} />
        <ExperienceSection inspectMode={inspectMode} />
        <ContactSection inspectMode={inspectMode} />
      </main>

      <Footer jumpTo={jumpTo} />

      {/* Case Study Full Modal */}
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Spec Mode Floating Banner */}
      <InspectBanner 
        inspectMode={inspectMode} 
        setInspectMode={setInspectMode} 
      />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
