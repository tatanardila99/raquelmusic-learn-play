import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Star } from "lucide-react";

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
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-smooth hover:-translate-y-1 cursor-pointer">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-smooth" />
        <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-5">
        <div className="space-y-3">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
          
          <p className="text-sm text-muted-foreground">
            Por {instructor}
          </p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between border-t border-border">
            {isFree ? (
              <span className="text-lg font-bold text-primary">Gratis</span>
            ) : (
              <span className="text-lg font-bold text-primary">{price}</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
