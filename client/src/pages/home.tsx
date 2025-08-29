import { useState } from 'react';
import { ParticleBackground } from '@/components/effects/particle-background';
import { ChevronLeft, ChevronRight, Home as HomeIcon, History, Building2, MapPin, GraduationCap } from 'lucide-react';
import { WelcomePage } from '@/components/pages/WelcomePage';
import { HistoryPage } from '@/components/pages/HistoryPage';
import { FacilitiesPage } from '@/components/pages/FacilitiesPage';
import { LocationPage } from '@/components/pages/LocationPage';
import { AdmissionPage } from '@/components/pages/AdmissionPage';

const pages = [
  { id: 0, title: 'Welcome', icon: HomeIcon, component: WelcomePage },
  { id: 1, title: 'History', icon: History, component: HistoryPage },
  { id: 2, title: 'Facilities', icon: Building2, component: FacilitiesPage },
  { id: 3, title: 'Location', icon: MapPin, component: LocationPage },
  { id: 4, title: 'Admission', icon: GraduationCap, component: AdmissionPage },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen relative overflow-hidden" data-testid="home-page">
      <ParticleBackground />
      
      {/* Page Navigation */}
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="glass-effect school-border rounded-full px-6 py-3 flex items-center gap-4">
          {pages.map((page, index) => {
            const IconComponent = page.icon;
            return (
              <button
                key={page.id}
                onClick={() => goToPage(index)}
                className={`p-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                  currentPage === index
                    ? 'bg-peach text-white shadow-lg'
                    : 'text-muted-foreground hover:text-white hover:bg-white/10'
                }`}
                title={page.title}
              >
                <IconComponent className="w-5 h-5" />
                <span className={`text-xs font-medium ${
                  currentPage === index ? 'block' : 'hidden sm:block'
                }`}>
                  {page.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevPage}
        disabled={currentPage === 0}
        className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 glass-effect school-border rounded-full p-3 transition-all duration-300 ${
          currentPage === 0
            ? 'opacity-50 cursor-not-allowed'
            : 'hover-glow hover:bg-white/10'
        }`}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextPage}
        disabled={currentPage === pages.length - 1}
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 glass-effect school-border rounded-full p-3 transition-all duration-300 ${
          currentPage === pages.length - 1
            ? 'opacity-50 cursor-not-allowed'
            : 'hover-glow hover:bg-white/10'
        }`}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Page Content */}
      <main className="relative z-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {pages.map((page, index) => (
            <div key={page.id} className="w-full flex-shrink-0">
              <page.component isActive={currentPage === index} onNavigate={goToPage} />
            </div>
          ))}
        </div>
      </main>

      {/* Page Indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-peach shadow-lg'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
