import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje Enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@raquelmusic.com",
      link: "mailto:info@raquelmusic.com",
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 123 456 789",
      link: "tel:+34123456789",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Madrid, España",
      link: "#",
    },
    {
      icon: MessageSquare,
      title: "Soporte",
      value: "soporte@raquelmusic.com",
      link: "mailto:soporte@raquelmusic.com",
    },
  ];

  return (
    <div className="min-h-screen dark">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-display mb-4">Contacto</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes preguntas? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-border animate-fade-in-up">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">
                  Envíanos un Mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Asunto
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                      placeholder="¿En qué podemos ayudarte?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gradient-hero shadow-glow hover:scale-105 transition-smooth"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <Card className="border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">
                    Información de Contacto
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-start gap-4 group hover:bg-muted/50 p-4 rounded-lg transition-smooth"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow flex-shrink-0 group-hover:scale-110 transition-smooth">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium mb-1">{info.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Horario de Atención
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunes - Viernes</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábado</span>
                      <span className="font-medium">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingo</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-gradient-hero text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-semibold mb-3">
                    ¿Necesitas Ayuda Inmediata?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Nuestro equipo de soporte está disponible para ayudarte
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full hover:scale-105 transition-smooth"
                  >
                    Chat en Vivo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
