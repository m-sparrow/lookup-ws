var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var router = require('./routers/router');
var db = require('./middleware/db');
 
app.use(function (req, res, next) {
  return next();
});

expressWs.getWss().on('connection', (ws, req) => {
  ws.id = req.headers['sec-websocket-key'];
  console.log('connected: ' + ws.id);
});

app.ws('/', router.app);

app.listen(process.env.PORT || 9000);