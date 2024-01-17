import { Link } from "react-router-dom";

const Navbars = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="Logoalterno2.png" alt="Logo" className="h-12 w-24" />
        </div>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-vl-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-blue"
          >
            Sign In
          </Link>
          <Link
            to="/sing-up"
            className="bg-vl-300 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline-green"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
