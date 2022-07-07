import { PlayList } from "../model/playlist.model.js";


export const getAllPlaylist = async (req, res) => {

  const playlists = await PlayList.find().populate("user", ["firstName"]);
  res.send(playlists);
};


export const addPlaylist = async (req, res) => {

  const { title } = req.body;
  if (!title)
    return res.status(400).send({ message: "title required" });
  let playlist = new PlayList({
    title,
    user: req.user.id,
  });

  playlist = await playlist.save();

  res.send(playlist);
};



   

