import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

interface LocationPageProps {
  isActive: boolean;
  onNavigate: (pageIndex: number) => void;
}

export function LocationPage({ isActive }: LocationPageProps) {
  const handleOpenMaps = () => {
    window.open('https://maps.app.goo.gl/w3DsEPCNJb4o4KDT6', '_blank');
  };

  return (
    <section className="min-h-screen py-20 flex items-center">
      <div className="container mx-auto px-4">
        <div className={`${isActive ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-school-blue text-glow">
              Find Us Here
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
                <h3 className="font-orbitron text-2xl font-semibold mb-6 text-green-tea">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-school-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Address</h4>
                      <p className="text-muted-foreground">Teliwara, Shahdara, Delhi – 110032</p>
                      <p className="text-gray-400 text-sm">(Near Durga Mandir / Teliwara Chowk)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-peach mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Phone</h4>
                      <p className="text-muted-foreground">+91 11 22393033</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-8 h-8 text-green-tea mt-1" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">Email</h4>
                      <p className="text-muted-foreground">shahdrateliwara@yahoo.com</p>
                      <p className="text-muted-foreground">1001151hos@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
                <h3 className="font-orbitron text-xl font-semibold mb-4 text-school-blue">School Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-peach" />
                    <span className="font-semibold text-white">Operating Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="text-white">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="text-white">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="text-peach">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive Map */}
            <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-semibold mb-6 text-green-tea text-center">School Location</h3>
              <div 
                className="aspect-video bg-dark-glass rounded-lg flex items-center justify-center cursor-pointer hover:bg-gradient-to-br hover:from-school-blue/20 hover:to-peach/20 transition-all duration-300 group border-2 border-transparent hover:border-peach/50"
                onClick={handleOpenMaps}
              >
                <div className="text-center group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-16 h-16 text-school-blue mb-4 mx-auto group-hover:text-peach transition-colors duration-300" />
                  <p className="text-white font-semibold mb-2 group-hover:text-peach transition-colors duration-300">Click to Open Google Maps</p>
                  <p className="text-muted-foreground text-sm mb-3">Teliwara, Shahdara, Delhi - 110032</p>
                  <div className="flex items-center justify-center gap-2 text-peach group-hover:text-white transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-xs">Get Directions</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <button 
                  onClick={handleOpenMaps}
                  className="bg-gradient-to-r from-school-blue to-peach text-white font-semibold px-8 py-3 rounded-full hover-glow transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Directions */}
          <div className="mt-16">
            <div className="glass-effect school-border rounded-2xl p-8 hover-glow transition-all duration-300">
              <h3 className="font-orbitron text-2xl font-semibold mb-6 text-peach text-center">How to Reach Us</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-school-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">🚌</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">By Bus</h4>
                  <p className="text-muted-foreground text-sm">DTC buses to Shahdara and Teliwara routes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-tea rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">🚇</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">By Metro</h4>
                  <p className="text-muted-foreground text-sm">Nearest: Mansarovar Park Metro Station</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-peach rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">🚗</span>
                  </div>
                  <h4 className="font-semibold text-white mb-2">By Car</h4>
                  <p className="text-muted-foreground text-sm">Parking available near Durga Mandir</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}