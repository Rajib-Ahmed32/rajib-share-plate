import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFreshToken } from "../services/authUtils";
import axios from "axios";
import { Card } from "../components/ui/card";
import FoodInfo from "../components/singleFood/FoodInfo";
import DonorInfo from "../components/singleFood/DonorInfo";
import RequestModal from "../components/singleFood/RequestModal";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";
import Loading from "../components/ui/Loading";

const FoodDetails = () => {
  const { user } = useAuth();
  const [singleFood, setSingleFood] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchFood = async () => {
      const token = await getFreshToken();
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://rajibsharedfood-server.onrender.com/api/foods/${params.id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSingleFood(data);
      } catch (error) {
        toast.error("Failed to fetch food details.");
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFood();
  }, [params.id]);

  const handleRequest = async (requestData) => {
    const token = await getFreshToken();
    try {
      toast.loading("Submitting request...");
      const res = await axios.patch(
        `https://rajibsharedfood-server.onrender.com/api/foods/request/${requestData.foodId}`,
        {
          foodStatus: "requested",
          additionalNotes: requestData.additionalNotes,
          requesterEmail: requestData.requesterEmail,
          requestDate: requestData.requestDate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      toast.dismiss();
      toast.success("Food requested successfully!");
      setSingleFood(res.data);
      setShowModal(false);
      setSingleFood((prev) => ({
        ...prev,
        foodStatus: "requested",
      }));
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to request food.");
      console.error(error.message);
    }
  };

  if (loading || !singleFood) {
    return <Loading />;
  }

  return (
    <div className="py-8 !pb-16 md:!pb-28 px-3 md:py-12">
      <Card className="max-w-3xl mx-auto mt-10 p-6 rounded-xl shadow-md space-y-6">
        <FoodInfo food={singleFood} />
        <DonorInfo
          donorName={singleFood.donorName}
          donorEmail={singleFood.donorEmail}
          donorImage={singleFood.donorImage}
          onRequest={() => setShowModal(true)}
          foodStatus={singleFood.foodStatus}
        />

        {showModal && (
          <RequestModal
            food={singleFood}
            user={user}
            onClose={() => setShowModal(false)}
            onSubmit={handleRequest}
          />
        )}
      </Card>
    </div>
  );
};

export default FoodDetails;
