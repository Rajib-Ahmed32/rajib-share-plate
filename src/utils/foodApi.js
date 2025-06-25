import axios from "axios";
import { getFreshToken } from "../services/authUtils";

const getAuthHeader = async () => {
  const token = await getFreshToken();
  return { Authorization: `Bearer ${token}` };
};

export const fetchMyFoods = async () => {
  const headers = await getAuthHeader();
  const res = await axios.get("http://localhost:5000/api/foods/mine", {
    headers,
  });
  return res.data;
};

export const deleteFood = async (id) => {
  const headers = await getAuthHeader();
  await axios.delete(`http://localhost:5000/api/foods/${id}`, {
    headers,
  });
};

export const updateFood = async (updatedData) => {
  const headers = await getAuthHeader();
  const res = await axios.patch(
    `http://localhost:5000/api/foods/${updatedData._id}`,
    updatedData,
    { headers }
  );
  return res.data;
};
