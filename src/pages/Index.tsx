import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, TrendingUp, Music, Guitar, Lightbulb, Mic } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import heroImage from "@/assets/hero-music.jpg";
import coursePiano from "@/assets/course-piano.jpg";
import courseGuitar from "@/assets/course-guitar.jpg";
import courseProduction from "@/assets/course-production.jpg";
import React from "react";

const Index = () => {
  const featuredCourses = [
    {
      title: "Fundamentos de Piano Clásico",
      instructor: "María González",
      price: "$49.99",
      image: coursePiano,
      category: "Piano",
    },
    {
      title: "Guitarra para Principiantes",
      instructor: "Carlos Ramírez",
      price: "$39.99",
      image: courseGuitar,
      category: "Guitarra",
    },
    {
      title: "Producción Musical Moderna",
      instructor: "Ana Torres",
      price: "$59.99",
      image: courseProduction,
      category: "Producción",
    },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Estudiantes Activos" },
    { icon: Play, value: "150+", label: "Cursos Disponibles" },
    { icon: Award, value: "50+", label: "Instructores Expertos" },
    { icon: TrendingUp, value: "95%", label: "Tasa de Satisfacción" },
  ];

  const testimonials = [
    {
      name: "Laura Martínez",
      role: "Estudiante de Piano",
      text: "RaquelMusic transformó mi forma de aprender música. Los cursos son claros, profesionales y puedo avanzar a mi propio ritmo.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Diego Silva",
      role: "Productor Musical",
      text: "La calidad de los cursos de producción es excepcional. Aprendí técnicas profesionales que uso en mi trabajo diario.",
      image: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
      name: "Carmen López",
      role: "Guitarrista",
      text: "Después de años intentando aprender por mi cuenta, finalmente encontré una plataforma que realmente funciona. ¡Altamente recomendado!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const iconMap = {
    Music: Music,
    Guitar: Guitar,
    TrendingUp: TrendingUp,
    Lightbulb: Lightbulb,
    Mic: Mic,
  };

  const roadmapSteps: { step: number; title: string; description: string; icon: keyof typeof iconMap; cta: string; link: string; }[] = [
    {
      step: 1,
      title: "Fundamentos y Teoría Musical",
      description: "Comienza con los conceptos básicos. Aprende a leer partituras, entiende el ritmo y la melodía.",
      icon: "Music",
      cta: "Explorar Teoría",
      link: "/cursos?category=Teoría%20Musical",
    },
    {
      step: 2,
      title: "Elige tu Instrumento",
      description: "Explora nuestros cursos de iniciación para piano, guitarra, violín y más. Encuentra tu pasión.",
      icon: "Guitar",
      cta: "Ver Instrumentos",
      link: "/cursos",
    },
    {
      step: 3,
      title: "Técnica y Práctica",
      description: "Desarrolla tus habilidades con ejercicios prácticos y lecciones de técnica avanzada.",
      icon: "TrendingUp",
      cta: "Mejorar Técnica",
      link: "/cursos",
    },
    {
      step: 4,
      title: "Composición y Creación",
      description: "Aprende a escribir tu propia música. Explora la armonía, la composición y el arreglo.",
      icon: "Lightbulb",
      cta: "Empezar a Componer",
      link: "/cursos?category=Producción",
    },
    {
      step: 5,
      title: "Producción y Grabación",
      description: "Lleva tus creaciones al siguiente nivel. Aprende a grabar, mezclar y masterizar tus canciones.",
      icon: "Mic",
      cta: "Producir Ahora",
      link: "/cursos?category=Producción",
    },
  ];

  return (
    <div className="min-h-screen dark">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Músico en estudio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-white mb-6" style={{ textShadow: '0 2px 4px rgba(254, 254, 254, 0.5)' }}>
              Aprende Música a Tu Ritmo
            </h1>
            <p className="text-l md:text-xl text-muted-foreground mb-8 max-w-2xl" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
              Desde la teoría clásica hasta la tecnología moderna. Cursos profesionales
              en video que se adaptan a tu nivel y objetivos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-hero shadow-glow text-lg hover:scale-105 transition-smooth"
              >
                Empieza a Aprender Hoy
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg border-2 hover:bg-muted"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-border	">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display mb-4">Cursos Destacados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explora nuestros cursos más populares y comienza tu viaje musical hoy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/cursos">
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-muted"
              >
                Ver Todos los Cursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 ">
            <h2 className="font-display mb-4">Lo Que Dicen Nuestros Estudiantes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Miles de músicos ya están aprendiendo con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-smooth animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-grow mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-secondary">★</div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display mb-4">Tu Camino de Aprendizaje Musical</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Desde los fundamentos hasta la producción profesional, te guiamos en cada paso de tu viaje musical.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-primary/20 -translate-y-1/2" aria-hidden="true"></div>
              <div className="relative flex justify-between">
                {roadmapSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center w-1/5">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                        {React.createElement(iconMap[step.icon], { className: "w-8 h-8" })}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 px-2">{step.description}</p>
                    <Link to={step.link}>
                      <Button variant="link" className="group">
                        {step.cta}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/20" aria-hidden="true"></div>
              {roadmapSteps.map((step, index) => (
                <div key={index} className="relative pl-16 mb-12">
                  <div className="absolute left-0 top-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                      {React.createElement(iconMap[step.icon], { className: "w-8 h-8" })}
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-xl border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-primary/20">
                    <p className="text-sm text-primary font-semibold mb-1">Paso {step.step}</p>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <Link to={step.link}>
                      <Button variant="outline" className="group">
                        {step.cta}
                        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px- text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-display mb-6">
              Comienza Tu Viaje Musical Hoy
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a miles de estudiantes que ya están transformando su pasión
              musical en habilidades profesionales
            </p>
            <Button
              size="lg"
              className="gradient-hero shadow-glow text-lg hover:scale-105 transition-smooth"
            >
              Explorar Cursos Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
