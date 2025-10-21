import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Music, Target, Heart, Award } from "lucide-react";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

const About = () => {
  const values = [
    {
      icon: Music,
      title: "Pasión por la Música",
      description:
        "Creemos que la música es un lenguaje universal que todos pueden aprender y disfrutar.",
    },
    {
      icon: Target,
      title: "Educación Accesible",
      description:
        "Hacemos que la educación musical profesional sea accesible para todos, en cualquier momento y lugar.",
    },
    {
      icon: Heart,
      title: "Aprendizaje Personalizado",
      description:
        "Cada estudiante es único, por eso ofrecemos rutas de aprendizaje adaptadas a tu nivel y objetivos.",
    },
    {
      icon: Award,
      title: "Calidad Profesional",
      description:
        "Nuestros instructores son músicos profesionales con años de experiencia en enseñanza.",
    },
  ];

  const instructors = [
    {
      name: "María González",
      role: "Instructora de Piano",
      image: instructor1,
      bio: "Con más de 15 años de experiencia como pianista clásica y 10 años enseñando, María ha ayudado a cientos de estudiantes a descubrir su potencial musical.",
    },
    {
      name: "Carlos Ramírez",
      role: "Instructor de Guitarra",
      image: instructor2,
      bio: "Guitarrista profesional y productor musical, Carlos combina técnicas tradicionales con enfoques modernos para crear una experiencia de aprendizaje única.",
    },
  ];

  return (
    <div className="min-h-screen dark">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="font-display mb-6">Sobre RaquelMusic</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Somos una plataforma de aprendizaje musical dedicada a hacer que la
                educación musical profesional sea accesible para todos. Desde 2020,
                hemos ayudado a miles de estudiantes a alcanzar sus metas musicales,
                desde principiantes absolutos hasta músicos avanzados.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra misión es simple: proporcionar educación musical de la más
                alta calidad que se adapte a tu ritmo de vida. Ya sea que quieras
                aprender teoría clásica, dominar un instrumento o sumergirte en la
                producción musical moderna, estamos aquí para guiarte en cada paso.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-display mb-4">Nuestros Valores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Los principios que guían todo lo que hacemos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="font-display mb-4">Conoce a Nuestros Instructores</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Músicos profesionales dedicados a tu éxito
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {instructors.map((instructor, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-border hover:shadow-lg transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover transition-smooth hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {instructor.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {instructor.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {instructor.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: "10,000+", label: "Estudiantes" },
                { value: "150+", label: "Cursos" },
                { value: "50+", label: "Instructores" },
                { value: "95%", label: "Satisfacción" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
