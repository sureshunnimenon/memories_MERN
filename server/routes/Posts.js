const express = require('express')
const router = express.Router()
const {getPosts, createPost, updatePost, deletePost, likePost} = require('../controllers/Posts')

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

//like posts
router.patch('/:id/like', likePost)

module.exports = router