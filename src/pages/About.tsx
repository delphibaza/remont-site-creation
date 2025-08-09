import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      experience: "15 лет в элитном ремонте",
      image: "/img/dffb64b1-c5d4-444e-bdd0-d0dbc611a3ff.jpg",
      description: "Основатель компании, эксперт в области премиального ремонта"
    },
    {
      name: "Мария Иванова",
      position: "Главный дизайнер",
      experience: "Премия 'Лучший дизайн года'",
      image: "/img/b149e8e3-548e-41c6-acf0-4db7babfdf89.jpg",
      description: "Создает уникальные интерьеры, работала с мировыми брендами"
    },
    {
      name: "Сергей Волков",
      position: "Главный прораб",
      experience: "Мастер высшего разряда",
      image: "/img/d887ab05-39d0-4f0b-a891-2326c6901c91.jpg",
      description: "Контролирует качество всех строительных работ"
    },
    {
      name: "Дмитрий Козлов",
      position: "Менеджер проектов",
      experience: "Координирует все этапы",
      image: "/img/21c45d7b-b98d-4251-bd9e-271b1ef470ac.jpg",
      description: "Обеспечивает своевременное выполнение проектов"
    }
  ];

  const values = [
    {
      icon: "Award",
      title: "Качество",
      description: "Используем только проверенные материалы и технологии"
    },
    {
      icon: "Clock",
      title: "Пунктуальность",
      description: "Соблюдаем сроки и выполняем обещания"
    },
    {
      icon: "Shield",
      title: "Гарантия",
      description: "Предоставляем расширенную гарантию на все работы"
    },
    {
      icon: "Users",
      title: "Клиентоориентированность",
      description: "Индивидуальный подход к каждому проекту"
    }
  ];

  const achievements = [
    { year: "2017", event: "Основание компании Elite Renovation" },
    { year: "2018", event: "Первые 50 завершенных проектов" },
    { year: "2019", event: "Премия 'Лучшая ремонтная компания года'" },
    { year: "2020", event: "Расширение команды до 20 специалистов" },
    { year: "2021", event: "500-й завершенный проект" },
    { year: "2022", event: "Открытие собственного шоу-рума" },
    { year: "2023", event: "Партнерство с ведущими поставщиками" },
    { year: "2024", event: "1000+ успешных проектов" }
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
              <Link to="/services" className="text-gray-600 hover:text-luxury-gold transition-colors">Услуги</Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-luxury-gold transition-colors">Портфолио</Link>
              <Link to="/about" className="text-luxury-gold font-medium">О нас</Link>
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
              О компании
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elite Renovation — ведущая компания в сфере премиального ремонта и дизайна интерьеров с 7-летним опытом работы
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Компания Elite Renovation была основана в 2017 году с целью предоставления услуг премиального ремонта 
                  и дизайна интерьеров на самом высоком уровне.
                </p>
                <p>
                  За 7 лет работы мы выполнили более 1000 проектов, от небольших косметических ремонтов до масштабных 
                  реконструкций элитных квартир и домов.
                </p>
                <p>
                  Наша команда состоит из высококвалифицированных специалистов: дизайнеров, архитекторов, прорабов 
                  и мастеров, которые разделяют нашу страсть к совершенству.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/img/530155e0-9ac6-4a0c-9ad9-20e7d86a8f22.jpg" 
                alt="Наша работа"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="/img/ce24c7a1-49bb-447a-9c85-dcd5a5d95294.jpg" 
                alt="Интерьер"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Наши ценности
            </h2>
            <p className="text-xl text-gray-600">
              Принципы, которыми мы руководствуемся в работе
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} size={32} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="font-heading">{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600">
              Профессионалы с многолетним опытом
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="font-heading">{member.name}</CardTitle>
                  <CardDescription className="text-luxury-gold font-medium">
                    {member.position}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {member.experience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Наши достижения
            </h2>
            <p className="text-xl text-gray-600">
              Ключевые вехи развития компании
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{achievement.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-4">
                      <p className="font-medium">{achievement.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Сертификаты и лицензии
            </h2>
            <p className="text-xl text-gray-600">
              Подтверждение нашей квалификации
            </p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Лицензия на строительство",
              "Сертификат Knauf",
              "Партнер Rehau",
              "Сертификат Tikkurila",
              "ISO 9001:2015"
            ].map((cert, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-luxury-gold" />
                </div>
                <p className="font-medium text-sm">{cert}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-luxury-midnight text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Готовы работать с профессионалами?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Доверьте свой ремонт команде экспертов
          </p>
          <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold/90">
            Связаться с нами
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;