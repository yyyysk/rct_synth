const express = require('express');
const app = express();
const router = require('./app/api/index');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('build'));

app.use('/', express.static(__dirname + '/build'));
app.use('/api', router);

app.use((req, res, next) =>  {
  next(createError(404));
});

app.use((err, req, res, next) =>  {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;

