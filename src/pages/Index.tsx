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
      price: "от 20 000 ₽/м²"
    },
    {
      icon: "Wrench",
      title: "Капитальный ремонт",
      description: "Полная перепланировка с заменой коммуникаций и отделкой",
      price: "от 25 500 ₽/м²"
    },
    {
      icon: "Paintbrush",
      title: "Дизайнерский ремонт",
      description: "Эксклюзивная отделка по индивидуальному проекту",
      price: "от 31 000 ₽/м²"
    },
    {
      icon: "Zap",
      title: "Электромонтажные работы",
      description: "Замена проводки, установка розеток и выключателей",
      price: "от 3 990 ₽/м²"
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
      text: "Превосходное качество работ! Ремонт выполнен точно в срок, каждая деталь продумана до мелочей. Особенно впечатлили мраморные элементы в ванной.",
      project: "Дизайнерский ремонт 3-комн. кв.",
      photo: "/img/be37677f-79c5-40f7-85df-faab44eca593.jpg"
    },
    {
      name: "Михаил Петров",
      rating: 5,
      text: "Капитальный ремонт выполнен на высшем уровне. Команда работала слаженно, все коммуникации заменены качественно. Рекомендую всем!",
      project: "Капремонт 4-комн. кв.",
      photo: "/img/9df6f056-9aaa-4da6-a357-cf9653e6353e.jpg"
    },
    {
      name: "Елена и Сергей Ковалевы",
      rating: 5,
      text: "Долго выбирали компанию для ремонта нашей квартиры. Elite Renovation превзошли все ожидания! Золотые акценты в интерьере выглядят роскошно.",
      project: "Премиум ремонт 2-комн. кв.",
      photo: "/img/97634294-7e64-4612-a106-30cba52f3899.jpg"
    },
    {
      name: "Владимир Николаевич",
      rating: 5,
      text: "В возрасте 65 лет решился на полный ремонт дома. Ребята сделали все идеально - от электрики до дизайна. Домашний кабинет теперь как в фильме!",
      project: "Элитный ремонт дома",
      photo: "/img/e42c6e8b-52b5-4bab-b5a7-9264a1461428.jpg"
    },
    {
      name: "Мария Александрова",
      rating: 5,
      text: "Как молодой специалист, долго копила на свою первую квартиру. Elite Renovation сделали мою мечту реальностью! Каждый квадратный метр использован максимально эффективно.",
      project: "Дизайнерский ремонт студии",
      photo: "/img/34552321-ddf0-4612-a0b0-17b2cc5a526b.jpg"
    },
    {
      name: "Андрей Соколов",
      rating: 5,
      text: "Ремонт офиса нашей компании. Сроки соблюдены четко, качество материалов на высоте. Сотрудники теперь работают в комфортной атмосере.",
      project: "Ремонт офиса 200м²"
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
      <section className="pt-24 pb-0 relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src="/img/530155e0-9ac6-4a0c-9ad9-20e7d86a8f22.jpg" 
            alt="Премиальный интерьер квартиры"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-white to-luxury-gold bg-clip-text text-transparent">
              Идеальный ремонт квартиры
              <br />
              <span className="text-4xl md:text-5xl">по фиксированной цене</span>
            </h1>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2 text-luxury-gold">Фиксированная цена</h3>
                <p className="text-sm">гарантирована по договору, без изменений</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2 text-luxury-gold">Гарантия до 2 лет</h3>
                <p className="text-sm">на все виды ремонтных услуг</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2 text-luxury-gold">Сертифицированные мастера</h3>
                <p className="text-sm">Knauf, Rehau, Tikkurila и др.</p>
              </div>
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

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-luxury-cream to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Мы в цифрах
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-luxury-gold mb-2">7</div>
              <div className="text-sm text-luxury-charcoal">лет опыта работы</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-luxury-gold mb-2">1021</div>
              <div className="text-sm text-luxury-charcoal">проектов реализовано нами</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-luxury-gold mb-2">2</div>
              <div className="text-sm text-luxury-charcoal">года гарантии на услуги</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-luxury-gold mb-2">3 из 10</div>
              <div className="text-sm text-luxury-charcoal">клиентов приходят по рекомендации</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-luxury-gold mb-2">33</div>
              <div className="text-sm text-luxury-charcoal">сотрудника в штате компании</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-luxury-gold mb-2">от 20</div>
              <div className="text-sm text-luxury-charcoal">тыс.руб/м² стоимость ремонта</div>
            </div>
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
            <p className="text-xl text-luxury-charcoal">
              Премиальные проекты "До" и "После"
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/0adae9ba-aadc-47cc-b0d9-b6299c80987e.jpg" 
                  alt="Гостиная до и после"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Гостиная премиум-класса</CardTitle>
                <CardDescription>Полная трансформация с мраморными элементами</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/2bd0675b-e563-43a9-b9e0-9f8fee7f8b2b.jpg" 
                  alt="Кухня до и после"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Кухня люкс</CardTitle>
                <CardDescription>Элитная кухня с золотой фурнитурой</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/9a32cdfc-0b41-4447-8da9-63aa6fa3ce79.jpg" 
                  alt="Ванная до и после"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Spa-ванная</CardTitle>
                <CardDescription>Мраморная ванная комната с золотом</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/ec8a3532-3243-4c66-865a-dd32a2fde5ef.jpg" 
                  alt="Спальня до и после"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Мастер-спальня</CardTitle>
                <CardDescription>Роскошная спальня с премиум-текстилем</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/5b1046f4-57bb-42fb-96d7-911a5fdd9326.jpg" 
                  alt="Офис до и после"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Домашний офис</CardTitle>
                <CardDescription>Элегантное рабочее пространство</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src="/img/7c8e6f55-d67f-41ce-a044-8af628f8cec7.jpg" 
                  alt="Столовая до и после"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Столовая зона</CardTitle>
                <CardDescription>Изысканная обеденная зона с люстрой</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-luxury-midnight mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-luxury-charcoal">
              Профессионалы с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/img/dffb64b1-c5d4-444e-bdd0-d0dbc611a3ff.jpg" 
                    alt="Генеральный директор"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading">Александр Петров</CardTitle>
                <CardDescription>Генеральный директор</CardDescription>
                <p className="text-sm text-luxury-charcoal/70 mt-2">15 лет в элитном ремонте</p>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/img/b149e8e3-548e-41c6-acf0-4db7babfdf89.jpg" 
                    alt="Главный дизайнер"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading">Мария Иванова</CardTitle>
                <CardDescription>Главный дизайнер</CardDescription>
                <p className="text-sm text-luxury-charcoal/70 mt-2">Премия "Лучший дизайн года"</p>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/img/d887ab05-39d0-4f0b-a891-2326c6901c91.jpg" 
                    alt="Прораб"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading">Сергей Волков</CardTitle>
                <CardDescription>Главный прораб</CardDescription>
                <p className="text-sm text-luxury-charcoal/70 mt-2">Мастер высшего разряда</p>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="/img/21c45d7b-b98d-4251-bd9e-271b1ef470ac.jpg" 
                    alt="Менеджер проектов"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="font-heading">Дмитрий Козлов</CardTitle>
                <CardDescription>Менеджер проектов</CardDescription>
                <p className="text-sm text-luxury-charcoal/70 mt-2">Координирует все этапы</p>
              </CardHeader>
            </Card>
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
                  <span className="text-4xl font-bold text-luxury-gold">20 000₽</span>
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
                  <span className="text-4xl font-bold text-luxury-gold">25 500₽</span>
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
                  <span className="text-4xl font-bold text-luxury-gold">31 000₽</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    {review.photo && (
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img 
                          src={review.photo} 
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="font-medium text-luxury-gold">{review.project}</CardDescription>
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