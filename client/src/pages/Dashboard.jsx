import { useState } from "react";

export default function Dashboard() {
  const [month, setMonth] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchDashboardData = async (selectedMonth) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `http://localhost:5000/dashboard?month=${selectedMonth}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();
      setData(result);
      if (!res.ok) {
        throw new Error(result.message || "Failed to fetch dashboard data");
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (month) {
  //     fetchDashboardData(month);
  //   }
  // }, [month]);
  console.log("dashboard data", data);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Admin Dashboard</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Select Month:</label>
        <input
          type="month"
          value={month}
          onChange={(e) => {
            const selectedMonth = e.target.value;
            setMonth(selectedMonth);
            fetchDashboardData(selectedMonth); // ✅ trigger fetch immediately
          }}
          className="border px-4 py-2 rounded-md"
        />
      </div>

      {loading && <p>Loading dashboard data...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && data && (
        <div className="grid gap-4 mt-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          <StatCard label="NGOs Reporting" value={data?.totalNGOsReporting} />
          <StatCard label="People Helped" value={data?.totalPeopleHelped} />
          <StatCard
            label="Events Conducted"
            value={data?.totalEventsConducted}
          />
          <StatCard
            label="Funds Utilized (₹)"
            value={data?.totalFundsUtilized}
          />
        </div>
      )}

      {!loading && month && data === null && !error && (
        <p className="mt-4 text-gray-600">
          No data available for the selected month.
        </p>
      )}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{label}</h3>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
}
