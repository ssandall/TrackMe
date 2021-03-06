const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const Device = require('./models/devices'); 
//Needed to add new url parser as current edition mongoose url parser is deprecated
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true });

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-RequestedWith,Content-Type, Accept");
  next();
 });

//POST Endpoint for api/send-command
app.post('/api/send-command',(req, res) => {
  const {command} = req.body
  console.log('Something meaningful')
});

//GET Endpoint for /api/test
app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

//GET Endpoint for /api/devices
app.get('/api/devices', (req, res) => {
  Device.find({}, (err, devices) => {
    return err
    ? res.send(err)
    : res.send(devices)
  });
});

//POST Endpoint for api/devices
 app.post('/api/devices', (req, res) => {
  const { name, user, sensorData } = req.body;
  const newDevice = new Device({
    name,
    user,
    sensorData
  });
  newDevice.save(err => {
    return err
    ? res.send(err)
    : res.send('successfully added device and data');
  });
 });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
