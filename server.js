const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.json());

const items=require('./routes/api/items');

const path = require ('path');

const db=require('./config/key').mongoURI;

mongoose.connect(db,{ useNewUrlParser: true }).then(()=>console.log("Mongoose Connected..."))
                    .catch(err=>console.log(err));
app.use('/api/items',items)

const port = process.env.PORT || 5000 ;

if(process.env.NODE_ENV==='production'){
    // set static folder
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })

}

app.listen(port,()=>console.log(`Server started on ${port}`))

