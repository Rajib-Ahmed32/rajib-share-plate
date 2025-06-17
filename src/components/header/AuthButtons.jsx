import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function AuthButtons({ authMenu, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Button asChild size="sm" variant="login" className="text-white">
        <Link to={authMenu[0].url}>{authMenu[0].title}</Link>
      </Button>
      <Button asChild size="sm" variant="register" className="text-white">
        <Link to={authMenu[1].url}>{authMenu[1].title}</Link>
      </Button>
    </div>
  );
}
