const express = require('express');
const imageRoute = express.Router();
const { getImage, getImageByName, getImageInfo, getImageSaved, getImgSavedByUserId, getImgCreatedByUserId, createImage, deleteImage } = require('../controllers/imageController.js');

//GET get image
imageRoute.get("/getImage", getImage);
//GET get image by name
imageRoute.get("/getImageByName/:ten_hinh", getImageByName);
//GET get image by id
imageRoute.get("/getImageById/:hinh_id", getImageInfo);
//GET get image is saved
imageRoute.get("/getImageSaved/:hinh_id", getImageSaved);
//GET get list saved image
imageRoute.get("/getImgSavedByUserId/:nguoi_dung_id", getImgSavedByUserId);
//GET get list created image
imageRoute.get("/getImgCreatedByUserId/:nguoi_dung_id", getImgCreatedByUserId);
//POST create image
imageRoute.post("/createImage", createImage);
//DELETE delete image
imageRoute.delete("/deleteImage/:hinh_id", deleteImage);

module.exports = imageRoute;