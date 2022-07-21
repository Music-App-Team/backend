import { Router } from "express";
import {
  addComment,
  getAllComments,
  deleteComment,
} from "../controller/comment.controller.js";
import {
  getAllPlaylist,
  addPlaylist,
  addSong,
  getDetail,
  uploadSong,
  search,
  removeSong,
  renamePlaylist,
  deletePlaylist,
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
router.delete("/removeSong/:playlistId/:songId", auth, removeSong);
router.put("/renamePlaylist/:playlistId/", auth, renamePlaylist);
router.delete("/deletePlaylist/:playlistId", auth, deletePlaylist);
router.post("/addComment/:playlistId", auth, addComment);
router.get("/getAllComments/:playlistId", auth, getAllComments);
router.delete("/deleteComment/:playlistId/:id", auth, deleteComment);
router.get("/search", auth, search);


export default router;
