// src/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import ManageFoods from "../pages/ManageFoods";
import MyFoodRequests from "../pages/MyFoodRequests";
import Login from "../pages/Login";
import Register from "../pages/Register";
import FoodDetails from "../pages/FoodDetails";
import UpdateFood from "../pages/UpdateFood";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/available-foods", element: <AvailableFoods /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/add-food", element: <AddFood /> },
      { path: "/manage-foods", element: <ManageFoods /> },
      { path: "/my-requests", element: <MyFoodRequests /> },
      { path: "/food/:id", element: <FoodDetails /> },
      { path: "/update-food/:id", element: <UpdateFood /> },
    ],
  },
]);

export default router;
