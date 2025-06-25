import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MapPin, UserCircle2 } from "lucide-react";

export default function FoodCard({ food }) {
  return (
    <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border-l-4 border-primary bg-card rounded-lg shadow-sm hover:shadow-md transition duration-300">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full sm:w-24 h-48 sm:h-24 rounded-lg object-cover border border-muted"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/food-img-4.jpg";
        }}
      />
      <div className="flex-1  min-w-0 flex flex-col justify-between space-y-3 w-full">
        <div className="space-y-1">
          <h3
            className="text-lg font-semibold text-foreground truncate"
            title={food.foodName}
          >
            {food.foodName}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="truncate" title={food.pickupLocation}>
              {food.pickupLocation}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <UserCircle2 className="w-4 h-4 text-primary" />
            <span className="truncate" title={food.donorName}>
              {food.donorName}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3">
          <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
            {food.foodQuantity} left
          </Badge>

          <div className="w-full sm:w-auto flex sm:block justify-end">
            <Link to={`/food/${food._id}`}>
              <Button
                variant="outline"
                size="sm"
                className="w-[100px] sm:w-auto text-primary border-primary hover:bg-primary/10"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
