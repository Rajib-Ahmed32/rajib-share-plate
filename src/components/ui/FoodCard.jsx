import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MapPin, Clock, UserCircle2 } from "lucide-react";

export default function FoodCard({ food }) {
  return (
    <Card className="relative flex items-center gap-4 p-6 border-l-4 border-primary bg-card rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-24 h-24 rounded-lg object-cover border border-muted"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://previews.123rf.com/images/srijianti/srijianti1705/srijianti170519335/78984685-food-text-for-title-or-headline-in-3d-fancy-fun-and-futuristic-style.jpg";
        }}
      />
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground truncate">
            {food.foodName}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="truncate">{food.pickupLocation}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>{new Date(food.expiredAt).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <UserCircle2 className="w-4 h-4 text-primary" />
            <span className="truncate">{food.donorName}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3">
          <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
            {food.foodQuantity} left
          </Badge>
          <Link to={`/food/${food._id}`}>
            <Button
              variant="outline"
              size="sm"
              className="gap-1 text-primary border-primary hover:bg-primary/10"
            >
              Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
