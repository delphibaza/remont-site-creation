import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Calculator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Основные параметры
    area: "",
    rooms: "1",
    type: "apartment",
    renovationType: "cosmetic",
    
    // Дополнительные услуги
    services: {
      design: false,
      demolition: false,
      electrical: false,
      plumbing: false,
      flooring: false,
      painting: false,
      tiling: false,
      doors: false,
      windows: false,
      cleanup: false
    },
    
    // Материалы
    materialQuality: [2], // 1-эконом, 2-стандарт, 3-премиум
    
    // Контактные данные
    name: "",
    phone: "",
    email: ""
  });

  const renovationTypes = [
    {
      id: "cosmetic",
      title: "Косметический",
      price: 20000,
      description: "Покраска, обои, мелкий ремонт"
    },
    {
      id: "capital",
      title: "Капитальный", 
      price: 25500,
      description: "Полная перепланировка"
    },
    {
      id: "design",
      title: "Дизайнерский",
      price: 31000,
      description: "Эксклюзивный дизайн"
    }
  ];

  const additionalServices = [
    { id: "design", label: "Дизайн-проект", price: 2000 },
    { id: "demolition", label: "Демонтаж", price: 800 },
    { id: "electrical", label: "Электромонтаж", price: 3500 },
    { id: "plumbing", label: "Сантехнические работы", price: 4000 },
    { id: "flooring", label: "Напольные покрытия", price: 2500 },
    { id: "painting", label: "Покраска стен", price: 400 },
    { id: "tiling", label: "Укладка плитки", price: 1800 },
    { id: "doors", label: "Установка дверей", price: 8000 },
    { id: "windows", label: "Установка окон", price: 15000 },
    { id: "cleanup", label: "Уборка после ремонта", price: 150 }
  ];

  const materialQualityLabels = ["Эконом", "Стандарт", "Премиум"];
  const materialMultipliers = [0.8, 1.0, 1.3];

  const calculatePrice = () => {
    const area = parseFloat(formData.area) || 0;
    const baseType = renovationTypes.find(t => t.id === formData.renovationType);
    const basePrice = baseType ? baseType.price : 0;
    
    // Базовая стоимость
    let totalPrice = area * basePrice;
    
    // Дополнительные услуги
    Object.entries(formData.services).forEach(([serviceId, enabled]) => {
      if (enabled) {
        const service = additionalServices.find(s => s.id === serviceId);
        if (service) {
          if (serviceId === "doors" || serviceId === "windows") {
            // Фиксированная цена за единицу
            totalPrice += service.price * parseInt(formData.rooms);
          } else {
            // Цена за м²
            totalPrice += service.price * area;
          }
        }
      }
    });
    
    // Коэффициент качества материалов
    const qualityMultiplier = materialMultipliers[formData.materialQuality[0] - 1] || 1;
    totalPrice *= qualityMultiplier;
    
    return Math.round(totalPrice);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleServiceChange = (serviceId: string, checked: boolean) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [serviceId]: checked
      }
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-heading font-bold text-luxury-gold">
              ELITE RENOVATION
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-gray-600 hover:text-luxury-gold transition-colors">Услуги</Link>
              <Link to="/calculator" className="text-luxury-gold font-medium">Калькулятор</Link>
              <Link to="/contact" className="text-gray-600 hover:text-luxury-gold transition-colors">Контакты</Link>
            </div>
            <Button className="bg-luxury-gold hover:bg-luxury-gold/90">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-luxury-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-luxury-midnight mb-6">
              Калькулятор ремонта
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Рассчитайте стоимость ремонта за несколько минут
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= stepNumber ? 'bg-luxury-gold text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? 'bg-luxury-gold' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Основные параметры</span>
              <span>Дополнительные услуги</span>
              <span>Материалы</span>
              <span>Результат</span>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Step 1: Basic Parameters */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Основные параметры</CardTitle>
                  <CardDescription>
                    Укажите основную информацию о вашем объекте
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Площадь (м²) *</label>
                      <Input
                        type="number"
                        placeholder="Введите площадь"
                        value={formData.area}
                        onChange={(e) => setFormData({...formData, area: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Количество комнат</label>
                      <select 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                        value={formData.rooms}
                        onChange={(e) => setFormData({...formData, rooms: e.target.value})}
                      >
                        <option value="1">1 комната</option>
                        <option value="2">2 комнаты</option>
                        <option value="3">3 комнаты</option>
                        <option value="4">4+ комнат</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-4">Тип объекта</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { id: "apartment", label: "Квартира", icon: "Home" },
                        { id: "house", label: "Дом", icon: "Building" },
                        { id: "office", label: "Офис", icon: "Briefcase" }
                      ].map((type) => (
                        <Card 
                          key={type.id}
                          className={`cursor-pointer transition-colors ${
                            formData.type === type.id ? 'border-luxury-gold bg-luxury-gold/5' : ''
                          }`}
                          onClick={() => setFormData({...formData, type: type.id})}
                        >
                          <CardContent className="p-4 text-center">
                            <Icon name={type.icon} size={32} className="text-luxury-gold mx-auto mb-2" />
                            <p className="font-medium">{type.label}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-4">Тип ремонта</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {renovationTypes.map((type) => (
                        <Card 
                          key={type.id}
                          className={`cursor-pointer transition-colors ${
                            formData.renovationType === type.id ? 'border-luxury-gold bg-luxury-gold/5' : ''
                          }`}
                          onClick={() => setFormData({...formData, renovationType: type.id})}
                        >
                          <CardContent className="p-4">
                            <h3 className="font-heading font-semibold mb-2">{type.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                            <p className="text-luxury-gold font-bold">{type.price.toLocaleString()} ₽/м²</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Additional Services */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Дополнительные услуги</CardTitle>
                  <CardDescription>
                    Выберите дополнительные услуги, которые вам нужны
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {additionalServices.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3 p-4 border rounded-lg">
                        <Checkbox
                          id={service.id}
                          checked={formData.services[service.id as keyof typeof formData.services]}
                          onCheckedChange={(checked) => handleServiceChange(service.id, checked as boolean)}
                        />
                        <div className="flex-1">
                          <label htmlFor={service.id} className="font-medium cursor-pointer">
                            {service.label}
                          </label>
                          <p className="text-sm text-luxury-gold font-semibold">
                            {service.price.toLocaleString()} ₽
                            {service.id === "doors" || service.id === "windows" ? "/шт" : "/м²"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Materials */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Качество материалов</CardTitle>
                  <CardDescription>
                    Выберите уровень качества материалов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <label className="text-sm font-medium">Уровень качества</label>
                      <span className="text-luxury-gold font-bold">
                        {materialQualityLabels[formData.materialQuality[0] - 1]}
                      </span>
                    </div>
                    <Slider
                      value={formData.materialQuality}
                      onValueChange={(value) => setFormData({...formData, materialQuality: value})}
                      max={3}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Эконом</span>
                      <span>Стандарт</span>
                      <span>Премиум</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        level: "Эконом",
                        description: "Базовые материалы хорошего качества",
                        multiplier: "×0.8",
                        features: ["Стандартные обои", "Ламинат класса 31", "Базовая сантехника"]
                      },
                      {
                        level: "Стандарт",
                        description: "Качественные материалы известных брендов",
                        multiplier: "×1.0",
                        features: ["Виниловые обои", "Ламинат класса 32", "Качественная сантехника"]
                      },
                      {
                        level: "Премиум",
                        description: "Материалы премиум-класса",
                        multiplier: "×1.3",
                        features: ["Дизайнерские обои", "Паркет/керамогранит", "Премиум сантехника"]
                      }
                    ].map((option, index) => (
                      <Card key={index} className={`${
                        formData.materialQuality[0] === index + 1 ? 'border-luxury-gold bg-luxury-gold/5' : ''
                      }`}>
                        <CardContent className="p-4">
                          <h3 className="font-heading font-semibold mb-2">{option.level}</h3>
                          <p className="text-sm text-gray-600 mb-3">{option.description}</p>
                          <p className="text-luxury-gold font-bold mb-3">{option.multiplier}</p>
                          <ul className="text-xs space-y-1">
                            {option.features.map((feature, i) => (
                              <li key={i} className="flex items-center">
                                <Icon name="Check" size={12} className="text-luxury-accent mr-1" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 4: Result */}
            {step === 4 && (
              <div className="space-y-8">
                <Card className="bg-gradient-to-br from-luxury-gold/10 to-luxury-cream">
                  <CardContent className="p-8 text-center">
                    <Icon name="Calculator" size={48} className="text-luxury-gold mx-auto mb-4" />
                    <h2 className="text-3xl font-heading font-bold mb-4">
                      Расчет готов!
                    </h2>
                    <div className="text-5xl font-bold text-luxury-gold mb-2">
                      {calculatePrice().toLocaleString()} ₽
                    </div>
                    <p className="text-gray-600 mb-6">
                      Примерная стоимость ремонта {formData.area}м²
                    </p>
                    <div className="text-sm text-gray-500">
                      * Окончательная стоимость определяется после выезда специалиста
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading">Получить точный расчет</CardTitle>
                    <CardDescription>
                      Оставьте контакты для получения подробной сметы
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя *</label>
                        <Input
                          placeholder="Ваше имя"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон *</label>
                        <Input
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                      <Icon name="Send" size={16} className="mr-2" />
                      Получить подробную смету
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={step === 1}
              >
                <Icon name="ChevronLeft" size={16} className="mr-2" />
                Назад
              </Button>
              
              {step < 4 ? (
                <Button 
                  onClick={nextStep}
                  className="bg-luxury-gold hover:bg-luxury-gold/90"
                  disabled={step === 1 && !formData.area}
                >
                  Далее
                  <Icon name="ChevronRight" size={16} className="ml-2" />
                </Button>
              ) : (
                <Button 
                  onClick={() => setStep(1)}
                  variant="outline"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Начать заново
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;