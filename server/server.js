const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const mongoose = require("mongoose");
const router_Account = require("./router/Accounts");

mongoose.connect('mongodb+srv://cluster0.pts3xm2.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: 'mrgames7700',
  pass: 'reem123123'
})
.then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})
.catch(error => {
  console.error("Error connecting to MongoDB:", error);
});

// The bodyParser middleware is needed to parse JSON request bodies
app.use(express.json());

// Use the router middleware
app.use('/api', router_Account);


app.get('/', (req, res) => {
  res.send('Hello World!');
});


