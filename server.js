var dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes = require('./src/backend/routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/hey', (req, res) => res.send('ho!'))

// app.get('/others', (req, res) => {
//   console.log("app.get('/others");
//   res.send('here are otshers thoughts');
// });
apiRoutes(app);
console.log('process.env.PORT: ', process.env.PORT)
app.listen(8080)
