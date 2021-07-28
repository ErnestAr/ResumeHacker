const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    userName: 'Pamela',
    email: 'pamela@testmail.com',
    password: 'password12345',
  });

  await User.create({
    userName: 'Elijah',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
