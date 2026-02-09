import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { scrapeEventbrite } from "./scrapers/eventbrite.js";

await scrapeEventbrite();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(console.error);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`LISTENING ON ${PORT}`);
});
