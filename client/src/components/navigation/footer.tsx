import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 border-t border-gray-800" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-orbitron text-xl font-bold text-electric-blue mb-4">GSST</h3>
            <p className="text-gray-400 text-sm mb-4">
              Shaping Future Leaders with Knowledge & Values since 1966.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="glass-effect w-10 h-10 rounded-full flex items-center justify-center hover-glow transition-all duration-300"
                data-testid="social-facebook"
              >
                <Facebook className="w-4 h-4 text-electric-blue" />
              </a>
              <a 
                href="#" 
                className="glass-effect w-10 h-10 rounded-full flex items-center justify-center hover-glow transition-all duration-300"
                data-testid="social-twitter"
              >
                <Twitter className="w-4 h-4 text-neon-cyan" />
              </a>
              <a 
                href="#" 
                className="glass-effect w-10 h-10 rounded-full flex items-center justify-center hover-glow transition-all duration-300"
                data-testid="social-instagram"
              >
                <Instagram className="w-4 h-4 text-neon-purple" />
              </a>
              <a 
                href="#" 
                className="glass-effect w-10 h-10 rounded-full flex items-center justify-center hover-glow transition-all duration-300"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-4 h-4 text-electric-blue" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-electric-blue transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('academics')}
                  className="hover:text-electric-blue transition-colors"
                  data-testid="footer-link-academics"
                >
                  Academics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('facilities')}
                  className="hover:text-electric-blue transition-colors"
                  data-testid="footer-link-facilities"
                >
                  Facilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('admissions')}
                  className="hover:text-electric-blue transition-colors"
                  data-testid="footer-link-admissions"
                >
                  Admissions
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>CBSE Affiliation: 2752106</li>
              <li>UDISE Code: 07040123701</li>
              <li>DoE ID: 1001151</li>
              <li>Est. 1966</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-orbitron font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Teliwara, Shahdara</li>
              <li>Delhi - 110032</li>
              <li>+91 11 22393033</li>
              <li>shahdrateliwara@yahoo.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Govt. Co-ed. Secondary School, Teliwara. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
