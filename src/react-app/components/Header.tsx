import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-lg flex items-center justify-center">
              <img
                src="https://imgur.com/lUs4ctT-4.0.3&auto=format&fit=crop&w=1000&q=80"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">ConstrutechPro</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Sobre Nós
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Portfólio
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Depoimentos
            </button>
            
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-yellow-600 font-medium transition-colors">
              Contato
            </button>
          </nav>

          

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-yellow-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-yellow-600 font-medium">
                Início
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-yellow-600 font-medium">
                Sobre Nós
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-yellow-600 font-medium">
                Serviços
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-yellow-600 font-medium">
                Portfólio
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 hover:text-yellow-600 font-medium">
                Depoimentos
              </button>
              
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-yellow-600 font-medium">
                Contato
              </button>
              
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
