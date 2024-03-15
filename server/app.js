var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const NotesRouter = require( './routes/admin/NotesRouter' )
const webNotesRouter =require('./routes/web/NotesRouter')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 设置全局响应头中间件  
app.use((req, res, next) => {  
  const allowedOrigins = ['http://localhost:3001', 'http://localhost:3002','http://localhost:3000',"https://zhangjianyu-cpu.github.io"];  
  const origin = req.headers.origin;  
  
  if (allowedOrigins.includes(origin)) {  
    res.setHeader('Access-Control-Allow-Origin', origin);  
  } else {  
    // res.setHeader('Access-Control-Allow-Origin', '*'); // 或者可以返回403禁止访问等  
  }  
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');  
  res.setHeader( 'Access-Control-Allow-Headers', 'Content-Type, Authorization' );

  
  // 其他可能需要的CORS相关的响应头  
  // res.setHeader('Access-Control-Allow-Credentials', true); // 如果需要携带凭证（cookies, HTTP认证及客户端SSL证明等）  
  
  next(); // 确保请求继续处理  
});
// catch 404 and forward to error handler
/*
 /adminapi/* - 后台系统用的
 /webapi/* - 官网用的
*/
app.use(NotesRouter)

app.use(webNotesRouter)
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(8080, () => {  
  console.log('Server is running on port 8080');  
});
module.exports = app;
