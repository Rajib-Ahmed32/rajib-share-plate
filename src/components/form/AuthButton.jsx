import { Button } from "../ui/button";

export function AuthButton({
  text,
  type = "button",
  onClick,
  loading = false,
}) {
  const loadingTextMap = {
    Login: "Logging in...",
    Register: "Registering...",
  };

  const loadingText = loadingTextMap[text] || `${text}ing...`;

  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={loading}
      className="w-full bg-primary text-white hover:bg-primary/90"
    >
      {loading ? loadingText : text}
    </Button>
  );
}
