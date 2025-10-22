import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Iconos de lucide-react
import { 
  Music, Mail, Instagram, Youtube, Facebook, ArrowRight,
  PlayCircle, BookOpen, Star, Users, Clock, Infinity, Check, ChevronDown, Video, FileText, Lock
} from 'lucide-react';

// --- Asset Imports ---
// Reemplaza estas rutas con las de tus assets locales.
import instructorImage from '../assets/instructor-1.jpg';
import courseHeroImage from '../assets/course-production.jpg'; // Imagen principal del curso

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
                    <div className="space-y-4 md:col-span-1"><Link to="/" className="flex items-center gap-2"><div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center"><Music className="w-6 h-6 text-purple-400" /></div><span className="text-white text-xl font-bold">RaquelMusic</span></Link><p className="text-sm text-gray-400">Aprende música a tu ritmo, desde la teoría clásica hasta la tecnología moderna.</p></div>
                    <div><h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4><ul className="space-y-3"><li><Link to="/cursos" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Catálogo de Cursos</Link></li><li><Link to="/nosotros" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Sobre Nosotros</Link></li><li><Link to="/blog" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Blog y Recursos</Link></li></ul></div>
                    <div><h4 className="font-semibold text-white mb-4">Categorías</h4><ul className="space-y-3"><li className="text-sm text-gray-400">Teoría Musical</li><li className="text-sm text-gray-400">Piano</li><li className="text-sm text-gray-400">Guitarra</li><li className="text-sm text-gray-400">Producción Musical</li></ul></div>
                    <div><h4 className="font-semibold text-white mb-4">Contacto</h4><div className="space-y-4"><a href="mailto:info@raquelmusic.com" className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors"><Mail className="w-4 h-4" />info@raquelmusic.com</a><div className="flex items-center gap-3"><a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a><a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a><a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-gray-800 text-gray-400 flex items-center justify-center hover:bg-purple-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a></div></div></div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center"><p className="text-sm text-gray-500">© {currentYear} RaquelMusic. Todos los derechos reservados.</p></div>
            </div>
        </footer>
    );
};

// --- Datos de Ejemplo del Curso ---
const courseData = {
  title: "Producción Musical Moderna con Ableton Live",
  subtitle: "Domina la producción de música electrónica desde cero, desde el beatmaking hasta la mezcla final.",
  instructor: {
    name: "Ana Torres",
    image: instructorImage,
    title: "Productora Musical e Instructora Certificada"
  },
  rating: 4.9,
  reviewsCount: 1250,
  studentsCount: 8300,
  price: "$59.99",
  demoVideoId: "_BKzVp6H250", // ID de YouTube
  description: "<p>Bienvenido al curso definitivo de producción musical con Ableton Live. En este programa, te llevaré de la mano desde los conceptos más básicos hasta técnicas avanzadas de producción, mezcla y mastering.</p><p>Aprenderás a crear tus propias pistas desde cero, entenderás la síntesis de sonido, el sampling, y cómo estructurar una canción completa. Este curso está diseñado para ser 100% práctico.</p><h3>¿Qué aprenderás?</h3><ul><li>Navegación y flujo de trabajo en Ableton Live.</li><li>Creación de patrones rítmicos (Drum Racks).</li><li>Diseño de sonido con sintetizadores (Wavetable y Operator).</li><li>Técnicas de sampling y warping de audio.</li><li>Estructura de canción y arreglos.</li><li>Mezcla y pre-mastering para un sonido profesional.</li></ul>",
  whatYouGet: [
    { icon: Clock, text: "12 horas de video bajo demanda" },
    { icon: FileText, text: "25 recursos descargables" },
    { icon: Infinity, text: "Acceso de por vida" },
    { icon: BookOpen, text: "Certificado de finalización" },
  ],
  curriculum: [
    { title: "Módulo 1: Introducción a Ableton Live", lessons: [
        { title: "1.1 - Conociendo la Interfaz (Vista Session y Arrangement)", duration: "10:35", isLocked: false, videoId: "_BKzVp6H250" },
        { title: "1.2 - Configuración de Audio y MIDI", duration: "08:15", isLocked: false, videoId: "dQw4w9WgXcQ" },
        { title: "1.3 - Tu Primer Beat (Drum Rack Básico)", duration: "15:20", isLocked: false, videoId: "_BKzVp6H250" },
    ]},
    { title: "Módulo 2: Creación Musical", lessons: [
        { title: "2.1 - Teoría Musical para Productores", duration: "18:40", isLocked: true, videoId: "dQw4w9WgXcQ" },
        { title: "2.2 - Grabación y Edición MIDI", duration: "12:50", isLocked: true, videoId: "dQw4w9WgXcQ" },
        { title: "2.3 - El Arte del Sampling", duration: "20:05", isLocked: true, videoId: "dQw4w9WgXcQ" },
    ]},
    { title: "Módulo 3: Mezcla y Mastering", lessons: [
        { title: "3.1 - Fundamentos de la Mezcla: Niveles y Paneo", duration: "14:30", isLocked: true, videoId: "dQw4w9WgXcQ" },
        { title: "3.2 - Uso de EQ y Compresión", duration: "22:10", isLocked: true, videoId: "dQw4w9WgXcQ" },
        { title: "3.3 - Mastering Básico para un Sonido Comercial", duration: "17:55", isLocked: true, videoId: "dQw4w9WgXcQ" },
    ]},
  ]
};

