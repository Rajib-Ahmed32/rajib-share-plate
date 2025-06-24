import axios from "axios";

const token = () => localStorage.getItem("access-token");

export const fetchMyFoods = async () => {
  const res = await axios.get("http://localhost:5000/api/foods/mine", {
    headers: { Authorization: `Bearer ${token()}` },
  });
  return res.data;
};

export const deleteFood = async (id) => {
  await axios.delete(`http://localhost:5000/api/foods/${id}`, {
    headers: { Authorization: `Bearer ${token()}` },
  });
};

export const updateFood = async (updatedData) => {
  const res = await axios.patch(
    `http://localhost:5000/api/foods/${updatedData._id}`,
    updatedData,
    {
      headers: { Authorization: `Bearer ${token()}` },
    }
  );
  return res.data;
};
