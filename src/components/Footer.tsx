import { Link } from "react-router-dom";
import { Music, Mail, Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold">
                RaquelMusic
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Aprende música a tu ritmo, desde la teoría clásica hasta la tecnología moderna.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/cursos"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  Catálogo de Cursos
                </Link>
              </li>
              <li>
                <Link
                  to="/nosotros"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                >
                  Blog y Recursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Teoría Musical</li>
              <li className="text-sm text-muted-foreground">Piano</li>
              <li className="text-sm text-muted-foreground">Guitarra</li>
              <li className="text-sm text-muted-foreground">Producción Musical</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@raquelmusic.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="w-4 h-4" />
                info@raquelmusic.com
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-smooth"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} RaquelMusic. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
