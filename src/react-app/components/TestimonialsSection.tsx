import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/shared/types';

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample testimonials data
  const sampleTestimonials: Testimonial[] = [
    {
      id: 1,
      client_name: 'Maria Silva Santos',
      client_photo_url: 'https://images.unsplash.com/photo-1494790108755-2616b612b890?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial_text: 'A ConstrutechPro superou todas as nossas expectativas. Construíram nossa casa dos sonhos com qualidade excepcional e dentro do prazo. Profissionalismo e atenção aos detalhes impressionantes!',
      rating: 5,
      is_featured: true,
      created_at: '2024-01-15',
      updated_at: '2024-01-15'
    },
    {
      id: 2,
      client_name: 'Carlos Eduardo Lima',
      client_photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial_text: 'Contratamos para reforma do nosso escritório e o resultado foi fantástico. Equipe muito profissional, projeto moderno e execução perfeita. Recomendo sem hesitação!',
      rating: 5,
      is_featured: true,
      created_at: '2024-02-10',
      updated_at: '2024-02-10'
    },
    {
      id: 3,
      client_name: 'Ana Paula Rodrigues',
      client_photo_url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial_text: 'Excelente empresa! Construíram nosso condomínio com muito cuidado e qualidade. Sempre dispostos a esclarecer dúvidas e fazer ajustes. Trabalho impecável do início ao fim.',
      rating: 5,
      is_featured: true,
      created_at: '2024-03-05',
      updated_at: '2024-03-05'
    },
    {
      id: 4,
      client_name: 'Roberto Mendes',
      client_photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial_text: 'Profissionais extremamente competentes. Nossa fábrica foi construída seguindo todas as normas técnicas e com acabamento de primeira qualidade. Prazo cumprido rigorosamente.',
      rating: 5,
      is_featured: true,
      created_at: '2024-03-20',
      updated_at: '2024-03-20'
    },
    {
      id: 5,
      client_name: 'Fernanda Costa',
      client_photo_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial_text: 'A melhor decisão foi escolher a ConstrutechPro para nossa obra. Transparência total, comunicação excelente e resultado final além do esperado. Parabéns a toda equipe!',
      rating: 5,
      is_featured: true,
      created_at: '2024-04-10',
      updated_at: '2024-04-10'
    },
    {
      id: 6,
      client_name: 'João Paulo Ferreira',
      client_photo_url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      testimonial_text: 'Obra comercial executada com perfeição. Desde o projeto até a entrega, tudo foi feito com muito profissionalismo. Equipe técnica excepcional e atendimento de qualidade.',
      rating: 5,
      is_featured: true,
      created_at: '2024-04-25',
      updated_at: '2024-04-25'
    }
  ];

  useEffect(() => {
    setTestimonials(sampleTestimonials);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={20}
        className={index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            O que Nossos
            <span className="text-blue-600"> Clientes Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote size={60} className="text-blue-600" />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:shadow-xl text-gray-600 hover:text-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Current Testimonial */}
            <div className="text-center">
              {/* Client Photo */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                <img
                  src={testimonials[currentIndex].client_photo_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'}
                  alt={testimonials[currentIndex].client_name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center space-x-1 mb-6">
                {renderStars(testimonials[currentIndex].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic font-medium">
                "{testimonials[currentIndex].testimonial_text}"
              </blockquote>

              {/* Client Name */}
              <cite className="text-xl font-bold text-gray-800">
                {testimonials[currentIndex].client_name}
              </cite>
            </div>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-blue-600' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              {/* Mini Stars */}
              <div className="flex space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Mini Testimonial */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                "{testimonial.testimonial_text.substring(0, 120)}..."
              </p>

              {/* Mini Client Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.client_photo_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'}
                    alt={testimonial.client_name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">
                    {testimonial.client_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
