// src/components/auth/LoginCard.jsx
import { Card, CardContent } from "../ui/card";
import { LoginForm } from "../form/LoginForm";
import { Link } from "react-router-dom";

export function LoginCard({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onGoogleLogin,
  loading,
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background transition-colors p-4">
      <Card className="w-full max-w-md shadow-lg bg-card transition-colors">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-primary">Login</h2>

          <LoginForm
            email={email}
            password={password}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            onSubmit={onSubmit}
            onGoogleLogin={onGoogleLogin}
            loading={loading}
          />

          <p className="text-center text-sm text-foreground dark:text-gray-300">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Register
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
