import { User } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AdministrationSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section 
      id="administration" 
      ref={ref}
      className={`py-20 ${hasIntersected ? 'section-reveal revealed' : 'section-reveal'}`}
      data-testid="administration-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-school-blue text-glow">
            Leadership Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Principal */}
          <div className="glass-effect school-border rounded-2xl p-8 mb-8 hover-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 rounded-full glass-effect school-border flex items-center justify-center">
                <User className="w-20 h-20 text-school-blue" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-orbitron text-2xl font-bold text-peach mb-2">Ms. Ritu Behal</h3>
                <p className="text-school-blue font-semibold mb-4">Principal (MA, M.Ed.)</p>
                <p className="text-muted-foreground leading-relaxed">
                  "Leading with vision and dedication, I am committed to fostering an environment where every student 
                  can achieve academic excellence while developing strong moral values. Our school's mission is to 
                  prepare students not just for examinations, but for life itself, ensuring they become responsible 
                  citizens and future leaders."
                </p>
              </div>
            </div>
          </div>
          
          {/* School Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Official Details */}
            <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-xl font-semibold mb-6 text-green-tea">Official Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">DoE School ID:</span>
                  <span className="text-school-blue font-mono">1001151</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">UDISE Code:</span>
                  <span className="text-school-blue font-mono">07040123701</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">CBSE Affiliation:</span>
                  <span className="text-school-blue font-mono">2752106</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">District/Zone:</span>
                  <span className="text-school-blue">Shahdara, East Zone-01</span>
                </div>
              </div>
            </div>
            
            {/* Academic Structure */}
            <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-xl font-semibold mb-6 text-peach">Academic Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Education Type:</span>
                  <span className="text-peach">Co-educational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Classes Offered:</span>
                  <span className="text-peach">6th to 10th</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">School Level:</span>
                  <span className="text-peach">Secondary</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Board Affiliation:</span>
                  <span className="text-peach">CBSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
