import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FileSpreadsheet,
  BarChart4,
  Users,
  Calendar,
  DollarSign,
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Track & Report Your NGO's Impact
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A simple platform for NGOs across India to submit monthly reports and
          track the collective impact of their work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div
          onClick={() => navigate("/submit-report")}
          className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-blue-200"
        >
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-700">
              <FileSpreadsheet className="h-6 w-6" />
            </div>
            <h2 className="ml-4 text-xl font-semibold text-gray-900">
              Submit Monthly Report
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Complete a simple form to report your NGO's monthly activities and
            impact metrics.
          </p>
          <div className="mt-2 flex justify-start">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150">
              Submit Report
            </button>
          </div>
        </div>

        <div
          onClick={() => navigate("/dashboard")}
          className="bg-white rounded-lg shadow-sm p-8 border border-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md hover:border-teal-200"
        >
          <div className="flex items-center mb-4">
            <div className="bg-teal-100 p-3 rounded-full text-teal-700">
              <BarChart4 className="h-6 w-6" />
            </div>
            <h2 className="ml-4 text-xl font-semibold text-gray-900">
              View Impact Dashboard
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            Access the admin dashboard to view aggregated impact data from all
            NGOs for any month.
          </p>
          <div className="mt-2 flex justify-start">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-150">
              View Dashboard
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Track Important Impact Metrics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-full text-blue-700">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">
                People Helped
              </h3>
            </div>
            <p className="text-gray-600">
              Track the number of beneficiaries your programs have reached each
              month.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 p-2 rounded-full text-orange-700">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">
                Events Conducted
              </h3>
            </div>
            <p className="text-gray-600">
              Record all programs, workshops, and events organized by your NGO.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-2 rounded-full text-teal-700">
                <DollarSign className="h-5 w-5" />
              </div>
              <h3 className="ml-3 text-lg font-semibold text-gray-900">
                Funds Utilized
              </h3>
            </div>
            <p className="text-gray-600">
              Track financial resources deployed for various programs and
              initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
