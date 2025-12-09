const CyberBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Animated glow orbs */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-glow-cyan/20 animate-glow-pulse"
        style={{ filter: 'blur(80px)' }}
      />
      <div 
        className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-glow-purple/20 animate-glow-pulse"
        style={{ filter: 'blur(80px)', animationDelay: '1s' }}
      />
      <div 
        className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-glow-cyan/15 animate-glow-pulse"
        style={{ filter: 'blur(60px)', animationDelay: '2s' }}
      />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Scan line effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 4px)',
        }}
      />
    </div>
  );
};

export default CyberBackground;
