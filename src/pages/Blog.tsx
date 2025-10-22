import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Iconos de lucide-react
import { Music, Calendar, Clock, ArrowRight, Rss, Mail } from 'lucide-react';
import Footer from '@/components/Footer';

// --- Asset Imports ---
// Reemplaza estas URLs con las imágenes de tu blog.
const featuredImage = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80";
const articleImg1 = "https://images.unsplash.com/photo-1499415479124-a3a412847a8e?auto=format&fit=crop&w=600&q=80";
const articleImg2 = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80";
const articleImg3 = "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=600&q=80";
const articleImg4 = "https://images.unsplash.com/photo-1462965326201-d02e4f455804?auto=format&fit=crop&w=600&q=80";
const articleImg5 = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80";
const articleImg6 = "https://images.unsplash.com/photo-1611162616475-46b6352b1260?auto=format&fit=crop&w=600&q=80";


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
    filter: 'bg-gray-800 border-2 border-gray-700 text-gray-300 hover:bg-purple-500 hover:text-white hover:border-purple-500',
    filterActive: 'bg-purple-600 border-2 border-purple-500 text-white shadow-md shadow-purple-500/20'
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


// --- Página de Blog ---

export default function Blog() {
    const allArticles = [
        { id: 1, title: "10 Técnicas de Práctica que Todo Músico Debe Conocer", excerpt: "Descubre los métodos más efectivos para optimizar tu tiempo de práctica y mejorar más rápido.", category: "Técnicas", date: "15 Marzo, 2024", readTime: "5 min", image: articleImg1 },
        { id: 2, title: "Guía Completa para Configurar tu Estudio Casero", excerpt: "Todo lo que necesitas saber para crear un espacio de grabación profesional en casa.", category: "Producción", date: "10 Marzo, 2024", readTime: "8 min", image: articleImg2 },
        { id: 3, title: "Los Mejores DAWs para Principiantes en 2024", excerpt: "Comparativa detallada de las plataformas de producción musical más populares y accesibles.", category: "Equipo", date: "5 Marzo, 2024", readTime: "6 min", image: articleImg3 },
        { id: 4, title: "Cómo Superar el Miedo Escénico", excerpt: "Estrategias probadas para controlar los nervios y brillar en tus presentaciones.", category: "Desarrollo", date: "1 Marzo, 2024", readTime: "7 min", image: articleImg4 },
        { id: 5, title: "Teoría Musical: Círculo de Quintas Explicado", excerpt: "Una guía visual e intuitiva para entender esta herramienta fundamental de la teoría musical.", category: "Teoría", date: "25 Febrero, 2024", readTime: "10 min", image: articleImg5 },
        { id: 6, title: "5 Plugins VST Gratuitos Imprescindibles", excerpt: "Los mejores plugins sin costo que no pueden faltar en tu arsenal de producción.", category: "Producción", date: "20 Febrero, 2024", readTime: "5 min", image: articleImg6 },
    ];

    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const categories = ["Todos", "Técnicas", "Producción", "Equipo", "Desarrollo", "Teoría"];

    const filteredArticles = selectedCategory === "Todos" 
        ? allArticles 
        : allArticles.filter(article => article.category === selectedCategory);
    
    const featuredArticle = {
        title: "Cómo Crear una Rutina de Práctica Efectiva",
        excerpt: "Aprende a estructurar tus sesiones de práctica para maximizar tu progreso y mantener la motivación a largo plazo.",
        date: "20 Marzo, 2024",
        readTime: "12 min",
        image: featuredImage,
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            <Navbar />

            <main className="pt-32 pb-20">
                {/* Header */}
                <div className="container mx-auto px-4 text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Blog y Recursos</h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Artículos, guías y consejos para músicos de todos los niveles.
                    </p>
                </div>

                {/* Filtros de Categoría */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            variant={selectedCategory === category ? 'filterActive' : 'filter'}
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Artículo Destacado */}
                <section className="mb-20 container mx-auto px-4">
                    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden md:grid md:grid-cols-2 group transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="overflow-hidden relative">
                            <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <span className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-2">Artículo Destacado</span>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">{featuredArticle.title}</h2>
                            <p className="text-gray-300 mb-6 text-lg">{featuredArticle.excerpt}</p>
                            <div className="flex items-center gap-6 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><span>{featuredArticle.date}</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{featuredArticle.readTime}</span></div>
                            </div>
                            <Link to="/blog/articulo-destacado">
                                <Button size="md">Leer Artículo <ArrowRight className="ml-2 w-4 h-4" /></Button>
                            </Link>
                        </div>
                    </div>
                </section>
                
                {/* Grid de Artículos */}
                <section className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <Link to={`/blog/${article.id}`} key={article.id} className="group block animate-[fadeInUp_0.5s_ease-out_forwards]" style={{ animationDelay: `${index * 50}ms` }}>
                                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 h-full transition-all duration-300 group-hover:border-purple-500 group-hover:shadow-2xl group-hover:shadow-purple-500/10 group-hover:-translate-y-2">
                                    <div className="overflow-hidden h-48">
                                        <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6 flex flex-col">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-3 inline-block">{article.category}</span>
                                        <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-purple-400 flex-grow">{article.title}</h3>
                                        <p className="text-gray-400 mb-4 text-sm line-clamp-2">{article.excerpt}</p>
                                        <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-gray-700 mt-auto">
                                            <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /><span>{article.date}</span></div>
                                            <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /><span>{article.readTime}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="py-20 mt-20">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/20 rounded-xl max-w-3xl mx-auto p-8 md:p-12 text-center relative overflow-hidden">
                           <div className="absolute -top-8 -right-8 w-32 h-32 text-purple-500/5 opacity-50"><Rss className="w-full h-full" /></div>
                            <h2 className="text-3xl font-bold mb-4 text-white">Recibe Consejos Semanales</h2>
                            <p className="text-gray-400 mb-8 text-lg">
                                Suscríbete a nuestro newsletter y recibe artículos exclusivos y recursos directamente en tu correo.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"/>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="flex-1 px-4 py-3 pl-12 rounded-lg bg-gray-900 border-2 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                    aria-label="Email para newsletter"
                                />
                                <Button type="submit">Suscribirse</Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}