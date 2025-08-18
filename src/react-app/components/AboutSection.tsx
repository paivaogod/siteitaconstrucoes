import { Award, Users, Clock, Shield } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Nossa experiência e comprometimento garantem a realização do seu projeto exatamente de acordo com o que foi combinado.'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e experientes para entregar o melhor resultado.'
    },
    {
      icon: Clock,
      title: 'Prazo Cumprido',
      description: 'Compromisso com cronogramas e entregas previamente contratadas.'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Normas rigorosas de segurança e conformidade com regulamentações.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              <span className="block text-yellow-600">Sobre Nós</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A ITA Construções e Reformas começou há mais de 30 anos, nos sonhos de um mestre de obras preocupado com a qualidade máxima de entrega aos seus clientes.
              Hoje, a ITA é especializada em projetos residenciais e comerciais, tanto de construções quanto de reformas de alta complexidade, contando com uma equipe profissional para atender às suas demandas.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nossa missão é transformar ideias em realidade através de soluções inovadoras, 
              que cabem no seu bolso e um compromisso inabalável com a qualidade e satisfação dos nossos clientes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Equipe ITA trabalhando"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border">
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">30+</div>
                  <div className="text-sm text-gray-600">Anos</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">200+</div>
                  <div className="text-sm text-gray-600">Projetos</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">50+</div>
                  <div className="text-sm text-gray-600">Profissionais</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
