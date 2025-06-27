import Logo from "../ui/Logo";
import { logout } from "../../services/authServices";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import AuthButtons from "../../components/header/AuthButtons";

export default function DesktopNav({ mainMenu, authMenu, user }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      navigate("/login", { state: { fromLogout: true } });
      setTimeout(async () => {
        await logout();
        toast.success("Logged out successfully!");
      }, 100);
    } catch (error) {
      toast.error("Logout failed");
      console.error(error);
    }
  };

  return (
    <nav className="hidden justify-between lg:flex items-center">
      <Logo />
      <div className="flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            {mainMenu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink asChild>
                  <NavLink
                    to={item.url}
                    className="group text-foreground inline-flex h-10 items-center justify-center rounded-md px-2.5 text-sm font-medium hover:text-primary transition-colors duration-200"
                  >
                    {item.title}
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {user?.displayName ? (
        <div className="flex items-center gap-7">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <img
                  src={user.photoURL || "/fallback-avatar.avif"}
                  alt={user.displayName || "Avatar"}
                  className="w-9 h-9 rounded-full border border-white cursor-pointer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/fallback-avatar.avif";
                  }}
                />
              </TooltipTrigger>
              <TooltipContent className="text-md">
                <p className="font-medium">{user.displayName}</p>
                <p className="text-xs text-gray-400 mt-1">{user.email}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button onClick={handleLogout} variant="destructive">
            Logout
          </Button>
        </div>
      ) : (
        <div className="">
          <AuthButtons authMenu={authMenu} className="hidden md:flex" />
        </div>
      )}
    </nav>
  );
}
