import React from "react";
import Navbar from "./Navbar";
import { useAuth } from "../../context/AuthContext";
import Loading from "../ui/Loading";
const Header = () => {
  const { user, loading } = useAuth();
  return (
    <div className="sticky top-0 z-50 bg-white">
      {loading ? <Loading /> : <Navbar user={user ?? null} />}
    </div>
  );
};

export default Header;
