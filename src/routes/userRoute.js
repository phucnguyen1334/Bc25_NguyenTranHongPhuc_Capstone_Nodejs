const express = require('express');
const userRoute = express.Router();
const { getUser, createUser, updateUser, deleteUser, uploadUser, signUp, login } = require('../controllers/userController')
const { upload } = require('../middlewares/upload');

userRoute.post("/upload_base", upload.single("dataUpload"), uploadUser);
//POST upload
userRoute.post("/upload", upload.single("dataUpload"), (req, res)=>{
    console.log(req.file); 
});

//get user
userRoute.get("/getUser", getUser);

//post create user
userRoute.post("/createUser", createUser);

//put update user
userRoute.put("/updateUser/:nguoi_dung_id", updateUser);

//delete user
userRoute.delete("/deleteUser/:user_id", deleteUser);

//signup
userRoute.post("/signUp", signUp);

//login
userRoute.get("/login", login);

module.exports = userRoute;

