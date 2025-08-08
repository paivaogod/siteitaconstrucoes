import { 
  Home, 
  Building2, 
  Hammer, 
  PaintBucket, 
  Wrench, 
  HardHat,
  ArrowRight
} from 'lucide-react';
import WhatsAppIcon from '@/react-app/components/WhatsAppIcon';

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Construção Residencial',
      description: 'Projetos personalizados para sua casa dos sonhos, desde o planejamento até a entrega das chaves.',
      features: ['Projetos arquitetônicos', 'Casas customizadas', 'Apartamentos de luxo']
    },
    {
      icon: Building2,
      title: 'Construção Comercial',
      description: 'Edifícios comerciais e corporativos que atendem às necessidades do seu negócio.',
      features: ['Escritórios modernos', 'Centros comerciais', 'Edifícios corporativos']
    },
    {
      icon: HardHat,
      title: 'Construção Industrial',
      description: 'Infraestrutura industrial robusta e funcional para operações de grande escala.',
      features: ['Galpões industriais', 'Fábricas', 'Centros de distribuição']
    },
    {
      icon: Hammer,
      title: 'Reformas e Ampliações',
      description: 'Modernize e expanda seus espaços com nossos serviços especializados.',
      features: ['Renovações completas', 'Ampliações', 'Modernizações']
    },
    {
      icon: PaintBucket,
      title: 'Acabamentos Premium',
      description: 'Detalhes que fazem a diferença, com materiais de alta qualidade.',
      features: ['Pintura especializada', 'Revestimentos nobres', 'Design de interiores']
    },
    {
      icon: Wrench,
      title: 'Manutenção Predial',
      description: 'Mantenha seu patrimônio sempre em perfeitas condições de uso.',
      features: ['Manutenção preventiva', 'Reparos estruturais', 'Serviços emergenciais']
    }
  ];

  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da ConstrutechPro.', '_blank');
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nossos
            <span className="text-blue-600"> Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em construção civil, desde projetos residenciais 
            até grandes empreendimentos comerciais e industriais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-300">
                <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={openWhatsApp}
                className="group-hover:bg-blue-600 group-hover:text-white border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de um Serviço Personalizado?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para desenvolver soluções sob medida para seu projeto específico.
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center space-x-2"
            >
              <WhatsAppIcon size={20} />
              <span>Fale com Nosso Especialista</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
