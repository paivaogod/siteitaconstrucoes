import { 
  Phone, 
  Mail, 
  MapPin,
  Instagram,
  ArrowUp
} from 'lucide-react';
import WhatsAppIcon from '@/react-app/components/WhatsAppIcon';

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

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da ConstrutechPro.', '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <h3 className="text-2xl font-bold">ConstrutechPro</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 15 anos construindo o futuro com qualidade, 
              inovação e compromisso com a excelência.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/itaconstrucoesreformas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Portfólio
                </button>
              </li>
              
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Construção Residencial</li>
              <li className="text-gray-300">Construção Comercial</li>
              <li className="text-gray-300">Construção Industrial</li>
              <li className="text-gray-300">Reformas e Ampliações</li>
              <li className="text-gray-300">Acabamentos Premium</li>
              <li className="text-gray-300">Manutenção Predial</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Rua das Construções, 123<br />
                    Vila Madalena, São Paulo - SP<br />
                    CEP: 05435-000
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400" />
                <a href="tel:+5511999999999" className="text-gray-300 hover:text-blue-400 transition-colors">
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400" />
                <a href="mailto:contato@construtechpro.com.br" className="text-gray-300 hover:text-blue-400 transition-colors">
                  contato@construtechpro.com.br
                </a>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold transition-colors mt-4"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} ConstrutechPro. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
            
            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <span className="text-sm">Voltar ao topo</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
