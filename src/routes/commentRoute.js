const express = require('express');
const { getCommentByIdImg, getComment, createComment, deleteComment } = require('../controllers/commentController.js');
const commentRoute = express.Router();

//GET get comment by image id
commentRoute.get("/getCommentByIdImg/:hinh_id", getCommentByIdImg);
//GET get comment
commentRoute.get("/getComment", getComment);
//POST create comment
commentRoute.post("/createComment", createComment);
//DELETE comment
commentRoute.delete("/deleteComment/:nguoi_dung_id/:hinh_id", deleteComment);
module.exports = commentRoute;