const express= require('express');
const app= express();
const cors= require('cors');
const port= 1000;
app.get('/',(request,response)=>{
    response.send("this is new api function")
});

app.use(cors({
  origin: "http://localhost:3000", // your React app’s URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());
app.use('/user',require('./routes/userroutes'));
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
});