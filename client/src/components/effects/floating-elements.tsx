export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none" data-testid="floating-elements">
      <div className="animate-float absolute top-20 left-10 w-20 h-20 glass-effect rounded-full opacity-50" />
      <div 
        className="animate-float absolute top-40 right-20 w-16 h-16 glass-effect rounded-full opacity-40" 
        style={{ animationDelay: '2s' }}
      />
      <div 
        className="animate-float absolute bottom-32 left-20 w-12 h-12 glass-effect rounded-full opacity-30" 
        style={{ animationDelay: '4s' }}
      />
    </div>
  );
}
