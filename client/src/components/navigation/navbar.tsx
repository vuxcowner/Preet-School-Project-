import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

const sections = ['home', 'about', 'academics', 'facilities', 'administration', 'admissions', 'gallery', 'contact'];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sections);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect" data-testid="navbar">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="font-orbitron font-bold text-xl text-school-blue">
            GSST
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link hover:text-school-blue transition-colors duration-300 capitalize ${
                  isActive(section) ? 'active' : ''
                }`}
                data-testid={`nav-link-${section}`}
              >
                {section === 'administration' ? 'Admin' : section}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu mt-4 rounded-lg" data-testid="mobile-menu">
            <div className="px-4 py-6 space-y-4">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left nav-link hover:text-school-blue transition-colors duration-300 capitalize ${
                    isActive(section) ? 'active' : ''
                  }`}
                  data-testid={`mobile-nav-link-${section}`}
                >
                  {section === 'administration' ? 'Admin' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
