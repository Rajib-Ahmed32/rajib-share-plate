import React from "react";
import Navbar from "./Navbar";
import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { user } = useAuth();
  return (
    <div className="sticky top-0 z-50 ">
      <Navbar user={user} />
    </div>
  );
};

export default Header;
