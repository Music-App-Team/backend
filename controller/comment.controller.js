import { Playlist } from "../model/playlist.model.js";

export const getAllComments = async (req, res) => {
    const comments = await Playlist.find();
    res.send(comments);
}
export const getComment = async (req, res) => {
    const comment = await Playlist.findById(req.params.id);
    res.send(comment);
}



export const deleteComment = async (req, res) => {
    const comments = await Playlist.findByIdAndDelete(req.params.id);
    res.send(true);
}


export const addComment = async (req, res) => {
    const { comments } = req.body;      

    if (!comments)
        return res.status(400).send({ message: "text required" })
    let comment = new Playlist({
        comments
    })
    comment = await comment.save()
    
    res.send(comment)
    }