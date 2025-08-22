import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-20 ${hasIntersected ? 'section-reveal revealed' : 'section-reveal'}`}
      data-testid="about-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-school-blue text-glow">
            About Our School
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-peach to-green-tea mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-green-tea">Our Heritage</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Established in <span className="text-peach font-semibold">1966</span> and first opened on{' '}
                <span className="text-peach font-semibold">April 1, 1991</span>, our school has been a beacon 
                of quality education in Shahdara, Delhi for over five decades.
              </p>
              <p>
                As a proud CBSE affiliated institution (Affiliation No.{' '}
                <span className="text-school-blue">2752106</span>), we provide comprehensive secondary education 
                from classes 6th to 10th in a co-educational environment.
              </p>
              <p>
                Located in the heart of Teliwara, near Durga Mandir, we serve the East Zone-01 of Shahdara district, 
                nurturing young minds with modern pedagogical approaches.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern school building exterior" 
              className="rounded-xl shadow-lg w-full h-48 object-cover glass-effect hover-glow transition-all duration-300" 
              data-testid="about-image-1"
            />
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Students using modern technology in classroom" 
              className="rounded-xl shadow-lg w-full h-48 object-cover glass-effect hover-glow transition-all duration-300" 
              data-testid="about-image-2"
            />
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern school library with students" 
              className="rounded-xl shadow-lg w-full h-48 object-cover glass-effect hover-glow transition-all duration-300" 
              data-testid="about-image-3"
            />
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Computer lab with modern equipment" 
              className="rounded-xl shadow-lg w-full h-48 object-cover glass-effect hover-glow transition-all duration-300" 
              data-testid="about-image-4"
            />
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center glass-effect school-border rounded-xl p-6 hover-glow transition-all duration-300">
            <div className="font-orbitron text-3xl font-bold text-peach mb-2">57+</div>
            <div className="text-muted-foreground">Years of Excellence</div>
          </div>
          <div className="text-center glass-effect school-border rounded-xl p-6 hover-glow transition-all duration-300">
            <div className="font-orbitron text-3xl font-bold text-green-tea mb-2">1000+</div>
            <div className="text-muted-foreground">Students Served</div>
          </div>
          <div className="text-center glass-effect school-border rounded-xl p-6 hover-glow transition-all duration-300">
            <div className="font-orbitron text-3xl font-bold text-school-blue mb-2">5</div>
            <div className="text-muted-foreground">Grade Levels</div>
          </div>
          <div className="text-center glass-effect school-border rounded-xl p-6 hover-glow transition-all duration-300">
            <div className="font-orbitron text-3xl font-bold text-peach mb-2">100%</div>
            <div className="text-muted-foreground">CBSE Curriculum</div>
          </div>
        </div>
      </div>
    </section>
  );
}
