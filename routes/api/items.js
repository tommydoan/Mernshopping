const express=require('express');
const router=express.Router();

const Item=require('../../Models/Item');

// Get 
router.get('/',(req,res)=>{
    Item.find().then(items=>res.json(items))
})

// Post 
router.post('/',(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    });
    newItem.save().then(items=>res.json(items))
})

// Delete
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id).then(item=>item.remove().then(()=>res.json({success:true})))
                    .catch(err=>res.status(404).json({success:false}))
})

module.exports=router;