import mongoose from "mongoose";
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    text: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
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
    link: String,
  },
  { timestamps: true }
);

const playlistSchema = new Schema(
  {
    title: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    comments: [commentSchema],
    songs: [songSchema],
  },
  { timestamps: true }
);

export const PlayList = model("playlist", playlistSchema);
