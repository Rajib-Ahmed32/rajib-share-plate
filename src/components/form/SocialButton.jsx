import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

export function SocialButton({ onClick }) {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className="w-full flex items-center justify-center gap-2 border-white text-white"
    >
      <FcGoogle className="text-lg" />
      Continue with Google
    </Button>
  );
}
