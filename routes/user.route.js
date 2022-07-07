import { Router } from "express";
import { addPlaylistToFavorite, getFavoritePlaylists, removePlaylistFromFavorite} from "../controller/user.controller.js";
import { auth } from "../middleware/auth.js";
const router = Router();

router.get("/addPlaylistToFavorite/:playlistId", auth, addPlaylistToFavorite);
router.get("/getFavoritePlaylists", auth, getFavoritePlaylists);
router.delete("/removePlaylistFromFavorite/:playlistId", auth, removePlaylistFromFavorite);

//router.put("/editProfile", () => {});
//router.put("/editProfile", () => {});

export default router;
