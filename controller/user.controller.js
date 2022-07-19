import mongoose from "mongoose";
import { User } from "../model/user.model.js";

export const addPlaylistToFavorite = async (req, res) => {
  const playlistId = req.params.playlistId;
  const userId = req.user.id;

  const user = await User.findById(userId);
  if (!user) return res.status(404).send({ message: "user not found" });

  if (user.playlists.includes(playlistId))
    return res.status(400).send({ message: "this play list already existed" });
  user.playlists.push(playlistId);
  await user.save();
  res.send({ message: "play list added to your favorite list" });
};

export const getMyFavoritePlaylists = async (req, res) => {
  const userId = req.user.id;

  const user = await User.findById(userId).populate({
    path: "playlists",
    select: ["title", "user"],
    populate: {
      path: "user",
      select: ["firstName"],
    },
  });
  if (!user) return res.status(404).send({ message: "user not found" });

  res.send(user.playlists);
};

export const removePlaylistFromFavorite = async (req, res) => {
  const userId = req.user.id;
  const playlistId = req.params.playlistId;

  const user = await User.findById(userId);
  if (!user) return res.status(404).send({ message: "user not found" });

  user.playlists.remove(playlistId);
  user.save();
  res.send({ message: "removed successfully" });
};

export const changeProfileImage = async (req, res) => {
  const imagePath = req.file?.path;
  const userId = req.user.id;

  if (!imagePath) return res.status(400).send({ message: "file must sent" });

  const user = await User.findById(userId);
  if (!user) return res.status(404).send({ message: "user not found" });

  user.image = imagePath;
  user.save();

  res.send({ path: imagePath });
};

//Add Likes //
export const addLike = async (req, res) => {
  // If req.user.id empty => error
  if (!req.user.id) return res.status(404).send({ message: "user not found" });

  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {

      likes: req.body.likes

    }, {
      new: true
    });
    return res.json({ updatedUser })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: err.message })
  }
}
// get Likes
export const getLikes = async (req, res) => {
  console.log("getLikes called")
  try {
    const user = await User.findById(req.user.id).exec();
    if (!user) { throw new Error("user not found") }
    res.send(user.likes);
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: err.message })
  }

}
//Add disLikes //
export const addDisLike = async (req, res) => {
  // If req.user.id empty => error
  if (!req.user.id) return res.status(404).send({ message: "user not found" });

  try {
    const updatedUser = await User.findByIdAndUpdate(req.user.id, {

      dislikes: req.body.dislikes

    }, {
      new: true
    });
    return res.json({ updatedUser })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: err.message })
  }
}
// get disLikes
export const getDisLikes = async (req, res) => {
  console.log("getdisLikes called")
  try {
    const user = await User.findById(req.user.id).exec();
    if (!user) { throw new Error("user not found") }
    res.send(user.dislikes);
  } catch (err) {
    console.log(err)
    return res.status(500).json({ msg: err.message })
  }

}
