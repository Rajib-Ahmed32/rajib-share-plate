import React from "react";
import { Card } from "../ui/card";
import { MapPin, Clock, UserCircle2 } from "lucide-react";

export default function RequestCard({ food }) {
  return (
    <Card className="flex justify-center border-l-4 border-primary rounded-xl">
      <div className="flex w-[80%] flex-col sm:flex-row gap-5 p-6 bg-card shadow-sm hover:shadow-md transition duration-300">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-full h-40 md:w-32 md:h-32 object-cover rounded-lg border border-muted"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/food-img-4.jpg";
          }}
        />

        <div className="flex-1 flex flex-col justify-center space-y-2">
          <h3 className="text-lg font-semibold text-foreground truncate">
            {food.foodName}
          </h3>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="truncate">{food.pickupLocation}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <span>
              Expires: {new Date(food.expiredAt).toLocaleDateString()}
            </span>
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
      </div>
    </Card>
  );
}
