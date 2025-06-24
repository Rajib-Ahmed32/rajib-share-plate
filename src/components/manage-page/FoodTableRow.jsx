import React from "react";
import { Button } from "../ui/button";

export default function FoodTableRow({ food, onEdit, onDelete, isDeleting }) {
  return (
    <tr>
      <td>
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-14 h-14 rounded object-cover border"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "https://placehold.co/100x100?text=No+Image";
          }}
        />
      </td>
      <td>{food.foodName}</td>
      <td>{food.foodQuantity}</td>
      <td>{food.pickupLocation}</td>
      <td>{new Date(food.expiredAt).toLocaleDateString()}</td>
      <td className="capitalize">{food.foodStatus}</td>
      <td className="text-center space-x-2">
        <Button size="sm" onClick={() => onEdit(food)}>
          Edit
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(food._id)}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </Button>
      </td>
    </tr>
  );
}
