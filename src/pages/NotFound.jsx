import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-6 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded-lg transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
