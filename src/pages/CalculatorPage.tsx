import React, { useState, useMemo } from 'react';
import { Calculator, Layers, Zap, CheckCircle, Info } from 'lucide-react';

const PRICES = {
  material: {
    bauf: 900,
    msd: 700,
    white_matte: 550,
  },
  profiles: {
    plastic: 250,
    aluminum: 300,
    shadow: 900,
    shadow_eurokraab: 1750,
    floating: 1750,
  },
  fixtures: {
    lamp: 600,
    chandelier: 1500,
  },
};

const materialOptions = [
  { id: 'bauf', label: 'BAUF' },
  { id: 'msd', label: 'MSD PREMIUM' },
  { id: 'white_matte', label: 'Белый мат' },
] as const;

const profileOptions = [
  { id: 'plastic', label: 'Пластик' },
  { id: 'aluminum', label: 'Алюминий' },
  { id: 'shadow', label: 'Теневой профиль' },
  { id: 'shadow_eurokraab', label: 'EUROKRAAB' },
  { id: 'floating', label: 'Парящий профиль' },
] as const;

type MaterialKey = keyof typeof PRICES.material;
type ProfileKey = keyof typeof PRICES.profiles;

interface CalculatorState {
  material: MaterialKey;
  area: number;
  selectedProfiles: ProfileKey[];
  profileLengths: Partial<Record<ProfileKey, number>>;
  fixtures: {
    lamp: number;
    chandelier: number;
  };
  autoSuggestProfiles: boolean;
}

