import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Reviews = () => {
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Анна Смирнова",
      rating: 5,
      date: "15 декабря 2024",
      project: "Дизайнерский ремонт 3-комн. кв.",
      text: "Превосходное качество работ! Ремонт выполнен точно в срок, каждая деталь продумана до мелочей. Особенно впечатлили мраморные элементы в ванной. Команда работала очень аккуратно, убирали за собой каждый день.",
      photo: "/img/be37677f-79c5-40f7-85df-faab44eca593.jpg",
      verified: true,
      helpful: 24,
      category: "design"
    },
    {
      id: 2,
      name: "Михаил Петров",
      rating: 5,
      date: "8 декабря 2024",
      project: "Капремонт 4-комн. кв.",
      text: "Капитальный ремонт выполнен на высшем уровне. Команда работала слаженно, все коммуникации заменены качественно. Особенно порадовало соблюдение сроков - закончили даже на 3 дня раньше! Рекомендую всем!",
      photo: "/img/9df6f056-9aaa-4da6-a357-cf9653e6353e.jpg",
      verified: true,
      helpful: 18,
      category: "capital"
    },
    {
      id: 3,
      name: "Елена и Сергей Ковалевы",
      rating: 5,
      date: "1 декабря 2024",
      project: "Премиум ремонт 2-комн. кв.",
      text: "Долго выбирали компанию для ремонта нашей квартиры. Elite Renovation превзошли все ожидания! Золотые акценты в интерьере выглядят роскошно. Дизайнер Мария - настоящий профессионал!",
      photo: "/img/97634294-7e64-4612-a106-30cba52f3899.jpg",
      verified: true,
      helpful: 31,
      category: "design"
    },
    {
      id: 4,
      name: "Владимир Николаевич",
      rating: 5,
      date: "25 ноября 2024",
      project: "Элитный ремонт дома",
      text: "В возрасте 65 лет решился на полный ремонт дома. Ребята сделали все идеально - от электрики до дизайна. Домашний кабинет теперь как в фильме! Спасибо за терпение и профессионализм.",
      photo: "/img/e42c6e8b-52b5-4bab-b5a7-9264a1461428.jpg",
      verified: true,
      helpful: 15,
      category: "design"
    },
    {
      id: 5,
      name: "Мария Александрова",
      rating: 5,
      date: "20 ноября 2024",
      project: "Дизайнерский ремонт студии",
      text: "Как молодой специалист, долго копила на свою первую квартиру. Elite Renovation сделали мою мечту реальностью! Каждый квадратный метр использован максимально эффективно. Очень довольна результатом!",
      photo: "/img/34552321-ddf0-4612-a0b0-17b2cc5a526b.jpg",
      verified: true,
      helpful: 22,
      category: "design"
    },
    {
      id: 6,
      name: "Андрей Соколов",
      rating: 5,
      date: "12 ноября 2024",
      project: "Ремонт офиса 200м²",
      text: "Ремонт офиса нашей компании. Сроки соблюдены четко, качество материалов на высоте. Сотрудники теперь работают в комфортной атмосфере. Планируем обращаться для ремонта второго офиса.",
      verified: true,
      helpful: 8,
      category: "commercial"
    },
    {
      id: 7,
      name: "Татьяна Иванова",
      rating: 4,
      date: "5 ноября 2024",
      project: "Косметический ремонт 1-комн. кв.",
      text: "Хороший косметический ремонт за разумные деньги. Единственный минус - немного затянули со сроками из-за задержки материалов. Но качество работ отличное, все аккуратно сделано.",
      verified: true,
      helpful: 12,
      category: "cosmetic"
    },
    {
      id: 8,
      name: "Дмитрий Козлов",
      rating: 5,
      date: "28 октября 2024",
      project: "Ремонт ванной комнаты",
      text: "Сделали шикарную ванную! Мраморная плитка, золотая сантехника - все как мечтали. Работы выполнены качественно, гидроизоляция сделана по всем правилам. Уже полгода пользуемся - никаких проблем!",
      verified: true,
      helpful: 19,
      category: "bathroom"
    }
  ];

  const categories = [
    { id: "all", label: "Все отзывы", count: reviews.length },
    { id: "design", label: "Дизайнерский", count: reviews.filter(r => r.category === "design").length },
    { id: "capital", label: "Капитальный", count: reviews.filter(r => r.category === "capital").length },
    { id: "cosmetic", label: "Косметический", count: reviews.filter(r => r.category === "cosmetic").length },
    { id: "bathroom", label: "Ванные", count: reviews.filter(r => r.category === "bathroom").length },
    { id: "commercial", label: "Коммерческие", count: reviews.filter(r => r.category === "commercial").length }
  ];

  const filteredReviews = filter === "all" 
    ? reviews 
    : reviews.filter(review => review.category === filter);

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

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
              <Link to="/reviews" className="text-luxury-gold font-medium">Отзывы</Link>
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
              Отзывы клиентов
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Честные отзывы наших клиентов о качестве работ и сервисе
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">{averageRating.toFixed(1)}</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Средняя оценка</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">{reviews.length}</div>
              <div className="text-sm text-gray-600">Всего отзывов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">98%</div>
              <div className="text-sm text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">100%</div>
              <div className="text-sm text-gray-600">Проверенные отзывы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                onClick={() => setFilter(category.id)}
                className={filter === category.id ? "bg-luxury-gold hover:bg-luxury-gold/90" : ""}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => setShowForm(!showForm)}
              className="bg-luxury-gold hover:bg-luxury-gold/90"
            >
              <Icon name="Plus" size={16} className="mr-2" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      {/* Review Form */}
      {showForm && (
        <section className="py-8 bg-luxury-cream">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="font-heading">Оставить отзыв</CardTitle>
                <CardDescription>
                  Поделитесь своим опытом работы с нами
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Проект</label>
                    <Input placeholder="Тип выполненных работ" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Оценка</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} className="text-2xl text-gray-300 hover:text-yellow-400">
                        <Icon name="Star" size={24} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Отзыв</label>
                  <Textarea 
                    placeholder="Расскажите о своем опыте работы с нами..."
                    rows={4}
                  />
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-luxury-gold hover:bg-luxury-gold/90">
                    Отправить отзыв
                  </Button>
                  <Button variant="outline" onClick={() => setShowForm(false)}>
                    Отмена
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {review.photo && (
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <img 
                            src={review.photo} 
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="font-heading text-base">{review.name}</CardTitle>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Проверен
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{review.date}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="font-medium text-luxury-gold">
                    {review.project}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">"{review.text}"</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-luxury-gold transition-colors">
                      <Icon name="ThumbsUp" size={14} />
                      Полезно ({review.helpful})
                    </button>
                    <button className="flex items-center gap-1 hover:text-luxury-gold transition-colors">
                      <Icon name="Share2" size={14} />
                      Поделиться
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reviews */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Видеоотзывы
            </h2>
            <p className="text-xl text-gray-600">
              Наши клиенты рассказывают о работе с нами
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <Card key={video} className="overflow-hidden">
                <div className="aspect-video bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full bg-luxury-gold hover:bg-luxury-gold/90">
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">Отзыв о ремонте квартиры</CardTitle>
                  <CardDescription>Семья Петровых о капитальном ремонте</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Почему нам доверяют
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Shield",
                title: "Проверенные отзывы",
                description: "Все отзывы проходят модерацию"
              },
              {
                icon: "Award",
                title: "Высокие оценки",
                description: "Средняя оценка 4.9 из 5"
              },
              {
                icon: "Users",
                title: "1000+ клиентов",
                description: "Довольных результатом"
              },
              {
                icon: "Repeat",
                title: "30% повторных",
                description: "Клиентов обращаются снова"
              }
            ].map((indicator, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={indicator.icon} size={32} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="font-heading">{indicator.title}</CardTitle>
                  <CardDescription>{indicator.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Станьте нашим следующим довольным клиентом
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Присоединяйтесь к сотням довольных клиентов
          </p>
          <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
            Начать проект
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Reviews;