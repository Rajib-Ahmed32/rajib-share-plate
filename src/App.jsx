import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useAuth } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Loading from "./components/ui/Loading";

const App = () => {
  const { loading } = useAuth();

  if (loading) return <Loading />;
  return (
    <div>
      <Header />
      <main className="min-h-screen py-5 md:py-10 bg-background">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
    </div>
  );
};

export default App;
