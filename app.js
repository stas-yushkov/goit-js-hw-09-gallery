const Joi = require('Joi');
const shortid = require('shortid');
const express = require('express');
// const passwordSchema = Joi.string().min(3).max(10).alphanum();
const app = express();

app.use('*', (req, res) => {
  console.log('Был запрос от браузера');
  res.send('<h1>Этот заголовок прилетел с сервера</h1>');
});

const listener = app.listen(4444, () => {
  console.log(`web server is running on port ${listener.address().port}`);
});
// console.log(passwordSchema.validate('qqqq'));
// console.log(shortid.generate());
// console.log(passwordSchema.validate(shortid.generate()));
//
