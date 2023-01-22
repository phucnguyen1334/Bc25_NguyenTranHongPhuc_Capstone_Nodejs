const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//GET
const getVT = async (req, res)=>{
    try{
        let data = await model.ViTri.findAll();
        sucessCode(res,data,"Lấy dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
const getVTByID = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkVT = await model.ViTri.findOne({
            where:{
                id
            }
        });
        if(checkVT){
            let data = await model.ViTri.findOne({
                where:{
                    id
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","Vị trí không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
const getVTByName = async(req, res) =>{
    try{
        let { ten_vi_tri } = req.params;
        let checkVT = await model.ViTri.findOne({
            where:{
                ten_vi_tri
            }
        });
        if(checkVT){
            let data = await model.ViTri.findOne({
                where:{
                    ten_vi_tri
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","Vị trí không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
//POST
const createVT = async (req, res)=>{
    try{
        let { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh } = req.body;
        let checkVT = await model.ViTri.findOne({
            where:{
                ten_vi_tri
            }
        });
        if(checkVT){
            failCode(res,{ ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh },"Email đã tồn tại")
        }
        else{
            let result = await model.ViTri.create({ 
                ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh
            });
            sucessCode(res,result,"Tạo dữ liệu thành công")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//PUT
const updateVT = async(req, res) =>{
    try{
        let { id } = req.params;
        let { ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh } = req.body;
        
        let checkVT = await model.ViTri.findOne({
            where:{
                id
            }
        });
        if(checkVT){
            await model.ViTri.update({ 
                ten_vi_tri, tinh_thanh, quoc_gia, hinh_anh
            }, {
                where:{
                    id
                }
            }); 
            let data = await model.ViTri.findOne({
                where:{
                    id
                }
            });
            sucessCode(res,data,"Update thành công")
        }
        else{
            failCode(res,"","Vị trí không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//Delete
const deleteVT = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkVT = await model.ViTri.findOne({
            where:{
                id
            }
        });
        if(checkVT){
            await model.ViTri.destroy({ 
                where:{
                    id
                }
            });
            sucessCode(res,checkVT,"Xóa dữ liệu thành công")
        }
        else{
            failCode(res,"","Vị trí không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//POST
const uploadVT = async(req, res)=>{
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
module.exports = { getVT, getVTByID, getVTByName, createVT, updateVT, deleteVT, uploadVT }