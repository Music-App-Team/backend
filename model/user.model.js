import mongoose from "mongoose";
const { Schema, model } = mongoose;

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true, minlength: 6 },
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "playlist"
    }
  ],
  playlists: [
    {
      type: Schema.Types.ObjectId,
      ref: "playlist",
    },
  ],
  image: String,
});

export const User = model("user", schema);
