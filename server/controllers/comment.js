const { posts, post_comments } = require("../models");

module.exports = {
    post: (req, res) => {
        const { userId, postId, comment } = req.body
        post_comments.create({
            userId: userId,
            postId: postId,
            comment: comment
        })
        res.status(200).json({ message: "comment success" })
    },
    get: (req, res) => {
        console.log(`EEEEEE`, req.params.postId);
        post_comments.findAll({
            where: { postId: req.params.postId }
        }).then((data) => {
            console.log(data);
            res.status(200).json({ data: data })
        })
    }
};