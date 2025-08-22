import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset: number = 60) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id));
      let current = '';

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - offset) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
