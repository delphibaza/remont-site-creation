import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const posts = [
    {
      id: 1,
      title: "Тренды дизайна интерьера 2024: что будет актуально",
      excerpt: "Разбираем главные тенденции в дизайне интерьеров на 2024 год: от цветовых решений до новых материалов.",
      image: "/img/530155e0-9ac6-4a0c-9ad9-20e7d86a8f22.jpg",
      category: "design",
      author: "Мария Иванова",
      date: "15 декабря 2024",
      readTime: "5 мин",
      tags: ["Дизайн", "Тренды", "2024"]
    },
    {
      id: 2,
      title: "Как выбрать материалы для ремонта: гид по качеству и цене",
      excerpt: "Подробное руководство по выбору строительных и отделочных материалов для разных типов ремонта.",
      image: "/img/ce24c7a1-49bb-447a-9c85-dcd5a5d95294.jpg",
      category: "materials",
      author: "Александр Петров",
      date: "12 декабря 2024",
      readTime: "8 мин",
      tags: ["Материалы", "Ремонт", "Советы"]
    },
    {
      id: 3,
      title: "Планировка квартиры: 10 ошибок, которых стоит избегать",
      excerpt: "Рассказываем о самых частых ошибках в планировке квартир и как их избежать при ремонте.",
      image: "/img/2bd0675b-e563-43a9-b9e0-9f8fee7f8b2b.jpg",
      category: "planning",
      author: "Сергей Волков",
      date: "8 декабря 2024",
      readTime: "6 мин",
      tags: ["Планировка", "Ошибки", "Советы"]
    },
    {
      id: 4,
      title: "Умный дом: технологии будущего в современном интерьере",
      excerpt: "Обзор современных технологий умного дома и их интеграция в дизайн интерьера.",
      image: "/img/5b1046f4-57bb-42fb-96d7-911a5fdd9326.jpg",
      category: "technology",
      author: "Дмитрий Козлов",
      date: "5 декабря 2024",
      readTime: "7 мин",
      tags: ["Умный дом", "Технологии", "Инновации"]
    },
    {
      id: 5,
      title: "Ремонт ванной комнаты: от проекта до финиша",
      excerpt: "Пошаговое руководство по ремонту ванной комнаты: планирование, материалы, этапы работ.",
      image: "/img/9a32cdfc-0b41-4447-8da9-63aa6fa3ce79.jpg",
      category: "bathroom",
      author: "Мария Иванова",
      date: "1 декабря 2024",
      readTime: "10 мин",
      tags: ["Ванная", "Ремонт", "Гид"]
    },
    {
      id: 6,
      title: "Освещение в интерьере: создаем правильную атмосферу",
      excerpt: "Как правильно спланировать освещение в квартире: типы светильников, зонирование, советы дизайнеров.",
      image: "/img/7c8e6f55-d67f-41ce-a044-8af628f8cec7.jpg",
      category: "design",
      author: "Александр Петров",
      date: "28 ноября 2024",
      readTime: "6 мин",
      tags: ["Освещение", "Дизайн", "Атмосфера"]
    }
  ];

  const categories = [
    { id: "all", label: "Все статьи", count: posts.length },
    { id: "design", label: "Дизайн", count: posts.filter(p => p.category === "design").length },
    { id: "materials", label: "Материалы", count: posts.filter(p => p.category === "materials").length },
    { id: "planning", label: "Планировка", count: posts.filter(p => p.category === "planning").length },
    { id: "technology", label: "Технологии", count: posts.filter(p => p.category === "technology").length },
    { id: "bathroom", label: "Ванные", count: posts.filter(p => p.category === "bathroom").length }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];

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
              <Link to="/blog" className="text-luxury-gold font-medium">Блог</Link>
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
              Блог о ремонте
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полезные статьи, советы экспертов и актуальные тренды в мире ремонта и дизайна
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Поиск статей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-luxury-gold hover:bg-luxury-gold/90" : ""}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-2xl font-heading font-bold text-luxury-midnight mb-8">
              Рекомендуем прочитать
            </h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-luxury-gold">{featuredPost.category}</Badge>
                    <span className="text-sm text-gray-500">{featuredPost.date}</span>
                    <span className="text-sm text-gray-500">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-luxury-gold" />
                      </div>
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <Button className="bg-luxury-gold hover:bg-luxury-gold/90">
                      Читать далее
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="font-heading text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-luxury-gold/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-luxury-gold" />
                      </div>
                      <span className="text-sm font-medium">{post.author}</span>
                    </div>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Читать статью
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-luxury-midnight text-white">
            <CardContent className="p-8 text-center">
              <Icon name="Mail" size={48} className="text-luxury-gold mx-auto mb-6" />
              <h2 className="text-2xl font-heading font-bold mb-4">
                Подпишитесь на рассылку
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Получайте новые статьи, советы экспертов и эксклюзивные материалы о ремонте и дизайне
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Ваш email"
                  className="bg-white text-black"
                />
                <Button className="bg-luxury-gold hover:bg-luxury-gold/90">
                  Подписаться
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-heading font-bold text-luxury-midnight mb-4">
              Популярные темы
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Дизайн интерьера", "Ремонт квартир", "Материалы", "Планировка",
              "Ванная комната", "Кухня", "Освещение", "Умный дом",
              "Тренды 2024", "Советы экспертов", "До и после", "Бюджетный ремонт"
            ].map((tag, index) => (
              <Badge key={index} variant="outline" className="cursor-pointer hover:bg-luxury-gold hover:text-white transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Нужна консультация по ремонту?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Наши эксперты ответят на все ваши вопросы
          </p>
          <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;