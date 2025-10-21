import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Star, User } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  price: string;
  isFree?: boolean;
  image: string;
  duration?: string;
  rating?: number;
  category: string;
}

const CourseCard = ({
  title,
  instructor,
  price,
  isFree,
  image,
  duration = "8 semanas",
  rating = 4.8,
  category,
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden  border-border hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
          {category}
        </Badge>
      </div>

      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex-grow space-y-3">
          <h3 className="font-bold text-lg line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>{instructor}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-1">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-medium">{rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        <div className="pt-3 mt-3 flex items-center justify-between border-t border-border">
          {isFree ? (
            <span className="text-xl font-bold text-primary">Gratis</span>
          ) : (
            <span className="text-lg font-semibold text-primary">{price}</span>
          )}
          <button className="bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors">
            Ver Curso
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
