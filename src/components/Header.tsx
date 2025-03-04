import React, { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md py-3 shadow-md' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/MGS2jT0X/logo-laciavisionllm-512x512.png" 
            alt="LaciaVisionLLM Logo" 
            className="h-10 w-auto" 
          />
          <span className={`text-xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-azul-escuro' : 'text-white'
          }`}>LaciaVisionLLM</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['problema', 'solucao', 'recursos', 'beneficios', 'casos'].map((item, index) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={`font-medium relative overflow-hidden group transition-colors duration-300 ${
                scrolled ? 'text-azul-profundo' : 'text-white'
              }`}
            >
              <span className="block">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-turquesa transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        
        <a 
          href="#contato" 
          className={`hidden md:flex items-center justify-center px-5 py-2.5 rounded-lg font-medium btn-glow transition-all duration-300 ${
            scrolled 
              ? 'bg-turquesa text-white hover:bg-verde' 
              : 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20'
          }`}
        >
          Agendar Demo
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-1 rounded-full ${
            scrolled ? 'text-azul-profundo' : 'text-white'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-dark fixed inset-0 pt-20 p-6 z-40 flex flex-col">
          <div className="flex flex-col space-y-5 text-center">
            {['problema', 'solucao', 'recursos', 'beneficios', 'casos'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="text-white text-xl py-3 border-b border-white/10 hover:text-turquesa transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
            <a 
              href="#contato" 
              className="bg-turquesa text-white mt-4 px-4 py-3 rounded-lg font-medium hover:bg-verde btn-glow transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Agendar Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
