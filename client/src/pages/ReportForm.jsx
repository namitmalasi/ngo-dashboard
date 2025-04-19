import { useState } from "react";

export default function ReportForm() {
  const [formData, setFormData] = useState({
    ngoId: "",
    month: "",
    peopleHelped: "",
    eventsConducted: "",
    fundsUtilized: "",
  });

  const [status, setStatus] = useState({ success: null, message: "" });

  const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ success: null, message: "" });

    const { ngoId, month, peopleHelped, eventsConducted, fundsUtilized } =
      formData;

    if (
      !ngoId ||
      !month ||
      !peopleHelped ||
      !eventsConducted ||
      !fundsUtilized
    ) {
      setStatus({ success: false, message: "Please fill in all fields." });
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}report`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ngoId,
          month,
          peopleHelped: parseInt(peopleHelped),
          eventsConducted: parseInt(eventsConducted),
          fundsUtilized: parseFloat(fundsUtilized),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus({ success: true, message: "Report submitted successfully!" });
      setFormData({
        ngoId: "",
        month: "",
        peopleHelped: "",
        eventsConducted: "",
        fundsUtilized: "",
      });
    } catch (err) {
      setStatus({ success: false, message: err.message });
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-semibold mb-6">Submit Monthly Report</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 shadow rounded-md"
      >
        <InputField
          label="NGO ID"
          name="ngoId"
          value={formData.ngoId}
          onChange={handleChange}
        />
        <InputField
          label="Month"
          type="month"
          name="month"
          value={formData.month}
          onChange={handleChange}
        />
        <InputField
          label="People Helped"
          type="number"
          name="peopleHelped"
          value={formData.peopleHelped}
          onChange={handleChange}
        />
        <InputField
          label="Events Conducted"
          type="number"
          name="eventsConducted"
          value={formData.eventsConducted}
          onChange={handleChange}
        />
        <InputField
          label="Funds Utilized (₹)"
          type="number"
          step="0.01"
          name="fundsUtilized"
          value={formData.fundsUtilized}
          onChange={handleChange}
        />

        {status.message && (
          <p
            className={`text-sm ${
              status.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
}

function InputField({ label, name, value, onChange, type = "text", ...rest }) {
  return (
    <div>
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border px-3 py-2 rounded-md"
        {...rest}
      />
    </div>
  );
}
