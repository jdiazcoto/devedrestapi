const express = require("express");
const router = express.Router();
const Post = require('../models/Posts')

//Gets back all the posts
router.get('/', async (req, res)=>{
 try {
   const posts = await Post.find()
   res.json(posts)
 } catch (err) {
   res.json({message: err})
 }
})

//Submits a post
router.post('/', async (req,res)=>{
const post = new Post({
  title: req.body.title,
  description: req.body.description
})
try {
  const savedPost = await post.save()
 res.json(savedPost)
} catch (err) {
  res.json({messag: err})
}
 
})

//Specific post
router.get('/:postId', async (req, res)=>{
  try {
    const post = await Post.findById(req.params.postId)
  res.json(post)    
  } catch (error) {
    res.json({message:error})
  }
})

//Delete post
router.delete('/:postId', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postId })
    res.json(removedPost);    
  } catch (error) {
    res.json({message: error})
  }
  
})

//Update post
router.patch('/:postId', async (req, res) => {
  try
  {
    const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
    res.json(updatePost);
  } catch (error)
  {
    res.json({ message: error })
  }
})
module.exports = router;