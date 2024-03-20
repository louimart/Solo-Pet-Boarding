const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Request for Meet & Greet
router.post('/request_meet', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const details = req.body.details;

  const queryText = `INSERT INTO "request_meet" (first_name, last_name, email, phone, details)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool
    .query(queryText, [
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