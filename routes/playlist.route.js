import { Router } from "express";
import { PlaylistController } from "../controller/playlist.controller.js";

const router = Router();

router.get("/getAllPlaylists", PlaylistController.getAllPlaylist);
router.get("/getPlaylistById/:id", PlaylistController.getPlaylistById);
router.post("/addPlaylist", () => {});
router.put("/addSong/:playlistId", () => {});
router.put("/rename/:playlistId", () => {});
router.delete("/deletePlaylist/:id", () => {});
router.delete("/deleteSongFromPlaylist/playlistId/:songId", () => {});
router.post("/addComment", () => {});
router.delete("/deleteComment/:playlistId/:id", () => {});
router.put("/updateComment/:playlistId/:id", () => {});
router.get("/search", () => {});
router.get("/like/:playlistId", () => {});
router.get("/disLike/:playlistId", () => {});

export default router;
