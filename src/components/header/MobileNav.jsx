import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { logout } from "../../services/authServices";
import toast from "react-hot-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import AuthButtons from "../../components/header/AuthButtons";
import Logo from "../ui/Logo";
import LogoSecond from "../ui/LogoSecond";
import { useNavigate } from "react-router-dom";

export default function MobileNav({ mainMenu, authMenu, user }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
      console.error(error);
    }
  };
  return (
    <div className="flex px-3 items-center justify-between lg:hidden">
      <Logo />
      <Sheet>
        <SheetTrigger asChild>
          <div className="flex justify-center items-center gap-6">
            <TooltipProvider>
              {user?.displayName ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "Avatar"}
                      className="w-9 h-9 rounded-full border border-white cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="text-xs">
                    <p className="font-medium">{user.displayName}</p>
                    <p className="text-xs text-gray-400 mt-1">{user.email}</p>
                  </TooltipContent>
                </Tooltip>
              ) : null}{" "}
            </TooltipProvider>

            <Button
              variant="outline"
              className="bg-chart-2 text-white"
              size="icon"
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <SheetHeader>
            <SheetTitle>
              <LogoSecond />
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-4">
            {mainMenu.map((item) => (
              <NavLink
                key={item.title}
                to={item.url}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.title}
              </NavLink>
            ))}
            {user?.displayName ? (
              <div className="flex items-center gap-3">
                <Button onClick={handleLogout} variant="destructive">
                  Logout
                </Button>
              </div>
            ) : (
              <AuthButtons authMenu={authMenu} />
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
