import { Router } from "express";
import {getAllPlaylist,addPlaylist} from "../controller/playlist.controller.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.get("/getAllPlaylists", auth, getAllPlaylist);
router.post("/addPlaylist", auth, addPlaylist);
//router.post("/addSong/:playListId", auth, addSong);
// router.get("/getPlayListById/:id",()=>{})
// router.put("/rename/:playListId",()=>{});
// router.delete("/deletePlayList/:id",()=>{});
// router.delete("/deleteSongFromPlayList/:playlistId/:songId",()=>{});
// router.post("/addComment",()=>{});
// router.delete("/deleteComment/:playlistId/:id",()=>{});
// router.put("/updateComment/:playlistId/:id",()=>{});
// router.get("/search",()=>{});
// router.get("/like/:playlistId",()=>{});
// router.get("/disLike/:playlistId",()=>{});



export default router;
