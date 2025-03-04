import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const moveX = (x - 0.5) * 20; // Max 20px movement
      const moveY = (y - 0.5) * 20; // Max 20px movement
      
      heroRef.current.style.backgroundPosition = `${50 + moveX * 0.5}% ${50 + moveY * 0.5}%`;
      
      // Add parallax effect to elements with data-parallax attribute
      const parallaxElements = heroRef.current.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-parallax') || '0.1');
        element.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center bg-gradient-dark pt-20 bg-cover bg-center transition-all duration-200 ease-out overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 32, 70, 0.95) 0%, rgba(2, 35, 64, 0.98) 100%), 
                          url('https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={index} 
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 8 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-white" data-parallax="0.1">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/20">
              <span className="h-2 w-2 rounded-full bg-turquesa mr-2 pulse"></span>
              <span className="text-white/90 text-sm">Tecnologia inovadora para educação médica</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Transformando avaliações médicas <span className="gradient-text">subjetivas</span> em análises <span className="gradient-text">objetivas</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-light text-white/80">
              O LaciaVisionLLM utiliza inteligência artificial avançada para substituir avaliações médicas demoradas e inconsistentes por um sistema de feedback preciso, personalizado e instantâneo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="bg-turquesa text-white px-6 py-3.5 rounded-lg font-semibold text-center btn-glow inline-flex items-center justify-center group"
              >
                <span className="mr-2">Agendar Demonstração</span>
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#solucao" 
                className="glass text-white px-6 py-3.5 rounded-lg font-semibold text-center hover:bg-white/15 transition-all inline-flex items-center justify-center"
              >
                Saiba Mais
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2" data-parallax="0.15">
            <div className="relative bg-gradient-to-b from-white/5 to-white/0 p-6 rounded-xl backdrop-blur-sm border border-white/10 shadow-glow">
              <div className="absolute -inset-0.5 bg-gradient-primary rounded-xl opacity-20 blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Profissionais médicos analisando procedimentos com assistência de IA" 
                className="w-full h-auto rounded-lg relative z-10"
              />
              
              {/* Tech details floating elements */}
              <div className="absolute -right-8 -bottom-8 p-4 glass rounded-lg text-white text-sm float-animation hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-turquesa"></div>
                  <div>Análise em tempo real</div>
                </div>
              </div>
              
              <div className="absolute -left-8 top-1/2 p-4 glass rounded-lg text-white text-sm float-animation hidden md:block" style={{animationDelay: '2s'}}>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-verde"></div>
                  <div>Feedback personalizado</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator hidden md:block">
        <ChevronDown className="text-white/50 animate-bounce h-6 w-6 mb-2" />
      </div>
    </section>
  );
};

export default Hero;
