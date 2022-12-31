const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//R => GET
const getUser = async (req, res)=>{
    try{
        let data = await model.nguoi_dung.findAll();
        sucessCode(res,data,"Lấy dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//C => POST
const createUser = async (req, res)=>{
    try{
        let { ho_ten, email, mat_khau, tuoi, anh_dai_dien } = req.body;
        let checkEmailObj = await model.nguoi_dung.findOne({
            where:{
                email
            }
        });
        if(checkEmailObj){
            failCode(res,{ ho_ten, email, mat_khau, tuoi, anh_dai_dien },"Email đã tồn tại")
        }
        else{
            let result = await model.nguoi_dung.create({ 
                ho_ten, email, mat_khau, tuoi, anh_dai_dien
            });
            sucessCode(res,result,"Tạo dữ liệu thành công")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
//U
const updateUser = async(req, res) =>{
    
    try{
        let { nguoi_dung_id } = req.params;
        console.log(nguoi_dung_id);
        let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
        
        let checkUser = await model.nguoi_dung.findOne({
            where:{
                nguoi_dung_id
            }
        });
        if(checkUser){
            await model.nguoi_dung.update({ 
                email, mat_khau, ho_ten, tuoi, anh_dai_dien
            }, {
                where:{
                    nguoi_dung_id
                }
            }); 
            let data = await model.nguoi_dung.findOne({
                where:{
                    nguoi_dung_id
                }
            });
            sucessCode(res,data,"Update thành công")
        }
        else{
            failCode(res,"","User không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
//D
const deleteUser = async(req, res) =>{
    try{
        let { nguoi_dung_id } = req.params;
        let checkUser = await model.nguoi_dung.findOne({
            where:{
                nguoi_dung_id
            }
        });
        if(checkUser){
            await model.nguoi_dung.destroy({ 
                where:{
                    nguoi_dung_id
                }
            });
            sucessCode(res,checkUser,"Xóa dữ liệu thành công")
        }
        else{
            failCode(res,"","User không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

const uploadUser = async(req, res)=>{
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

const bcrypt = require('bcrypt');
//sign up
const signUp = async(req, res) =>{
    try{
        let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
        let passWordHash = bcrypt.hashSync(mat_khau, 10);
        let checkEmail = await model.nguoi_dung.findOne({
            where:{
                email
            }
        })
        if(checkEmail){
            failCode(res,"","Email đã tồn tại");
        }
        else{
            let data = await model.nguoi_dung.create({ email, mat_khau: passWordHash, ho_ten, tuoi, anh_dai_dien });
            sucessCode(res, data, "Đăng ký thành công !");
        }
    }
    catch(err){
        errorCode(res, "Loi BE");
    }
}
//login
const login = async(req, res)=>{
    try{
        let { email, mat_khau } = req.body;
        let checkLogin = await model.nguoi_dung.findOne({
            where:{
                email
            }
        })
        if(checkLogin){
            let checkPass = bcrypt.compareSync(mat_khau, checkLogin.mat_khau);
            if(checkPass){
                sucessCode(res, checkLogin, "Login thành công");
            }
            else{
                failCode(res, "", "Mật khẩu không đúng!");
            }
        }
        else{
            failCode(res, "", "Email không đúng!");
        }
    }catch(err){
        errorCode(res, "Lỗi BE");
    } 
}
//commonjs module
module.exports = { getUser, createUser, updateUser, deleteUser, uploadUser, signUp, login }