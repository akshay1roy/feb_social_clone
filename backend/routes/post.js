
const router = require("express").Router();
const Post = require("../models/Post")

//create a post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);
    } catch (error) {

    }
})


// update a post
// delete a post
//like a post
//get a post
// get timeline posts

module.exports = router;