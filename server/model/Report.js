import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  ngoId: { type: String, required: true },
  month: { type: String, required: true },
  peopleHelped: { type: Number, default: 0 },
  eventsConducted: { type: Number, default: 0 },
  fundsUtilized: { type: Number, default: 0 },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
