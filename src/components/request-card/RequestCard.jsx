import React from "react";
import { Card } from "../ui/card";
import { MapPin, Clock, UserCircle2 } from "lucide-react";

export default function RequestCard({ food }) {
  return (
    <Card className="flex flex-col sm:flex-row gap-4 p-5 border-l-4 border-primary bg-card rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <img
        src={food.foodImage}
        alt={food.foodName}
        className="w-full sm:w-24 h-24 object-cover rounded-lg border border-muted"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            "https://previews.123rf.com/images/srijianti/srijianti1705/srijianti170519335/78984685-food-text-for-title-or-headline-in-3d-fancy-fun-and-futuristic-style.jpg";
        }}
      />

      <div className="flex-1 space-y-1">
        <h3 className="text-lg font-semibold text-foreground truncate">
          {food.foodName}
        </h3>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="truncate">{food.pickupLocation}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4 text-primary" />
          <span>Expires: {new Date(food.expiredAt).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <UserCircle2 className="w-4 h-4 text-primary" />
          <span className="truncate">{food.donorName}</span>
        </div>

        <div className="text-sm text-muted-foreground mt-1">
          <span className="font-medium">Requested on: </span>
          {new Date(food.requestDate).toLocaleString()}
        </div>
      </div>
    </Card>
  );
}
