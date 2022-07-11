import { Router } from "express";
import {
  addPlaylistToFavorite,
  changeProfileImage,
  getMyFavoritePlaylists,
  removePlaylistFromFavorite,
} from "../controller/user.controller.js";

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

router.get("/addPlaylistToFavorite/:playlistId", auth, addPlaylistToFavorite);
router.get("/getMyFavoritePlaylists", auth, getMyFavoritePlaylists);
router.delete(
  "/removePlaylistFromFavorite/:playlistId",
  auth,
  removePlaylistFromFavorite
);

router.put("/changeProfileImage",[auth, upload.single("image")],changeProfileImage
);
//router.put("/editProfile", () => {});

export default router;
