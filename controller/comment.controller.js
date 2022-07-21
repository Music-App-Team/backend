import { PlayList } from "../model/playlist.model.js";

export const getAllComments = async (req, res) => {
  const { playlistId } = req.params;

  const playlist = await PlayList.findById(playlistId).populate({
    path: "comments",
    select: ["text", "user"],
    populate: {
      path: "user",
      select: ["firstName"],
    },
  });
  res.send(playlist.comments);
};

export const deleteComment = async (req, res) => {
  const { playlistId, id } = req.params;

  const playlist = await PlayList.findById(playlistId);
  playlist.comments.remove(id);
  await playlist.save();
  res.send(true);
};
export const addComment = async (req, res) => {
  const { text } = req.body;
  const userId = req.user.id;

  const { playlistId } = req.params;
  if (!text) return res.status(400).send({ message: "text required" });
  const playlist = await PlayList.findById(playlistId);
  if (!playlist) return res.status(404).send({ message: "playlist not found" });
  playlist.comments.push({
    text,
    user: userId,
  });
  playlist.save();

  res.send({ message: "comment added" });
};
