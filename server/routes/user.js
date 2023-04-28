const express = require('express');
const bcrypt = require('bcryptjs');
const { requireAuth } = require('./middleware');
const { User } = require('../database/schemas');
const Rating = require('../models/Rating');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
  const user = (req.user && req.user.hidePassword()) || {};

  res.send({ message: 'User info successfully retreived ⭐️', user });
});

router.put('/password', requireAuth, (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (req.user.validPassword(oldPassword)) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        res.status(400).send({ err, message: 'Error updating password 💥' });
      }
      bcrypt.hash(newPassword, salt, (err, hash) => {
        if (err) {
          res.status(400).send({ err, message: 'Error updating password 💥' });
        }
        User.findByIdAndUpdate({ _id: req.user._id }, { password: hash }, err => {
          if (err) {
            res.status(400).send({ err, message: 'Error updating password 💥' });
          }
          res.status(200).send({ message: 'Password successfully updated ⭐️' });
        });
      });
    });
  } else {
    res.status(400).send({ message: 'Old password did not match 💥' });
  }
});

router.post('/rating', requireAuth, (req, res) => {
  const { oldRating, quoteRating, gameResult } = req.body;

  // Calculate the new rating of the user.
  const rating = Rating.getNewRating(oldRating, quoteRating, gameResult);

  User.findByIdAndUpdate({ _id: req.user._id }, rating, { new: true }, (err) => {
    if (err) {
      res.status(400).send({ err, message: 'Error updating rating 💥' });
    }
    res.status(200).send({ message: 'Rating successfully updated ⭐️' });
  });
});

router.put('/', requireAuth, (req, res) => {
  req.body.updated_at = Date.now();

  User.findByIdAndUpdate({ _id: req.user._id }, req.body, { new: true }, (err, user) => {
    if (err) {
      res.status(400).send({ err, message: 'Error updating user 💥' });
    }
    res.status(200).send({ message: 'User successfully updated ⭐️', user: user.hidePassword() });
  });
});
