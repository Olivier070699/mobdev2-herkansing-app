const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test');

mongoose.connection.once('open', function () {
  console.log('lqsmkdjf')
}).on('error', function (error) {
  console.log('sldkfj')
})