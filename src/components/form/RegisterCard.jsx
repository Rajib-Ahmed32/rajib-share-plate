import { Link } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { RegisterForm } from "./RegisterForm";
export function RegisterCard({
  name,
  email,
  password,
  photoURL,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onPhotoURLChange,
  onSubmit,
  onGoogleRegister,
}) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background transition-colors p-4">
      <Card className="w-full max-w-md shadow-lg bg-card transition-colors">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center text-primary">
            Register
          </h2>

          <RegisterForm
            name={name}
            email={email}
            password={password}
            photoURL={photoURL}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            onPhotoURLChange={onPhotoURLChange}
            onSubmit={onSubmit}
            onGoogleRegister={onGoogleRegister}
          />

          <p className="text-center text-sm text-foreground dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
