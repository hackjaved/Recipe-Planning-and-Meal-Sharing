// var express = require('express');
// var router = express.Router();
// var recipeModel=require('../Model/recipe.model')
// var multer=require('multer')
// const storage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,'public/images')
//   },
//   filename:(req,file,cb)=>{
//     cb(null,Date.now()+file.fieldname+path.extname(file.originalname))
//   }
// })
// const upload=multer({storage})
// router.post('/upload',upload.single('file'),(req,res)=>{
//   recipeModel.create({image:req.file.filename}).then(resp=>res.send(resp)).catch(err=>res.send(err))
// })
// router.post('/',(req,res)=>{
//   let newrecipe=new recipeModel({
//     nameOfRecipe:req.body.nameOfRecipe,
//     ingredients:req.body.ingredients,
//     procedure:req.body.procedure,
//     dietInformation:req.body.dietInformation,
//     image:req.body.image,
//   })
//   newrecipe.save()
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })

// })
// router.get('/',(req,res)=>{
//   recipeModel.find()
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
// router.put('/:id',(req,res)=>{
//   recipeModel.findByIdAndUpdate(req.params.id,{
//     nameOfRecipe:req.body.nameOfRecipe,
//     ingredients:req.body.ingredients,
//     procedure:req.body.procedure,
//     dietInformation:req.body.dietInformation,
//     image:req.file.filename

//   })
//   .then(response=>{
//     res.send(response)
//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })
// router.delete('/:id',(req,res)=>{
//   recipeModel.findByIdAndDelete(req.params.id)
//   .then(response=>{
//     res.send(response)

//   })
//   .catch(err=>{
//     res.send(err)
//   })
// })

// module.exports=router;
// const express=require('express')
// const mongoose=require('mongoose')
// const recipeModel=require('../Model/recipe.model')
// const recipeModel = require('../Model/recipe.model')
// const router=express.Router()
// router.get('/',(req,res)=>{
//     recipeModel.find()
//     .then(response=>{
//         res.send(response)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })
// router.put('/:id',(req,res)=>{
//     const idQuery=req.params.id
//     BookModel.findByIdAndUpdate(idQuery,{$set:req.body})
//     .then(response=>{
//         res.send(response)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })
// router.delete('/:id',(req,res)=>{
//     const idQuery=req.params.id
//     recipeModel.findByIdAndDelete(idQuery,{$set:req.body})
//     .then(response=>{
//         res.send(response)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })
// module.exports=router
const express=require('express')
const mongoose=require('mongoose')
const RecipeModel=require('../Model/recipe.model')
const router=express.Router()
// router.post('/',(req,res)=>{
//     let newBook=new BookModel({
//         bookName:req.body.bookName,     //by using body in postman
//         author:req.body.author,
//         link:req.body.link,
//     })
//     newBook.save()
//     .then(response=>{
//         res.send(response)
//     })
//     .catch(err=>{
//         res.send(err)
//     })
// })
router.get('/',(req,res)=>{
    RecipeModel.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/:id',(req,res)=>{
    const idQuery=req.params.id
    RecipeModel.findById(idQuery)
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.put('/:id',(req,res)=>{
    const idQuery=req.params.id
    RecipeModel.findByIdAndUpdate(idQuery,{$set:req.body})
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.delete('/:id',(req,res)=>{
    const idQuery=req.params.id
    RecipeModel.findByIdAndDelete(idQuery,{$set:req.body})
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
module.exports=router