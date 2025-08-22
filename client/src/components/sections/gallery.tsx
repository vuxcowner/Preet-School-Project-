import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "School building exterior",
    title: "School Campus",
    description: "Modern infrastructure with eco-friendly design"
  },
  {
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Students in smart classroom",
    title: "Smart Classrooms",
    description: "Interactive learning with modern technology"
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Science laboratory",
    title: "Science Laboratory",
    description: "Hands-on learning through experiments"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Students playing sports",
    title: "Sports Activities",
    description: "Physical fitness and team building"
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "School library",
    title: "Digital Library",
    description: "Quiet study spaces and vast collection"
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Cultural activities",
    title: "Cultural Events",
    description: "Celebrating diversity and creativity"
  }
];

export function GallerySection() {
  const { ref, hasIntersected } = useIntersectionObserver();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section 
      id="gallery" 
      ref={ref}
      className={`py-20 ${hasIntersected ? 'section-reveal revealed' : 'section-reveal'}`}
      data-testid="gallery-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 text-neon-cyan text-glow">
            School Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="glass-effect neon-border rounded-xl overflow-hidden hover-glow transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-item-${index}`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover" 
              />
              <div className="p-4">
                <h4 className="font-semibold text-white mb-2">{image.title}</h4>
                <p className="text-gray-400 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox"
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            <button 
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
              data-testid="lightbox-close"
            >
              ×
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
              data-testid="lightbox-prev"
            >
              ‹
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
              data-testid="lightbox-next"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h4 className="font-semibold">{galleryImages[selectedImage].title}</h4>
              <p className="text-sm opacity-75">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
