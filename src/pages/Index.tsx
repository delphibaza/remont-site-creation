import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      icon: "Hammer",
      title: "Косметический ремонт",
      description: "Покраска стен, поклейка обоев, обновление напольных покрытий",
      price: "от 2 500 ₽/м²"
    },
    {
      icon: "Wrench",
      title: "Капитальный ремонт",
      description: "Полная перепланировка с заменой коммуникаций и отделкой",
      price: "от 8 000 ₽/м²"
    },
    {
      icon: "Paintbrush",
      title: "Дизайнерский ремонт",
      description: "Эксклюзивная отделка по индивидуальному проекту",
      price: "от 15 000 ₽/м²"
    },
    {
      icon: "HardHat",
      title: "Электромонтажные работы",
      description: "Замена проводки, установка розеток и выключателей",
      price: "от 1 200 ₽/м²"
    }
  ];

  const portfolio = [
    {
      title: "Современная квартира 85м²",
      description: "Минималистичный дизайн с элементами лофт",
      image: "/img/ce24c7a1-49bb-447a-9c85-dcd5a5d95294.jpg",
      tags: ["Капремонт", "Дизайн", "Кухня-гостиная"]
    },
    {
      title: "Семейная квартира 120м²",
      description: "Уютный интерьер для большой семьи",
      image: "/img/746f995b-7c61-4717-85cb-9585ee70f7e2.jpg",
      tags: ["Полный ремонт", "3 комнаты", "Детская"]
    }
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      rating: 5,
      text: "Отличная работа! Ремонт выполнили в срок, качество на высоте. Особенно понравилось внимание к деталям.",
      project: "Косметический ремонт 2-комн. кв."
    },
    {
      name: "Михаил Петров",
      rating: 5,
      text: "Делали капитальный ремонт квартиры. Все этапы согласовывались, работы выполнены профессионально.",
      project: "Капремонт 3-комн. кв."
    }
  ];

  const faq = [
    {
      question: "Сколько времени занимает ремонт квартиры?",
      answer: "Сроки зависят от типа ремонта: косметический - 2-4 недели, капитальный - 2-4 месяца, дизайнерский - 3-6 месяцев."
    },
    {
      question: "Предоставляете ли вы гарантию на работы?",
      answer: "Да, мы даем гарантию 2 года на все виды работ и 5 лет на скрытые коммуникации."
    },
    {
      question: "Можно ли сделать ремонт в рассрочку?",
      answer: "Да, мы предлагаем поэтапную оплату по ходу выполнения работ без переплат и комиссий."
    },
    {
      question: "Что входит в стоимость ремонта под ключ?",
      answer: "Все работы от демонтажа до финишной отделки, включая материалы, доставку и вывоз мусора."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-heading font-bold text-luxury-gold">
              ELITE RENOVATION
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-luxury-gold transition-colors">
                Услуги
              </a>
              <a href="#portfolio" className="text-gray-600 hover:text-luxury-gold transition-colors">
                Портфолио
              </a>
              <a href="#prices" className="text-gray-600 hover:text-luxury-gold transition-colors">
                Цены
              </a>
              <a href="#reviews" className="text-gray-600 hover:text-luxury-gold transition-colors">
                Отзывы
              </a>
              <a href="#contact" className="text-gray-600 hover:text-luxury-gold transition-colors">
                Контакты
              </a>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-luxury-midnight mb-6">
                Элитный ремонт
                <span className="text-luxury-gold"> премиум-класса</span>
              </h1>
              <p className="text-xl text-luxury-charcoal mb-8 font-body">
                Эксклюзивные интерьеры с безупречным качеством исполнения. 
                Индивидуальный подход к каждому проекту.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Консультация дизайнера
                </Button>
                <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 777-88-99
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src="/img/ce24c7a1-49bb-447a-9c85-dcd5a5d95294.jpg" 
                alt="Современный ремонт квартиры"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-luxury-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Пожизненная гарантия</h3>
              <p className="text-luxury-charcoal/70 text-sm">На премиум материалы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-luxury-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Точные сроки</h3>
              <p className="text-gray-600 text-sm">Договор с фиксированными датами</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-charcoal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-luxury-charcoal" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Опыт 10+ лет</h3>
              <p className="text-gray-600 text-sm">Более 500 завершенных проектов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={32} className="text-luxury-accent" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">Рассрочка 0%</h3>
              <p className="text-gray-600 text-sm">Оплата по этапам работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-luxury-midnight mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выполняем все виды ремонтных работ с использованием качественных материалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-luxury-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-luxury-gold mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-luxury-midnight mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-gray-600">
              Примеры выполненных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="prices" className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-luxury-midnight mb-4">
              Цены на услуги
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачное ценообразование без скрытых доплат
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="font-heading text-center">Косметический</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-luxury-gold">2 500₽</span>
                  <span className="text-gray-600">/м²</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Покраска стен и потолков
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Поклейка обоев
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Замена напольного покрытия
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Мелкий электромонтаж
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            
            <Card className="relative border-2 border-luxury-gold">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-luxury-gold">Популярный</Badge>
              </div>
              <CardHeader>
                <CardTitle className="font-heading text-center">Капитальный</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-luxury-gold">8 000₽</span>
                  <span className="text-gray-600">/м²</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Все работы косметического
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Замена электропроводки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Сантехнические работы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Выравнивание стен
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Установка дверей и окон
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-luxury-gold hover:bg-luxury-gold/90">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-center">Дизайнерский</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold text-luxury-gold">15 000₽</span>
                  <span className="text-gray-600">/м²</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Все работы капитального
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Дизайн-проект
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Премиум материалы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Авторский надзор
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-luxury-accent mr-2" />
                    Декоративные элементы
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-luxury-midnight mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-heading">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription>{review.project}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-luxury-midnight mb-4">
              Частые вопросы
            </h2>
            <p className="text-xl text-gray-600">
              Ответы на популярные вопросы о ремонте
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-300">
              Готовы обсудить ваш проект? Оставьте заявку или позвоните
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="text-luxury-gold mr-4" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="text-luxury-gold mr-4" />
                  <span>info@remontpro.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="text-luxury-gold mr-4" />
                  <span>Москва, ул. Примерная, д. 123</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="text-luxury-gold mr-4" />
                  <span>Пн-Пт: 9:00-18:00, Сб-Вс: 10:00-16:00</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white text-luxury-midnight">
                <CardHeader>
                  <CardTitle className="font-heading">Получить консультацию</CardTitle>
                  <CardDescription>
                    Оставьте заявку и мы перезвоним в течение 15 минут
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold" 
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип ремонта</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold">
                      <option>Косметический ремонт</option>
                      <option>Капитальный ремонт</option>
                      <option>Дизайнерский ремонт</option>
                      <option>Частичный ремонт</option>
                    </select>
                  </div>
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luxury-midnight border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 РемонтПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;