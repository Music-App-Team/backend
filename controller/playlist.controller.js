import { Playlist } from "../model/playlist.model.js";


export const PlaylistController = {
    getAllPlaylist: async (req, res) => {
        const playlists = await Playlist.find();
        res.send(playlists);
    },
    getPlaylistById: async (req, res) => {
        const { id } = req.params;
        const playlist = await Playlist.findById(id);
        res, send(playlist);
    },

    addPlaylist: async (req, res) => {
      
    },
    addSong: async (req, res) => {
            
    },
        
    deletePlaylist: async (req, res) => {
         
    },
    rename: async (req, res) => { }
}