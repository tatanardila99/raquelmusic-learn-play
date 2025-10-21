import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import heroImage from "@/assets/hero-music.jpg";
import coursePiano from "@/assets/course-piano.jpg";
import courseGuitar from "@/assets/course-guitar.jpg";
import courseProduction from "@/assets/course-production.jpg";

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
    },
    {
      name: "Diego Silva",
      role: "Productor Musical",
      text: "La calidad de los cursos de producción es excepcional. Aprendí técnicas profesionales que uso en mi trabajo diario.",
    },
    {
      name: "Carmen López",
      role: "Guitarrista",
      text: "Después de años intentando aprender por mi cuenta, finalmente encontré una plataforma que realmente funciona. ¡Altamente recomendado!",
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
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display mb-6">
              Aprende Música a Tu Ritmo
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
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
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display mb-4">Lo Que Dicen Nuestros Estudiantes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Miles de músicos ya están aprendiendo con nosotros
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-secondary">★</div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
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
