import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FoodCard from "../components/ui/FoodCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { useState } from "react";
import Loading from "../components/ui/Loading";

export default function AvailableFoods() {
  const [sortOrder, setSortOrder] = useState("");

  const {
    data: availableFoods = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const response = await axios.get(
        "http://localhost:5000/api/available-foods",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    },
  });

  const sortedFoods = [...availableFoods].sort((a, b) => {
    const dateA = new Date(a.expiredAt);
    const dateB = new Date(b.expiredAt);
    return sortOrder === "asc"
      ? dateA - dateB
      : sortOrder === "desc"
      ? dateB - dateA
      : 0;
  });

  const foodsToShow = sortOrder ? sortedFoods : availableFoods;

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-foreground">
          Available Foods
        </h1>
        <div className="w-52">
          <Select onValueChange={(value) => setSortOrder(value)}>
            <SelectTrigger className="text-white">
              <SelectValue placeholder="Sort by Expiry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Expiry Date: Ascending</SelectItem>
              <SelectItem value="desc">Expiry Date: Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p className="text-center text-red-500">Failed to load foods.</p>
      ) : foodsToShow.length === 0 ? (
        <p className="text-center text-muted-foreground text-lg mt-20">
          No available foods found.
        </p>
      ) : (
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {foodsToShow.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}
