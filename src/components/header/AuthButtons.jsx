import { Button } from "../ui/button";

export default function AuthButtons({ authMenu }) {
  return (
    <div className="flex items-center gap-3">
      <Button asChild size="sm" variant="login" className="text-white">
        <a href={authMenu[0].url}>{authMenu[0].title}</a>
      </Button>
      <Button asChild size="sm" variant="register" className="text-white">
        <a href={authMenu[1].url}>{authMenu[1].title}</a>
      </Button>
    </div>
  );
}
