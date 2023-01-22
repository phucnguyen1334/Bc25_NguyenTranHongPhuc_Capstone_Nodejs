const express = require('express');
const rootRoute = express.Router();
const userRoute = require('./userRoute');
const orderRoute = require('./orderRoute');
const commentRoute = require('./commentRoute');
const phongRoute = require('./phongRoute');
const viTriRoute = require('./viTriRoute');

rootRoute.use("/users", userRoute);
rootRoute.use("/dat-phong", orderRoute);
rootRoute.use("/binh-luan", commentRoute);
rootRoute.use("/phong-thue", phongRoute);
rootRoute.use("/vi-tri", viTriRoute);

module.exports = rootRoute;