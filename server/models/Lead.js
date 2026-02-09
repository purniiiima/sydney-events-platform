import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema({
  email: String,
  consent: Boolean,
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
}, { timestamps: true });

export default mongoose.model("Lead", LeadSchema);
