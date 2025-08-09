import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Prices = () => {
  const [calculatorData, setCalculatorData] = useState({
    area: "",
    rooms: "1",
    type: "cosmetic"
  });

  const packages = [
    {
      id: "cosmetic",
      title: "Косметический",
      price: "20 000",
      popular: false,
      description: "Обновление интерьера без капитальных изменений",
      includes: [
        "Покраска стен и потолков",
        "Поклейка обоев",
        "Замена напольного покрытия",
        "Мелкий электромонтаж",
        "Установка светильников",
        "Замена сантехники"
      ],
      duration: "2-4 недели"
    },
    {
      id: "capital",
      title: "Капитальный",
      price: "25 500",
      popular: true,
      description: "Полная перепланировка с заменой коммуникаций",
      includes: [
        "Все работы косметического",
        "Демонтаж перегородок",
        "Замена электропроводки",
        "Замена сантехнических труб",
        "Выравнивание стен и полов",
        "Установка дверей и окон",
        "Теплоизоляция"
      ],
      duration: "2-4 месяца"
    },
    {
      id: "design",
      title: "Дизайнерский",
      price: "31 000",
      popular: false,
      description: "Эксклюзивная отделка по индивидуальному проекту",
      includes: [
        "Все работы капитального",
        "Дизайн-проект интерьера",
        "Премиум материалы",
        "Авторский надзор дизайнера",
        "Декоративные элементы",
        "Мебель на заказ",
        "Система умный дом"
      ],
      duration: "3-6 месяцев"
    }
  ];

  const additionalServices = [
    { service: "Дизайн-проект", price: "2 000", unit: "м²" },
    { service: "Демонтаж", price: "800", unit: "м²" },
    { service: "Электромонтаж", price: "3 500", unit: "м²" },
    { service: "Сантехника", price: "4 000", unit: "м²" },
    { service: "Теплый пол", price: "2 500", unit: "м²" },
    { service: "Натяжные потолки", price: "1 200", unit: "м²" },
    { service: "Укладка плитки", price: "1 800", unit: "м²" },
    { service: "Поклейка обоев", price: "600", unit: "м²" },
    { service: "Покраска стен", price: "400", unit: "м²" },
    { service: "Установка дверей", price: "8 000", unit: "шт" },
    { service: "Вывоз мусора", price: "500", unit: "м³" },
    { service: "Уборка после ремонта", price: "150", unit: "м²" }
  ];

  const calculatePrice = () => {
    const area = parseFloat(calculatorData.area) || 0;
    const basePrice = packages.find(p => p.id === calculatorData.type)?.price || "0";
    const pricePerSqm = parseFloat(basePrice.replace(/\s/g, ""));
    const totalPrice = area * pricePerSqm;
    
    return totalPrice.toLocaleString("ru-RU");
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
              <Link to="/portfolio" className="text-gray-600 hover:text-luxury-gold transition-colors">Портфолио</Link>
              <Link to="/prices" className="text-luxury-gold font-medium">Цены</Link>
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
              Цены на ремонт
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Прозрачное ценообразование без скрытых доплат. Фиксированная стоимость по договору
            </p>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader className="text-center">
                <CardTitle className="font-heading text-2xl">Калькулятор стоимости</CardTitle>
                <CardDescription>
                  Рассчитайте примерную стоимость ремонта вашей квартиры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Площадь (м²)</label>
                    <Input
                      type="number"
                      placeholder="Введите площадь"
                      value={calculatorData.area}
                      onChange={(e) => setCalculatorData({...calculatorData, area: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество комнат</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      value={calculatorData.rooms}
                      onChange={(e) => setCalculatorData({...calculatorData, rooms: e.target.value})}
                    >
                      <option value="1">1 комната</option>
                      <option value="2">2 комнаты</option>
                      <option value="3">3 комнаты</option>
                      <option value="4">4+ комнат</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип ремонта</label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                      value={calculatorData.type}
                      onChange={(e) => setCalculatorData({...calculatorData, type: e.target.value})}
                    >
                      <option value="cosmetic">Косметический</option>
                      <option value="capital">Капитальный</option>
                      <option value="design">Дизайнерский</option>
                    </select>
                  </div>
                </div>
                
                {calculatorData.area && (
                  <div className="text-center p-6 bg-luxury-cream rounded-lg">
                    <div className="text-3xl font-bold text-luxury-gold mb-2">
                      {calculatePrice()} ₽
                    </div>
                    <p className="text-gray-600">Примерная стоимость ремонта</p>
                    <Button className="mt-4 bg-luxury-gold hover:bg-luxury-gold/90">
                      Получить точный расчет
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Packages */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Пакеты услуг
            </h2>
            <p className="text-xl text-gray-600">
              Выберите подходящий пакет или создайте индивидуальное предложение
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative ${pkg.popular ? 'border-2 border-luxury-gold' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-luxury-gold">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="font-heading text-xl">{pkg.title}</CardTitle>
                  <div className="text-center">
                    <span className="text-4xl font-bold text-luxury-gold">{pkg.price}₽</span>
                    <span className="text-gray-600">/м²</span>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="text-sm text-gray-500">Срок: {pkg.duration}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Icon name="Check" size={16} className="text-luxury-accent mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-luxury-gold hover:bg-luxury-gold/90' : ''}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-xl text-gray-600">
              Расширьте базовый пакет дополнительными услугами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{service.service}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-luxury-gold">
                        {service.price} ₽
                      </div>
                      <div className="text-sm text-gray-500">
                        за {service.unit}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Price Factors */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              От чего зависит стоимость
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Home",
                title: "Площадь объекта",
                description: "Чем больше площадь, тем выше общая стоимость"
              },
              {
                icon: "Layers",
                title: "Сложность работ",
                description: "Перепланировка и сложные конструкции увеличивают цену"
              },
              {
                icon: "Palette",
                title: "Материалы",
                description: "Премиум материалы стоят дороже стандартных"
              },
              {
                icon: "Clock",
                title: "Сроки выполнения",
                description: "Срочные заказы требуют доплаты 20-30%"
              }
            ].map((factor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={factor.icon} size={32} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="font-heading text-lg">{factor.title}</CardTitle>
                  <CardDescription>{factor.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Варианты оплаты
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="CreditCard" size={48} className="text-luxury-gold mx-auto mb-4" />
                <CardTitle className="font-heading">Поэтапная оплата</CardTitle>
                <CardDescription>
                  Оплачивайте работы по мере их выполнения без переплат
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Banknote" size={48} className="text-luxury-gold mx-auto mb-4" />
                <CardTitle className="font-heading">Скидка за полную оплату</CardTitle>
                <CardDescription>
                  При 100% предоплате скидка 5% от общей стоимости
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Icon name="Calendar" size={48} className="text-luxury-gold mx-auto mb-4" />
                <CardTitle className="font-heading">Рассрочка</CardTitle>
                <CardDescription>
                  Возможна рассрочка до 12 месяцев без процентов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Получите точный расчет стоимости
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Наш специалист приедет на объект и составит подробную смету
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
              Вызвать замерщика
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-midnight">
              Получить смету онлайн
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prices;