import React from 'react';
import { 
  ShieldCheck, 
  Wallet, 
  Paintbrush, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  ArrowRight,
  Hammer,
  Palette,
  Zap,
  ThumbsUp
} from 'lucide-react';
import { ContactForm } from '../components/ContactForm';

export function HomePage() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-gray-900 bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <div className="relative z-10 text-center max-w-5xl px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Эстетика
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent block">
              и технологии в каждом сантиметре
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-700 font-light">
            Создаем идеальные потолки для вашего дома с гарантией качества и стиля. 
            Европейские материалы, профессиональная установка, 10 лет гарантии.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105 flex items-center gap-3"
            >
              Бесплатный замер
              <ArrowRight className="w-6 h-6" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-xl">
              Посмотреть работы
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-gray-600 font-medium">Лет гарантии</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-600 font-medium">Часа установка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Качество</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-12 text-gray-900">
            О компании R_Potolki
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Мы специализируемся на установке премиальных натяжных потолков для домов и квартир. 
            Наша команда профессионалов гарантирует высочайшее качество работ и использование только 
            лучших материалов от европейских производителей. За 8 лет работы мы установили более 
            500 потолков и заслужили доверие самых требовательных клиентов.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-gray-900">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-blue-100">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Гарантия качества</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Предоставляем 10-летнюю гарантию на все виды работ и используем только сертифицированные материалы от ведущих европейских производителей
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-green-100">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Честные цены</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Никаких скрытых платежей. Окончательная стоимость озвучивается после замера и не меняется. Работаем по договору с фиксированной ценой
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-purple-100">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <Paintbrush className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Премиальный дизайн</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Широкий выбор фактур, цветов и дизайнерских решений. Создаем уникальные интерьеры с учетом ваших пожеланий и стиля помещения
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 text-gray-900">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-500 hover:scale-105 group shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Hammer className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Установка потолков</h3>
              <p className="text-gray-600 leading-relaxed">Профессиональная установка любой сложности за 1 день</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-500 hover:scale-105 group shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Дизайн потолков</h3>
              <p className="text-gray-600 leading-relaxed">Индивидуальные дизайнерские решения и 3D визуализация</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-500 hover:scale-105 group shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Освещение</h3>
              <p className="text-gray-600 leading-relaxed">Встроенное LED освещение любой конфигурации</p>
            </div>
            <div className="text-center p-8 bg-white rounded-3xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-500 hover:scale-105 group shadow-lg hover:shadow-xl">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300">
                <ThumbsUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Обслуживание</h3>
              <p className="text-gray-600 leading-relaxed">Сервисное обслуживание и ремонт в течение гарантии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900">
            Свяжитесь с нами
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}