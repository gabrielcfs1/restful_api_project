const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch {
    res.json({ message: err });
  }
});

// router.get('/specific', (req, res) => {
//   res.send('Specific post')
// });


//SUBMITS A POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err })
  }
});

//SPECIFIC POST
router.get('/:postId', async (req, res) => {
  // console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err })
  }
});

//DELETE SPECIFIC POST
router.delete('/:postID', async (req, res) => {
  try {
    const removedPost = await Post.remove({ _id: req.params.postID });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err })
  }
})

//UPDATE POST
router.patch('/:postId', async (req, res) => {
  try {
    const updatePost = await Post.updateOne(
      { _id: req.params.postId },
      {
        $set: { title: req.body.title },
        $set: { description: req.body.description }
      }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router;
