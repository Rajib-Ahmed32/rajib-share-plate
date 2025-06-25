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
import { Label } from "../ui/label";

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
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="w-full max-w-2xl text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-primary">
            Edit Food
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-400">
            Update your food details below.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 py-8 max-h-[500px] overflow-y-auto"
        >
          <div className="grid gap-1">
            <Label className="text-sm text-gray-400">Food Name</Label>
            <Input
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              required
              className="text-white px-3 py-2 bg-background border border-white/30"
            />
          </div>

          <div className="grid gap-1">
            <Label className="text-sm text-gray-400">Image URL</Label>
            <Input
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              required
              className="text-white px-3 py-2 bg-background border border-white/30"
            />
          </div>

          <div className="grid gap-1">
            <Label className="text-sm text-gray-400">Quantity</Label>
            <Input
              name="foodQuantity"
              value={formData.foodQuantity}
              onChange={handleChange}
              required
              className="text-white px-3 py-2 bg-background border border-white/30"
            />
          </div>

          <div className="grid gap-1">
            <Label className="text-sm text-gray-400">Pickup Location</Label>
            <Input
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
              className="text-white px-3 py-2 bg-background border border-white/30"
            />
          </div>

          <div className="grid gap-1">
            <Label className="text-sm text-gray-400">Expiry Date</Label>
            <Input
              type="date"
              name="expiredAt"
              value={formData.expiredAt?.slice(0, 10)}
              onChange={handleChange}
              required
              className="text-white px-3 py-2 bg-background border border-white/30"
            />
          </div>

          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              variant="outline"
              size="lg"
              className="gap-1 text-primary border-primary hover:bg-primary/10"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
