const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//R: get comment by phong id
const getCommentByIdPhong = async(req,res) =>{
    try{
        let { ma_phong } = req.params;
        let checkComment = await model.BinhLuan.findOne({
            where:{
                ma_phong
            }
        });
        if(checkComment){
            let dataComment = await model.BinhLuan.findOne({
                where:{
                    ma_phong
                }
            })
            res.send(dataComment);
        }
        else{
            failCode(res,"","Phòng không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//R: get comment
const getComment = async(req,res) =>{
    try{
        let dataComment = await model.BinhLuan.findAll();
        res.send(dataComment)
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//C: Create comment
const createComment = async (req, res)=>{
    try{
        let { ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan } = req.body;
        let result = await model.BinhLuan.create({ 
            ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan
        });
        sucessCode(res,result,"Tạo dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
//PUT
const updateComment = async(req, res) =>{
    try{
        let { id } = req.params;
        let { ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan } = req.body;
        
        let checkComment = await model.BinhLuan.findOne({
            where:{
                id
            }
        });
        if(checkComment){
            await model.BinhLuan.update({ 
                ma_phong, ma_nguoi_binh_luan, ngay_binh_luan, noi_dung, sao_binh_luan
            }, {
                where:{
                    id
                }
            }); 
            let data = await model.BinhLuan.findOne({
                where:{
                    id
                }
            });
            sucessCode(res,data,"Update thành công")
        }
        else{
            failCode(res,"","Bình luận không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
//D: Delete comment
const deleteComment = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkComment = await model.BinhLuan.findOne({
            where:{
                id
            }
        });
        if(checkComment){
            await model.BinhLuan.destroy({ 
                where:{
                    id
                }
            });
            sucessCode(res,checkComment,"Xóa bình luận thành công")
        }
        else{
            failCode(res,"","Bình luận không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

module.exports = { getCommentByIdPhong, getComment, createComment, updateComment, deleteComment }