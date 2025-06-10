import { Button } from "../ui/button";

export function AuthButton({ text, type = "button", onClick }) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className="w-full bg-primary text-white hover:bg-primary/90"
    >
      {text}
    </Button>
  );
}
