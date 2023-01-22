const express = require('express');
const { getCommentByIdPhong, getComment, createComment, updateComment, deleteComment } = require('../controllers/commentController.js');
const commentRoute = express.Router();

//GET get comment by phong id
commentRoute.get("/getCommentByIdPhong/:ma_phong", getCommentByIdPhong);
//GET get comment
commentRoute.get("/getComment", getComment);
//POST create comment
commentRoute.post("/createComment", createComment);
//PUT update comment
commentRoute.put("/updateComment/:id", updateComment);
//DELETE comment
commentRoute.delete("/deleteComment/:id", deleteComment);
module.exports = commentRoute;