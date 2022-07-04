import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    text: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    }
  },
  { timestamps: true }
);

const songSchema = new Schema(
  {
    name: String,
    artist: String,
    length: String,
    album: String,
    lang: String,
    link: String
  },
  { timestamps: true }
);

const playlistSchema = new Schema(
  {
    title: { type: String },
    comments: [commentSchema],
    songs: [songSchema]
  },
  { timestamps: true }
);

export const Playlist = model("Playlist", playlistSchema);
