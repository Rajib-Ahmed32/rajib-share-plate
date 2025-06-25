import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Card } from "../components/ui/card";
import Loading from "../components/ui/Loading";
import EditModal from "../components/manage-page/EditModal";
import FoodTable from "../components/manage-page/FoodTable";
import { fetchMyFoods, deleteFood, updateFood } from "../utils/foodApi";

export default function ManageFoods() {
  const [editFood, setEditFood] = useState(null);
  const queryClient = useQueryClient();

  const {
    data: foods = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["myFoods"],
    queryFn: fetchMyFoods,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteFood,
    onSuccess: () => {
      toast.success("Food deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["myFoods"] });
    },
    onError: () => toast.error("Failed to delete food."),
  });

  const updateMutation = useMutation({
    mutationFn: updateFood,
    onSuccess: () => {
      toast.success("Food updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["myFoods"] });
      setEditFood(null);
    },
    onError: () => toast.error("Update failed."),
  });

  const handleEdit = (food) => setEditFood(food);
  const handleUpdate = (data) => updateMutation.mutate(data);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This food will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(id);
        Swal.fire("Deleted!", "The food has been deleted.", "success");
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        Manage My Foods
      </h1>

      <Card className="p-5 md:p-10 shadow-lg rounded-md">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <p className="text-center text-destructive">
            {error?.message || "Something went wrong"}
          </p>
        ) : foods.length === 0 ? (
          <p className="text-center text-muted-foreground">
            You haven’t donated any food yet.
          </p>
        ) : (
          <FoodTable
            foods={foods}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isDeleting={deleteMutation.isPending}
          />
        )}
      </Card>

      {editFood && (
        <EditModal
          food={editFood}
          onClose={() => setEditFood(null)}
          onSave={handleUpdate}
          isLoading={updateMutation.isPending}
        />
      )}
    </div>
  );
}