// --- Página de Detalle de Curso ---

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState('description');
  const [currentVideoId, setCurrentVideoId] = useState(courseData.demoVideoId);
  const [openModule, setOpenModule] = useState(0); // El primer módulo está abierto por defecto

  const handleLessonClick = (lesson) => {
    if (!lesson.isLocked) {
      setCurrentVideoId(lesson.videoId);
    } else {
      // Aquí podrías mostrar un toast o alerta indicando que se debe comprar el curso
      console.log("Esta lección está bloqueada. Compra el curso para acceder.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Navbar />

      {/* --- Encabezado del Curso --- */}
      <header className="bg-gray-800 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-xl text-gray-300 mb-6">{courseData.subtitle}</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <img src={courseData.instructor.image} alt={courseData.instructor.name} className="w-10 h-10 rounded-full" />
                <span className="font-medium">{courseData.instructor.name}</span>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold">{courseData.rating}</span>
                <span className="text-gray-400 text-sm">({courseData.reviewsCount} reseñas)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Users className="w-5 h-5" />
                <span>{courseData.studentsCount} estudiantes</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Contenido Principal del Curso --- */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* --- Columna Principal (Video y Descripción) --- */}
            <div className="lg:col-span-2">
              {/* Reproductor de Video */}
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden mb-8 border border-gray-700 shadow-lg">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${currentVideoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Pestañas de Contenido */}
              <div className="border-b border-gray-700 mb-6">
                <nav className="flex gap-6">
                  <button onClick={() => setActiveTab('description')} className={`py-4 font-medium border-b-2 ${activeTab === 'description' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}>Descripción</button>
                  <button onClick={() => setActiveTab('instructor')} className={`py-4 font-medium border-b-2 ${activeTab === 'instructor' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}>Instructor</button>
                  <button onClick={() => setActiveTab('reviews')} className={`py-4 font-medium border-b-2 ${activeTab === 'reviews' ? 'border-purple-500 text-white' : 'border-transparent text-gray-400 hover:text-gray-200'}`}>Reseñas</button>
                </nav>
              </div>

              {/* Contenido de las Pestañas */}
              <div className="prose prose-invert prose-lg max-w-none">
                {activeTab === 'description' && (
                  <div dangerouslySetInnerHTML={{ __html: courseData.description }} />
                )}
                {activeTab === 'instructor' && (
                  <div className="flex items-start gap-6 bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <img src={courseData.instructor.image} alt={courseData.instructor.name} className="w-24 h-24 rounded-full" />
                    <div>
                      <h3 className="text-2xl font-bold text-white mt-0">{courseData.instructor.name}</h3>
                      <p className="text-purple-400 font-semibold">{courseData.instructor.title}</p>
                      <p className="text-gray-300">Ana es una productora con más de 10 años de experiencia, trabajando con artistas de renombre internacional. Su pasión es enseñar y desmitificar la producción musical para la nueva generación de creadores.</p>
                    </div>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-2xl font-bold text-white">Opiniones de Estudiantes</h3>
                    {/* Aquí iría un map de las reseñas, por ahora un ejemplo */}
                    <div className="border-t border-gray-700 mt-6 pt-6">
                      <div className="flex items-center gap-3 mb-2">
                        <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Diego Silva" className="w-10 h-10 rounded-full" />
                        <span className="font-semibold text-white">Diego Silva</span>
                      </div>
                      <div className="flex gap-1 text-yellow-400 mb-3">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <p className="text-gray-300">¡Este curso es increíble! Ana explica conceptos complejos de una manera muy fácil de entender. Mi música ha mejorado 100%.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* --- Sidebar (Temario y Compra) --- */}
            <aside className="lg:col-span-1 space-y-8 lg:sticky lg:top-28 h-fit">
              {/* Tarjeta de Compra */}
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
                <h2 className="text-4xl font-bold text-white mb-4">{courseData.price}</h2>
                <Button size="lg" className="w-full mb-6">Comprar Curso <ArrowRight className="ml-2 w-5 h-5" /></Button>
                <h3 className="font-semibold text-white mb-4">Este curso incluye:</h3>
                <ul className="space-y-3">
                  {courseData.whatYouGet.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <item.icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tarjeta de Temario */}
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <h3 className="text-xl font-bold text-white p-6 border-b border-gray-700">Contenido del Curso</h3>
                <div className="space-y-2 p-4 max-h-[600px] overflow-y-auto">
                  {courseData.curriculum.map((module, moduleIndex) => (
                    <div key={moduleIndex}>
                      <button 
                        onClick={() => setOpenModule(openModule === moduleIndex ? -1 : moduleIndex)}
                        className="w-full flex justify-between items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        <span className="font-semibold text-left text-white">{module.title}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-300 transition-transform ${openModule === moduleIndex ? 'rotate-180' : ''}`} />
                      </button>
                      {openModule === moduleIndex && (
                        <div className="pl-4 mt-2 space-y-1">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <button 
                              key={lessonIndex}
                              onClick={() => handleLessonClick(lesson)}
                              disabled={lesson.isLocked}
                              className="w-full flex items-start text-left gap-3 p-3 rounded-lg text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50"
                            >
                              {lesson.isLocked ? <Lock className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" /> : <PlayCircle className="w-4 h-4 mt-1 text-purple-400 flex-shrink-0" />}
                              <div className="flex-grow">
                                <span>{lesson.title}</span>
                                <span className="block text-xs text-gray-500">{lesson.duration}</span>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};