import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      title: "Главный офис",
      address: "Москва, ул. Тверская, д. 15, офис 301",
      phone: "+7 (495) 123-45-67",
      email: "info@eliterenovation.ru",
      hours: "Пн-Пт: 9:00-19:00, Сб: 10:00-16:00"
    },
    {
      title: "Филиал в Санкт-Петербурге",
      address: "СПб, Невский пр., д. 85, офис 205",
      phone: "+7 (812) 987-65-43",
      email: "spb@eliterenovation.ru",
      hours: "Пн-Пт: 9:00-18:00, Сб: 10:00-15:00"
    }
  ];

  const contactMethods = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      description: "Звоните с 9:00 до 19:00"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@eliterenovation.ru",
      description: "Ответим в течение часа"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 (495) 123-45-67",
      description: "Быстрые ответы в мессенджере"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "Москва, ул. Тверская, д. 15",
      description: "Приезжайте в наш офис"
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
              <Link to="/services" className="text-gray-600 hover:text-luxury-gold transition-colors">Услуги</Link>
              <Link to="/portfolio" className="text-gray-600 hover:text-luxury-gold transition-colors">Портфолио</Link>
              <Link to="/about" className="text-gray-600 hover:text-luxury-gold transition-colors">О нас</Link>
              <Link to="/contact" className="text-luxury-gold font-medium">Контакты</Link>
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
              Контакты
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Свяжитесь с нами удобным способом. Мы всегда готовы обсудить ваш проект и ответить на вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-luxury-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={method.icon} size={32} className="text-luxury-gold" />
                  </div>
                  <CardTitle className="font-heading">{method.title}</CardTitle>
                  <div className="text-luxury-gold font-bold">{method.value}</div>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон *</label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип услуги</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="cosmetic">Косметический ремонт</option>
                      <option value="capital">Капитальный ремонт</option>
                      <option value="design">Дизайнерский ремонт</option>
                      <option value="partial">Частичный ремонт</option>
                      <option value="consultation">Консультация</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Office Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-luxury-midnight mb-6">
                  Наши офисы
                </h2>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="font-heading text-lg">{office.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Icon name="MapPin" size={16} className="text-luxury-gold mt-1 flex-shrink-0" />
                          <span className="text-sm">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Phone" size={16} className="text-luxury-gold flex-shrink-0" />
                          <span className="text-sm">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Mail" size={16} className="text-luxury-gold flex-shrink-0" />
                          <span className="text-sm">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Icon name="Clock" size={16} className="text-luxury-gold flex-shrink-0" />
                          <span className="text-sm">{office.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="bg-luxury-midnight text-white">
                <CardHeader>
                  <CardTitle className="font-heading">Срочная консультация</CardTitle>
                  <CardDescription className="text-gray-300">
                    Нужна помощь прямо сейчас?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-luxury-gold hover:bg-luxury-gold/90">
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить сейчас
                  </Button>
                  <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-luxury-midnight">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Написать в WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Как нас найти
            </h2>
            <p className="text-xl text-gray-600">
              Мы находимся в центре Москвы, рядом с метро
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={48} className="text-luxury-gold mx-auto mb-4" />
              <p className="text-gray-600">Здесь будет интерактивная карта</p>
              <p className="text-sm text-gray-500">Москва, ул. Тверская, д. 15</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-luxury-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-luxury-midnight mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Как быстро вы отвечаете на заявки?",
                answer: "Мы отвечаем на все заявки в течение 15 минут в рабочее время."
              },
              {
                question: "Можно ли получить консультацию бесплатно?",
                answer: "Да, первичная консультация и выезд замерщика абсолютно бесплатны."
              },
              {
                question: "Работаете ли вы в выходные?",
                answer: "Да, мы работаем в субботу до 16:00. В воскресенье - только экстренные вызовы."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;