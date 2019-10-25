const express = require("express");

const PostController = require("../controllers/posts");

const chekAuth = require('../middleware/chek-auth');
const extractFile = require('../middleware/file');


const router = express.Router();

router.post("", chekAuth, extractFile, PostController.createPost);

router.put("/:id", chekAuth, extractFile, PostController.updatePost);

router.get("", PostController.getPosts);

router.get("/:id", PostController.getPost);

router.delete("/:id", chekAuth, PostController.deletePost);

module.exports = router;
