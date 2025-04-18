import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Welcome to NGO Impact Tracker
      </h1>
      <button
        onClick={() => navigate("/submit-report")}
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
      >
        Submit Report
      </button>
    </div>
  );
}
