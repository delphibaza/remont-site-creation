import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "Hammer",
      title: "Косметический ремонт",
      description: "Быстрое обновление интерьера без капитальных изменений",
      price: "от 20 000 ₽/м²",
      duration: "2-4 недели",
      includes: ["Покраска стен", "Поклейка обоев", "Замена напольного покрытия", "Мелкий электромонтаж"],
      popular: false
    },
    {
      id: 2,
      icon: "Wrench",
      title: "Капитальный ремонт",
      description: "Полная перепланировка с заменой всех коммуникаций",
      price: "от 25 500 ₽/м²",
      duration: "2-4 месяца",
      includes: ["Демонтаж", "Замена коммуникаций", "Выравнивание стен", "Полная отделка"],
      popular: true
    },
    {
      id: 3,
      icon: "Paintbrush",
      title: "Дизайнерский ремонт",
      description: "Эксклюзивная отделка по индивидуальному проекту",
      price: "от 31 000 ₽/м²",
      duration: "3-6 месяцев",
      includes: ["Дизайн-проект", "Премиум материалы", "Авторский надзор", "Декор"],
      popular: false
    },
    {
      id: 4,
      icon: "Zap",
      title: "Электромонтажные работы",
      description: "Профессиональная замена и монтаж электрики",
      price: "от 3 990 ₽/м²",
      duration: "1-2 недели",
      includes: ["Замена проводки", "Установка розеток", "Монтаж освещения", "Электрощит"],
      popular: false
    },
    {
      id: 5,
      icon: "Droplets",
      title: "Сантехнические работы",
      description: "Замена труб, установка сантехники",
      price: "от 4 500 ₽/м²",
      duration: "1-3 недели",
      includes: ["Замена труб", "Установка сантехники", "Теплый пол", "Гидроизоляция"],
      popular: false
    },
    {
      id: 6,
      icon: "Home",
      title: "Ремонт квартир под ключ",
      description: "Полный цикл работ от проекта до уборки",
      price: "от 28 000 ₽/м²",
      duration: "2-5 месяцев",
      includes: ["Проектирование", "Все виды работ", "Материалы", "Уборка"],
      popular: true
    }
  ];

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
              <Link to="/services" className="text-luxury-gold font-medium">Услуги</Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-luxury-gold transition-colors">Портфолио</Link>
              <Link to="/about" className="text-gray-600 hover:text-luxury-gold transition-colors">О нас</Link>
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
              Наши услуги
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Предоставляем полный спектр ремонтных услуг от косметического обновления до эксклюзивного дизайнерского ремонта
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="relative hover:shadow-xl transition-shadow duration-300">
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-luxury-gold">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={32} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-luxury-gold mb-2">{service.price}</div>
                    <div className="text-sm text-gray-500">Срок: {service.duration}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Что входит:</h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-luxury-accent mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                      Заказать услугу
                    </Button>
                    <Button variant="outline" className="w-full">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Дополнительные услуги
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "Palette", title: "Дизайн интерьера", price: "от 2 000 ₽/м²" },
              { icon: "Truck", title: "Вывоз мусора", price: "от 500 ₽/м³" },
              { icon: "Shield", title: "Гарантийное обслуживание", price: "Бесплатно" },
              { icon: "Clock", title: "Срочный ремонт", price: "+30% к стоимости" }
            ].map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name={service.icon} size={24} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <div className="text-luxury-gold font-bold">{service.price}</div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Готовы начать ремонт?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Получите бесплатную консультацию и расчет стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
              Получить расчет
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-luxury-midnight">
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;