import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import coursePiano from "@/assets/course-piano.jpg";
import courseGuitar from "@/assets/course-guitar.jpg";
import courseProduction from "@/assets/course-production.jpg";

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Teoría Musical",
    "Piano",
    "Guitarra",
    "Violín",
    "Producción",
  ];

  const courses = [
    {
      title: "Fundamentos de Piano Clásico",
      instructor: "María González",
      price: "$49.99",
      image: coursePiano,
      category: "Piano",
      duration: "8 semanas",
      rating: 4.9,
    },
    {
      title: "Teoría Musical Completa",
      instructor: "Pedro Sánchez",
      price: "Gratis",
      isFree: true,
      image: coursePiano,
      category: "Teoría Musical",
      duration: "6 semanas",
      rating: 4.7,
    },
    {
      title: "Guitarra para Principiantes",
      instructor: "Carlos Ramírez",
      price: "$39.99",
      image: courseGuitar,
      category: "Guitarra",
      duration: "10 semanas",
      rating: 4.8,
    },
    {
      title: "Producción Musical Moderna",
      instructor: "Ana Torres",
      price: "$59.99",
      image: courseProduction,
      category: "Producción",
      duration: "12 semanas",
      rating: 5.0,
    },
    {
      title: "Técnicas Avanzadas de Piano",
      instructor: "María González",
      price: "$69.99",
      image: coursePiano,
      category: "Piano",
      duration: "10 semanas",
      rating: 4.9,
    },
    {
      title: "Manejo de Secuencias y Monitoreo en Vivo",
      instructor: "Roberto Díaz",
      price: "$79.99",
      image: courseProduction,
      category: "Producción",
      duration: "8 semanas",
      rating: 4.8,
    },
    {
      title: "Guitarra Avanzada: Técnicas de Fingerpicking",
      instructor: "Carlos Ramírez",
      price: "$54.99",
      image: courseGuitar,
      category: "Guitarra",
      duration: "9 semanas",
      rating: 4.9,
    },
    {
      title: "Introducción al Violín",
      instructor: "Elena Martín",
      price: "$44.99",
      image: coursePiano,
      category: "Violín",
      duration: "8 semanas",
      rating: 4.7,
    },
    {
      title: "Armonía y Composición",
      instructor: "Pedro Sánchez",
      price: "$49.99",
      image: coursePiano,
      category: "Teoría Musical",
      duration: "10 semanas",
      rating: 4.8,
    },
  ];

  const filteredCourses =
    selectedCategory === "Todos"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="min-h-screen dark">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-display mb-4">Catálogo de Cursos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestra amplia selección de cursos de música diseñados por
              profesionales
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "gradient-hero shadow-glow"
                    : "border-2"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${(index % 9) * 0.05}s` }}
              >
                <CourseCard {...course} />
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No se encontraron cursos en esta categoría
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
