import { PlayList } from "../model/playlist.model.js";

export const getAllComments = async (req, res) => {
    const comments = await PlayList.find();
    res.send(comments);
}
export const getComment = async (req, res) => {
    const comment = await PlayList.findById(req.params.id);
    res.send(comment);
}



export const deleteComment = async (req, res) => {
    const comments = await PlayList.findByIdAndDelete(req.params.id);
    res.send(true);
}


export const addComment = async (req, res) => {
    const { comments } = req.body;      

    if (!comments)
        return res.status(400).send({ message: "text required" })
    let comment = new PlayList({
        comments
    })
    comment = await comment.save()
    
    res.send(comment)
    }