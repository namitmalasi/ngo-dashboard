import Report from "../model/Report";

export const submitReport = async (req, res) => {
  try {
    const { ngoId, month, peopleHelped, eventsConducted, fundsUtilized } =
      req.body;
    if (!ngoId || !month)
      return res.status(400).json({ message: "Missing fields" });

    const report = new Report({
      ngoId,
      month,
      peopleHelped,
      eventsConducted,
      fundsUtilized,
    });
    await report.save();

    res.status(201).json({ message: "Report submitted" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting report", error });
  }
};

export const getDashboard = async (req, res) => {
  try {
    const { month } = req.query;
    if (!month) return res.status(400).json({ message: "Month required" });

    const reports = await Report.find({ month });

    const uniqueNGOs = new Set(reports.map((r) => r.ngoId));
    const totals = {
      totalNGOsReporting: uniqueNGOs.size,
      totalPeopleHelped: reports.reduce(
        (acc, r) => acc + (r.peopleHelped || 0),
        0
      ),
      totalEventsConducted: reports.reduce(
        (acc, r) => acc + (r.eventsConducted || 0),
        0
      ),
      totalFundsUtilized: reports.reduce(
        (acc, r) => acc + (r.fundsUtilized || 0),
        0
      ),
    };

    res.json(totals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard data", error });
  }
};
