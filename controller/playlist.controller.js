import { PlayList } from "../model/playlist.model.js";
import { User } from "../model/user.model.js";



export const getAllPlaylist = async (req, res) => {
  try {
    const playlists = await PlayList.find().populate("user", ["firstName"]);
    res.send(playlists);
  } catch (err) {
    console.log("message", err);
    return res.status(500).send({ message: err.message });
  }
};



export const getPlaylist = async (req, res) => {
  try {
    const playlists = await PlayList.findById(req.params.id);
    res.send(playlists);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};



export const addPlaylist = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).send({ message: "title required" });
    let playlist = new PlayList({
      title,
      user: req.user.id,
    });
    playlist = await playlist.save();
    res.send(playlist);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};


export const getDetail = async (req, res) => {
  try {
    const playlistId = req.params.playlistId;
    const userId = req.user.id;

    const playlist = await PlayList.findById(playlistId).populate("user", [
      "firstName",
    ]);
    if (!playlist)
      return res
        .status(404)
        .send({ message: "play list with this id not found" });
    res.send({ playlist, own: playlist.user._id.toString() === userId });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};


export const addSong = async (req, res) => {
  try {
    const { name, artist, album, lang, link } = req.body;
    const playlistId = req.params.playlistId;

    const playlist = await PlayList.findById(playlistId);
    if (!playlist)
      return res.status(400).send({ message: "playlist not found" });

    playlist.songs.push({
      name,
      artist,
      album,
      lang,
      link,
    });

    await playlist.save();
    res.send(playlist);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};



export const search = async (req, res) => {
  try {
    const playlists = await PlayList.find({ title: req.query.title }).populate(
      "user",
      ["firstName"]
    );
    res.send(playlists);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};



export const uploadSong = async (req, res) => {
  try {
    const songPath = req.file?.path;

    if (!songPath) return res.status(400).send({ message: "file must sent" });

    res.send({ path: songPath });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const removeSong = async (req, res) => {
  try {
    const { playlistId, songId } = req.params;
    const playlist = await PlayList.findById(playlistId)
    if (!playlist) return res.status(404).sens({ message: "playlist not found" })  

    playlist.songs.remove(songId);
    await playlist.save()

    res.send({message:"removed successfully"})
    
  } catch (err) {
     return res.status(500).send({ message: err.message });
  }
}
