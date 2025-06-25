import React, { useEffect, useState } from "react";
import axios from "axios";
import NoDataMessage from "../components/error/NoDataMessage";
import { getFreshToken } from "../services/authUtils";
import RequestCard from "../components/request-card/RequestCard";
import Loading from "../components/ui/Loading";

export default function MyFoodRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      const token = await getFreshToken();
      try {
        const res = await axios.get(
          "http://localhost:5000/api/foods/request/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRequests(res.data);
      } catch (err) {
        console.error("Request error:", err);
        setError("Failed to load your requests");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p className="text-center p-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center text-primary">
        My Food Requests
      </h1>

      {requests.length === 0 ? (
        <NoDataMessage message="You have no food requests yet." />
      ) : (
        <div className="grid gap-6 grid-cols-1 md:[grid-template-columns:repeat(auto-fill,minmax(450px,1fr))]">
          {requests.map((food) => (
            <RequestCard key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}
