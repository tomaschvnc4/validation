const express = require('express');
const router = express.Router();

const db = require('../database');

const validation = require('../Middlewares/validationMiddleware');
const loginSchema = require('../Validations/userValidations');

router.get('/', validation(loginSchema), (req, res) => {
   res.send({ data: 'Here is user' });
});

router.post('/login', validation(loginSchema), (req, res) => {
   const { name, second } = req.body;
   console.log(req.body);
   const sql = 'SELECT * FROM test WHERE name = ? ';
   db.query(sql, name, (err, result) => {
      if (err) {
         console.log(err);
      } else {
         res.send(result);
      }
   });
});

module.exports = router;
