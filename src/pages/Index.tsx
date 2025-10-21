import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, TrendingUp, Music, Guitar, Lightbulb, Mic, Music2, Trophy } from "lucide-react";
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
    { icon: Play, value: "50+", label: "Cursos Disponibles" },
    { icon: Award, value: "20+", label: "Instructores Expertos" },
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
    Music2: Music2,
    Trophy: Trophy,
  };

  const subscriptionPlans = [
    {
      icon: "Music2",
      title: "Plan Mensual",
      description: "Acceso a todos los cursos de teoría y nivel principiante. Ideal para empezar tu camino musical.",
    },
    {
      icon: "Guitar",
      title: "Plan Anual (Más Popular)",
      description: "Acceso ilimitado a todo el catálogo, incluyendo cursos de producción y tecnología musical. Descarga de materiales.",
    },
    {
      icon: "Trophy",
      title: "Acceso Vitalicio",
      description: "Un solo pago. Acceso para siempre a todos los cursos actuales, futuras actualizaciones y sesiones de preguntas y respuestas.",
    },
  ];

  const learningPath = [
    {
      label: "Módulo 1",
      title: "Fundamentos de Teoría Musical",
      subtitle: "Conceptos Esenciales",
      description: "Aprende notas, escalas, acordes y ritmo. La base de todo músico.",
    },
    {
      label: "Módulo 2",
      title: "Dominio de Instrumento",
      subtitle: "Técnica y Práctica",
      description: "Cursos enfocados en la técnica, lectura de partituras y primeras canciones.",
    },
    {
      label: "Módulo 3",
      title: "Producción y Tecnología Musical",
      subtitle: "Manejo de Software y Secuencias",
      description: "Domina el software de producción, mezcla y el manejo de secuencias para tocar en vivo.",
    },
    {
      label: "Módulo 4",
      title: "Composición y Arreglos",
      subtitle: "Crea tu Propia Música",
      description: "Aprende a estructurar canciones, crear melodías y hacer arreglos completos.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 " />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="text-white mb-6" style={{ textShadow: '0 2px 4px rgba(254, 254, 254, 0.5)' }}>
              Aprende Música a Tu Ritmo
            </h1>
            <p className="text-l md:text-l text-muted-foreground mb-8 max-w-2xl" style={{ textShadow: '0 2px 4px rgba(127, 108, 108, 0.5)' }}>
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
                <Play className="" />
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Cursos Destacados</h2>
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

      {/* Subscription Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Planes de Suscripción</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Acceso ilimitado a todos nuestros cursos. Elige el plan que se ajusta a tus metas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {subscriptionPlans.map((plan, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.createElement(iconMap[plan.icon], { className: "w-8 h-8" })}
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">{plan.title}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <Button>Seleccionar Plan</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Learning Path Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Ruta de Aprendizaje Recomendada</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sigue este camino estructurado para dominar la música, desde los fundamentos hasta la producción avanzada.
            </p>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-8 top-0 h-full w-0.5 bg-primary/20" aria-hidden="true"></div>
            {learningPath.map((item, index) => (
              <div key={index} className="relative pl-24 mb-12">
                <div className="absolute left-0 top-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <p className="text-sm text-primary font-semibold mb-1">{item.label}</p>
                  <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
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
