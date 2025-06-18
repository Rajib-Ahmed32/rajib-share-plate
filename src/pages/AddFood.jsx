import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import AddFoodForm from "../components/form/AddFoodForm";
import { useAuth } from "../context/AuthContext";

export default function AddFood() {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    quantity: "",
    location: "",
    expiredAt: "",
    notes: "",
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      ...formData,
      status: "available",
      donorName: user?.displayName,
      donorEmail: user?.email,
      donorImage: user?.photoURL,
    };

    console.log("Submitting food:", newFood);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4">
      <Card className="w-full max-w-2xl shadow-lg bg-card">
        <CardContent className="p-8 space-y-8">
          <h2 className="text-2xl font-bold text-center text-primary">
            Add Food
          </h2>
          <AddFoodForm
            {...formData}
            user={user}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
}
