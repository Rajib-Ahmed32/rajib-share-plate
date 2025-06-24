import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function EditModal({ food, onClose, onSave }) {
  const [formData, setFormData] = useState({ ...food });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Edit Food</DialogTitle>
          <DialogDescription>Update the food details below.</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="foodName"
            placeholder="Food Name"
            value={formData.foodName}
            onChange={handleChange}
            required
          />
          <Input
            name="foodImage"
            placeholder="Image URL"
            value={formData.foodImage}
            onChange={handleChange}
            required
          />
          <Input
            name="foodQuantity"
            placeholder="Quantity"
            value={formData.foodQuantity}
            onChange={handleChange}
            required
          />
          <Input
            name="pickupLocation"
            placeholder="Pickup Location"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
          <Input
            type="date"
            name="expiredAt"
            value={formData.expiredAt?.slice(0, 10)}
            onChange={handleChange}
            required
          />

          <div className="flex justify-end gap-2">
            <Button type="button" variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
