import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const events = await Event.find().sort({ createdAt: -1 });
  res.json(events);
});

router.put("/:id/import", async (req, res) => {
  const event = await Event.findById(req.params.id);
  event.status = "imported";
  event.importedAt = new Date();
  event.importedBy = req.body.importedBy;
  event.importNotes = req.body.importNotes;
  await event.save();
  res.json(event);
});

export default router;
