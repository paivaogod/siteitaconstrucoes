import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import WhatsAppIcon from '@/react-app/components/WhatsAppIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const openWhatsApp = () => {
    const message = 'Olá! Gostaria de conversar sobre um projeto de construção.';
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      action: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@construtechpro.com.br',
      action: 'mailto:contato@construtechpro.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua das Construções, 123\nVila Madalena, São Paulo - SP',
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      info: 'Segunda à Sexta: 8h às 18h\nSábado: 8h às 12h',
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-yellow-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Entre em
            <span className="text-yellow-400"> Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para começar seu próximo projeto? Nossa equipe está aqui para 
            transformar suas ideias em realidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              Fale Conosco Agora
            </h3>

            {/* WhatsApp CTA */}
            <div className="bg-green-600 hover:bg-green-700 rounded-2xl p-6 mb-8 transition-colors cursor-pointer transform hover:scale-105 duration-300" onClick={openWhatsApp}>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <WhatsAppIcon size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    WhatsApp - Resposta Imediata
                  </h4>
                  <p className="text-green-100">
                    Fale diretamente com nossos especialistas
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300 whitespace-pre-line">
                        {item.info}
                      </p>
                      {item.action && (
                        <a
                          href={item.action}
                          target={item.action.startsWith('http') ? '_blank' : undefined}
                          className="text-yellow-400 hover:text-yellow-300 text-sm mt-2 inline-block transition-colors"
                        >
                          {item.action.startsWith('http') ? 'Ver no mapa' : 'Clique para contatar'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Solicite seu Orçamento
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Mensagem Enviada com Sucesso!
                </h4>
                <p className="text-gray-600">
                  Entraremos em contato em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Projeto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione o tipo</option>
                      <option value="residencial">Construção Residencial</option>
                      <option value="comercial">Construção Comercial</option>
                      <option value="industrial">Construção Industrial</option>
                      <option value="reforma">Reforma/Ampliação</option>
                      <option value="manutencao">Manutenção</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Descreva seu projeto, necessidades, prazos e outras informações relevantes..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 text-lg"
                >
                  <Send size={20} />
                  <span>Enviar Solicitação</span>
                </button>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade. 
                  Seus dados serão usados apenas para entrar em contato sobre seu projeto.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
