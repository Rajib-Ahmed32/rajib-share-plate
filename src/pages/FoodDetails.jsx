import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Card } from "../components/ui/card";
import FoodInfo from "../components/singleFood/FoodInfo";
import DonorInfo from "../components/singleFood/DonorInfo";

const FoodDetails = () => {
  const [singleFood, setSingleFood] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      const token = localStorage.getItem("access-token");
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/foods/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSingleFood(data);
      } catch (error) {
        console.error("Failed to fetch food details:", error.message);
      }
    };
    fetchFood();
  }, [params.id]);

  if (!singleFood) return <p className="text-center p-10">Loading...</p>;

  return (
    <Card className="max-w-3xl mx-auto mt-10 p-6 rounded-xl shadow-md space-y-6">
      <FoodInfo food={singleFood} />
      <DonorInfo
        donorName={singleFood.donorName}
        donorEmail={singleFood.donorEmail}
        donorImage={singleFood.donorImage}
      />
    </Card>
  );
};

export default FoodDetails;
