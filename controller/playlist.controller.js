import { Playlist } from "../model/playlist.model.js";


export const getAllPlaylist = async (req, res) => {
        const playlists = await Playlist.find();
        res.send(playlists);
}
    
export const addPlaylist = async (req, res) => {
    const { title } = req.body;      

    if (!title)
        return res.status(400).send({ message: "title required" })
    let playlist = new Playlist({
        title
    })
    playlist = await playlist.save()
    
    res.send(playlist)

    }

   