import { Router } from "express";
import {
  addComment,
  getAllComments,
  deleteComment,
  getComment,
} from "../controller/comment.controller.js";
import {
  getAllPlaylist,
  addPlaylist,
  addSong,
  getDetail,
  uploadSong,
  search,
} from "../controller/playlist.controller.js";
import { auth } from "../middleware/auth.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
    resource_type: "auto",
  },
});

const upload = multer({ storage });

const router = Router();

router.get("/getAllPlaylists", auth, getAllPlaylist);
router.post("/addPlaylist", auth, addPlaylist);
router.get("/getDetail/:playlistId", auth, getDetail);
router.post("/addSong/:playlistId", auth, addSong);
router.post("/uploadSong", [auth, upload.single("songFile")], uploadSong);

//router.get("/getPlaylistById/:id",()=>{});
router.post("/addPlaylist", auth, addPlaylist);
//router.put("/addSong/:playlistId", () => {});
// router.get("/getPlaylistById/:id",auth,getPlaylist);
//router.put("/rename/:playlistId", () => {});
//router.delete("/deletePlaylist/:id", () => {});
//router.delete("/deleteSongFromPlaylist/playlistId/:songId", () => {});
router.post("/addComment", auth, addComment);
router.get("/getAllComments", auth, getAllComments);
router.get("/getComment/:id", auth, getComment);
router.delete("/deleteComment/:id", auth, deleteComment);
//router.put("/updateComment/:playlistId/:id", () => {});
router.get("/search", auth, search);
//router.get("/like/:playlistId", () => {});
//router.get("/disLike/:playlistId", () => {});

export default router;
