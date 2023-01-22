const express = require('express');
const viTriRoute = express.Router();
const { getVT, getVTByID, getVTByName, createVT, updateVT, deleteVT, uploadVT } = require('../controllers/viTriController')
const { upload } = require('../middlewares/upload');

viTriRoute.post("/upload_base", upload.single("dataUpload"), uploadVT);
//POST upload
viTriRoute.post("/upload-hinh-vitri", upload.single("dataUpload"), (req, res)=>{
    console.log(req.file); 
});

//get VT
viTriRoute.get("/getVT", getVT);
//get VT by id
viTriRoute.get("/:id", getVTByID);
//get VT by name
viTriRoute.get("/:ten_vi_tri", getVTByName);

//post create VT
viTriRoute.post("/createVT", createVT);

//put update VT
viTriRoute.put("/updateVT/:id", updateVT);

//delete VT
viTriRoute.delete("/deleteVT/:id", deleteVT);

module.exports = viTriRoute;

