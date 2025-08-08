import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import WhatsAppIcon from '@/react-app/components/WhatsAppIcon';
import type { PortfolioProject, PortfolioImage } from '@/shared/types';

interface ProjectWithImages extends PortfolioProject {
  images: PortfolioImage[];
}

export default function PortfolioSection() {
  const [projects, setProjects] = useState<ProjectWithImages[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample data for demonstration
  const sampleProjects: ProjectWithImages[] = [
    {
      id: 1,
      title: 'Residencial Sunset Hills',
      description: 'Condomínio residencial de luxo com 50 casas, infraestrutura completa e paisagismo premium.',
      is_featured: true,
      created_at: '2024-01-15',
      updated_at: '2024-01-15',
      images: [
        {
          id: 1, project_id: 1, image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          caption: 'Vista externa do condomínio', sort_order: 1, created_at: '2024-01-15', updated_at: '2024-01-15'
        },
        {
          id: 2, project_id: 1, image_url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          caption: 'Interior das residências', sort_order: 2, created_at: '2024-01-15', updated_at: '2024-01-15'
        },
        {
          id: 3, project_id: 1, image_url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          caption: 'Área de lazer completa', sort_order: 3, created_at: '2024-01-15', updated_at: '2024-01-15'
        }
      ]
    },
    {
      id: 2,
      title: 'Edifício Comercial Phoenix',
      description: 'Torre comercial de 25 andares no centro da cidade com tecnologia sustentável.',
      is_featured: true,
      created_at: '2024-02-10',
      updated_at: '2024-02-10',
      images: [
        {
          id: 4, project_id: 2, image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          caption: 'Fachada moderna do edifício', sort_order: 1, created_at: '2024-02-10', updated_at: '2024-02-10'
        },
        {
          id: 5, project_id: 2, image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          caption: 'Lobby principal', sort_order: 2, created_at: '2024-02-10', updated_at: '2024-02-10'
        }
      ]
    },
    {
      id: 3,
      title: 'Complexo Industrial TechPark',
      description: 'Parque industrial moderno com 5 galpões e centro administrativo.',
      is_featured: true,
      created_at: '2024-03-05',
      updated_at: '2024-03-05',
      images: [
        {
          id: 6, project_id: 3, image_url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
          caption: 'Vista aérea do complexo', sort_order: 1, created_at: '2024-03-05', updated_at: '2024-03-05'
        }
      ]
    }
  ];

  useEffect(() => {
    setProjects(sampleProjects);
  }, []);

  const currentProject = projects[currentProjectIndex];
  const currentImage = currentProject?.images[currentImageIndex];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
    setCurrentImageIndex(0);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
    }
  };

  const openWhatsApp = () => {
    const message = `Olá! Gostaria de saber mais sobre o projeto "${currentProject?.title}". Podem me enviar mais detalhes?`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!currentProject) return null;

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Nosso
            <span className="text-blue-600"> Portfólio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos mais marcantes e veja a qualidade 
            que entregamos em cada empreendimento.
          </p>
        </div>

        {/* Main Portfolio Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Project Navigation */}
            <div className="flex items-center justify-between p-6 border-b">
              <button
                onClick={prevProject}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft size={20} />
                <span>Projeto Anterior</span>
              </button>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800">{currentProject.title}</h3>
                <p className="text-sm text-gray-500">{currentProjectIndex + 1} de {projects.length}</p>
              </div>
              
              <button
                onClick={nextProject}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>Próximo Projeto</span>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-[500px] overflow-hidden">
                <img
                  src={currentImage?.image_url}
                  alt={currentImage?.caption || currentProject.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                {currentProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {currentProject.images.length}
                </div>

                {/* View Full Size Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                >
                  <Eye size={20} />
                </button>
              </div>

              {/* Image Thumbnails */}
              {currentProject.images.length > 1 && (
                <div className="flex space-x-2 p-4 bg-gray-100 overflow-x-auto">
                  {currentProject.images.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex ? 'border-blue-600' : 'border-gray-300'
                      }`}
                    >
                      <img
                        src={image.image_url}
                        alt={image.caption || ''}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Sobre o Projeto</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {currentProject.description}
                  </p>
                  
                  {currentImage?.caption && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 italic">
                        "{currentImage.caption}"
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-col justify-center">
                  <button
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center space-x-3 mb-4"
                  >
                    <WhatsAppIcon size={24} />
                    <span>Quero um Projeto Assim</span>
                  </button>
                  
                  <p className="text-center text-sm text-gray-500">
                    Fale conosco e receba um orçamento personalizado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentProjectIndex(index);
                setCurrentImageIndex(0);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentProjectIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {isModalOpen && currentImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <img
              src={currentImage.image_url}
              alt={currentImage.caption || currentProject.title}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
