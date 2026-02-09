import { scrapeEventbrite } from "./eventbrite.js";

async function runScraper() {
  await scrapeEventbrite();
}

runScraper();
