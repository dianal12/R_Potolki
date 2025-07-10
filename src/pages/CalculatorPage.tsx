import React, { useState, useEffect } from 'react';
import { Calculator, Home, Ruler, Palette, Zap, Info, CheckCircle } from 'lucide-react';

interface CalculatorState {
  roomType: string;
  area: number;
  ceilingType: string;
  texture: string;
  lighting: string;
  complexity: string;
  additionalServices: string[];
}

const roomTypes = [
  { id: 'living', name: 'Гостиная', multiplier: 1.0 },
  { id: 'bedroom', name: 'Спальня', multiplier: 0.9 },
  { id: 'kitchen', name: 'Кухня', multiplier: 1.2 },
  { id: 'bathroom', name: 'Ванная', multiplier: 1.3 },
  { id: 'hallway', name: 'Прихожая', multiplier: 0.8 },
  { id: 'office', name: 'Офис', multiplier: 1.1 },
  { id: 'commercial', name: 'Коммерческое', multiplier: 1.4 }
];

const ceilingTypes = [
  { id: 'simple', name: 'Простой одноуровневый', price: 800, description: 'Классический натяжной потолок' },
  { id: 'two-level', name: 'Двухуровневый', price: 1200, description: 'Потолок с перепадом высот' },
  { id: 'multi-level', name: 'Многоуровневый', price: 1800, description: 'Сложная многоуровневая конструкция' },
  { id: 'curved', name: 'Криволинейный', price: 2200, description: 'Потолок с изогнутыми формами' }
];

const textures = [
  { id: 'matte', name: 'Матовый', price: 0, description: 'Классическая матовая поверхность' },
  { id: 'satin', name: 'Сатиновый', price: 100, description: 'Легкий блеск, элегантный вид' },
  { id: 'glossy', name: 'Глянцевый', price: 150, description: 'Зеркальная поверхность' },
  { id: 'fabric', name: 'Тканевый', price: 300, description: 'Премиальная тканевая фактура' },
  { id: 'printed', name: 'С фотопечатью', price: 500, description: 'Индивидуальный дизайн' }
];

const lightingOptions = [
  { id: 'none', name: 'Без освещения', price: 0 },
  { id: 'spots', name: 'Точечные светильники', price: 300 },
  { id: 'led-strip', name: 'LED-лента', price: 500 },
  { id: 'chandelier', name: 'Крепление для люстры', price: 200 },
  { id: 'complex', name: 'Комплексное освещение', price: 800 }
];

const complexityLevels = [
  { id: 'simple', name: 'Простая комната', multiplier: 1.0, description: 'Прямоугольная комната без препятствий' },
  { id: 'medium', name: 'Средняя сложность', multiplier: 1.2, description: 'Комната с выступами, нишами' },
  { id: 'complex', name: 'Высокая сложность', multiplier: 1.5, description: 'Сложная геометрия, много препятствий' }
];

const additionalServices = [
  { id: 'dismantling', name: 'Демонтаж старого потолка', price: 200 },
  { id: 'insulation', name: 'Утепление', price: 300 },
  { id: 'soundproofing', name: 'Звукоизоляция', price: 400 },
  { id: 'ventilation', name: 'Вентиляционные решетки', price: 150 },
  { id: 'cornices', name: 'Скрытые карнизы', price: 250 }
];

