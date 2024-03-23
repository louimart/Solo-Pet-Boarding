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

  // checking for Dog to return BOOLEAN value
  function checkDog() {
    if (req.body.dog === 'dog') {
      return dog = true;
    }
  }

  // checking for Cat to return BOOLEAN value
  function checkCat() {
    if (req.body.cat === 'cat') {
      return cat = true;
    }
  }

  checkDog(req.body)
  checkCat(req.body)

  console.log('dog', dog);
  console.log('cat', cat);

// testing to verify the checkDog and checkCat function
// console.log('is Dog ?', dog);
// console.log('is Cat ?', cat);

  const queryText = `INSERT INTO "request_meet" (dog, cat, first_name, last_name, email, phone, details)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const insertedValues = [
      dog,
      cat,
      firstName,
      lastName,
      email,
      phone,
      details,
    ]
    console.log('Inserted Values', insertedValues);
    pool.query(queryText, insertedValues)
    .then(result => {
      const insertedId = result.rows[0].id;
      console.log('Inserted ID:', insertedId);
      // 201 successful POST
      // res.send(insertedId)
      // res.sendStatus(201)
      res.status(201).json({ id: insertedId });
    })
    .catch((err) => {
      console.log('Meet & Greet Request Failed: ', err);
      res.sendStatus(500);
    });
});

// GET - MEET & GREET Request
router.get('/request_meet/:id', (req, res) => {
  // select request based on id
  const sqlText = `
  SELECT * from "request_meet"
  WHERE "id" = $1
  `;
  const sqlValue = [req.params.id];
  pool.query(sqlText, sqlValue)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get Meet Request', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;