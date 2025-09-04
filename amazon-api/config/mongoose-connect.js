const mongoose= require('mongoose');

const id = new mongoose.Types.ObjectId("6891ff2a43021ad8475d28ed");

console.log("Date:", id.getTimestamp());
console.log("Timestamp (ms):", id.getTimestamp().getTime());

mongoose.connect('mongodb://localhost:27017/amazon',{});
const userschema= {
    fullname:String,
    firstname:String,
    lastname:String,
    mobileno:String,
    email:String,
    password:String,
    address:String,
    city:String,
    state:String,
    village:String,
    role:String,
    position:String,
    salary:String,
    image:String
};
let user= mongoose.model('users',userschema);
module.exports= user;