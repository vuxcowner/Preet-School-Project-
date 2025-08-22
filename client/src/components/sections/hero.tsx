import { FloatingElements } from '@/components/effects/floating-elements';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function HeroSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen hero-bg flex items-center justify-center relative" 
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`${hasIntersected ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow animate-glow">
            <span className="text-electric-blue">GOVT. CO-ED.</span><br />
            <span className="text-white">SECONDARY SCHOOL</span><br />
            <span className="text-neon-purple text-2xl md:text-4xl">TELIWARA</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300 font-light">
            Shaping Future Leaders with Knowledge & Values
          </p>
          <div className="glass-effect neon-border rounded-lg p-4 mb-8 inline-block">
            <p className="text-neon-cyan font-medium">Est. 1966 | CBSE Affiliated | Classes 6-10</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="glass-effect neon-border rounded-full px-8 py-3 hover-glow transition-all duration-300 font-medium"
              data-testid="hero-explore-button"
            >
              Explore Our Legacy
            </button>
            <button 
              onClick={() => scrollToSection('admissions')}
              className="bg-electric-blue text-cosmic rounded-full px-8 py-3 hover-glow transition-all duration-300 font-medium"
              data-testid="hero-admissions-button"
            >
              Admissions Open
            </button>
          </div>
        </div>
      </div>
      
      <FloatingElements />
    </section>
  );
}
