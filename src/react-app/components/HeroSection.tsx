import WhatsAppIcon from '@/react-app/components/WhatsAppIcon';

export default function HeroSection() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5524992627220?text=Olá! Gostaria de solicitar um orçamento para meu projeto.', '_blank');
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/80 to-gray-900/90" />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Construa seus <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Sonhos</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Há mais de 30 anos transformando sonhos em realidade através de projetos de construção civil e reformas de alta qualidade, com compromisso e excelência
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={openWhatsApp}
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-3"
            >
              <WhatsAppIcon size={24} />
              <span>Solicitar Orçamento</span>
            </button>
            
            <button
              onClick={scrollToPortfolio}
              className="group border-2 border-white text-white hover:bg-white hover:text-yellow-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Ver Nossos Projetos
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">200+</div>
              <div className="text-gray-300">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">30+</div>
              <div className="text-gray-300">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-gray-300">Satisfação do Cliente</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
