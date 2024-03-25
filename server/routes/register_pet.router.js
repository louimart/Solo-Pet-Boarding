const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Handles Pet Registration
router.post('/register_pet', (req, res) => {
  const userId = req.body.userId;
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
      return (dog = true);
    }
  }
  function checkCat() {
    if (req.body.cat === 'cat') {
      return (cat = true);
    }
  }

  checkDog(req.body);
  checkCat(req.body);

  console.log('dog', dog);
  console.log('cat', cat);
  console.log('user ID:', userId)

  // testing to verify the checkDog and checkCat function
  // console.log('is Dog ?', dog);
  // console.log('is Cat ?', cat);

  const queryText = `INSERT INTO "pet" (dog, cat, pet_name, breed, age, weight, detail)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING "id"`;
  const insertedValues = [dog, cat, petName, breed, age, weight, detail];
  console.log('Inserted Values', insertedValues);
  pool.query(queryText, insertedValues).then((result) => {
    // ID IS HERE!
    console.log('New Pet Id:', result.rows[0].id);
    const createdPetId = result.rows[0].id;

    // Now handle the genre reference:
    const insertUserPetQuery = `
        INSERT INTO "user_pets"
          ("user_id", "pet_id")
          VALUES
          ($1, $2);
      `;
    const insertUserPetValues = [userId, createdPetId];
    // SECOND QUERY ADDS User and Pet to USER_PETS junction table
    pool
      .query(insertUserPetQuery, insertUserPetValues)
      .then((result) => {
        //Now that both are done, send back POST SUCCESS
        res.sendStatus(201);
      })
      .catch((err) => {
        // catch for second query
        console.log(err);
        res.sendStatus(500);
      })
      .catch((err) => {
        console.log('Pet Registration Failed: ', err);
        res.sendStatus(500);
      });
  });
});
module.exports = router;
