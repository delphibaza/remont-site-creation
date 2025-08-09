import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Современная квартира 85м²",
      description: "Минималистичный дизайн с элементами лофт",
      image: "/img/ce24c7a1-49bb-447a-9c85-dcd5a5d95294.jpg",
      category: "apartment",
      tags: ["Капремонт", "Дизайн", "Кухня-гостиная"],
      area: "85м²",
      duration: "3 месяца",
      cost: "2 550 000 ₽"
    },
    {
      id: 2,
      title: "Семейная квартира 120м²",
      description: "Уютный интерьер для большой семьи",
      image: "/img/746f995b-7c61-4717-85cb-9585ee70f7e2.jpg",
      category: "apartment",
      tags: ["Полный ремонт", "3 комнаты", "Детская"],
      area: "120м²",
      duration: "4 месяца",
      cost: "3 600 000 ₽"
    },
    {
      id: 3,
      title: "Элитная ванная комната",
      description: "Spa-зона с мраморной отделкой",
      image: "/img/9a32cdfc-0b41-4447-8da9-63aa6fa3ce79.jpg",
      category: "bathroom",
      tags: ["Премиум", "Мрамор", "Spa"],
      area: "15м²",
      duration: "1 месяц",
      cost: "850 000 ₽"
    },
    {
      id: 4,
      title: "Кухня премиум-класса",
      description: "Кухня с островом и золотой фурнитурой",
      image: "/img/2bd0675b-e563-43a9-b9e0-9f8fee7f8b2b.jpg",
      category: "kitchen",
      tags: ["Премиум", "Остров", "Золото"],
      area: "25м²",
      duration: "2 месяца",
      cost: "1 200 000 ₽"
    },
    {
      id: 5,
      title: "Домашний офис",
      description: "Элегантное рабочее пространство",
      image: "/img/5b1046f4-57bb-42fb-96d7-911a5fdd9326.jpg",
      category: "office",
      tags: ["Офис", "Библиотека", "Классика"],
      area: "20м²",
      duration: "3 недели",
      cost: "450 000 ₽"
    },
    {
      id: 6,
      title: "Мастер-спальня",
      description: "Роскошная спальня с гардеробной",
      image: "/img/ec8a3532-3243-4c66-865a-dd32a2fde5ef.jpg",
      category: "bedroom",
      tags: ["Спальня", "Гардеробная", "Люкс"],
      area: "35м²",
      duration: "2 месяца",
      cost: "980 000 ₽"
    }
  ];

  const filters = [
    { id: "all", label: "Все проекты", count: projects.length },
    { id: "apartment", label: "Квартиры", count: projects.filter(p => p.category === "apartment").length },
    { id: "kitchen", label: "Кухни", count: projects.filter(p => p.category === "kitchen").length },
    { id: "bathroom", label: "Ванные", count: projects.filter(p => p.category === "bathroom").length },
    { id: "bedroom", label: "Спальни", count: projects.filter(p => p.category === "bedroom").length },
    { id: "office", label: "Офисы", count: projects.filter(p => p.category === "office").length }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              <Link to="/portfolio" className="text-luxury-gold font-medium">Портфолио</Link>
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
              Наши работы
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Более 1000 успешно реализованных проектов премиального ремонта и дизайна интерьеров
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? "bg-luxury-gold hover:bg-luxury-gold/90" : ""}
              >
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Button 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-luxury-gold hover:bg-luxury-gold/90"
                    >
                      <Icon name="Eye" size={16} className="mr-2" />
                      Посмотреть
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="font-heading text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Площадь</div>
                      <div className="font-semibold">{project.area}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Срок</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Стоимость</div>
                      <div className="font-semibold text-luxury-gold">{project.cost}</div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Подробнее о проекте
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Наши достижения
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">1000+</div>
              <div className="text-luxury-charcoal">Завершенных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">98%</div>
              <div className="text-luxury-charcoal">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">7</div>
              <div className="text-luxury-charcoal">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-luxury-gold mb-2">15</div>
              <div className="text-luxury-charcoal">Наград и премий</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Хотите такой же результат?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Обсудим ваш проект и создадим уникальный дизайн
          </p>
          <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
            Начать проект
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;