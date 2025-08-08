import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import type { BlogPost } from '@/shared/types';

export default function BlogSection() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample blog posts data
  const samplePosts: BlogPost[] = [
    {
      id: 1,
      title: 'Tendências em Construção Civil para 2024',
      excerpt: 'Descubra as principais inovações e tendências que estão moldando o futuro da construção civil brasileira.',
      content: 'Artigo completo sobre tendências...',
      featured_image_url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      is_published: true,
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z'
    },
    {
      id: 2,
      title: 'Como Escolher os Melhores Materiais para sua Obra',
      excerpt: 'Guia completo para selecionar materiais de qualidade que garantem durabilidade e economia.',
      content: 'Artigo completo sobre materiais...',
      featured_image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      is_published: true,
      created_at: '2024-02-01T14:30:00Z',
      updated_at: '2024-02-01T14:30:00Z'
    },
    {
      id: 3,
      title: 'Sustentabilidade na Construção: Práticas Eco-friendly',
      excerpt: 'Conheça as técnicas sustentáveis que estão revolucionando a construção civil moderna.',
      content: 'Artigo completo sobre sustentabilidade...',
      featured_image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      is_published: true,
      created_at: '2024-02-15T09:00:00Z',
      updated_at: '2024-02-15T09:00:00Z'
    },
    {
      id: 4,
      title: 'Planejamento de Obra: Passo a Passo Completo',
      excerpt: 'Aprenda como planejar sua obra de forma eficiente para evitar atrasos e custos extras.',
      content: 'Artigo completo sobre planejamento...',
      featured_image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      is_published: true,
      created_at: '2024-03-01T11:15:00Z',
      updated_at: '2024-03-01T11:15:00Z'
    },
    {
      id: 5,
      title: 'Tecnologia BIM na Construção Civil',
      excerpt: 'Entenda como o Building Information Modeling está transformando a gestão de projetos.',
      content: 'Artigo completo sobre BIM...',
      featured_image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      is_published: true,
      created_at: '2024-03-15T16:45:00Z',
      updated_at: '2024-03-15T16:45:00Z'
    }
  ];

  useEffect(() => {
    setBlogPosts(samplePosts);
  }, []);

  const postsPerPage = 3;
  const maxIndex = Math.max(0, blogPosts.length - postsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min de leitura`;
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nosso
            <span className="text-blue-600"> Blog</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fique por dentro das últimas novidades, dicas e tendências do mercado 
            de construção civil com nossos artigos especializados.
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 hover:scale-110'
            }`}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
              currentIndex === maxIndex
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 hover:scale-110'
            }`}
          >
            <ChevronRight size={24} />
          </button>

          {/* Blog Posts Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / postsPerPage)}%)` }}
            >
              {blogPosts.map((post) => (
                <div key={post.id} className="w-full md:w-1/3 flex-shrink-0 px-4">
                  <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featured_image_url || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{formatDate(post.created_at)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={16} />
                          <span>{getReadingTime(post.content)}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Read More Button */}
                      <button className="group/btn flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                        <span>Ler mais</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Quer Receber Mais Conteúdos Como Estes?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Assine nossa newsletter e receba semanalmente as melhores dicas, 
              novidades e tendências do mercado de construção civil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors whitespace-nowrap">
                Assinar Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
