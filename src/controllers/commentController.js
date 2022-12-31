const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//TRANG CHI TIẾT
//R: get comment by id
const getCommentByIdImg = async(req,res) =>{
    try{
        let { hinh_id } = req.params;
        let checkImage = await model.binh_luan.findOne({
            where:{
                hinh_id
            }
        });
        if(checkImage){
            let dataComment = await model.binh_luan.findOne({
                where:{
                    hinh_id
                }
            })
            res.send(dataComment);
        }
        else{
            failCode(res,"","Image không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//R: get comment
const getComment = async(req,res) =>{
    try{
        let dataComment = await model.binh_luan.findAll();
        res.send(dataComment)
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//C: Create comment
const createComment = async (req, res)=>{
    try{
        let { nguoi_dung_id, hinh_id, ngay_binh_luan } = req.body;
        let result = await model.binh_luan.create({ 
            nguoi_dung_id, hinh_id, ngay_binh_luan
        });
        sucessCode(res,result,"Tạo dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//D: Delete comment
const deleteComment = async(req, res) =>{
    try{
        let { nguoi_dung_id, hinh_id } = req.params;
        let checkComment = await model.binh_luan.findOne({
            where:{
                nguoi_dung_id, hinh_id
            }
        });
        if(checkComment){
            await model.binh_luan.destroy({ 
                where:{
                    nguoi_dung_id, hinh_id
                }
            });
            sucessCode(res,checkComment,"Xóa comment thành công")
        }
        else{
            failCode(res,"","comment không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

module.exports = { getCommentByIdImg, getComment, createComment, deleteComment }