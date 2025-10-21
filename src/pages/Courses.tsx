import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Iconos de lucide-react
import { Music, Search, X, Star, ArrowRight } from 'lucide-react';

// --- Asset Imports ---
// Se han restaurado las rutas para usar los assets locales de tu proyecto.
import coursePiano from '../assets/course-piano.jpg';
import courseGuitar from '../assets/course-guitar.jpg';
import courseProduction from '../assets/course-production.jpg';
import courseTheory from '../assets/course-guitar.jpg';
import courseViolin from '../assets/course-guitar.jpg';

// --- Datos de Cursos (Ejemplo) ---
// Reemplaza esto con la importación de tus datos reales
const coursesData = [
  { id: 1, title: "Fundamentos de Piano Clásico", instructor: "María González", price: "$49", image: coursePiano, category: "Piano" },
  { id: 2, title: "Guitarra para Principiantes", instructor: "Carlos Ramírez", price: "$39", image: courseGuitar, category: "Guitarra" },
  { id: 3, title: "Producción Musical Moderna", instructor: "Ana Torres", price: "$59", image: courseProduction, category: "Producción" },
  { id: 4, title: "Teoría Musical Esencial", instructor: "Elena Cruz", price: "$29", image: courseTheory, category: "Teoría Musical" },
  { id: 5, title: "Violín desde Cero", instructor: "Javier Ríos", price: "$45", image: courseViolin, category: "Violín" },
  { id: 6, title: "Acordes de Guitarra Avanzados", instructor: "Carlos Ramírez", price: "$55", image: courseGuitar, category: "Guitarra" },
  { id: 7, title: "Síntesis y Diseño de Sonido", instructor: "Ana Torres", price: "$69", image: courseProduction, category: "Producción" },
  { id: 8, title: "Piano Jazz para Intermedios", instructor: "María González", price: "$65", image: coursePiano, category: "Piano" },
];


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
    const [scrolled, setScrolled] = useState(true); // Siempre con fondo en esta página
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

const CourseCard = ({ title, instructor, price, image, category }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group transition-all duration-300 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
        <div className="overflow-hidden h-48"><img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
        <div className="p-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2 inline-block">{category}</span>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 mb-4">Por {instructor}</p>
            <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-white">{price}</span>
                <Link to={`/curso/${title.toLowerCase().replace(/ /g, '-')}`}><Button size="sm" variant="secondary">Ver Curso</Button></Link>
            </div>
        </div>
    </div>
);


// --- Página de Cursos Mejorada ---

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const categories = ["Todos", "Teoría Musical", "Piano", "Guitarra", "Violín", "Producción"];

  const handleFilter = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setLoading(false), 300); // Simula una carga
  };

  const filteredCourses = coursesData.filter(course => {
    const categoryMatch = selectedCategory === "Todos" || course.category === selectedCategory;
    const searchMatch = searchTerm === "" || 
                        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Header con Búsqueda */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Catálogo de Cursos</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Encuentra el curso perfecto para ti. Filtra por categoría o busca por título o instructor.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text"
                placeholder="Buscar cursos, instructores..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Filtros de Categoría */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleFilter(category)}
                variant={selectedCategory === category ? 'filterActive' : 'filter'}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Grid de Cursos */}
          {loading ? (
             <div className="text-center py-20 text-purple-400">Cargando cursos...</div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <div key={course.id} className="animate-[fadeInUp_0.5s_ease-out_forwards]" style={{ animationDelay: `${index * 50}ms` }}>
                    <CourseCard {...course} />
                  </div>
                ))}
              </div>

              {filteredCourses.length === 0 && (
                <div className="text-center py-20 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-700">
                    <X className="w-12 h-12 text-gray-500" />
                  </div>
                  <h3 className="text-3xl font-bold">No se encontraron cursos</h3>
                  <p className="text-lg text-gray-400 max-w-md mx-auto">
                    Prueba a cambiar la categoría o a modificar tu término de búsqueda.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};