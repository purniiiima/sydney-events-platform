import cron from "node-cron";
import { scrapeEventbrite } from "../scrapers/eventbrite.js";

cron.schedule("*/10 * * * *", async () => {
  console.log("Running Eventbrite scraper...");
  await scrapeEventbrite();
});
