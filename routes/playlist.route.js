import { Router } from "express";
import { addComment, getAllComments,deleteComment,getComment } from "../controller/comment.controller.js";
import { getAllPlaylist,addPlaylist } from "../controller/playlist.controller.js";

const router = Router();

router.get("/getAllPlaylists", getAllPlaylist);
router.post("/addPlaylist", addPlaylist);
//router.put("/addSong/:playlistId", () => {});
//router.get("/getPlaylistById/:id",()=>{});
//router.put("/rename/:playlistId", () => {});
//router.delete("/deletePlaylist/:id", () => {});
//router.delete("/deleteSongFromPlaylist/playlistId/:songId", () => {});
router.post("/addComment", addComment);
router.get("/getAllComments", getAllComments);
router.get("/getComment/:id", getComment);
router.delete("/deleteComment/:id", deleteComment);
//router.put("/updateComment/:playlistId/:id", () => {});
//router.get("/search", () => {});
//router.get("/like/:playlistId", () => {});
//router.get("/disLike/:playlistId", () => {});

export default router;
