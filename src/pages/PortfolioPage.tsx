import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, X, MapPin, Calendar, Ruler } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Современная квартира в ЖК "Премиум"',
    location: 'Москва, Центральный район',
    area: '120 м²',
    date: '2024',
    category: 'Квартиры',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Многоуровневые натяжные потолки с интегрированным LED-освещением. Использованы матовые и глянцевые фактуры для создания современного интерьера.',
    features: ['Многоуровневая конструкция', 'LED-подсветка', 'Матовая и глянцевая фактуры', 'Скрытые карнизы']
  },
  {
    id: 2,
    title: 'Загородный дом в классическом стиле',
    location: 'Московская область',
    area: '200 м²',
    date: '2024',
    category: 'Дома',
    images: [
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Элегантные натяжные потолки в классическом стиле с декоративными элементами и люстрами. Создана атмосфера роскоши и комфорта.',
    features: ['Классический дизайн', 'Декоративные элементы', 'Крепления для люстр', 'Тканевые потолки']
  },
  {
    id: 3,
    title: 'Офисное пространство "Бизнес-центр"',
    location: 'Москва, Деловой центр',
    area: '300 м²',
    date: '2023',
    category: 'Офисы',
    images: [
      'https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571479/pexels-photo-1571479.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571480/pexels-photo-1571480.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Функциональные натяжные потолки для офисного пространства с интегрированной системой освещения и вентиляции.',
    features: ['Офисное освещение', 'Вентиляционные решетки', 'Акустические свойства', 'Быстрый монтаж']
  },
  {
    id: 4,
    title: 'Детская комната "Звездное небо"',
    location: 'Москва',
    area: '25 м²',
    date: '2024',
    category: 'Детские',
    images: [
      'https://images.pexels.com/photos/1571481/pexels-photo-1571481.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571482/pexels-photo-1571482.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571483/pexels-photo-1571483.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Уникальный потолок "Звездное небо" с оптоволоконной подсветкой. Создает волшебную атмосферу для детской комнаты.',
    features: ['Эффект "Звездное небо"', 'Оптоволоконная подсветка', 'Безопасные материалы', 'Цветная подсветка']
  },
  {
    id: 5,
    title: 'Ресторан "Премиум класса"',
    location: 'Москва, Центр',
    area: '150 м²',
    date: '2023',
    category: 'Рестораны',
    images: [
      'https://images.pexels.com/photos/1571484/pexels-photo-1571484.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571485/pexels-photo-1571485.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571486/pexels-photo-1571486.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Дизайнерские натяжные потолки для ресторана премиум-класса с художественной подсветкой и акустическими решениями.',
    features: ['Дизайнерское решение', 'Художественная подсветка', 'Акустический комфорт', 'Влагостойкость']
  },
  {
    id: 6,
    title: 'Спальня в стиле минимализм',
    location: 'Москва',
    area: '30 м²',
    date: '2024',
    category: 'Спальни',
    images: [
      'https://images.pexels.com/photos/1571487/pexels-photo-1571487.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571488/pexels-photo-1571488.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571489/pexels-photo-1571489.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Минималистичный дизайн натяжного потолка с мягким рассеянным освещением для создания уютной атмосферы.',
    features: ['Минималистичный дизайн', 'Мягкое освещение', 'Матовая фактура', 'Идеальная геометрия']
  }
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
            Более 500 успешно реализованных проектов. Каждый потолок — это произведение искусства, 
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
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
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
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </span>
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
                        <span>{selectedProject.location}</span>
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