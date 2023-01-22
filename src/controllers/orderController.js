const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//R: GET list order
const getOrder = async(req,res) =>{
    let dataOrder = await model.DatPhong.findAll(
        {
            include:["ma_nguoi_dat_NguoiDung, ma_phong_Phong"]
        }
    );
    res.send(dataOrder);
}

//R: GET order by id
const getOrderById = async(req,res) =>{
    try{
        let { id } = req.params;
        let dataOrder = await model.DatPhong.findAll(
            {
                where:{
                    id
                }
            }
        );
        res.send(dataOrder);
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//R: GET order by id user
const getOrdeByUserID = async(req,res) =>{
    try{
        let { ma_nguoi_dat } = req.params;
        let checkOrder = await model.DatPhong.findOne({
            where:{
                ma_nguoi_dat
            }
        });
        if(checkOrder){
            let dataOrder = await model.DatPhong.findOne({
                where:{
                    ma_nguoi_dat
                },
                include:["ma_nguoi_dat_NguoiDung, ma_phong_Phong"]
            })
            res.send(dataOrder);
        }
        else{
            failCode(res,"","Đơn đặt phòng không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//PUT
const updateOrder = async(req, res) =>{
    try{
        let { id } = req.params;
        let { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat } = req.body;
        
        let checkOrder = await model.DatPhong.findOne({
            where:{
                id
            }
        });
        if(checkOrder){
            await model.DatPhong.update({ 
                ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat
            }, {
                where:{
                    id
                }
            }); 
            let data = await model.DatPhong.findOne({
                where:{
                    id
                }
            });
            sucessCode(res,data,"Update thành công")
        }
        else{
            failCode(res,"","Đơn không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//D: Delete order
const deleteOrder = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkOrder = await model.DatPhong.findOne({
            where:{
                id
            }
        });
        if(checkOrder){
            await model.DatPhong.destroy({ 
                where:{
                    id
                }
            });
            sucessCode(res,checkOrder,"Xóa đơn thành công")
        }
        else{
            failCode(res,"","Đơn không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//C: Create Order
const createOrder = async (req, res)=>{
    try{
        let { ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat } = req.body;
        let result = await model.DatPhong.create({ 
            ma_phong, ngay_den, ngay_di, so_luong_khach, ma_nguoi_dat
        });
        sucessCode(res,result,"Tạo dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}


module.exports = { getOrder, getOrderById, getOrdeByUserID, updateOrder, createOrder, deleteOrder }