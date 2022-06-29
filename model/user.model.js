import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  playlists: [
    {
      type: Schema.Types.ObjectId,
      ref: "playlist",
    },
  ],
}); 

export const User= mongoose.model("user",userSchema)
