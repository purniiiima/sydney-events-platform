import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const lead = await Lead.create(req.body);
  res.json(lead);
});

export default router;
