const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//GET
const getPhong = async (req, res)=>{
    try{
        let data = await model.Phong.findAll();
        sucessCode(res,data,"Lấy dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
const getPhongByID = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkPhong = await model.Phong.findOne({
            where:{
                id
            }
        });
        if(checkPhong){
            let data = await model.Phong.findOne({
                where:{
                    id
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","Phòng không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
const getPhongByVT = async(req, res) =>{
    try{
        let { ma_vi_tri } = req.params;
        let checkPhong = await model.Phong.findOne({
            where:{
                ma_vi_tri
            }
        });
        if(checkPhong){
            let data = await model.Phong.findOne({
                where:{
                    ma_vi_tri
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","Phong không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
const getPhongByName = async(req, res) =>{
    try{
        let { ten_phong } = req.params;
        let checkPhong = await model.Phong.findOne({
            where:{
                ten_phong
            }
        });
        if(checkPhong){
            let data = await model.Phong.findOne({
                where:{
                    ten_phong
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","Phong không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
//POST
const createPhong = async (req, res)=>{
    try{
        let { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri } = req.body;
        let checkPhong = await model.Phong.findOne({
            where:{
                ten_phong
            }
        });
        if(checkPhong){
            failCode(res,{ ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri },"Email đã tồn tại")
        }
        else{
            let result = await model.Phong.create({ 
                ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri
            });
            sucessCode(res,result,"Tạo dữ liệu thành công")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//PUT
const updatePhong = async(req, res) =>{
    try{
        let { id } = req.params;
        let { ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri } = req.body;
        
        let checkPhong = await model.Phong.findOne({
            where:{
                id
            }
        });
        if(checkPhong){
            await model.Phong.update({ 
                ten_phong, khach, phong_ngu, giuong, phong_tam, mo_ta, gia_tien, may_giat, ban_la, tivi, dieu_hoa, wifi, bep, do_xe, ho_boi, ban_ui, hinh_anh, ma_vi_tri
            }, {
                where:{
                    id
                }
            }); 
            let data = await model.Phong.findOne({
                where:{
                    id
                }
            });
            sucessCode(res,data,"Update thành công")
        }
        else{
            failCode(res,"","Phòng không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//Delete
const deletePhong = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkPhong = await model.Phong.findOne({
            where:{
                id
            }
        });
        if(checkPhong){
            await model.Phong.destroy({ 
                where:{
                    id
                }
            });
            sucessCode(res,checkPhong,"Xóa dữ liệu thành công")
        }
        else{
            failCode(res,"","Phòng không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//POST
const uploadPhong = async(req, res)=>{
    const fs = require('fs');
    if(req.file.size >= 400000){
        fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
        res.send("chỉ được phép upload 4Mb");
        return;
    }
    if(req.file.mimetype != "image/jpeg" && req.file.mimetype != "image/jpg"){
        fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
        res.send("sai định dạng");
    }
    
    fs.readFile(process.cwd() + "/public/img/" + req.file.filename, (err, data)=>{
        let dataBase = `data:${req.file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
        setTimeout(()=>{
            fs.unlinkSync(process.cwd() + "/public/img/" + req.file.filename);
        }, 5000);
        res.send(dataBase);
    })
}


//commonjs module
module.exports = { getPhong, getPhongByID, getPhongByVT, getPhongByName, createPhong, updatePhong, deletePhong, uploadPhong }