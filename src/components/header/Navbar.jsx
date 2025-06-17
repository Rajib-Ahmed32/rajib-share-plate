import DesktopNav from "../../components/header/DesktopNav";
import MobileNav from "../../components/header/MobileNav";
import { mainMenu, authMenu } from "../../data/navMenu";

export default function Navbar() {
  return (
    <section className=" flex justify-center items-center min-h-[90px] py-4 bg-background/90">
      <div className="container">
        <DesktopNav mainMenu={mainMenu} authMenu={authMenu} />
        <MobileNav mainMenu={mainMenu} authMenu={authMenu} />
      </div>
    </section>
  );
}
