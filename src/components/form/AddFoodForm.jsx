import FormInputWithIcon from "../ui/FormInputWithIcon";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

import {
  Utensils,
  ImageIcon,
  Hash,
  MapPin,
  CalendarDays,
  User,
  Mail,
} from "lucide-react";

export default function AddFoodForm({
  foodName,
  foodImage,
  quantity,
  location,
  expiredAt,
  notes,
  user,
  onChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormInputWithIcon
          id="foodName"
          label="Food Name"
          icon={<Utensils className="w-4 h-4" />}
          placeholder="Enter food name"
          value={foodName}
          onChange={onChange("foodName")}
          required
        />

        <FormInputWithIcon
          id="foodImage"
          label="Food Image URL"
          icon={<ImageIcon className="w-4 h-4" />}
          placeholder="Paste image URL"
          value={foodImage}
          onChange={onChange("foodImage")}
          required
        />

        <FormInputWithIcon
          id="quantity"
          label="Food Quantity"
          icon={<Hash className="w-4 h-4" />}
          placeholder="Enter quantity"
          value={quantity}
          onChange={onChange("quantity")}
          required
        />

        <FormInputWithIcon
          id="location"
          label="Pickup Location"
          icon={<MapPin className="w-4 h-4" />}
          placeholder="Enter pickup location"
          value={location}
          onChange={onChange("location")}
          required
        />

        <FormInputWithIcon
          id="expiredAt"
          label="Expiry Date/Time"
          type="datetime-local"
          icon={<CalendarDays className="w-4 h-4" />}
          value={expiredAt}
          onChange={onChange("expiredAt")}
          required
        />

        <FormInputWithIcon
          id="status"
          label="Food Status"
          value="available"
          disabled
        />
      </div>

      <div>
        <Label htmlFor="notes" className="text-white">
          Additional Notes
        </Label>
        <Textarea
          id="notes"
          placeholder="Write something useful..."
          value={notes}
          onChange={onChange("notes")}
          className="mt-1 bg-input text-white border border-white focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormInputWithIcon
          id="donorImage"
          label="Donor Image"
          icon={<ImageIcon className="w-4 h-4" />}
          value={user?.photoURL}
          disabled
        />

        <FormInputWithIcon
          id="donorName"
          label="Donor Name"
          icon={<User className="w-4 h-4" />}
          value={user?.displayName}
          disabled
        />

        <FormInputWithIcon
          id="donorEmail"
          label="Donor Email"
          icon={<Mail className="w-4 h-4" />}
          value={user?.email}
          disabled
        />
      </div>

      <div className="text-center">
        <Button
          type="submit"
          className="bg-lime-600 hover:bg-primary/90 text-white font-bold px-6"
        >
          Add Food
        </Button>
      </div>
    </form>
  );
}
