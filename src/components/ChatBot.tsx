import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses = {
  greeting: [
    "Здравствуйте! Я помощник R_Potolki. Как дела с потолками? 😊",
    "Привет! Готов помочь с выбором идеального потолка для вашего дома!",
    "Добро пожаловать! Расскажите, что вас интересует в натяжных потолках?"
  ],
  price: [
    "Стоимость натяжных потолков зависит от площади, типа материала и сложности монтажа. Базовая цена от 800₽/м². Воспользуйтесь нашим калькулятором для точного расчета!",
    "Цены начинаются от 800₽ за квадратный метр. Для точного расчета рекомендую использовать калькулятор на сайте или заказать бесплатный замер."
  ],
  materials: [
    "Мы используем только премиальные материалы от европейских производителей: матовые, глянцевые, сатиновые и тканевые потолки. Все материалы сертифицированы и безопасны.",
    "В нашем ассортименте: матовые потолки (классика), глянцевые (визуально увеличивают пространство), сатиновые (элегантный блеск) и тканевые (премиум-класс)."
  ],
  installation: [
    "Установка занимает 1 день для стандартной комнаты. Работаем аккуратно, защищаем мебель, убираем за собой. Никакой пыли и грязи!",
    "Монтаж выполняется за 3-6 часов в зависимости от сложности. Мастера приезжают со всем необходимым оборудованием."
  ],
  warranty: [
    "Даем 10 лет гарантии на материалы и работы! Это показатель нашей уверенности в качестве. За 8 лет работы ни одного серьезного рекламационного случая.",
    "Гарантия 10 лет покрывает все: провисание, изменение цвета, дефекты монтажа. Мы уверены в своей работе!"
  ],
  lighting: [
    "Предлагаем любые варианты освещения: точечные светильники, LED-ленты, крепления для люстр, сложные световые сценарии. Все продумываем на этапе проектирования.",
    "Освещение планируем индивидуально: от простых точечных светильников до сложных систем с диммерами и цветной подсветкой."
  ],
  contact: [
    "Звоните: +7 (999) 123-45-67 или оставьте заявку на сайте. Выезд замерщика бесплатный! Работаем ежедневно с 9:00 до 21:00.",
    "Для заказа замера: телефон +7 (999) 123-45-67 или форма на сайте. Замер бесплатный, расчет точной стоимости на месте."
  ],
  default: [
    "Интересный вопрос! Лучше обсудить детали с нашим специалистом. Закажите бесплатную консультацию по телефону +7 (999) 123-45-67",
    "Для подробной консультации рекомендую связаться с нашими экспертами. Они ответят на все вопросы и помогут выбрать оптимальное решение.",
    "Этот вопрос лучше обсудить индивидуально. Наши мастера с удовольствием проконсультируют вас по телефону или при выезде на замер."
  ]
};

const quickReplies = [
  { text: "Узнать цену", key: "price" },
  { text: "Материалы", key: "materials" },
  { text: "Сроки установки", key: "installation" },
  { text: "Гарантия", key: "warranty" },
  { text: "Освещение", key: "lighting" },
  { text: "Контакты", key: "contact" }
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(getRandomResponse('greeting'));
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getRandomResponse = (category: keyof typeof botResponses): string => {
    const responses = botResponses[category];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const addBotMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('цена') || message.includes('стоимость') || message.includes('сколько')) {
      return getRandomResponse('price');
    }
    if (message.includes('материал') || message.includes('фактура') || message.includes('глянец') || message.includes('матов')) {
      return getRandomResponse('materials');
    }
    if (message.includes('установ') || message.includes('монтаж') || message.includes('срок')) {
      return getRandomResponse('installation');
    }
    if (message.includes('гарант') || message.includes('качеств')) {
      return getRandomResponse('warranty');
    }
    if (message.includes('свет') || message.includes('освещ') || message.includes('лампа') || message.includes('люстра')) {
      return getRandomResponse('lighting');
    }
    if (message.includes('телефон') || message.includes('контакт') || message.includes('связ') || message.includes('звон')) {
      return getRandomResponse('contact');
    }
    if (message.includes('привет') || message.includes('здравств') || message.includes('добр')) {
      return getRandomResponse('greeting');
    }
    
    return getRandomResponse('default');
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addUserMessage(inputText);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(inputText);
      addBotMessage(response);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (key: string) => {
    const quickReply = quickReplies.find(q => q.key === key);
    if (quickReply) {
      addUserMessage(quickReply.text);
      setIsTyping(true);

      setTimeout(() => {
        const response = getRandomResponse(key as keyof typeof botResponses);
        addBotMessage(response);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Помощник R_Potolki</h3>
                <p className="text-sm text-blue-100">Онлайн</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' 
                      : 'bg-gray-300 text-gray-600'
                  }`}>
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="p-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 mb-3">Популярные вопросы:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.slice(0, 3).map((reply) => (
                  <button
                    key={reply.key}
                    onClick={() => handleQuickReply(reply.key)}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs hover:bg-blue-100 transition-colors"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Напишите ваш вопрос..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-300"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}