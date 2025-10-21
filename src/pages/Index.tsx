import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Iconos de lucide-react
import { 
  Music, Crown, Star, Check, ArrowRight, Play, Users, Award, 
  TrendingUp, BookOpen, MicVocal, SlidersHorizontal, Lightbulb, Quote,
  FileText, Download, X, Mail, Instagram, Youtube, Facebook
} from 'lucide-react';

// --- Asset Imports ---
// Rutas a tus imágenes locales en la carpeta 'assets'.
import heroImage from '../assets/hero-music.jpg';
import coursePiano from '../assets/course-piano.jpg';
import courseGuitar from '../assets/course-guitar.jpg';
import courseProduction from '../assets/course-production.jpg';

// --- Componentes Internos ---

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
  const [scrolled, setScrolled] = useState(false);
  const navLinks = [
    { name: "Cursos", path: "/cursos" }, { name: "Recursos", path: "/recursos" },
    { name: "Nosotros", path: "/nosotros" }, { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contacto" },
  ];
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
          <Music className="text-purple-400" /> RaquelMusic
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (<Link key={link.name} to={link.path} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">{link.name}</Link>))}
        </nav>
        <Link to="/login"><Button size="sm" variant="outline" className="hidden md:inline-flex">Iniciar Sesión</Button></Link>
      </div>
    </header>
  );
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


const CourseCard = ({ title, instructor, price, image, category }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
        <div className="overflow-hidden h-48"><img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
        <div className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2 inline-block">{category}</span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">Por {instructor}</p>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{price}</span>
                <Link to="/curso/ejemplo"><Button size="sm" variant="secondary">Ver Curso</Button></Link>
            </div>
        </div>
    </div>
);

const SubscriptionPlans = () => {
    const iconMapSubs = { Music, Crown, Star };
    const subscriptionPlansData = [
        { title: 'Mensual', icon: 'Music', price: '9', frequency: '/mes', description: 'Ideal para empezar tu camino musical y aprender a tu propio ritmo.', features: ['Acceso a cursos de nivel principiante', 'Material de estudio descargable', 'Soporte por correo electrónico', 'Acceso a comunidad de estudiantes'], cta: 'Empezar ahora', mostPopular: false },
        { title: 'Anual', icon: 'Star', price: '99', frequency: '/año', description: 'El paquete completo para músicos serios. Ahorra un 15% con este plan.', features: ['Todo lo del plan Mensual', 'Acceso a cursos avanzados y de producción', 'Masterclasses en vivo', 'Descarga de proyectos y presets', 'Soporte prioritario'], cta: 'Elegir plan Anual', mostPopular: true },
        { title: 'Vitalicio', icon: 'Crown', price: '299', frequency: 'pago único', description: 'Acceso ilimitado para siempre. La mejor inversión en tu futuro.', features: ['Todo lo del plan Anual', 'Acceso de por vida a cursos actuales y futuros', 'Sesiones 1 a 1 (2 al año)', 'Acceso a contenido beta exclusivo'], cta: 'Obtener acceso vitalicio', mostPopular: false },
    ];
    return (
        <section id="pricing" className="bg-gray-900 text-white py-20 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16"><h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Planes de Suscripción</h2><p className="text-lg text-gray-400 max-w-3xl mx-auto">Acceso ilimitado a todos nuestros cursos. Elige el plan que se ajusta a tus metas.</p></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {subscriptionPlansData.map((plan) => (
                        <div key={plan.title} className={`bg-gray-800 rounded-2xl border transition-all duration-300 relative ${plan.mostPopular ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/10' : 'border-gray-700 hover:border-purple-400'}`}>
                            {plan.mostPopular && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Más Popular</div>}
                            <div className="p-8">
                                <div className="flex items-center gap-4 mb-6"><div className="w-12 h-12 bg-gray-700 text-purple-400 rounded-lg flex items-center justify-center">{React.createElement(iconMapSubs[plan.icon], { className: "w-6 h-6" })}</div><h3 className="text-white text-2xl font-bold">{plan.title}</h3></div>
                                <div className="mb-6"><span className="text-5xl font-extrabold">${plan.price}</span><span className="text-gray-400 font-medium ml-2">{plan.frequency}</span></div>
                                <p className="text-gray-400 mb-8 h-12">{plan.description}</p>
                                <ul className="space-y-4 text-left mb-10">{plan.features.map((feature, i) => (<li key={i} className="flex items-center gap-3"><div className="w-5 h-5 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center flex-shrink-0"><Check className="w-3 h-3" /></div><span className="text-gray-300">{feature}</span></li>))}</ul>
                                <Link to="/checkout"><Button size="lg" variant={plan.mostPopular ? 'default' : 'secondary'} className="w-full">{plan.cta}</Button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FreeResources = () => {
    const resources = [
        { icon: FileText, title: "Guía de Acordes para Guitarra", description: "Un PDF completo con los acordes esenciales para guitarristas de todos los niveles." },
        { icon: Play, title: "Pack de Samples 'Synthwave'", description: "Una colección exclusiva de samples y loops de alta calidad para tus producciones." },
        { icon: Check, title: "Checklist de Mezcla Profesional", description: "Sigue esta guía para asegurar que tus mezclas suenen limpias y profesionales." }
    ];
    return (
        <section id="resources" className="py-20 sm:py-24 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16"><h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Recursos Gratuitos</h2><p className="text-lg text-gray-400 max-w-2xl mx-auto">Descarga guías, plantillas y herramientas para potenciar tu viaje musical.</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 group transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-700 text-purple-400 rounded-lg flex items-center justify-center mx-auto mb-6"><resource.icon className="w-8 h-8" /></div>
                            <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{resource.description}</p>
                            <Button size="md" variant="secondary" className="mt-auto">Descargar <Download className="ml-2 w-4 h-4" /></Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const VideoPlayerModal = ({ isOpen, onClose, videoId }) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-80 flex items-center justify-center p-4" onClick={onClose}>
            <div className="relative bg-black rounded-xl shadow-2xl w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                <div className="aspect-video">
                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <button onClick={onClose} className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-white rounded-full text-gray-800 flex items-center justify-center hover:bg-gray-200 transition-colors" aria-label="Cerrar video"><X className="w-6 h-6" /></button>
            </div>
        </div>
    );
};

// --- Componente Principal de la Página ---
export default function App() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const YOUTUBE_VIDEO_ID = "_BKzVp6H250";

  const featuredCourses = [
    { title: "Fundamentos de Piano Clásico", instructor: "María González", price: "$49", image: coursePiano, category: "Piano" },
    { title: "Guitarra para Principiantes", instructor: "Carlos Ramírez", price: "$39", image: courseGuitar, category: "Guitarra" },
    { title: "Producción Musical Moderna", instructor: "Ana Torres", price: "$59", image: courseProduction, category: "Producción" },
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Estudiantes Activos" }, { icon: Play, value: "50+", label: "Cursos Disponibles" },
    { icon: Award, value: "20+", label: "Instructores Expertos" }, { icon: TrendingUp, value: "95%", label: "Tasa de Satisfacción" },
  ];

  const testimonials = [
    { name: "Laura Martínez", role: "Estudiante de Piano", text: "RaquelMusic transformó mi forma de aprender. Los cursos son claros, profesionales y puedo avanzar a mi propio ritmo.", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Diego Silva", role: "Productor Musical", text: "La calidad de los cursos de producción es excepcional. Aprendí técnicas que uso en mi trabajo diario.", image: "https://randomuser.me/api/portraits/men/43.jpg" },
    { name: "Carmen López", role: "Guitarrista", text: "Después de años intentando aprender por mi cuenta, finalmente encontré una plataforma que realmente funciona. ¡Recomendado!", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  ];
  
  const learningPath = [
      { icon: BookOpen, label: "Módulo 1", title: "Fundamentos de Teoría Musical", subtitle: "Conceptos Esenciales", description: "Aprende notas, escalas, acordes y ritmo. La base de todo músico." },
      { icon: MicVocal, label: "Módulo 2", title: "Dominio de Instrumento", subtitle: "Técnica y Práctica", description: "Cursos enfocados en la técnica, lectura de partituras y primeras canciones." },
      { icon: SlidersHorizontal, label: "Módulo 3", title: "Producción y Tecnología Musical", subtitle: "Manejo de Software y Secuencias", description: "Domina el software de producción, mezcla y el manejo de secuencias para tocar en vivo." },
      { icon: Lightbulb, label: "Módulo 4", title: "Composición y Arreglos", subtitle: "Crea tu Propia Música", description: "Aprende a estructurar canciones, crear melodías y hacer arreglos completos." },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Músico en estudio" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tighter drop-shadow-lg">Aprende Música a Tu Ritmo</h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl drop-shadow-md">Desde la teoría clásica hasta la tecnología moderna. Cursos profesionales en video que se adaptan a tu nivel y objetivos.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cursos"><Button size="lg">Empieza a Aprender <ArrowRight className="ml-2 w-5 h-5" /></Button></Link>
              <Button size="lg" variant="outline" onClick={() => setShowVideoModal(true)}><Play className="mr-2 w-5 h-5" />Ver Demo</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 border-y border-gray-800">
        <div className="container mx-auto px-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, index) => (<div key={index} className="text-center group"><stat.icon className="w-10 h-10 mx-auto mb-4 text-purple-400 group-hover:text-white transition-colors duration-300" /><div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div><div className="text-sm text-gray-400">{stat.label}</div></div>))}</div></div>
      </section>

      <section id="courses" className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Cursos Destacados</h2><p className="text-lg text-gray-400 max-w-2xl mx-auto">Explora nuestros cursos más populares y comienza tu viaje musical hoy.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">{featuredCourses.map((course, index) => <CourseCard key={index} {...course} />)}</div>
          <div className="text-center"><Link to="/cursos"><Button size="lg" variant="outline">Ver Todos los Cursos <ArrowRight className="ml-2 w-5 h-5" /></Button></Link></div>
        </div>
      </section>
      
      <section className="py-20 sm:py-24 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16"><h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Lo Que Dicen Nuestros Estudiantes</h2><p className="text-lg text-gray-400 max-w-2xl mx-auto">Miles de músicos ya están aprendiendo con nosotros.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (<div key={index} className="bg-gray-800/80 p-8 rounded-xl border border-gray-700 flex flex-col transition-all duration-300 hover:border-purple-500 hover:-translate-y-2"><Quote className="w-8 h-8 text-purple-400 mb-4"/><div className="flex-grow mb-4"><div className="flex gap-1 mb-4 text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}</div><p className="text-gray-300 italic">"{testimonial.text}"</p></div><div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-700"><img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" /><div><div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-gray-400">{testimonial.role}</div></div></div></div>))}</div>
        </div>
      </section>

      <SubscriptionPlans />

      <section id="learning-path" className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20"><h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Tu Ruta Hacia la Maestría Musical</h2><p className="text-lg text-gray-400 max-w-3xl mx-auto">Sigue este camino estructurado para dominar la música, desde los fundamentos hasta la producción avanzada.</p></div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gray-800 rounded" aria-hidden="true"></div>
            {learningPath.map((item, index) => (<div key={index} className="relative pl-12 md:pl-0 mb-16 group"><div className="md:flex items-center"><div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:order-2'}`}><div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg group-hover:border-purple-500 transition-colors duration-300"><p className="text-sm text-purple-400 font-semibold mb-1">{item.label}</p><h3 className="text-white text-2xl font-bold">{item.title}</h3><p className="text-sm text-gray-400 mb-3">{item.subtitle}</p><p className="text-gray-300">{item.description}</p></div></div><div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><div className="w-8 h-8 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center text-white ring-8 ring-gray-900 group-hover:scale-110 transition-transform duration-300"><item.icon className="w-4 h-4 text-purple-400"/></div></div><div className="md:w-1/2"></div></div></div>))}
          </div>
        </div>
      </section>

      <FreeResources />

      <section className="py-20 sm:py-24 relative overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto"><h2 className="font-bold text-4xl md:text-5xl mb-6 tracking-tight">Comienza Tu Viaje Musical Hoy</h2><p className="text-xl text-gray-300 mb-8">Únete a miles de estudiantes que ya están transformando su pasión en habilidades profesionales.</p><Link to="/cursos"><Button size="lg">Explorar Cursos <ArrowRight className="ml-2 w-5 h-5" /></Button></Link></div>
        </div>
      </section>

      <Footer />

      <VideoPlayerModal isOpen={showVideoModal} onClose={() => setShowVideoModal(false)} videoId={YOUTUBE_VIDEO_ID} />
    </div>
  );
}