import { Monitor, BookOpen, Computer, Activity, FlaskConical, Music, Utensils, Bus } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function FacilitiesSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <section 
      id="facilities" 
      ref={ref}
      className={`py-20 ${hasIntersected ? 'section-reveal revealed' : 'section-reveal'}`}
      data-testid="facilities-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-green-tea text-glow">
            World-Class Facilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-electric-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Smart Classrooms */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <div className="flex items-center mb-6">
              <Monitor className="w-16 h-16 text-peach mr-4" />
              <h3 className="font-orbitron text-xl font-semibold text-white">Smart Classrooms</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Interactive digital boards, multimedia projectors, and modern teaching aids for enhanced learning experiences.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Interactive Whiteboards
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Audio-Visual Systems
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                High-Speed Internet
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Digital Content Library
              </li>
            </ul>
          </div>
          
          {/* Library */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <div className="flex items-center mb-6">
              <BookOpen className="w-16 h-16 text-school-blue mr-4" />
              <h3 className="font-orbitron text-xl font-semibold text-white">Digital Library</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Extensive collection of books, digital resources, and quiet study spaces for academic excellence.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                5000+ Books Collection
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Digital Resources
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Reading Rooms
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-purple rounded-full mr-3"></div>
                Reference Section
              </li>
            </ul>
          </div>
          
          {/* Computer Lab */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <div className="flex items-center mb-6">
              <Computer className="w-16 h-16 text-green-tea mr-4" />
              <h3 className="font-orbitron text-xl font-semibold text-white">Computer Laboratory</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              State-of-the-art computers with latest software for programming and digital literacy.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                30+ Modern Systems
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Programming Software
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Internet Access
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-neon-cyan rounded-full mr-3"></div>
                Coding Workshops
              </li>
            </ul>
          </div>
          
          {/* Sports Ground */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <div className="flex items-center mb-6">
              <Activity className="w-16 h-16 text-peach mr-4" />
              <h3 className="font-orbitron text-xl font-semibold text-white">Sports Complex</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Comprehensive sports facilities promoting physical fitness and team spirit among students.
            </p>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Basketball Court
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Badminton Courts
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Athletics Track
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                Indoor Games
              </li>
            </ul>
          </div>
        </div>
        
        {/* Additional Facilities */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass-effect school-border rounded-xl p-6 text-center hover-glow transition-all duration-300">
              <FlaskConical className="w-12 h-12 text-peach mb-4 mx-auto" />
              <h4 className="font-semibold text-white">Science Labs</h4>
              <p className="text-muted-foreground text-xs mt-2">Physics, Chemistry & Biology</p>
            </div>
            <div className="glass-effect school-border rounded-xl p-6 text-center hover-glow transition-all duration-300">
              <Music className="w-12 h-12 text-school-blue mb-4 mx-auto" />
              <h4 className="font-semibold text-white">Music Room</h4>
              <p className="text-muted-foreground text-xs mt-2">Cultural Activities</p>
            </div>
            <div className="glass-effect school-border rounded-xl p-6 text-center hover-glow transition-all duration-300">
              <Utensils className="w-12 h-12 text-green-tea mb-4 mx-auto" />
              <h4 className="font-semibold text-white">Cafeteria</h4>
              <p className="text-muted-foreground text-xs mt-2">Nutritious Meals</p>
            </div>
            <div className="glass-effect school-border rounded-xl p-6 text-center hover-glow transition-all duration-300">
              <Bus className="w-12 h-12 text-peach mb-4 mx-auto" />
              <h4 className="font-semibold text-white">Transport</h4>
              <p className="text-muted-foreground text-xs mt-2">Safe Commuting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
