import React from 'react';
import { Link } from 'react-router-dom';

// Iconos de lucide-react
import { Music, Mail, Instagram, Youtube, Facebook, ArrowRight, PlayCircle, FileText, Download, Check, Play } from 'lucide-react';

// --- Asset Imports ---
// Reemplaza esta URL con una imagen tuya para el encabezado, ej: import resourcesHeroImage from '../assets/resources-hero.jpg';
const resourcesHeroImage = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80";

// --- Componentes Internos Reutilizados ---

const Button = ({ children, size = 'md', variant = 'default', className = '', ...props }) => {
  const sizeClasses = { lg: 'px-8 py-4 text-lg', md: 'px-6 py-3 text-base', sm: 'px-4 py-2 text-sm' };
  const variantClasses = { default: 'bg-purple-600 shadow-lg shadow-purple-500/30 text-white hover:bg-purple-700 hover:scale-105', outline: 'bg-transparent border-2 border-white/50 text-white hover:bg-white/10', secondary: 'bg-gray-700 hover:bg-purple-500 hover:text-white' };
  return (<button className={`rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} {...props}>{children}</button>);
};

const Navbar = () => {
    const navLinks = [ { name: "Cursos", path: "/cursos" }, { name: "Recursos", path: "/recursos" }, { name: "Nosotros", path: "/nosotros" }, { name: "Blog", path: "/blog" }, { name: "Contacto", path: "/contacto" }, ];
    return (<header className={'fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg shadow-lg'}> <div className="container mx-auto px-4 py-4 flex justify-between items-center"> <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2"> <Music className="text-purple-400" /> RaquelMusic </Link> <nav className="hidden md:flex gap-8 items-center"> {navLinks.map((link) => (<Link key={link.name} to={link.path} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">{link.name}</Link>))} </nav> <Link to="/login"><Button size="sm" variant="outline" className="hidden md:inline-flex">Iniciar Sesión</Button></Link> </div> </header>);
};

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return ( <footer className="bg-gray-900 border-t border-gray-800"> <div className="container mx-auto px-4 py-16"> <div className="grid grid-cols-1 md:grid-cols-4 gap-12"> <div className="space-y-4 md:col-span-1"><Link to="/" className="flex items-center gap-2"><div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center"><Music className="w-6 h-6 text-purple-400" /></div><span className="text-white text-xl font-bold">RaquelMusic</span></Link><p className="text-sm text-gray-400">Aprende música a tu ritmo, desde la teoría clásica hasta la tecnología moderna.</p></div> <div><h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4><ul className="space-y-3"><li><Link to="/cursos" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Catálogo de Cursos</Link></li><li><Link to="/nosotros" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Sobre Nosotros</Link></li><li><Link to="/blog" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Blog y Recursos</Link></li></ul></div> <div><h4 className="font-semibold text-white mb-4">Categorías</h4><ul className="space-y-3"><li className="text-sm text-gray-400">Teoría Musical</li><li className="text-sm text-gray-400">Piano</li><li className="text-sm text-gray-400">Guitarra</li><li className="text-sm text-gray-400">Producción Musical</li></ul></div> <div><h4 className="font-semibold text-white mb-4">Contacto</h4><div className="space-y-4"><a href="mailto:info@raquelmusic.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors"><Mail className="w-4 h-4" />info@raquelmusic.com</a><div className="flex items-center gap-3"><a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a><a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a><a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a></div></div></div> </div> <div className="border-t border-gray-800 mt-12 pt-8 text-center"><p className="text-sm text-gray-500">© {currentYear} RaquelMusic. Todos los derechos reservados.</p></div> </div> </footer> );
};

// --- Datos Hardcoded (Reemplaza los títulos) ---
const youtubeVideos = [
  { id: "_BKzVp6H250", title: "Los 5 Elementos de una PARTITURA que debes Conocer 🎶", url: "https://www.youtube.com/watch?v=_BKzVp6H250&list=PL0cHRXif8UKDbLheTlQHJ6zf7IECZ2e-T&index=1" },
  { id: "ozGicNFrVY0", title: "Qué son las Tonalidades y Armaduras 🎶", url: "https://www.youtube.com/watch?v=ozGicNFrVY0&list=PL0cHRXif8UKDbLheTlQHJ6zf7IECZ2e-T&index=2" },
  { id: "of2RPfl_EHA", title: "Comprende TODAS las Cifras Indicadoras de Compás ahora! 🎵😱", url: "https://www.youtube.com/watch?v=of2RPfl_EHA&list=PL0cHRXif8UKDbLheTlQHJ6zf7IECZ2e-T&index=3" },
  { id: "_VClUtidk2Q", title: "Ubica las Notas en el Pentagrama RÁPIDAMENTE 🎶", url: "https://www.youtube.com/watch?v=_VClUtidk2Q&list=PL0cHRXif8UKDbLheTlQHJ6zf7IECZ2e-T&index=4" },
  { id: "ANzqRc1NVrs", title: "Diferencia CLARA entre Compas Simple y Compuesto 🎶", url: "https://www.youtube.com/watch?v=ANzqRc1NVrs&list=PL0cHRXif8UKDbLheTlQHJ6zf7IECZ2e-T&index=5" },
  { id: "9f1Gv_S_p6s", title: "Domina TODAS las Figuras Musicales 🎶/ Compás Simple", url: "https://www.youtube.com/watch?v=9f1Gv_S_p6s&list=PL0cHRXif8UKDbLheTlQHJ6zf7IECZ2e-T&index=6" },
];

const downloadableResources = [
    { icon: FileText, title: "Guía de Acordes para Guitarra", description: "Un PDF completo con los acordes esenciales para guitarristas de todos los niveles." },
    { icon: Play, title: "Pack de Samples 'Synthwave'", description: "Una colección exclusiva de samples y loops de alta calidad para tus producciones." },
    { icon: Check, title: "Checklist de Mezcla Profesional", description: "Sigue esta guía para asegurar que tus mezclas suenen limpias y profesionales." }
];

// --- Página de Recursos ---

export default function ResourcesPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />

      <main className="pt-20">
        {/* Header Hero */}
        <section className="relative py-32 md:py-40 flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={resourcesHeroImage} alt="Recursos para músicos" className="w-full h-full object-cover opacity-15" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
            </div>
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight tracking-tighter">Recursos para Músicos</h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                        Explora nuestros tutoriales en video y descarga guías gratuitas para llevar tu música al siguiente nivel.
                    </p>
                </div>
            </div>
        </section>

        {/* Sección de Videos de YouTube */}
        <section className="py-20 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Tutoriales en Video</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Aprende técnicas y conceptos clave con nuestra selección de videos.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {youtubeVideos.map((video) => (
                        <div key={video.id} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
                            <div className="aspect-video bg-black relative overflow-hidden">
                                {/* Placeholder de Thumbnail */}
                                <img 
                                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                                    alt={`Miniatura de ${video.title}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"

                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                     <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{video.title}</h3>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <PlayCircle className="w-10 h-10 text-white/80"/>
                                </div>
                            </div>
                           <div className="p-4 text-center">
                                <a href={video.url} target="_blank" rel="noopener noreferrer">
                                     <Button size="sm" variant="secondary" className="w-full">
                                        Ver en YouTube <ArrowRight className="ml-2 w-4 h-4" />
                                     </Button>
                                </a>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Sección de Recursos Descargables */}
        <section className="py-20 sm:py-24 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">Guías y Materiales Gratuitos</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Descarga PDFs, plantillas y otros recursos útiles para tu aprendizaje.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {downloadableResources.map((resource, index) => (
                        <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 group transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gray-700 text-purple-400 rounded-lg flex items-center justify-center mx-auto mb-6">
                                <resource.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{resource.description}</p>
                            {/* En una app real, este botón iniciaría la descarga */}
                            <Button size="md" variant="secondary" className="mt-auto">
                                Descargar <Download className="ml-2 w-4 h-4" /> 
                            </Button>
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