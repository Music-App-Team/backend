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

export const getFavoritePlaylists = async (req, res) => {
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