export function CalculatorPage() {
  const [calculator, setCalculator] = useState<CalculatorState>({
    roomType: '',
    area: 0,
    ceilingType: '',
    texture: '',
    lighting: '',
    complexity: '',
    additionalServices: []
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    calculatePrice();
  }, [calculator]);

  const calculatePrice = () => {
    if (!calculator.roomType || !calculator.area || !calculator.ceilingType || 
        !calculator.texture || !calculator.lighting || !calculator.complexity) {
      setTotalPrice(0);
      setShowResult(false);
      return;
    }

    const roomType = roomTypes.find(r => r.id === calculator.roomType);
    const ceilingType = ceilingTypes.find(c => c.id === calculator.ceilingType);
    const texture = textures.find(t => t.id === calculator.texture);
    const lighting = lightingOptions.find(l => l.id === calculator.lighting);
    const complexity = complexityLevels.find(c => c.id === calculator.complexity);

    if (!roomType || !ceilingType || !texture || !lighting || !complexity) return;

    let basePrice = (ceilingType.price + texture.price) * calculator.area;
    basePrice *= roomType.multiplier;
    basePrice *= complexity.multiplier;
    basePrice += lighting.price;

    // Add additional services
    const additionalPrice = calculator.additionalServices.reduce((sum, serviceId) => {
      const service = additionalServices.find(s => s.id === serviceId);
      return sum + (service ? service.price : 0);
    }, 0);

    setTotalPrice(basePrice + additionalPrice);
    setShowResult(true);
  };

  const handleAdditionalServiceChange = (serviceId: string, checked: boolean) => {
    setCalculator(prev => ({
      ...prev,
      additionalServices: checked
        ? [...prev.additionalServices, serviceId]
        : prev.additionalServices.filter(id => id !== serviceId)
    }));
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Калькулятор стоимости
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Рассчитайте примерную стоимость натяжного потолка для вашего помещения. 
            Точная цена определяется после замера на объекте.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Room Type */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Тип помещения</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {roomTypes.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setCalculator(prev => ({ ...prev, roomType: room.id }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      calculator.roomType === room.id
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-semibold">{room.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Area */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Ruler className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Площадь помещения</h2>
              </div>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  value={calculator.area || ''}
                  onChange={(e) => setCalculator(prev => ({ ...prev, area: Number(e.target.value) }))}
                  placeholder="Введите площадь"
                  className="flex-1 px-6 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none text-lg"
                />
                <span className="text-lg font-semibold text-gray-600">м²</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Если не знаете точную площадь, умножьте длину на ширину комнаты
              </p>
            </div>

            {/* Ceiling Type */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Тип потолка</h2>
              </div>
              <div className="space-y-4">
                {ceilingTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setCalculator(prev => ({ ...prev, ceilingType: type.id }))}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      calculator.ceilingType === type.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-lg mb-2">{type.name}</div>
                        <div className="text-gray-600">{type.description}</div>
                      </div>
                      <div className="text-blue-600 font-bold">{type.price} ₽/м²</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Texture */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Фактура потолка</h2>
              </div>
              <div className="space-y-4">
                {textures.map((texture) => (
                  <button
                    key={texture.id}
                    onClick={() => setCalculator(prev => ({ ...prev, texture: texture.id }))}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      calculator.texture === texture.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-lg mb-2">{texture.name}</div>
                        <div className="text-gray-600">{texture.description}</div>
                      </div>
                      <div className="text-blue-600 font-bold">
                        {texture.price > 0 ? `+${texture.price} ₽/м²` : 'Базовая цена'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Lighting */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Освещение</h2>
              </div>
              <div className="space-y-4">
                {lightingOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setCalculator(prev => ({ ...prev, lighting: option.id }))}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      calculator.lighting === option.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="font-semibold text-lg">{option.name}</div>
                      <div className="text-blue-600 font-bold">
                        {option.price > 0 ? `+${option.price} ₽` : 'Бесплатно'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Info className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Сложность монтажа</h2>
              </div>
              <div className="space-y-4">
                {complexityLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setCalculator(prev => ({ ...prev, complexity: level.id }))}
                    className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                      calculator.complexity === level.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-lg mb-2">{level.name}</div>
                        <div className="text-gray-600">{level.description}</div>
                      </div>
                      <div className="text-blue-600 font-bold">
                        {level.multiplier > 1 ? `×${level.multiplier}` : 'Базовая цена'}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Дополнительные услуги</h2>
              </div>
              <div className="space-y-4">
                {additionalServices.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={calculator.additionalServices.includes(service.id)}
                        onChange={(e) => handleAdditionalServiceChange(service.id, e.target.checked)}
                        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="font-semibold">{service.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold">+{service.price} ₽</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Расчет стоимости</h3>
                
                {showResult ? (
                  <div className="space-y-6">
                    <div className="bg-white/10 rounded-2xl p-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">
                          {totalPrice.toLocaleString('ru-RU')} ₽
                        </div>
                        <div className="text-blue-100">Примерная стоимость</div>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      {calculator.area > 0 && (
                        <div className="flex justify-between">
                          <span>Площадь:</span>
                          <span>{calculator.area} м²</span>
                        </div>
                      )}
                      {calculator.roomType && (
                        <div className="flex justify-between">
                          <span>Тип помещения:</span>
                          <span>{roomTypes.find(r => r.id === calculator.roomType)?.name}</span>
                        </div>
                      )}
                      {calculator.ceilingType && (
                        <div className="flex justify-between">
                          <span>Тип потолка:</span>
                          <span>{ceilingTypes.find(c => c.id === calculator.ceilingType)?.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="bg-white/10 rounded-2xl p-4">
                      <div className="text-xs text-blue-100 mb-2">
                        * Цена является предварительной и может изменяться в зависимости от особенностей объекта
                      </div>
                    </div>

                    <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-xl">
                      Заказать точный замер
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-blue-100">
                      Заполните все поля для расчета стоимости
                    </p>
                  </div>
                )}
              </div>

              {/* Info Block */}
              <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Что включено в стоимость?</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Материалы премиум-класса
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Профессиональный монтаж
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Гарантия 10 лет
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Уборка после работ
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}