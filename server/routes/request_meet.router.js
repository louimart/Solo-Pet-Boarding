const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Request for Meet & Greet
router.post('/request_meet', (req, res) => {
  let dog = false;
  let cat = false;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const details = req.body.details;

  // checking for Dog if TRUE or FALSE
  function checkDog() {
    if (req.body.dog === 'dog') {
      return dog = true;
    }
  }

  // checking for Cat if TRUE or FALSE
  function checkCat() {
    if (req.body.cat === 'cat') {
      return cat = true;
    }
  }

  checkDog(req.body)
  checkCat(req.body)

// testing to verify the checkDog and checkCat function
// console.log('is Dog ?', dog);
// console.log('is Cat ?', cat);

  const queryText = `INSERT INTO "request_meet" (dog, cat, first_name, last_name, email, phone, details)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  pool
    .query(queryText, [
      dog,
      cat,
      firstName,
      lastName,
      email,
      phone,
      details,
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Meet & Greet Request Failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;