const sequelize = require('../models/index');
const init_models = require('../models/init-models');
const model = init_models(sequelize);
const { sucessCode, failCode, errorCode } = require('../config/reponse');

//GET
const getUser = async (req, res)=>{
    try{
        let data = await model.NguoiDung.findAll();
        sucessCode(res,data,"Lấy dữ liệu thành công")
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
const getUserByID = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkUser = await model.NguoiDung.findOne({
            where:{
                id
            }
        });
        if(checkUser){
            let data = await model.NguoiDung.findOne({
                where:{
                    id
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","User không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
const getUserByName = async(req, res) =>{
    try{
        let { name } = req.params;
        let checkUser = await model.NguoiDung.findOne({
            where:{
                name
            }
        });
        if(checkUser){
            let data = await model.NguoiDung.findOne({
                where:{
                    name
                }
            });
            res.send(data);
        }
        else{
            failCode(res,"","User không tồn tại")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}
//POST
const createUser = async (req, res)=>{
    try{
        let { name, email, pass_word, phone, birth_day, gender, role } = req.body;
        let passWordHash = bcrypt.hashSync(pass_word, 10);
        let checkEmailObj = await model.NguoiDung.findOne({
            where:{
                email
            }
        });
        if(checkEmailObj){
            failCode(res,{ name, email, pass_word, phone, birth_day, gender, role },"Email đã tồn tại")
        }
        else{
            let result = await model.NguoiDung.create({ 
                name, email, pass_word: passWordHash, phone, birth_day, gender, role
            });
            sucessCode(res,result,"Tạo dữ liệu thành công")
        } 
    }catch(err){
        errorCode(res,"Lỗi BE")
    }
}

//PUT
const updateUser = async(req, res) =>{
    try{
        let { id } = req.params;
        let { name, email, pass_word, phone, birth_day, gender, role } = req.body;
        
        let checkUser = await model.NguoiDung.findOne({
            where:{
                id
            }
        });
        if(checkUser){
            await model.NguoiDung.update({ 
                name, email, pass_word, phone, birth_day, gender, role
            }, {
                where:{
                    id
                }
            }); 
            let data = await model.NguoiDung.findOne({
                where:{
                    id
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

//Delete
const deleteUser = async(req, res) =>{
    try{
        let { id } = req.params;
        let checkUser = await model.NguoiDung.findOne({
            where:{
                id
            }
        });
        if(checkUser){
            await model.NguoiDung.destroy({ 
                where:{
                    id
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

//POST
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
        let { name, email, pass_word, phone, birth_day, gender, role } = req.body;
        let passWordHash = bcrypt.hashSync(pass_word, 10);
        let checkEmail = await model.NguoiDung.findOne({
            where:{
                email
            }
        })
        if(checkEmail){
            failCode(res,"","Email đã tồn tại");
        }
        else{
            let data = await model.NguoiDung.create({ name, email, pass_word: passWordHash, phone, birth_day, gender, role });
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
        let { email, pass_word } = req.body;
        let checkLogin = await model.NguoiDung.findOne({
            where:{
                email
            }
        })
        if(checkLogin){
            let checkPass = bcrypt.compareSync(pass_word, checkLogin.pass_word);
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
module.exports = { getUser, getUserByID, getUserByName, createUser, updateUser, deleteUser, uploadUser, signUp, login }