import { 
  Instagram,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-6">
        {/* Company Info - Minimal and Centered */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <img 
              src="https://mocha-cdn.com/01988694-afe4-7c2b-9931-9695e383af64/image-removebg-preview-(1).png" 
              alt="ITA Construções e Reformas"
              className="w-8 h-8 object-contain"
            />
            <h3 className="text-base font-bold">ITA Construções e Reformas</h3>
          </div>          
          {/* Social Media */}
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/itaconstrucoesreformas/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-3 text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} Todos os direitos reservados.
            </p>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center justify-center space-x-2 text-gray-400 hover:text-yellow-400 transition-colors mx-auto"
            >
              <span className="text-xs sm:text-sm">Voltar ao topo</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
