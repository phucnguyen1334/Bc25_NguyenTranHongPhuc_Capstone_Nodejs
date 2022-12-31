const express = require('express');
const rootRoute = express.Router();
const userRoute = require('./userRoute');
const imageRoute = require('./imageRoute');
const commentRoute = require('./commentRoute');

rootRoute.use("/user", userRoute);
rootRoute.use("/image", imageRoute);
rootRoute.use("/comment", commentRoute);

module.exports = rootRoute;