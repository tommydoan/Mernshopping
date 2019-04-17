const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.json());

const db=require('./config/key').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true })
        .then(()=>console.log("Mongoose connected"))
        .catch(err=>console.log(err));

const port=process.env.PORT || 5000;
app.listen(port,()=>(console.log(`Server started on port ${port}`)));

// Item
const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ItemSchema=new Schema({
    name:{
         type:String,
         required:true
         },
    date:{
         type:Date,
         default:Date.now
         }
})
module.exports=Item = mongoose.model('item',ItemSchema);