import React from "react";
import { Button } from "../ui/button";
import { TableRow, TableCell } from "../ui/table";

export default function FoodTableRow({ food, onEdit, onDelete, isDeleting }) {
  return (
    <TableRow className="rounded-md shadow-sm">
      <TableCell className="p-3">
        <img
          src={food.foodImage}
          alt={food.foodName}
          className="w-14 h-14 rounded object-cover border"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/food-img-4.jpg";
          }}
        />
      </TableCell>
      <TableCell className="p-3">{food.foodName}</TableCell>
      <TableCell className="p-3">{food.foodQuantity}</TableCell>
      <TableCell className="p-3">{food.pickupLocation}</TableCell>
      <TableCell className="p-3">
        {new Date(food.expiredAt).toLocaleDateString()}
      </TableCell>
      <TableCell className="p-3 capitalize">{food.foodStatus}</TableCell>
      <TableCell className="p-3 text-center space-x-3">
        <Button
          size="sm"
          className="text-white font-bold"
          onClick={() => onEdit(food)}
        >
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
      </TableCell>
    </TableRow>
  );
}
