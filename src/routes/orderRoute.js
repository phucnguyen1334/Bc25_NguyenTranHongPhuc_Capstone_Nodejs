const express = require('express');
const orderRoute = express.Router();
const { getOrder, getOrderById, getOrdeByUserID, updateOrder, createOrder, deleteOrder } = require('../controllers/orderController.js');

//GET get image
orderRoute.get("/getOrder", getOrder);
//GET get image by id
orderRoute.get("/getOrderById/:id", getOrderById);
//GET get image by id user
orderRoute.get("/getOrdeByUserID/:ma_nguoi_dat", getOrdeByUserID);

//POST create order
orderRoute.post("/createOrder", createOrder);
//PUT update order
orderRoute.put("/updateOrder/:id", updateOrder);

//DELETE delete order
orderRoute.delete("/deleteOrder/:id", deleteOrder);

module.exports = orderRoute;