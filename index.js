const express = require('express')
const mangoose = require('mongoose')
const routes = require ('./routes/MusiCloud')
const cors = require('cors');
const { url } = require('inspector')

const app = express();
//use cors 
app.use(cors())
const port = 8080;
const dbURL = 'mongodb+srv://salahstudy:<salahmohammad711>@cluster0.h1ajrog.mongodb.net/?retryWrites=true&w=majority'

//connecting to the mongo cloud db through the mongoose package 
mangoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })

//in order to let express parse JSON 
app.use(express.json())
//routes 
app.use('/api',routes)

//starting the server at the port of your choice 
app.listen(port, () => {
    console.log("app is listening at port", port)

})
const InfoSchema = new mongoose.Schema({
    email:{type:String, required :true},
    username:{type:String, required :true},
    firstname:{type:String, required :true},
    secondname:{type:String, required :true},
    password:{type:String, required :true},
})

User.find({age: 19}).then(console.log("userfound"))

const PassrecoverySchema = new mongoose.Schema({
    email:{type:String, required :true},
    Code:{type:Number, required :true},
})



