import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Iconos de lucide-react
import { Music, Mail, MessageSquare, MapPin, Phone, Instagram, Youtube, Facebook, ArrowRight } from 'lucide-react';

// --- Asset Imports ---
// Reemplaza esta URL con una imagen tuya, ej: import contactHeroImage from '../assets/contact-hero.jpg';
import heroImage from '../assets/hero-music.jpg';
const contactHeroImage = "https://images.unsplash.com/photo-1587560699334-cc426240668f?auto=format&fit=crop&w=1920&q=80";

// --- Componentes Internos Reutilizados ---

const Button = ({ children, size = 'md', variant = 'default', className = '', ...props }) => {
  const sizeClasses = {
    lg: 'px-8 py-4 text-lg',
    md: 'px-6 py-3 text-base',
    sm: 'px-4 py-2 text-sm',
  };
  const variantClasses = {
    default: 'bg-purple-600 shadow-lg shadow-purple-500/30 text-white hover:bg-purple-700 hover:scale-105',
    outline: 'bg-transparent border-2 border-white/50 text-white hover:bg-white/10',
    secondary: 'bg-gray-700 hover:bg-purple-500 hover:text-white',
  };
  return (<button className={`rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>{children}</button>);
};

const Navbar = () => {
    const navLinks = [
        { name: "Cursos", path: "/cursos" }, { name: "Recursos", path: "/recursos" },
        { name: "Nosotros", path: "/nosotros" }, { name: "Blog", path: "/blog" },
        { name: "Contacto", path: "/contacto" },
    ];
    return (<header className={'fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg shadow-lg'}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
                <Music className="text-purple-400" /> RaquelMusic
            </Link>
            <nav className="hidden md:flex gap-8 items-center">
                {navLinks.map((link) => (<Link key={link.name} to={link.path} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">{link.name}</Link>))}
            </nav>
            <Link to="/login"><Button size="sm" variant="outline" className="hidden md:inline-flex">Iniciar Sesión</Button></Link>
        </div>
    </header>);
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                                <Music className="w-6 h-6 text-purple-400" />
                            </div>
                            <span className="text-white text-xl font-bold">RaquelMusic</span>
                        </Link>
                        <p className="text-sm text-gray-400">
                            Aprende música a tu ritmo, desde la teoría clásica hasta la tecnología moderna.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li><Link to="/cursos" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Catálogo de Cursos</Link></li>
                            <li><Link to="/nosotros" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Sobre Nosotros</Link></li>
                            <li><Link to="/blog" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Blog y Recursos</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Categorías</h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-gray-400">Teoría Musical</li>
                            <li className="text-sm text-gray-400">Piano</li>
                            <li className="text-sm text-gray-400">Guitarra</li>
                            <li className="text-sm text-gray-400">Producción Musical</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contacto</h4>
                        <div className="space-y-4">
                            <a href="mailto:info@raquelmusic.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors">
                                <Mail className="w-4 h-4" />
                                info@raquelmusic.com
                            </a>
                            <div className="flex items-center gap-3">
                                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                                <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-sm text-gray-500">
                        © {currentYear} RaquelMusic. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};


// --- Página de Contacto ---

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    // Resetear el formulario directamente
    const form = e.target as HTMLFormElement;
    form.reset();
    setTimeout(() => setMessageSent(false), 5000); // Oculta el mensaje después de 5 segundos
  };

  const contactInfo = [
    { icon: Mail, title: "Email Principal", value: "info@raquelmusic.com", link: "mailto:info@raquelmusic.com" },
    { icon: MessageSquare, title: "Soporte Estudiantil", value: "soporte@raquelmusic.com", link: "mailto:soporte@raquelmusic.com" },
    { icon: Phone, title: "Teléfono", value: "+34 123 456 789", link: "tel:+34123456789" },
    { icon: MapPin, title: "Ubicación", value: "Madrid, España (Oficina Virtual)", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Header Hero */}
        <section className="relative py-15 md:py-48 flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={heroImage} alt="Contacto" className="w-full h-full object-cover opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 " />
            </div>
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight tracking-tighter">Ponte en Contacto</h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        ¿Tienes preguntas, comentarios o necesitas soporte? Nuestro equipo está listo para ayudarte.
                    </p>
                </div>
            </div>
        </section>

        <section className=" sm:py-24">
            <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                
                {/* Contact Form */}
                <div className="bg-gray-800 p-8 md:p-10 rounded-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-white mb-6">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Nombre Completo</label>
                    <input type="text" id="name" required
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        placeholder="Tu nombre" />
                    </div>

                    <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <input type="email" id="email" required
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        placeholder="tu@email.com" />
                    </div>

                    <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">Asunto</label>
                    <input type="text" id="subject" required
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                        placeholder="¿En qué podemos ayudarte?" />
                    </div>

                    <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Mensaje</label>
                    <textarea id="message" required rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-gray-900 border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all resize-none"
                        placeholder="Escribe tu mensaje aquí..." />
                    </div>
                    
                    {messageSent && (
                        <div className="p-4 rounded-lg bg-green-500/20 text-green-300 border border-green-500">
                            ¡Mensaje Enviado! Gracias por contactarnos. Te responderemos pronto.
                        </div>
                    )}

                    <Button type="submit" size="lg" className="w-full">
                        Enviar Mensaje <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-8">
                <div className="bg-gray-800 p-8 md:p-10 rounded-xl border border-gray-700">
                    <h2 className="text-3xl font-bold text-white mb-8">Información de Contacto</h2>
                    <div className="space-y-6">
                    {contactInfo.map((info) => (
                        <a key={info.title} href={info.link} className="flex items-start gap-5 group">
                            <div className="w-12 h-12 bg-gray-700 text-purple-400 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white">
                                <info.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                                <p className="text-gray-400 transition-colors duration-300 group-hover:text-purple-300">{info.value}</p>
                            </div>
                        </a>
                    ))}
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Horario de Atención</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between text-gray-300"><span className="text-gray-400">Lunes - Viernes:</span><span className="font-medium">9:00 - 18:00</span></div>
                            <div className="flex justify-between text-gray-300"><span className="text-gray-400">Sábado:</span><span className="font-medium">10:00 - 14:00</span></div>
                            <div className="flex justify-between text-gray-300"><span className="text-gray-400">Domingo:</span><span className="font-medium">Cerrado</span></div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 md:p-10 rounded-xl text-center">
                    <h3 className="text-2xl font-bold text-white mb-3">¿Necesitas Ayuda Inmediata?</h3>
                    <p className="text-white/80 mb-6">Nuestro equipo de soporte está disponible para ayudarte en tiempo real.</p>
                    <Button variant="outline" size="lg" className="w-full hover:bg-white/20">
                        Abrir Chat en Vivo
                    </Button>
                </div>
                </div>
            </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};