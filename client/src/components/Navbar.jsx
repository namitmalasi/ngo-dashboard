import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">NGO Tracker</Link>
      </div>

      <ul className="flex items-center gap-4">
        <li>
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/submit-report"
            className="text-gray-700 hover:text-blue-600"
          >
            Submit Report
          </Link>
        </li>
        {!token ? (
          <li>
            <Link
              to="/admin/login"
              className="text-gray-700 hover:text-blue-600"
            >
              Admin Login
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link
                to="/admin/dashboard"
                className="text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700"
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
