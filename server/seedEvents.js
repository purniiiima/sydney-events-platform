import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

const sampleEvents = [
  {
    title: "Sydney Music Festival",
    imageUrl: "https://via.placeholder.com/400x200",
    source: "Eventbrite",
    originalUrl: "https://www.eventbrite.com.au/e/sydney-music-festival-123456",
    lastScrapedAt: new Date(),
    status: "new",
    category: [],
  },
  {
    title: "Sydney Food Expo",
    imageUrl: "https://via.placeholder.com/400x200",
    source: "Eventbrite",
    originalUrl: "https://www.eventbrite.com.au/e/sydney-food-expo-123456",
    lastScrapedAt: new Date(),
    status: "new",
    category: [],
  },
  {
    title: "Sydney Art Fair",
    imageUrl: "https://via.placeholder.com/400x200",
    source: "Eventbrite",
    originalUrl: "https://www.eventbrite.com.au/e/sydney-art-fair-123456",
    lastScrapedAt: new Date(),
    status: "new",
    category: [],
  }
];

// Clear old events and insert new ones
async function seed() {
  await Event.deleteMany({});
  await Event.insertMany(sampleEvents);
  console.log("Sample events inserted!");
  mongoose.disconnect();
}

seed();
