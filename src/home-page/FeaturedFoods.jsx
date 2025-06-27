import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { MapPin, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedFoods() {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://rajibsharedfood-server.onrender.com/api/foods/featured")
      .then((res) => setFoods(res.data))
      .catch((err) => console.error("Failed to fetch featured foods:", err));
  }, []);

  const handleViewDetails = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/food/${id}`);
    }
  };

  return (
    <div className="bg-[#24252d] py-8 md:py-10">
      <section className="p-8 w-full max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl mb-3 font-extralbold text-primary">
            Featured Foods
          </h1>
          <Button
            onClick={() => navigate("/available-foods")}
            className="bg-lime-600 hover:bg-primary/90 text-white font-bold px-6"
          >
            Show All
          </Button>
        </div>

        <div className="grid gap-10 md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))]">
          {foods.length === 0 ? (
            <p className="text-center text-muted-foreground text-lg col-span-full">
              No featured foods available.
            </p>
          ) : (
            foods.map((food) => (
              <motion.div
                key={food._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 border-l-4 border-primary bg-background rounded-lg shadow-sm hover:shadow-md transition duration-300">
                  <img
                    src={food.foodImage}
                    alt={food.foodName}
                    className="w-full sm:w-24 h-48 sm:h-24 rounded-lg object-cover border border-muted"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/food-img-4.jpg";
                    }}
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between space-y-3 w-full">
                    <div className="space-y-1">
                      <h3
                        className="text-lg font-semibold text-foreground truncate"
                        title={food.foodName}
                      >
                        {food.foodName}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="truncate" title={food.pickupLocation}>
                          {food.pickupLocation}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <UserCircle2 className="w-4 h-4 text-primary" />
                        <span className="truncate" title={food.donorName}>
                          {food.donorName}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3">
                      <Badge className="bg-green-100 text-green-700 text-xs px-2 py-0.5">
                        {food.foodQuantity} left
                      </Badge>

                      <div className="w-full sm:w-auto flex sm:block justify-end">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-[100px] sm:w-auto text-primary border-primary hover:bg-primary/10"
                          onClick={() => handleViewDetails(food._id)}
                        >
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
