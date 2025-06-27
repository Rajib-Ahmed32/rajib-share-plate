import axios from "axios";
import { getFreshToken } from "../services/authUtils";

const getAuthHeader = async () => {
  const token = await getFreshToken();
  return { Authorization: `Bearer ${token}` };
};

export const fetchMyFoods = async () => {
  const headers = await getAuthHeader();
  const res = await axios.get(
    "https://rajibsharedfood-server.onrender.com/api/foods/mine",
    {
      headers,
    }
  );
  return res.data;
};

export const deleteFood = async (id) => {
  const headers = await getAuthHeader();
  await axios.delete(
    `https://rajibsharedfood-server.onrender.com/api/foods/${id}`,
    {
      headers,
    }
  );
};

export const updateFood = async (updatedData) => {
  const headers = await getAuthHeader();
  const res = await axios.patch(
    `https://rajibsharedfood-server.onrender.com/api/foods/${updatedData._id}`,
    updatedData,
    { headers }
  );
  return res.data;
};
