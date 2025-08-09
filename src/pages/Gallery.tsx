import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const images = [
    {
      id: 1,
      src: "/img/530155e0-9ac6-4a0c-9ad9-20e7d86a8f22.jpg",
      title: "Роскошная гостиная",
      category: "living",
      tags: ["Премиум", "Золото", "Мрамор"]
    },
    {
      id: 2,
      src: "/img/ce24c7a1-49bb-447a-9c85-dcd5a5d95294.jpg",
      title: "Современная кухня",
      category: "kitchen",
      tags: ["Минимализм", "Остров", "Техника"]
    },
    {
      id: 3,
      src: "/img/2bd0675b-e563-43a9-b9e0-9f8fee7f8b2b.jpg",
      title: "Элитная кухня",
      category: "kitchen",
      tags: ["Люкс", "Золото", "Мрамор"]
    },
    {
      id: 4,
      src: "/img/9a32cdfc-0b41-4447-8da9-63aa6fa3ce79.jpg",
      title: "Spa-ванная",
      category: "bathroom",
      tags: ["Мрамор", "Золото", "Spa"]
    },
    {
      id: 5,
      src: "/img/ec8a3532-3243-4c66-865a-dd32a2fde5ef.jpg",
      title: "Мастер-спальня",
      category: "bedroom",
      tags: ["Роскошь", "Текстиль", "Комфорт"]
    },
    {
      id: 6,
      src: "/img/5b1046f4-57bb-42fb-96d7-911a5fdd9326.jpg",
      title: "Домашний офис",
      category: "office",
      tags: ["Классика", "Библиотека", "Дерево"]
    },
    {
      id: 7,
      src: "/img/7c8e6f55-d67f-41ce-a044-8af628f8cec7.jpg",
      title: "Столовая зона",
      category: "dining",
      tags: ["Элегантность", "Люстра", "Стиль"]
    },
    {
      id: 8,
      src: "/img/0adae9ba-aadc-47cc-b0d9-b6299c80987e.jpg",
      title: "Гостиная премиум",
      category: "living",
      tags: ["Трансформация", "До/После", "Премиум"]
    }
  ];

  const categories = [
    { id: "all", label: "Все фото", count: images.length },
    { id: "living", label: "Гостиные", count: images.filter(img => img.category === "living").length },
    { id: "kitchen", label: "Кухни", count: images.filter(img => img.category === "kitchen").length },
    { id: "bathroom", label: "Ванные", count: images.filter(img => img.category === "bathroom").length },
    { id: "bedroom", label: "Спальни", count: images.filter(img => img.category === "bedroom").length },
    { id: "office", label: "Офисы", count: images.filter(img => img.category === "office").length },
    { id: "dining", label: "Столовые", count: images.filter(img => img.category === "dining").length }
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

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
              <Link to="/gallery" className="text-luxury-gold font-medium">Галерея</Link>
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
              Галерея работ
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Фотографии наших лучших проектов в высоком разрешении
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onClick={() => setLightboxImage(image.src)}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <Button 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-luxury-gold hover:bg-luxury-gold/90"
                      onClick={() => setLightboxImage(image.src)}
                    >
                      <Icon name="ZoomIn" size={16} className="mr-2" />
                      Увеличить
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-heading font-semibold mb-2">{image.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {image.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={lightboxImage} 
              alt="Увеличенное изображение"
              className="max-w-full max-h-full object-contain"
            />
            <Button
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
              onClick={() => setLightboxImage(null)}
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>
      )}

      {/* Before/After Section */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              До и После
            </h2>
            <p className="text-xl text-gray-600">
              Впечатляющие трансформации наших проектов
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="/img/0adae9ba-aadc-47cc-b0d9-b6299c80987e.jpg" 
                  alt="До и после ремонта"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500">ДО</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500">ПОСЛЕ</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold">Гостиная в стиле лофт</h3>
                <p className="text-sm text-gray-600">Полная трансформация пространства</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="/img/2bd0675b-e563-43a9-b9e0-9f8fee7f8b2b.jpg" 
                  alt="До и после ремонта кухни"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-500">ДО</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500">ПОСЛЕ</Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-heading font-semibold">Кухня премиум-класса</h3>
                <p className="text-sm text-gray-600">От обычной кухни к произведению искусства</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 360° Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              3D туры
            </h2>
            <p className="text-xl text-gray-600">
              Виртуальные туры по нашим проектам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((tour) => (
              <Card key={tour} className="overflow-hidden group cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-luxury-gold/20 to-luxury-cream relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="RotateCcw" size={48} className="text-luxury-gold mx-auto mb-4" />
                      <h3 className="font-heading font-semibold mb-2">3D Тур #{tour}</h3>
                      <Button className="bg-luxury-gold hover:bg-luxury-gold/90">
                        Начать тур
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Хотите увидеть свой проект в галерее?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Создадим для вас интерьер мечты
          </p>
          <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
            Начать проект
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;