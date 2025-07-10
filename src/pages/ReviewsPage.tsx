import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, Calendar, MapPin, User } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Анна Козлова',
    location: 'Москва, ЖК "Премиум"',
    date: '15 декабря 2024',
    rating: 5,
    avatar: 'АК',
    project: 'Квартира, 3 комнаты',
    review: 'Превосходное качество работы! Потолки выглядят просто потрясающе. Команда работала быстро и аккуратно, убрали за собой идеально. Особенно понравилось LED-освещение - создает невероятную атмосферу. Рекомендую всем!',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 2,
    name: 'Михаил Петров',
    location: 'Московская область',
    date: '8 декабря 2024',
    rating: 5,
    avatar: 'МП',
    project: 'Частный дом, 200 м²',
    review: 'Очень довольны результатом! Потолки идеально ровные, освещение встроили именно как хотели. Мастера профессионалы своего дела, работали аккуратно, соблюдали все сроки. Цена полностью соответствует качеству.',
    images: [
      'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    location: 'Москва, Центр',
    date: '1 декабря 2024',
    rating: 5,
    avatar: 'ЕС',
    project: 'Офис, 150 м²',
    review: 'Профессиональная работа на высшем уровне. Сделали все точно в срок, очень аккуратно и качественно. Офис преобразился до неузнаваемости. Сотрудники довольны новым интерьером. Обязательно обратимся еще раз.',
    images: [
      'https://images.pexels.com/photos/1571477/pexels-photo-1571477.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571479/pexels-photo-1571479.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 4,
    name: 'Дмитрий Волков',
    location: 'Москва, Юго-Запад',
    date: '25 ноября 2024',
    rating: 5,
    avatar: 'ДВ',
    project: 'Детская комната',
    review: 'Сделали потолок "Звездное небо" в детской - ребенок в восторге! Качество материалов отличное, монтаж выполнен безупречно. Мастера объяснили все нюансы ухода. Очень рекомендую для детских комнат.',
    images: [
      'https://images.pexels.com/photos/1571481/pexels-photo-1571481.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 5,
    name: 'Ольга Морозова',
    location: 'Москва, Север',
    date: '18 ноября 2024',
    rating: 5,
    avatar: 'ОМ',
    project: 'Квартира-студия',
    review: 'Отличная работа! Потолок визуально увеличил пространство студии. Глянцевая поверхность отражает свет и делает комнату светлее. Установка заняла всего один день, никакой грязи и пыли.',
    images: []
  },
  {
    id: 6,
    name: 'Александр Новиков',
    location: 'Подмосковье',
    date: '10 ноября 2024',
    rating: 5,
    avatar: 'АН',
    project: 'Загородный дом',
    review: 'Превосходное качество! Установили потолки во всем доме - результат превзошел ожидания. Особенно впечатлила работа с многоуровневыми конструкциями. Гарантия 10 лет - это показатель уверенности в своей работе.',
    images: [
      'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 7,
    name: 'Мария Кузнецова',
    location: 'Москва, Восток',
    date: '3 ноября 2024',
    rating: 5,
    avatar: 'МК',
    project: 'Спальня',
    review: 'Потолок в спальне получился идеальным! Матовая фактура создает уютную атмосферу. Мастера работали очень аккуратно, мебель была защищена. Результат полностью соответствует ожиданиям.',
    images: [
      'https://images.pexels.com/photos/1571487/pexels-photo-1571487.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  },
  {
    id: 8,
    name: 'Сергей Белов',
    location: 'Москва, ЦАО',
    date: '27 октября 2024',
    rating: 5,
    avatar: 'СБ',
    project: 'Ресторан',
    review: 'Заказывали потолки для ресторана. Работа выполнена на высочайшем уровне! Дизайнерское решение с подсветкой создало неповторимую атмосферу. Клиенты постоянно делают комплименты интерьеру.',
    images: [
      'https://images.pexels.com/photos/1571484/pexels-photo-1571484.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1571485/pexels-photo-1571485.jpeg?auto=compress&cs=tinysrgb&w=400'
    ]
  }
];

const stats = {
  totalReviews: 247,
  averageRating: 4.9,
  fiveStars: 234,
  fourStars: 11,
  threeStars: 2,
  twoStars: 0,
  oneStars: 0
};

export function ReviewsPage() {
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Отзывы клиентов
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Более 500 довольных клиентов доверили нам создание идеальных потолков. 
            Читайте реальные отзывы о нашей работе.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.totalReviews}</div>
              <div className="text-gray-600">Отзывов</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stats.averageRating}</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-gray-600">Лет гарантии</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Распределение оценок
          </h2>
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = stats[`${['one', 'two', 'three', 'four', 'five'][stars - 1]}Stars` as keyof typeof stats] as number;
              const percentage = (count / stats.totalReviews) * 100;
              
              return (
                <div key={stars} className="flex items-center gap-4">
                  <div className="flex items-center gap-1 w-20">
                    <span className="text-sm font-medium">{stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-12">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedReview(review)}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{review.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.project}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {review.review.length > 150 
                      ? `${review.review.substring(0, 150)}...` 
                      : review.review
                    }
                  </p>
                </div>

                {/* Images Preview */}
                {review.images.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {review.images.slice(0, 3).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Фото от ${review.name}`}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    ))}
                    {review.images.length > 3 && (
                      <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-sm text-gray-600">
                        +{review.images.length - 3}
                      </div>
                    )}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {review.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {review.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Станьте нашим следующим довольным клиентом
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Присоединяйтесь к сотням клиентов, которые уже оценили качество наших потолков
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl">
            Заказать бесплатный замер
          </button>
        </div>
      </section>

      {/* Review Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{selectedReview.avatar}</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedReview.name}</h2>
                    <p className="text-gray-600">{selectedReview.project}</p>
                    <div className="flex items-center gap-2 mt-2">
                      {renderStars(selectedReview.rating)}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Review Text */}
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                <p className="text-lg text-gray-700 leading-relaxed pl-8">
                  {selectedReview.review}
                </p>
              </div>

              {/* Images */}
              {selectedReview.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {selectedReview.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Фото от ${selectedReview.name}`}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  ))}
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between text-gray-500 pt-6 border-t">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {selectedReview.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {selectedReview.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}