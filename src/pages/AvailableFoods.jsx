import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import FoodCard from "../components/ui/FoodCard";
import Loading from "../components/ui/Loading";
import ErrorMessage from "../components/error/ErrorMessage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Input } from "../components/ui/input";

export default function AvailableFoods() {
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: availableFoods = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["availableFoods"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:5000/api/available-foods"
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

  const filteredFoods = sortedFoods.filter((food) =>
    [food.foodName, food.pickupLocation, food.donorName]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl mb-3 font-extrabold text-primary">
          Available Foods
        </h1>

        <div className="flex items-center gap-3">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Food"
            className="px-4 text-white py-2 rounded border-2 border-input text-sm w-full md:w-64"
          />

          <Select onValueChange={(value) => setSortOrder(value)}>
            <SelectTrigger className="w-30 md:w-52 border-2 text-white">
              <SelectValue placeholder="Sort: Soon or Later" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">
                <span>Expiring Soon</span>
              </SelectItem>
              <SelectItem value="desc">
                <span>Expires Later</span>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {isLoading ? (
        <Loading />
      ) : isError ? (
        <ErrorMessage message="Failed to load available foods." />
      ) : filteredFoods.length === 0 ? (
        <p className="text-center text-muted-foreground text-lg mt-20">
          No matching foods found.
        </p>
      ) : (
        <div className="grid gap-10 md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
          {filteredFoods.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>
      )}
    </div>
  );
}
