var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
// const multer = require('multer');
// var storage = multer.diskStorage({
//   destination :'./',
//   firstname: function(req, file,cb){
//     cb(null,Date.now() + '.' + file.minetype.split('/')[1] )
//   }
// })
// const upload= multer({storage: storage})
// app.post('/', upload.single('file'), (req,res)=>{})
// app.listen(port, ()=> console.log('listen en port ${port}'))
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ReclamationRouter  = require('./routes/reclamations');
var eventRouter  = require('./routes/events');
var ordersRouter = require('./routes/orders');
var blogRouter= require('./routes/blog');
var publiciteRouter=require('./routes/publicite');

const { Console } = require('console');

const db = require("./models");
db.sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/reclamations', ReclamationRouter);
app.use('/events', eventRouter);
app.use('/orders',ordersRouter)

app.use('/blog',blogRouter);
app.use('/publicite',publiciteRouter);




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
