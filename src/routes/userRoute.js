const express = require('express');
const userRoute = express.Router();
const { getUser, getUserByID, getUserByName, createUser, updateUser, deleteUser, uploadUser, signUp, login } = require('../controllers/userController')
const { upload } = require('../middlewares/upload');

userRoute.post("/upload_base", upload.single("dataUpload"), uploadUser);
//POST upload
userRoute.post("/upload-avatar", upload.single("dataUpload"), (req, res)=>{
    console.log(req.file); 
});

//get user
userRoute.get("/getUsers", getUser);
//get user by id
userRoute.get("/:id", getUserByID);
//get user by name
userRoute.get("/search/:name", getUserByName);

//post create user
userRoute.post("/createUsers", createUser);

//put update user
userRoute.put("/updateUser/:id", updateUser);

//delete user
userRoute.delete("/deleteUsers/:id", deleteUser);

//signup
userRoute.post("/signUp", signUp);

//login
userRoute.get("/login", login);

module.exports = userRoute;

