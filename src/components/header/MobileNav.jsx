import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import AuthButtons from "../../components/header/AuthButtons";
import Logo from "../ui/Logo";
import LogoSecond from "../ui/LogoSecond";

export default function MobileNav({ mainMenu, authMenu }) {
  return (
    <div className="flex px-3 items-center justify-between lg:hidden">
      <Logo />
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="bg-chart-2 text-white"
            size="icon"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-64">
          <SheetHeader>
            <SheetTitle>
              <LogoSecond />
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col gap-4">
            {mainMenu.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.title}
              </a>
            ))}
            <div className="mt-3">
              <AuthButtons authMenu={authMenu} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
