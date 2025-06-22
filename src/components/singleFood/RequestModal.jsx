import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";

export default function RequestModal({ food, user, onClose, onSubmit }) {
  const [notes, setNotes] = useState("");

  const handleSubmit = () => {
    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      foodImage: food.foodImage,
      donorEmail: food.donorEmail,
      donorName: food.donorName,
      requesterEmail: user.email,
      requestDate: new Date().toISOString(),
      pickupLocation: food.pickupLocation,
      expiredAt: food.expiredAt,
      additionalNotes: notes,
    };

    onSubmit(requestData);
  };

  useEffect(() => {
    if (food?.additionalNotes) {
      setNotes(food.additionalNotes);
    }
  }, [food]);

  const halfPxBorderStyle = { border: "0.5px solid white" };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="w-full max-w-4xl text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-primary">
            Request This Food
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 max-h-[700px] overflow-y-auto">
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label className="text-white">Food Name</Label>
              <Input
                disabled
                value={food.foodName}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Food ID</Label>
              <Input
                disabled
                value={food._id}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Food Image</Label>
              <Input
                disabled
                value={food.foodImage}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Donator Email</Label>
              <Input
                disabled
                value={food.donorEmail}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Donator Name</Label>
              <Input
                disabled
                value={food.donorName}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label className="text-white">Your Email</Label>
              <Input
                disabled
                value={user.email}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Request Date</Label>
              <Input
                disabled
                value={new Date().toLocaleString()}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Pickup Location</Label>
              <Input
                disabled
                value={food.pickupLocation}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Expire Date</Label>
              <Input
                disabled
                value={new Date(food.expiredAt).toLocaleDateString()}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-white">Additional Notes (editable)</Label>
              <Input
                placeholder="Write any message..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="text-white"
                style={halfPxBorderStyle}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Button
            variant="outline"
            size="lg"
            className="gap-1 text-primary border-primary hover:bg-primary/10"
            onClick={handleSubmit}
          >
            Submit Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
