import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { getFreshToken } from "../services/authUtils";
import AddFoodForm from "../components/form/AddFoodForm";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFood = {
      foodName: formData.foodName,
      foodImage: formData.foodImage,
      foodQuantity: formData.quantity,
      pickupLocation: formData.location,
      expiredAt: formData.expiredAt,
      additionalNotes: formData.notes,
      status: "available",
      donorName: user?.displayName,
      donorEmail: user?.email,
      donorImage: user?.photoURL,
    };

    try {
      const token = await getFreshToken();
      const response = await axios.post(
        "https://rajibsharedfood-server.onrender.com/api/foods",
        newFood,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Food added successfully");
      console.log("Food added successfully:", response.data);
      setFormData({
        foodName: "",
        foodImage: "",
        quantity: "",
        location: "",
        expiredAt: "",
        notes: "",
      });
    } catch (error) {
      toast.error("Failed to add food");
      console.error(
        "Failed to add food:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="py-16 md:py-24 flex justify-center items-center min-h-screen bg-background px-4">
      <Card className="w-full max-w-4xl shadow-xl bg-card rounded-lg">
        <CardContent className="p-10 space-y-10">
          <h2 className="text-3xl font-bold text-center text-primary">
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
