import { FloatingElements } from '@/components/effects/floating-elements';

interface WelcomePageProps {
  isActive: boolean;
  onNavigate: (pageIndex: number) => void;
}

export function WelcomePage({ isActive, onNavigate }: WelcomePageProps) {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`${isActive ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow animate-glow">
            <span className="text-school-blue">GOVT. CO-ED.</span><br />
            <span className="text-foreground">SECONDARY SCHOOL</span><br />
            <span className="text-peach text-2xl md:text-4xl">TELIWARA</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground font-light">
            Shaping Future Leaders with Knowledge & Values
          </p>
          <div className="glass-effect school-border rounded-lg p-4 mb-8 inline-block">
            <p className="text-school-blue font-medium">Est. 1966 | CBSE Affiliated | Classes 6-10</p>
          </div>
          
          {/* 3D Animated Welcome Button */}
          <div className="flex justify-center mb-8">
            <button 
              onClick={() => onNavigate(1)}
              className="welcome-3d-button group relative overflow-hidden bg-gradient-to-r from-peach to-green-tea text-white font-bold text-lg px-12 py-6 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-2xl"
              style={{
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
                backgroundSize: '300% 300%',
                animation: 'gradientShift 3s ease infinite, float 6s ease-in-out infinite'
              }}
            >
              <span className="relative z-10 tracking-wider">EXPLORE OUR SCHOOL</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 rounded-full border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 animate-pulse"></div>
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavigate(1)}
              className="glass-effect school-border rounded-full px-8 py-3 hover-glow transition-all duration-300 font-medium"
            >
              About Our Legacy
            </button>
            <button 
              onClick={() => onNavigate(4)}
              className="bg-peach text-white rounded-full px-8 py-3 hover-glow transition-all duration-300 font-medium"
            >
              Admissions Open
            </button>
          </div>
        </div>
      </div>
      
      <FloatingElements />
      
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        
        .welcome-3d-button {
          box-shadow: 
            0 0 20px rgba(255, 107, 107, 0.3),
            0 0 40px rgba(78, 205, 196, 0.2),
            0 0 60px rgba(69, 183, 209, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.1);
        }
        
        .welcome-3d-button:hover {
          box-shadow: 
            0 0 30px rgba(255, 107, 107, 0.5),
            0 0 60px rgba(78, 205, 196, 0.4),
            0 0 90px rgba(69, 183, 209, 0.3),
            inset 0 0 30px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
}