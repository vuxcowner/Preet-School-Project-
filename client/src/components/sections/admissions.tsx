import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export function AdmissionsSection() {
  const { ref, hasIntersected } = useIntersectionObserver();

  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="admissions" 
      ref={ref}
      className={`py-20 ${hasIntersected ? 'section-reveal revealed' : 'section-reveal'}`}
      data-testid="admissions-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-school-blue text-glow">
            Join Our Family
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-electric-blue mx-auto"></div>
          <p className="text-muted-foreground mt-4 text-lg">Admissions Open for Academic Session 2024-25</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Admission Process */}
          <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
            <h3 className="font-orbitron text-2xl font-semibold mb-6 text-peach">Admission Process</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-electric-blue text-cosmic flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Application Form</h4>
                  <p className="text-muted-foreground text-sm">
                    Download and fill the admission form from the school office or website.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-purple text-cosmic flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Document Submission</h4>
                  <p className="text-muted-foreground text-sm">
                    Submit required documents along with the completed application form.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-neon-cyan text-cosmic flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Assessment</h4>
                  <p className="text-muted-foreground text-sm">
                    Age-appropriate assessment and interaction with the child.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-electric-blue text-cosmic flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Admission Confirmation</h4>
                  <p className="text-muted-foreground text-sm">
                    Fee payment and admission confirmation upon selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Required Documents */}
          <div className="space-y-8">
            <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-semibold mb-6 text-green-tea">Required Documents</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Birth Certificate (Original + 2 copies)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Previous School Transfer Certificate
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Previous Year Report Card
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Aadhaar Card Copy (Student & Parents)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Residential Proof
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Passport Size Photographs (6 copies)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                  Caste Certificate (if applicable)
                </li>
              </ul>
            </div>
            
            <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-xl font-semibold mb-4 text-school-blue">Important Dates</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Admission Form Available:</span>
                  <span className="text-peach">February 1, 2024</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Last Date for Submission:</span>
                  <span className="text-school-blue">March 15, 2024</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Assessment Period:</span>
                  <span className="text-green-tea">March 20-25, 2024</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Admission Confirmation:</span>
                  <span className="text-peach">March 30, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-peach to-green-tea text-white font-semibold px-8 py-4 rounded-full hover-glow transition-all duration-300"
            data-testid="apply-now-button"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
