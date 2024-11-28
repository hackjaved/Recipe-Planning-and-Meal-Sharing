var express = require('express');
var router = express.Router();
var userModel=require('../Model/user.model')
router.post('/',(req,res)=>{
  let newuser=new userModel({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password
  })
  newuser.save()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })

})
router.get('/',(req,res)=>{
  userModel.find()
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
router.put('/:id',(req,res)=>{
  userModel.findByIdAndUpdate(req.params.id,{
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    email:req.body.email,
    password:req.body.password

  })
  .then(response=>{
    res.send(response)
  })
  .catch(err=>{
    res.send(err)
  })
})
router.delete('/:id',(req,res)=>{
  userModel.findByIdAndDelete(req.params.id)
  .then(response=>{
    res.send(response)

  })
  .catch(err=>{
    res.send(err)
  })
})

module.exports = router;
