const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const Device = require('./models/devices'); 
//Needed to add new url parser as current edition mongoose url parser is deprecated
mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true });

app.use(bodyParser.json());

app.get('/api/test', (req, res) => {
  res.send('The API is working!');
});

app.get('/api/devices', (req, res) => {
  Device.find({}, (err, devices) => {
  return err
  ? res.send(err)
  : res.send(devices)
  });
});

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
