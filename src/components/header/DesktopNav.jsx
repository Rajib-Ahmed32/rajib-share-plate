import Logo from "../ui/Logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import AuthButtons from "../../components/header/AuthButtons";

export default function DesktopNav({ mainMenu, authMenu }) {
  return (
    <nav className="hidden justify-between lg:flex items-center">
      <Logo />
      <div className="flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList>
            {mainMenu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuLink
                  href={item.url}
                  className="group text-foreground inline-flex h-10 items-center justify-center rounded-md px-2.5 text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  {item.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <AuthButtons authMenu={authMenu} />
    </nav>
  );
}
