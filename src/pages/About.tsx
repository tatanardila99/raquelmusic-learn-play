import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Iconos de lucide-react
import { Music, Target, Heart, Award, Users, PlayCircle, BookOpen, Smile, ArrowRight } from 'lucide-react';

// --- Asset Imports ---
// Reemplaza estas rutas con las de tus assets locales.
import aboutHeroImage from '../assets/hero-music.jpg';
import instructor1 from '../assets/instructor-1.jpg';
import instructor2 from '../assets/instructor-2.jpg';

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

const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RaquelMusic. Todos los derechos reservados.</p>
            <div className="flex justify-center gap-6 mt-4">
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">YouTube</a>
            </div>
        </div>
    </footer>
);


// --- Página Sobre Nosotros ---

export default function About() {
  const values = [
    { icon: Music, title: "Pasión por la Música", description: "Creemos que la música es un lenguaje universal que todos pueden aprender y disfrutar." },
    { icon: Target, title: "Educación Accesible", description: "Hacemos que la educación musical sea accesible para todos, en cualquier momento y lugar." },
    { icon: Heart, title: "Aprendizaje Personalizado", description: "Ofrecemos rutas de aprendizaje adaptadas al nivel y objetivos de cada estudiante." },
    { icon: Award, title: "Calidad Profesional", description: "Nuestros instructores son músicos con años de experiencia en la industria y la enseñanza." },
  ];

  const instructors = [
    { name: "María González", role: "Instructora de Piano", image: instructor1, bio: "Con más de 15 años de experiencia como pianista clásica y 10 años enseñando, María ha ayudado a cientos de estudiantes a descubrir su potencial musical." },
    { name: "Carlos Ramírez", role: "Instructor de Guitarra", image: instructor2, bio: "Guitarrista profesional y productor, Carlos combina técnicas tradicionales con enfoques modernos para una experiencia de aprendizaje única." },
  ];

  const stats = [
      { icon: Users, value: "10,000+", label: "Estudiantes Felices" },
      { icon: PlayCircle, value: "150+", label: "Cursos en Video" },
      { icon: BookOpen, value: "50+", label: "Instructores Expertos" },
      { icon: Smile, value: "95%", label: "Tasa de Satisfacción" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={aboutHeroImage} alt="Equipo de estudio musical" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
            </div>
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tighter">Nuestra Misión es Tu Música</h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Somos una plataforma dedicada a hacer que la educación musical profesional sea accesible para todos. Creemos en el poder de la música para transformar vidas y estamos aquí para guiarte en cada paso de tu viaje, desde la primera nota hasta la composición de tu propia obra maestra.
                    </p>
                </div>
            </div>
        </section>

        {/* Values Section */}
        <section className="py-20 sm:py-24 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Nuestros Valores</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Los principios que guían todo lo que hacemos.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-500">
                  <div className="w-16 h-16 bg-gray-700 text-purple-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Conoce a Nuestros Instructores</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">Músicos profesionales dedicados a tu éxito.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {instructors.map((instructor) => (
                <div key={instructor.name} className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden flex flex-col sm:flex-row items-center gap-8 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  <img src={instructor.image} alt={instructor.name} className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-gray-700" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white">{instructor.name}</h3>
                    <p className="text-purple-400 font-semibold mb-3">{instructor.role}</p>
                    <p className="text-gray-400 leading-relaxed">{instructor.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                   <stat.icon className="w-10 h-10 mx-auto mb-4 text-purple-400" />
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 sm:py-24">
            <div className="container mx-auto px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight">¿Listo para Empezar?</h2>
                    <p className="text-xl text-gray-300 mb-8">Únete a miles de estudiantes que ya están transformando su pasión en habilidades profesionales. Explora nuestros cursos y encuentra el perfecto para ti.</p>
                    <Link to="/cursos">
                        <Button size="lg">Explorar Cursos <ArrowRight className="ml-2 w-5 h-5" /></Button>
                    </Link>
                </div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};