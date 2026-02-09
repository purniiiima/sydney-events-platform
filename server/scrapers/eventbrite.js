import axios from "axios";
import * as cheerio from "cheerio";
import Event from "../models/Event.js";

export async function scrapeEventbrite() {
  const url = "https://www.eventbrite.com.au/d/australia--sydney/events/";
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  $(".search-event-card-wrapper").each(async (_, el) => {
    const title = $(el).find("h3").text().trim();
    const link = $(el).find("a").attr("href");
    const image = $(el).find("img").attr("src");

    if (!title || !link) return;

    const existing = await Event.findOne({ originalUrl: link });

    if (!existing) {
      await Event.create({
        title,
        imageUrl: image,
        source: "Eventbrite",
        originalUrl: link,
        lastScrapedAt: new Date(),
        status: "new",
      });
    } else {
      existing.lastScrapedAt = new Date();
      existing.status = "updated";
      await existing.save();
    }
  });
}
