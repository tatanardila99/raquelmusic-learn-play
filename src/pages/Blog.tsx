import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const articles = [
    {
      title: "10 Técnicas de Práctica que Todo Músico Debe Conocer",
      excerpt:
        "Descubre los métodos más efectivos para optimizar tu tiempo de práctica y mejorar más rápido.",
      category: "Técnicas",
      date: "15 Marzo, 2024",
      readTime: "5 min",
    },
    {
      title: "Guía Completa para Configurar tu Estudio Casero",
      excerpt:
        "Todo lo que necesitas saber para crear un espacio de grabación profesional en casa.",
      category: "Producción",
      date: "10 Marzo, 2024",
      readTime: "8 min",
    },
    {
      title: "Los Mejores DAWs para Principiantes en 2024",
      excerpt:
        "Comparativa detallada de las plataformas de producción musical más populares y accesibles.",
      category: "Equipo",
      date: "5 Marzo, 2024",
      readTime: "6 min",
    },
    {
      title: "Cómo Superar el Miedo Escénico",
      excerpt:
        "Estrategias probadas para controlar los nervios y brillar en tus presentaciones.",
      category: "Desarrollo",
      date: "1 Marzo, 2024",
      readTime: "7 min",
    },
    {
      title: "Teoría Musical: Círculo de Quintas Explicado",
      excerpt:
        "Una guía visual e intuitiva para entender esta herramienta fundamental de la teoría musical.",
      category: "Teoría",
      date: "25 Febrero, 2024",
      readTime: "10 min",
    },
    {
      title: "5 Plugins VST Gratuitos Imprescindibles",
      excerpt:
        "Los mejores plugins sin costo que no pueden faltar en tu arsenal de producción.",
      category: "Producción",
      date: "20 Febrero, 2024",
      readTime: "5 min",
    },
  ];

  const categories = [
    "Todos",
    "Técnicas",
    "Producción",
    "Equipo",
    "Desarrollo",
    "Teoría",
  ];

  return (
    <div className="min-h-screen dark">
      <Navbar />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="font-display mb-4">Blog y Recursos</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Artículos, guías y consejos para músicos de todos los niveles
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  className="border-2 hover:bg-muted"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-8 mb-12">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden border-border hover:shadow-lg transition-smooth animate-fade-in">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto bg-gradient-hero" />
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-primary">Destacado</Badge>
                  <h2 className="text-3xl font-bold mb-4">
                    Cómo Crear una Rutina de Práctica Efectiva
                  </h2>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    Aprende a estructurar tus sesiones de práctica para maximizar
                    tu progreso y mantener la motivación a largo plazo.
                  </p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>20 Marzo, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>12 min de lectura</span>
                    </div>
                  </div>
                  <Button className="w-fit gradient-hero shadow-glow">
                    Leer Artículo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="group border-border hover:shadow-lg transition-smooth cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="aspect-video bg-gradient-card border-b border-border" />
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                      {article.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="border-border bg-gradient-card max-w-3xl mx-auto animate-fade-in">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Recibe Consejos Semanales
                </h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Suscríbete a nuestro newsletter y recibe artículos exclusivos,
                  recursos y ofertas especiales directamente en tu correo.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="gradient-hero shadow-glow">
                    Suscribirse
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
