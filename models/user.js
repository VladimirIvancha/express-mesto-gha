const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Имя пользователя должно быть не менее 2х знаков, сейчас {VALUE}'],
    maxlength: [30, 'Имя пользователя должно быть не более 30ти знаков, сейчас {VALUE}'],
  },
  about: {
    type: String,
    required: true,
    minlength: [2, 'Информация должна содержать не менее 2х знаков, сейчас {VALUE}'],
    maxlength: [30, 'Информация должна содержать не более 30ти знаков, сейчас {VALUE}'],
  },
  avatar: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
