import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestCard from "../components/request-card/RequestCard";

export default function MyFoodRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem("access-token");
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

  if (loading)
    return <p className="text-center p-10">Loading your requests...</p>;
  if (error) return <p className="text-center p-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-10 text-center text-primary">
        My Food Requests
      </h1>

      {requests.length === 0 ? (
        <p className="text-center text-muted-foreground">
          You have no food requests yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((food) => (
            <RequestCard key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}
