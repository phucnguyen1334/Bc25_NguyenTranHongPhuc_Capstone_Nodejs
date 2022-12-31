const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//TRANG CHỦ
//R: GET list image
const getImage = async(req,res) =>{
    let dataImage = await model.hinh_anh.findAll(
        {
            include:["nguoi_dung"]
        }
    );
    res.send(dataImage);
}

//R: GET list image by name
const getImageByName = async(req,res) =>{
    try{
        let { ten_hinh } = req.params;
        let dataImage = await model.hinh_anh.findAll(
            {
                where:{
                    ten_hinh
                }
            }
        );
        res.send(dataImage);
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//TRANG CHI TIẾT
//R: GET list image
const getImageInfo = async(req,res) =>{
    try{
        let { hinh_id } = req.params;
        let checkImage = await model.luu_anh.findOne({
            where:{
                hinh_id
            }
        });
        if(checkImage){
            let dataImage = await model.luu_anh.findOne({
                where:{
                    hinh_id
                },
                include:["nguoi_dung", "hinh"]
            })
            res.send(dataImage);
        }
        else{
            failCode(res,"","Image không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//R: get image is saved by id?
const getImageSaved = async(req,res) =>{
    try{
        let { hinh_id } = req.params;
        let checkImage = await model.luu_anh.findOne({
            where:{
                hinh_id
            }
        });
        if(checkImage){
            failCode(res,"","Đã lưu ảnh")
        }
        else{
            sucessCode(res,checkImage,"Ảnh chưa được lưu")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//TRANG QUẢN LÝ ẢNH
//R: get list saved image theo user id
const getImgSavedByUserId = async(req,res) =>{
    try{
        let { nguoi_dung_id } = req.params;
        let checkId = await model.luu_anh.findAll({
            where:{
                nguoi_dung_id
            }
        });
        if(checkId){
            let data = await model.luu_anh.findAll({
                where:{
                    nguoi_dung_id
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","Id người dùng không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//R: get list created image theo user id
const getImgCreatedByUserId = async(req,res) =>{
    try{
        let { nguoi_dung_id } = req.params;
        let checkId = await model.hinh_anh.findAll({
            where:{
                nguoi_dung_id
            }
        });
        if(checkId){
            let data = await model.hinh_anh.findAll({
                where:{
                    nguoi_dung_id
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","Id người dùng không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//D: Delete image
const deleteImage = async(req, res) =>{
    try{
        let { hinh_id } = req.params;
        let checkImage = await model.hinh_anh.findOne({
            where:{
                hinh_id
            }
        });
        if(checkImage){
            await model.hinh_anh.destroy({ 
                where:{
                    hinh_id
                }
            });
            sucessCode(res,checkImage,"Xóa image thành công")
        }
        else{
            failCode(res,"","Image không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//TRANG THÊM ẢNH
//C: Create Image
const createImage = async (req, res)=>{
    try{
        let { nguoi_dung_id, hinh_id, ten_hinh, duong_dan, mo_ta } = req.body;
        let result = await model.hinh_anh.create({ 
            nguoi_dung_id, hinh_id, ten_hinh, duong_dan, mo_ta
        });
        sucessCode(res,result,"Tạo dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}


module.exports = { getImage, getImageByName, getImageInfo, getImageSaved, getImgSavedByUserId, getImgCreatedByUserId, createImage, deleteImage }