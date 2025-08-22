import { GraduationCap, Trophy, Award, Microscope, Calculator, Languages } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AcademicsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section 
      id="academics" 
      ref={ref}
      className={`py-20 ${hasIntersected ? 'section-reveal revealed' : 'section-reveal'}`}
      data-testid="academics-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-school-blue text-glow">
            Academic Excellence
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Classes 6-8 */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <div className="text-center mb-6">
              <GraduationCap className="w-16 h-16 text-peach mb-4 mx-auto" />
              <h3 className="font-orbitron text-xl font-semibold text-green-tea">Classes VI - VIII</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Foundation Sciences
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Mathematics
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                English & Hindi
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Social Studies
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Computer Science
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Art & Craft
              </li>
            </ul>
          </div>
          
          {/* Classes 9-10 */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <div className="text-center mb-6">
              <Trophy className="w-16 h-16 text-school-blue mb-4 mx-auto" />
              <h3 className="font-orbitron text-xl font-semibold text-green-tea">Classes IX - X</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Physics, Chemistry, Biology
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Advanced Mathematics
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                English Literature
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Hindi Literature
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Social Science
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Information Technology
              </li>
            </ul>
          </div>
          
          {/* CBSE Curriculum */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-center mb-6">
              <Award className="w-16 h-16 text-green-tea mb-4 mx-auto" />
              <h3 className="font-orbitron text-xl font-semibold text-green-tea">CBSE Standards</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                CCE Assessment
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Skill Development
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Value Education
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Life Skills Training
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Board Exam Preparation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Career Guidance
              </li>
            </ul>
          </div>
        </div>
        
        {/* Special Programs */}
        <div className="mt-16">
          <h3 className="font-orbitron text-2xl font-semibold text-center mb-8 text-peach">
            Special Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect school-border rounded-xl p-6 text-center hover-glow transition-all duration-300">
              <Microscope className="w-12 h-12 text-peach mb-4 mx-auto" />
              <h4 className="font-semibold mb-2 text-green-tea">Science Labs</h4>
              <p className="text-muted-foreground text-sm">Hands-on learning in well-equipped laboratories</p>
            </div>
            <div className="glass-effect school-border rounded-xl p-6 text-center hover-glow transition-all duration-300">
              <Languages className="w-12 h-12 text-school-blue mb-4 mx-auto" />
              <h4 className="font-semibold mb-2 text-green-tea">Language Development</h4>
              <p className="text-muted-foreground text-sm">Enhanced English and Hindi communication skills</p>
            </div>
            <div className="glass-effect school-border rounded-xl p-6 text-center hover-glow transition-all duration-300">
              <Calculator className="w-12 h-12 text-green-tea mb-4 mx-auto" />
              <h4 className="font-semibold mb-2 text-green-tea">Mathematics Excellence</h4>
              <p className="text-muted-foreground text-sm">Advanced problem-solving and analytical thinking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
