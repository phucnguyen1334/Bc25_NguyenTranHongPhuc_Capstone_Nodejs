const express = require('express');
const userRoute = express.Router();
const { getPhong, getPhongByID, getPhongByVT, getPhongByName, createPhong, updatePhong, deletePhong, uploadPhong } = require('../controllers/phongController')
const { upload } = require('../middlewares/upload');

userRoute.post("/upload_base", upload.single("dataUpload"), uploadPhong);
//POST upload
userRoute.post("/upload-hinh-phong", upload.single("dataUpload"), (req, res)=>{
    console.log(req.file); 
});

//get phong
userRoute.get("/getPhong", getPhong);
//get phong by id
userRoute.get("/:id", getPhongByID);
//get phong by ma_vi_tri
userRoute.get("/:ma_vi_tri", getPhongByVT);
//get phong by name
userRoute.get("/:ten_phong", getPhongByName);

//post create phong
userRoute.post("/createPhong", createPhong);

//put update phong
userRoute.put("/updatePhong/:id", updatePhong);

//delete phong
userRoute.delete("/deletePhong/:id", deletePhong);

module.exports = userRoute;

