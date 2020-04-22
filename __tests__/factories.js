const { factory } = require('factory-girl');
const { User } = require('../src/app/models');

factory.define('User', User, {
  name: 'Vinícius',
  email: 'vinicius.47289@outlook.com',
  password: '123456',
});

module.exports = factory;
