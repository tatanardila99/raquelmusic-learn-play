import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/coursesData";
import { SearchX } from "lucide-react";

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
                variant="outline"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg"
                    : "hover:bg-muted/50 hover:border-primary"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
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
            <div className="text-center py-20 flex flex-col items-center gap-4">
              <SearchX className="w-16 h-16 text-muted-foreground" />
              <h3 className="text-2xl font-semibold">No se encontraron cursos</h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                Prueba a seleccionar otra categoría o vuelve a intentarlo más tarde.
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
