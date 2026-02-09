import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String
});

export default mongoose.model("User", UserSchema);
