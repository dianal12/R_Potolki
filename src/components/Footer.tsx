import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 w-10 h-10 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold">R_Potolki</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Премиальные натяжные потолки для вашего дома. Качество, стиль и надежность с гарантией 10 лет.
            </p>
            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="text-gray-400 ml-2">4.9 из 5 (247 отзывов)</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Портфолио
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">
                  Отзывы
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-400 hover:text-white transition-colors">
                  Калькулятор
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Услуги</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Установка потолков</li>
              <li>Дизайн потолков</li>
              <li>LED освещение</li>
              <li>Сервисное обслуживание</li>
              <li>Гарантийный ремонт</li>
              <li>3D визуализация</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <a href="tel:+79991234567" className="text-gray-300 hover:text-white transition-colors">
                    +7 (999) 123-45-67
                  </a>
                  <p className="text-sm text-gray-500">Звонки принимаем 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <a href="mailto:info@rpotolki.ru" className="text-gray-300 hover:text-white transition-colors">
                    info@rpotolki.ru
                  </a>
                  <p className="text-sm text-gray-500">Ответим в течение часа</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-300">г. Москва, ул. Примерная, 123</span>
                  <p className="text-sm text-gray-500">Офис и склад материалов</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-300">Пн-Вс: 9:00 - 21:00</span>
                  <p className="text-sm text-gray-500">Без выходных</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 R_Potolki. Все права защищены.</p>
              <p className="text-sm mt-1">ИП Гилажетдинов Р.А. | ОГРНИП 0000000000000</p>
            </div>
            <div className="flex items-center gap-6">
              <Link 
                to="/admin" 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Админ-панель
              </Link>
              <div className="text-sm text-gray-500">
                Сайт разработан с сестренкой❤️
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}