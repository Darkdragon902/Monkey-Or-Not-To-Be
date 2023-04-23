const mongoose = require('mongoose');

const options = {};

const database = mongoose.connect(process.env.'mongodb+srv://RegisM:LargeGroup6@cluster0.gmxoq2i.mongodb.net/?retryWrites=true&w=majority', options)
  .then(() => console.log('Connected to database.'))
  .catch(err => console.error('Error connecting to database:', err.message));

module.exports = database;
