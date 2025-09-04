const users= require('../config/mongoose-connect');
const multer= require("multer");
exports.userlist= async (request,response)=>{
    let userdata= await users.find();
    response.send(JSON.stringify({"message":userdata}))
};
exports.singleuserlist= async (request,response)=>{
    let userid= request.params.id;
    let specificdata= await users.findById(userid);
    response.send(JSON.stringify({"message":specificdata}))
};
exports.registration= (request,response)=>{
    let registration_data= {"fullname":request.body.fullname,
        "mobileno":request.body.mobileno,"email":request.body.email,"password":request.body.password,
    };
    let user= users(registration_data);
    user.save();
    response.send(JSON.stringify({"firstname":request.body.firstname}))
};
exports.login= async (request,response)=>{
    let email1= request.body.email;
    let password= request.body.password;
    let userdata= await users.findOne({email:email1});
    //response.send(JSON.stringify({"message":userdata}))
    if(userdata== 'null'){
        response.send(JSON.stringify({"message":'userdata not matched1'}))
    }else
    if(password== 'users.password'){
        response.send(JSON.stringify({"message":userdata}))
    }else{
        response.send(JSON.stringify({"message":'userdata not matched2'}))
    }
};
exports.deleteuser= async (request,response)=>{
    let userid= request.params.id;
    await users.findByIdAndDelete(userid);
    response.send(JSON.stringify({"message":'userdata deleted successfully'}))
};
exports.updateuser= async (request,response)=>{
    let registrationdata= {"firstname":request.body.firstname,"lastname":request.body.lastname,
        "email":request.body.email,"password":request.body.password,"role":request.body.role
    };
    let userid= request.params.id;
    let updatedata= await users.findByIdAndUpdate(userid,registrationdata);
    response.send(JSON.stringify({"message":updatedata}))
};
const storage= multer.diskStorage({
    destinations:(req,file,cb)=>{cb(null,'./images')},
    filename:(req,file,cb)=>{cb(null,file.originalname)}
});
exports.uploadimage= multer({storage:storage}).single('image');