import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  text: String,
  user: { unique: true,  type: Schema.type.ObjectId, ref: "user" },
});

const songSchema = new mongoose.Schema({
    name: String,
    artist: String,
    length: String,
    album: String,
    lang: String,
    link: string,
});

const playlistSchema = new mongoose.Schema(
  {
    title: { type: String },
    user: String,
    comments: [commentSchema],
    songs: [songSchema]
    
    });
  
export const Playlist = mongoose.model("playlist", playlistSchema);