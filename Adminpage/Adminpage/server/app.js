// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var mongoose=require('mongoose');
// var multer=require('multer')
// var recipeModel=require('./Model/recipe.model')
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// var recipeRouter=require('./routes/recipe');
// var cors=require('cors')
// var app = express();

// // view engine setup
// const storage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,'public/images')
//   },
//   filename:(req,file,cb)=>{
//     cb(null,Date.now()+file.fieldname+path.extname(file.originalname))
//   }
// })
// const upload=multer({storage})
// mongoose.connect('mongodb://127.0.0.1:27017/Books') //
// mongoose.connection.on('connected',()=>{              //
//    console.log("DATABASE CONNECTED SUCCESSFULLY")     //
//  })
//  app.post('/upload',upload.single('file'),(req,res)=>{
//   recipeModel.create(
//     {nameOfRecipe:req.body.nameOfRecipe,     //by using body in postman
//     ingredients:req.body.ingredients,
//     procedure:req.body.procedure,
//     dietInformation:req.body.dietInformation,
//     image:req.file.filename
//       })
//   .then(response=>{res.send(response)})
//   .catch(err=>{res.send(err)})
// })
// app.get('/getImg',(req,res)=>{
//   bookModel.find()
//   .then(response=>{res.send(response)})
//   .catch(err=>{res.send(err)})
// })
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
// app.use(express.static('public')) 
// app.use(logger('dev'));
// app.use(express.json());
// app.use(cors())                                        //
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/book-api',bookRouter)
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');
var multer=require('multer')
var recipeModel=require('./Model/recipe.model')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var recipeRouter=require('./routes/recipe');
var cors=require('cors')
var app = express();

// view engine setup
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'public/images')
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now()+file.fieldname+path.extname(file.originalname))
  }
})
const upload=multer({storage})
mongoose.connect('mongodb://127.0.0.1:27017/Recipes') //
mongoose.connection.on('connected',()=>{              //
   console.log("DATABASE CONNECTED SUCCESSFULLY")     //
 })
 app.post('/upload',upload.single('file'),(req,res)=>{
  recipeModel.create(
    {nameOfRecipe:req.body.nameOfRecipe,     //by using body in postman
    ingredients:req.body.ingredients,
    procedure:req.body.procedure,
    dietInformation:req.body.dietInformation,
    image:req.file.filename
      })
  .then(response=>{res.send(response)})
  .catch(err=>{res.send(err)})
})
app.get('/getImg',(req,res)=>{
  recipeModel.find()
  .then(response=>{res.send(response)})
  .catch(err=>{res.send(err)})
})
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static('public')) 
app.use(logger('dev'));
app.use(express.json());
app.use(cors())                                        //
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/rec-api',recipeRouter)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
