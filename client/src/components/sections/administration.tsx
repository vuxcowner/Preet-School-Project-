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
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-electric-blue text-glow">
            Leadership Team
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-neon-purple mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Principal */}
          <div className="glass-effect neon-border rounded-2xl p-8 mb-8 hover-glow transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 rounded-full glass-effect neon-border flex items-center justify-center">
                <User className="w-20 h-20 text-electric-blue" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-orbitron text-2xl font-bold text-neon-cyan mb-2">Ms. Ritu Behal</h3>
                <p className="text-electric-blue font-semibold mb-4">Principal (MA, M.Ed.)</p>
                <p className="text-gray-300 leading-relaxed">
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
            <div className="glass-effect neon-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-xl font-semibold mb-6 text-neon-purple">Official Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">DoE School ID:</span>
                  <span className="text-electric-blue font-mono">1001151</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">UDISE Code:</span>
                  <span className="text-electric-blue font-mono">07040123701</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">CBSE Affiliation:</span>
                  <span className="text-electric-blue font-mono">2752106</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">District/Zone:</span>
                  <span className="text-electric-blue">Shahdara, East Zone-01</span>
                </div>
              </div>
            </div>
            
            {/* Academic Structure */}
            <div className="glass-effect neon-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-xl font-semibold mb-6 text-neon-cyan">Academic Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Education Type:</span>
                  <span className="text-neon-cyan">Co-educational</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Classes Offered:</span>
                  <span className="text-neon-cyan">6th to 10th</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">School Level:</span>
                  <span className="text-neon-cyan">Secondary</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Board Affiliation:</span>
                  <span className="text-neon-cyan">CBSE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
