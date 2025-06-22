import { MapPin, Clock, Calendar } from "lucide-react";
import { Badge } from "../ui/badge";

export default function FoodInfo({ food }) {
  return (
    <>
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full h-64 object-cover rounded-lg border"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://previews.123rf.com/images/srijianti/srijianti1705/srijianti170519335/78984685-food-text-for-title-or-headline-in-3d-fancy-fun-and-futuristic-style.jpg";
        }}
      />

      <div className="space-y-2">
        <h1 className="text-2xl font-bold">{food.foodName}</h1>
        <p className="text-sm text-muted-foreground">{food.additionalNotes}</p>

        <div className="flex gap-4 flex-wrap text-sm text-muted-foreground mt-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-primary" />
            {food.pickupLocation}
          </span>

          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-primary" />
            Expires: {new Date(food.expiredAt).toLocaleDateString()}
          </span>

          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-primary" />
            Created: {new Date(food.createdAt).toLocaleDateString()}
          </span>

          <Badge className="bg-green-100 text-green-700">
            Status: {food.foodStatus}
          </Badge>

          <Badge className="bg-blue-100 text-blue-700">
            Quantity: {food.foodQuantity}
          </Badge>
        </div>
      </div>
    </>
  );
}
