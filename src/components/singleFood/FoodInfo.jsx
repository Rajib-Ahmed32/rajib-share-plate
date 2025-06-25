import { MapPin, Clock, Calendar } from "lucide-react";
import { Badge } from "../ui/badge";

export default function FoodInfo({ food }) {
  return (
    <div className="space-y-8">
      <div className="overflow-hidden rounded-xl border shadow-sm">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/food-3.avif";
          }}
        />
      </div>
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
          {food.foodName}
        </h1>

        {food.additionalNotes && (
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            {food.additionalNotes}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{food.pickupLocation}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>
              Expires: {new Date(food.expiredAt).toLocaleDateString()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>
              Created: {new Date(food.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-3 pt-2 flex-wrap">
          <Badge className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full shadow-sm">
            Status: {food.foodStatus}
          </Badge>
          <Badge className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full shadow-sm">
            Quantity: {food.foodQuantity}
          </Badge>
        </div>
      </div>
    </div>
  );
}
