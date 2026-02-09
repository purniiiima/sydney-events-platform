import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  source: { type: String },
  originalUrl: { type: String, unique: true },
  lastScrapedAt: { type: Date },
  status: { type: String, enum: ["new", "updated"], default: "new" },
  category: { type: Array, default: [] }
});

const Event = mongoose.model("Event", eventSchema);
export default Event;