export function CalculatorPage() {
  const [calculator, setCalculator] = useState<CalculatorState>({
    material: 'bauf',
    area: 30,
    selectedProfiles: [],
    profileLengths: {},
    fixtures: {
      lamp: 0,
      chandelier: 0,
    },
    autoSuggestProfiles: true,
  });

  const total = useMemo(() => {
    const areaCost = PRICES.material[calculator.material] * calculator.area;

    const profileCost = calculator.selectedProfiles.reduce((sum, id) => {
      const length = calculator.profileLengths[id] || 0;
      return sum + length * PRICES.profiles[id];
    }, 0);

    const fixtureCost =
      calculator.fixtures.lamp * PRICES.fixtures.lamp +
      calculator.fixtures.chandelier * PRICES.fixtures.chandelier;

    return {
      areaCost,
      profileCost,
      fixtureCost,
      total: areaCost + profileCost + fixtureCost,
    };
  }, [calculator]);

  const handleProfileToggle = (id: ProfileKey) => {
    setCalculator((prev) => {
      const isSelected = prev.selectedProfiles.includes(id);
      const updatedProfiles = isSelected
        ? prev.selectedProfiles.filter((p) => p !== id)
        : [...prev.selectedProfiles, id];
      return {
        ...prev,
        selectedProfiles: updatedProfiles,
      };
    });
  };

  const handleProfileLengthChange = (id: ProfileKey, value: number) => {
    setCalculator((prev) => ({
      ...prev,
      profileLengths: {
        ...prev.profileLengths,
        [id]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Рассчитайте стоимость потолка за 1 минуту</h1>
        <p className="text-lg text-gray-600 mt-2">Узнайте цену, не выходя из дома - без звонков и менеджеров. Конечная стоимость обсуждается на консультации.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          {/* Материал */}
          <div>
            <h2 className="text-xl font-bold mb-4">Материал потолка</h2>
            <div className="flex gap-4 flex-wrap">
              {materialOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setCalculator((prev) => ({ ...prev, material: option.id }))}
                  className={`px-8 py-4 rounded-xl border-2 text-base font-semibold transition ${
                    calculator.material === option.id
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  {option.label} ({PRICES.material[option.id]} ₽/м²)
                </button>
              ))}
            </div>
          </div>

          {/* Площадь */}
          <div>
            <h2 className="text-xl font-bold mb-4">Площадь: {calculator.area} м²</h2>
            <input
              type="range"
              min={10}
              max={100}
              value={calculator.area}
              onChange={(e) => setCalculator((prev) => ({ ...prev, area: Number(e.target.value) }))}
              className="w-full"
            />
            <p className="text-sm text-gray-400 mt-1">Минимальная площадь — 10 м²</p>
          </div>

          {/* Профили */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold">Профили</h2>
              <span title="Профили - декоративные элементы по периметру потолка. Вы можете выбрать их вручную или довериться мастеру.">
                <Info className="w-5 h-5 text-gray-400" />
              </span>
            </div>

            <label className="flex items-center gap-3 mb-4 text-lg">
              <input
                type="checkbox"
                className="w-5 h-5"
                checked={calculator.autoSuggestProfiles}
                onChange={() => setCalculator((prev) => ({
                  ...prev,
                  autoSuggestProfiles: !prev.autoSuggestProfiles,
                  selectedProfiles: [],
                  profileLengths: {},
                }))}
              />
              <span className="text-gray-700">Не знаю, какой профиль выбрать — порекомендуйте</span>
            </label>

            {!calculator.autoSuggestProfiles && (
              <div className="space-y-4">
                {profileOptions.map((profile) => (
                  <div key={profile.id} className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      className="w-5 h-5"
                      checked={calculator.selectedProfiles.includes(profile.id)}
                      onChange={() => handleProfileToggle(profile.id)}
                    />
                    <label className="flex-1 text-base">{profile.label} ({PRICES.profiles[profile.id]} ₽/м.п.)</label>
                    {calculator.selectedProfiles.includes(profile.id) && (
                      <input
                        type="number"
                        min="0"
                        value={calculator.profileLengths[profile.id] ?? Math.round(Math.sqrt(calculator.area) * 4)}
                        onChange={(e) => handleProfileLengthChange(profile.id, Number(e.target.value))}
                        className="w-24 px-4 py-2 border-2 border-gray-200 rounded-xl text-right text-base"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            {calculator.autoSuggestProfiles && (
              <p className="text-sm text-gray-500 mt-2">
                Мы автоматически добавим оптимальный профиль в расчёт — мастер уточнит при замере
              </p>
            )}
          </div>

          {/* Свет */}
          <div>
            <h2 className="text-xl font-bold mb-4">Освещение</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-base">Точечные светильники ({PRICES.fixtures.lamp} ₽)</label>
                <input
                  type="number"
                  min="0"
                  value={calculator.fixtures.lamp}
                  onChange={(e) =>
                    setCalculator((prev) => ({
                      ...prev,
                      fixtures: { ...prev.fixtures, lamp: Number(e.target.value) },
                    }))
                  }
                  className="w-24 px-4 py-2 border-2 border-gray-200 rounded-xl text-right text-base"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="text-base">Люстры ({PRICES.fixtures.chandelier} ₽)</label>
                <input
                  type="number"
                  min="0"
                  value={calculator.fixtures.chandelier}
                  onChange={(e) =>
                    setCalculator((prev) => ({
                      ...prev,
                      fixtures: { ...prev.fixtures, chandelier: Number(e.target.value) },
                    }))
                  }
                  className="w-24 px-4 py-2 border-2 border-gray-200 rounded-xl text-right text-base"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Итог */}
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-blue-700">Итог</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex justify-between"><span>Материал:</span><span>{total.areaCost.toLocaleString('ru-RU')} ₽</span></li>
            <li className="flex justify-between"><span>Профили:</span><span>{total.profileCost.toLocaleString('ru-RU')} ₽</span></li>
            <li className="flex justify-between"><span>Освещение:</span><span>{total.fixtureCost.toLocaleString('ru-RU')} ₽</span></li>
            <hr className="border-t border-blue-200 my-2" />
            <li className="flex justify-between font-bold text-xl text-blue-900 transition-all">
              <span>Итого:</span><span>{total.total.toLocaleString('ru-RU')} ₽</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
