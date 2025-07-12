import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X, MapPin, Calendar, Ruler } from 'lucide-react';
import photo1 from '../images/photo1.jpg';
import photo2 from '../images/photo2.jpg';
import photo3 from '../images/photo3.jpg';
import photo4 from '../images/photo4.jpg';
import photo5 from '../images/photo5.jpg';
import photo6 from '../images/photo6.jpg';
import photo7 from '../images/photo7.jpg';
import photo8 from '../images/photo8.jpg';
import photo9 from '../images/photo9.jpg';
import photo10 from '../images/photo10.jpg';
import photo11 from '../images/photo11.jpg';
import photo12 from '../images/photo12.jpg';
import photo13 from '../images/photo13.jpg';
import photo14 from '../images/photo14.jpg';
import photo15 from '../images/photo15.jpg';
import photo16 from '../images/photo16.jpg';
import photo17 from '../images/photo17.jpg';
import photo18 from '../images/photo18.jpg';
import photo19 from '../images/photo19.jpg';
import photo20 from '../images/photo20.jpg';
import photo21 from '../images/photo21.jpg';
import photo22 from '../images/photo22.jpg';

const portfolioItems = [
  {
    id: 1,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo1
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 2,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo2
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 3,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo3
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 4,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo4
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 5,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo5
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 6,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo6
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 7,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo7
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 8,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo8
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 9,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo9
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 10,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo10
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 11,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo11
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 12,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo12
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 13,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo13
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 14,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo14
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 15,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo15
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 16,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo16
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 17,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo17
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 18,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo18
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 19,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo19
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 20,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo20
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 21,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo21
    ],
    description: '000',
    features: ['000']
  },
  {
    id: 22,
    title: '000',
    area: '000 м²',
    date: '0000',
    category: 'Квартиры',
    images: [
      photo22
    ],
    description: '000',
    features: ['000']
  },
];

const categories = ['Все', 'Квартиры', 'Дома', 'Офисы', 'Детские', 'Рестораны', 'Спальни'];

export function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === 'Все' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Наше портфолио
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Более 3000 успешно реализованных проектов. Каждый потолок - это произведение искусства, 
            созданное с любовью к деталям и стремлением к совершенству.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(item);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        {item.area}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Gallery */}
              <div className="relative h-96 md:h-[500px]">
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
                
                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition-colors"
                    >
                      <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full transition-colors"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Ruler className="w-5 h-5 text-blue-600" />
                        <span>{selectedProject.area}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span>{selectedProject.date}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Особенности проекта
                    </h3>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}