import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import "./cron/scrape.job.js";

import authRoutes from "./routes/auth.routes.js";
import eventRoutes from "./routes/events.routes.js";
import leadRoutes from "./routes/leads.routes.js";

const app = express();

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use(
  cors({
    origin: "https://sydney-events-platform-jv92.vercel.app",
    credentials: true,
  }),
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/events", eventRoutes);
app.use("/api/leads", leadRoutes);

export default app;
