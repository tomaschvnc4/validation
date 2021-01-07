const express = require('express');
const app = express();
app.use(express.json());

// const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// app.use(
//    cors({
//       origin: ['http://localhost:3000'],
//       methods: ['GET', 'POST', 'PUT', 'DELETE'],
//       credentials: true,
//    })
// );
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 =======
 ROUTES
 =======
 */

const userRoute = require('./routes/user');

app.use('/user', userRoute);

app.listen('3002', () => {
   console.log('SERVER ruuning on port 3002');
});
