const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Pet Registration
router.post('/register_pet', (req, res) => {
  // const userId = req.body.user.id;
  let dog = false;
  let cat = false;
  const petName = req.body.petName;
  const breed = req.body.breed;
  const age = req.body.age;
  const weight = req.body.weight;
  const detail = req.body.detail;

  // checking for Dog/Cat to return BOOLEAN value
  function checkDog() {
    if (req.body.dog === 'dog') {
      return dog = true;
    }
  }
  function checkCat() {
    if (req.body.cat === 'cat') {
      return cat = true;
    }
  }

  checkDog(req.body)
  checkCat(req.body)

  console.log('dog', dog);
  console.log('cat', cat);
  // console.log('user ID:', userId)

// testing to verify the checkDog and checkCat function
// console.log('is Dog ?', dog);
// console.log('is Cat ?', cat);

  const queryText = `INSERT INTO "pet" (dog, cat, pet_name, breed, age, weight, detail)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const insertedValues = [
      dog,
      cat,
      petName,
      breed,
      age,
      weight,
      detail,
    ]
    console.log('Inserted Values', insertedValues);
    pool.query(queryText, insertedValues)
    .then(() => res.sendStatus(201))
    // .then(result => {
    //   // checking for ID of submitted Pet by returning the ID back from database.
    //   const insertedPetId = result.rows[0].id;
    //   console.log('Inserted Pet ID:', insertedPetId);
    //   // 201 successful POST - send back submitted Pet ID
    //   res.status(201).json({ id: insertedPetId });
    // })
    .catch((err) => {
      console.log('Pet Registration Failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;