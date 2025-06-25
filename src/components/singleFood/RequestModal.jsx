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

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="w-full max-w-3xl text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl text-primary">
            Request This Food
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 max-h-[600px] overflow-y-auto">
          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">Food Name</Label>
              <Input
                disabled
                value={food.foodName}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">Food ID</Label>
              <Input
                disabled
                value={food._id}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Food Image
              </Label>
              <Input
                disabled
                value={food.foodImage}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Donator Email
              </Label>
              <Input
                disabled
                value={food.donorEmail}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Donator Name
              </Label>
              <Input
                disabled
                value={food.donorName}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Your Email
              </Label>
              <Input
                disabled
                value={user.email}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Request Date
              </Label>
              <Input
                disabled
                value={new Date().toLocaleString()}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Pickup Location
              </Label>
              <Input
                disabled
                value={food.pickupLocation}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Expire Date
              </Label>
              <Input
                disabled
                value={new Date(food.expiredAt).toLocaleDateString()}
                className="text-white px-3 py-2 bg-background border border-white/30"
              />
            </div>
            <div className="grid gap-1">
              <Label className="text-sm text-muted-foreground">
                Additional Notes (editable)
              </Label>
              <Input
                placeholder="Write any message..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="text-white px-3 py-2 bg-background border border-white/30"
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
