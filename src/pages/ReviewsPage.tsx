import React, { useState } from 'react';
import { Star, Quote, Calendar, MapPin } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Антон',
    date: '14 мая 2025',
    rating: 5,
    avatar: 'А',
    project: 'Монтаж натяжных потолков',
    review: 'Оперативно списались, провели замеры и договорились об удобном дне. Ребята все сделали быстро и качественно, большое спасибо!'
  },
  {
    id: 2,
    name: 'Ангелина',
    date: '8 мая 2025',
    rating: 5,
    avatar: 'А',
    project: 'Монтаж натяжных потолков',
    review: 'Спасибо огромное Рустаму и его команде за прекрасно выполненную работу! Натягивали потолки в комнате, прихожей и коридоре, предварительно оговорили все нюансы и согласовали смету. В комнате потолки были нестандартные, необходимо было сделать карниз по эркеру с подсветкой. Все сделали в лучшем виде! Однозначно рекомендую Рустама ! Работа выполнена быстро, четко и чисто !'
  },
  {
    id: 3,
    name: 'Виктория',
    date: '12 апреля 2025',
    rating: 5,
    avatar: 'В',
    project: 'Монтаж натяжных потолков',
    review: 'Рустам пришёл с напарником Артуром в назначенный день и время, всё сделали быстро и главное качественно, теперь у меня красивый и стильный потолок в прихожей. Мало кто берётся за маленькую площадь, а мне удобно делать по одной комнате и именно то, что я хочу, так как хочется более современное освещение, а на все комнаты сразу это дорого. Обязательно буду обращаться к Рустаму ещё, так как цены адекватные и работает быстро и качественно. Цена была обозначена сразу и не менялась. Рекомендую!'
  },
  {
    id: 4,
    name: 'Дмитрий',
    date: '9 апреля 2025',
    rating: 5,
    avatar: 'Д',
    project: 'Монтаж натяжных потолков',
    review: 'Выражаю благодарность за проделанную работу! Монтаж натяжных потолков выполнен максимально качественно и в кратчайшие сроки! Ребята большие молодцы, учли все пожелания, установили освещение, карнизы для штор и помогли решить вопрос с потолочными решетками вентиляции. Стоимость работ была оговорена заранее и не менялась.'
  },
  {
    id: 5,
    name: 'Владимир',
    date: '14 марта 2025',
    rating: 5,
    avatar: 'В',
    project: 'Монтаж натяжных потолков',
    review: 'Рустам приехал с напарником 13 марта, сразу обо всем договорились и с 9 утра 14 приступили к работе. Уже в 17 часов все было сделано и даже убран мусор. Работу свою знают хорошо и делают ее на отлично, и по цене все устроило. Ребята очень трудолюбивые и приятные в общении. Буду советовать их своим близким и знакомым. Очень рад знакомству, большое спасибо и удачи 🤝'
  },
  {
    id: 6,
    name: 'Евгений',
    date: '5 марта 2025',
    rating: 5,
    avatar: 'Е',
    project: 'Монтаж натяжных потолков',
    review: 'Долго выбирал исполнителя по натяжным потолкам в доме и столкнулся с неадекватностью большинства потолочников, выраженную в завышении цены на материалы в 2-3 раза и безальтернативностью авансовых схем расчетов, которые я как заказчик исключаю сразу. Рустам-единственный адекватный человек, который не выкручивал руки заказчику и выполнил монтаж из моих материалов. За три ударных дня сделано 160 метров потолков Тектум евро с усиленым профилем и с дополнительными работами с установкой светильников с отличным качеством. Рустам с бригадой - тот редкий случай, когда люди не только работают на себя, но и слышат заказчика. Рекомендую Рустама, в том числе, на большие объекты, поскольку работоспособность бригады позволяет решать масштабные задачи.'
  },
];

const stats = {
  totalReviews: 247,
  averageRating: 4.9,
  fiveStars: 234,
  fourStars: 11,
  threeStars: 2,
  twoStars: 0,
  oneStars: 0,
};

export function ReviewsPage() {
  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">Отзывы клиентов</h1>
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
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Лет гарантии</div>
            </div>
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
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{review.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.project}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">{renderStars(review.rating)}</div>
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                  <p className="text-gray-700 leading-relaxed pl-6">
                    {review.review.length > 150 ? `${review.review.substring(0, 150)}...` : review.review}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
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

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
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
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-200" />
                <p className="text-lg text-gray-700 leading-relaxed pl-8">{selectedReview.review}</p>
              </div>
              <div className="flex items-center justify-between text-gray-500 pt-6 border-t">
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
