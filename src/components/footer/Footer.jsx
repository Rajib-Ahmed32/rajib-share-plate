import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1f2027] text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-lime-400">RajibSharePlate</h2>
          <p className="mt-4 text-sm text-gray-400">
            Building a compassionate community through food sharing and
            sustainability.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-lime-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-food" className="hover:text-lime-400">
                Add Food
              </Link>
            </li>
            <li>
              <Link to="/available-foods" className="hover:text-lime-400">
                Available Foods
              </Link>
            </li>
            <li>
              <Link className="hover:text-lime-400">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Food_waste"
                target="_blank"
                rel="noreferrer"
                className="hover:text-lime-400"
              >
                Food Waste Info
              </a>
            </li>
            <li>
              <Link to="" className="hover:text-lime-400">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-lime-400">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.facebook.com/rajib.ahmed.632184"
              className="hover:text-lime-400"
              target="_blank"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/rajibkh25032/"
              className="hover:text-lime-400"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              href="https://www.linkedin.com/in/rajib-ahmed-15997626a/"
              className="hover:text-lime-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:devrajibahmed@gmail.com"
              className="hover:text-lime-400"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rajib SharePlate. All rights reserved.
      </div>
    </footer>
  );
}
